require("dotenv").config();

const env = process.env;
const nodeEnv = env.NODE_ENV || "development";
const isProd = nodeEnv === "production";
const isTest = nodeEnv === "test";

const int = (v, d) => {
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? n : d;
};

const bool = (v, d) =>
  v === undefined || v === ""
    ? d
    : ["1", "true", "yes"].includes(String(v).toLowerCase());

const list = (v, d) =>
  v ? v.split(",").map((s) => s.trim()).filter(Boolean) : d;

// Secrets: mandatory in production and >= 32 characters.
function secret(name) {
  const v = env[name];

  if (v) {
    if (isProd && v.length < 32) {
      throw new Error(
        `${name} must be at least 32 characters in production.`
      );
    }
    return v.trim();
  }

  if (isProd) {
    throw new Error(`${name} is required in production.`);
  }

  return `dev-only-${name.toLowerCase()}-change-me-0123456789abcdef`;
}

// Supabase API configuration
const supabaseUrl = env.SUPABASE_URL;
const supabaseServiceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;

if (isProd && !supabaseUrl) {
  throw new Error("SUPABASE_URL is required in production.");
}

if (isProd && !supabaseServiceRoleKey) {
  throw new Error(
    "SUPABASE_SERVICE_ROLE_KEY is required in production."
  );
}

if (supabaseUrl && !supabaseUrl.startsWith("https://")) {
  throw new Error("SUPABASE_URL must use HTTPS.");
}

const sameSite = (env.COOKIE_SAMESITE || "lax").toLowerCase();

if (!["lax", "strict", "none"].includes(sameSite)) {
  throw new Error("COOKIE_SAMESITE must be lax, strict or none.");
}

const cookieSecure = bool(env.COOKIE_SECURE, isProd);

if (sameSite === "none" && !cookieSecure) {
  throw new Error(
    "COOKIE_SAMESITE=none requires COOKIE_SECURE=true."
  );
}

module.exports = {
  nodeEnv,
  isProd,
  isTest,

  port: int(env.PORT, 5000),

  // CORS
  corsOrigins: list(env.CORS_ORIGIN, [
    "http://localhost:3000",
  ]),

  // Reverse proxy
  trustProxy: int(env.TRUST_PROXY, 1),

  // Supabase API
  supabase: {
    url: supabaseUrl,
    serviceRoleKey: supabaseServiceRoleKey,
  },

  // Redis
  redisUrl: env.REDIS_URL || "redis://localhost:6379",
  redisPrefix: env.REDIS_PREFIX || "hf:",

  // JWT
  jwt: {
    accessSecret: secret("JWT_ACCESS_SECRET"),
    refreshSecret: secret("JWT_REFRESH_SECRET"),
    accessTtlSec: int(env.JWT_ACCESS_TTL_SEC, 15 * 60),
    refreshTtlSec: int(env.JWT_REFRESH_TTL_SEC, 7 * 24 * 3600),
    issuer: env.JWT_ISSUER || "hopefelt-api",
    audience: env.JWT_AUDIENCE || "hopefelt-web",
  },

  // Cookies
  cookie: {
    name: env.REFRESH_COOKIE_NAME || "hf_rt",
    secure: cookieSecure,
    sameSite,
    domain: env.COOKIE_DOMAIN || undefined,
  },

  // API Gateway
  gatewaySecret: secret("GATEWAY_SECRET"),
  requireGateway: bool(env.REQUIRE_GATEWAY, isProd),

  gateway: {
    port: int(env.GATEWAY_PORT, 8080),
    upstream:
      env.API_UPSTREAM_URL ||
      `http://localhost:${int(env.PORT, 5000)}`,
    trustProxy: int(env.GATEWAY_TRUST_PROXY, 0),
  },

  // Authentication
  auth: {
    bcryptRounds: int(env.BCRYPT_ROUNDS, isTest ? 4 : 12),
    maxLoginAttempts: int(env.MAX_LOGIN_ATTEMPTS, 5),
    lockoutSec: int(env.LOGIN_LOCKOUT_SEC, 15 * 60),
  },

  // Rate limits
  limits: {
    global: [
      int(env.RL_GLOBAL_MAX, 300),
      int(env.RL_GLOBAL_WINDOW, 15 * 60),
    ],
    login: [
      int(env.RL_LOGIN_MAX, 10),
      int(env.RL_LOGIN_WINDOW, 15 * 60),
    ],
    register: [
      int(env.RL_REGISTER_MAX, 5),
      int(env.RL_REGISTER_WINDOW, 60 * 60),
    ],
    refresh: [
      int(env.RL_REFRESH_MAX, 30),
      int(env.RL_REFRESH_WINDOW, 15 * 60),
    ],
    contact: [
      int(env.RL_CONTACT_MAX, 5),
      int(env.RL_CONTACT_WINDOW, 60 * 60),
    ],
    contactPerEmail: [
      int(env.RL_CONTACT_EMAIL_MAX, 3),
      int(env.RL_CONTACT_EMAIL_WINDOW, 24 * 3600),
    ],
    apply: [
      int(env.RL_APPLY_MAX, 10),
      int(env.RL_APPLY_WINDOW, 60 * 60),
    ],
    admin: [
      int(env.RL_ADMIN_MAX, 120),
      int(env.RL_ADMIN_WINDOW, 60),
    ],
  },

  bodyLimit: env.BODY_LIMIT || "20kb",
};