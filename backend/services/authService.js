const bcrypt = require("bcryptjs");
const db = require("../config/db");
const config = require("../config/config");
const { getRedis } = require("../config/redis");
const tokens = require("./tokenService");
const ApiError = require("../utils/ApiError");

const publicUser = (u) => ({
  id: u.id,
  fullName: u.full_name,
  email: u.email,
  role: u.role,
  createdAt: u.created_at,
});

// Get Supabase client
const supabase = () => db.getSupabase();

// Handle Supabase database errors
function checkError(error) {
  if (error) throw error;
}

// Find user by ID
async function findById(id) {
  const { data, error } = await supabase()
    .from("users")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  checkError(error);
  return data || null;
}

// Find user by email
async function findByEmail(email) {
  const normalizedEmail = email.trim().toLowerCase();

  const { data, error } = await supabase()
    .from("users")
    .select("*")
    .eq("email", normalizedEmail)
    .maybeSingle();

  checkError(error);
  return data || null;
}

// Dummy hash for unknown email timing protection
const DUMMY_HASH = bcrypt.hashSync(
  "not-a-real-password",
  config.auth.bcryptRounds
);

// Register new user
async function register({ fullName, email, password }) {
  const normalizedEmail = email.trim().toLowerCase();
  const hash = await bcrypt.hash(
    password,
    config.auth.bcryptRounds
  );

  const { data: user, error } = await supabase()
    .from("users")
    .insert({
      full_name: fullName.trim(),
      email: normalizedEmail,
      password_hash: hash,
      role: "user",
      is_active: true,
    })
    .select("*")
    .single();

  if (error) {
    if (error.code === "23505") {
      throw ApiError.conflict(
        "An account with this email already exists.",
        { code: "EMAIL_TAKEN" }
      );
    }

    throw error;
  }

  return {
    user: publicUser(user),
    ...(await tokens.issueSession(user)),
  };
}

// Login failure tracking
const failKey = (email) =>
  `loginfail:${email.trim().toLowerCase()}`;

// Login
async function login({ email, password }) {
  const redis = getRedis();
  const normalizedEmail = email.trim().toLowerCase();

  const attempts =
    Number(await redis.get(failKey(normalizedEmail))) || 0;

  if (attempts >= config.auth.maxLoginAttempts) {
    const ttl = await redis.ttl(failKey(normalizedEmail));

    throw ApiError.tooMany(
      `Too many failed sign-in attempts. Try again in ${Math.max(
        1,
        Math.ceil(ttl / 60)
      )} minute(s).`,
      { code: "ACCOUNT_LOCKED" }
    );
  }

  const user = await findByEmail(normalizedEmail);

  const valid = await bcrypt.compare(
    password,
    user ? user.password_hash : DUMMY_HASH
  );

  if (!user || !valid) {
    const n = await redis.incr(failKey(normalizedEmail));

    if (n === 1) {
      await redis.expire(
        failKey(normalizedEmail),
        config.auth.lockoutSec
      );
    }

    throw ApiError.unauthorized(
      "Invalid email or password.",
      { code: "INVALID_CREDENTIALS" }
    );
  }

  if (!user.is_active) {
    throw ApiError.forbidden(
      "This account has been disabled.",
      { code: "ACCOUNT_DISABLED" }
    );
  }

  await redis.del(failKey(normalizedEmail));

  const { error } = await supabase()
    .from("users")
    .update({ last_login_at: new Date().toISOString() })
    .eq("id", user.id);

  checkError(error);

  return {
    user: publicUser(user),
    ...(await tokens.issueSession(user)),
  };
}

// Refresh token
async function refresh(refreshToken) {
  const result = await tokens.rotateRefresh(
    refreshToken,
    findById
  );

  return {
    user: publicUser(result.user),
    accessToken: result.accessToken,
    expiresIn: result.expiresIn,
    refreshToken: result.refreshToken,
  };
}

// Get user profile
async function getProfile(userId) {
  const user = await findById(userId);

  if (!user || !user.is_active) {
    throw ApiError.unauthorized(
      "Account is not available.",
      { code: "ACCOUNT_DISABLED" }
    );
  }

  return publicUser(user);
}

// Update profile
async function updateProfile(userId, { fullName }) {
  const { data: user, error } = await supabase()
    .from("users")
    .update({
      full_name: fullName.trim(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", userId)
    .select("*")
    .maybeSingle();

  checkError(error);

  if (!user) {
    throw ApiError.unauthorized(
      "Account is not available.",
      { code: "ACCOUNT_DISABLED" }
    );
  }

  return publicUser(user);
}

// Change password
async function changePassword(
  userId,
  { currentPassword, newPassword }
) {
  const user = await findById(userId);

  if (
    !user ||
    !(await bcrypt.compare(
      currentPassword,
      user.password_hash
    ))
  ) {
    throw ApiError.badRequest(
      "Current password is incorrect.",
      { code: "WRONG_PASSWORD" }
    );
  }

  const hash = await bcrypt.hash(
    newPassword,
    config.auth.bcryptRounds
  );

  const { error } = await supabase()
    .from("users")
    .update({
      password_hash: hash,
      updated_at: new Date().toISOString(),
    })
    .eq("id", userId);

  checkError(error);

  // Sign out everywhere after password change
  await tokens.revokeAllSessions(userId);
}

// Logout
async function logout({ refreshToken, accessPayload }) {
  if (refreshToken) {
    await tokens.revokeRefreshToken(refreshToken);
  }

  if (accessPayload) {
    await tokens.blacklistAccessToken(accessPayload);
  }
}

// Logout all devices
async function logoutAll(userId) {
  await tokens.revokeAllSessions(userId);
}

module.exports = {
  register,
  login,
  refresh,
  getProfile,
  updateProfile,
  changePassword,
  logout,
  logoutAll,
  findById,
  findByEmail,
  publicUser,
};