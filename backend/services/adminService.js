const db = require("../config/db");
const ApiError = require("../utils/ApiError");
const tokens = require("./tokenService");
const cache = require("./cacheService");

const toUserDto = (u) => ({
  id: u.id,
  fullName: u.full_name,
  email: u.email,
  role: u.role,
  isActive: u.is_active,
  lastLoginAt: u.last_login_at,
  createdAt: u.created_at,
});

const supabase = () => db.getSupabase();

// List users with pagination, search and role filter
async function listUsers({ page, limit, q, role }) {
  const client = supabase();

  let query = client
    .from("users")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false });

  // Role filter
  if (role) {
    query = query.eq("role", role);
  }

  // Search by name or email
  if (q && q.trim()) {
    const search = q.trim().replace(/[,%()]/g, "");
    
    if (search) {
      query = query.or(
        `full_name.ilike.%${search}%,email.ilike.%${search}%`
      );
    }
  }

  // Pagination
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, count, error } = await query.range(from, to);

  if (error) throw error;

  return {
    items: (data || []).map(toUserDto),
    total: count || 0,
  };
}

// Update user role or account status
async function updateUser(id, { role, isActive }, actor) {
  if (id === actor.id) {
    throw ApiError.badRequest(
      "You cannot change your own role or status."
    );
  }

  const updates = {
    updated_at: new Date().toISOString(),
  };

  if (role !== undefined && role !== null) {
    updates.role = role;
  }

  if (isActive !== undefined && isActive !== null) {
    updates.is_active = isActive;
  }

  const { data, error } = await supabase()
    .from("users")
    .update(updates)
    .eq("id", id)
    .select("*")
    .maybeSingle();

  if (error) throw error;

  if (!data) {
    throw ApiError.notFound("User not found.");
  }

  // Immediately revoke all existing sessions
  await tokens.revokeAllSessions(id);

  return toUserDto(data);
}

// Dashboard statistics
async function stats() {
  return cache.getOrSet("stats", 60, async () => {
    const client = supabase();

    const [contacts, applications, users] = await Promise.all([
      client
        .from("contact_messages")
        .select("status"),

      client
        .from("applications")
        .select("status"),

      client
        .from("users")
        .select("id", { count: "exact", head: true }),
    ]);

    if (contacts.error) throw contacts.error;
    if (applications.error) throw applications.error;
    if (users.error) throw users.error;

    const toMap = (rows) => {
      return (rows || []).reduce((result, row) => {
        const status = row.status || "unknown";
        result[status] = (result[status] || 0) + 1;
        return result;
      }, {});
    };

    return {
      contacts: toMap(contacts.data),
      applications: toMap(applications.data),
      users: users.count || 0,
    };
  });
}

module.exports = {
  listUsers,
  updateUser,
  stats,
};