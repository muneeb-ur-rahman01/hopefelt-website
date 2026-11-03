const { getRedis, isReady } = require("../config/redis");
const config = require("../config/config");
const ApiError = require("../utils/ApiError");
const logger = require("../utils/logger");

/*
 * Redis-backed fixed-window rate limiter (atomic via Lua, so it is correct across
 * several API instances). If Redis is unavailable we degrade to a per-process
 * in-memory counter instead of letting traffic through unlimited.
 */
const LUA = `
local c = redis.call('INCR', KEYS[1])
if c == 1 then redis.call('PEXPIRE', KEYS[1], ARGV[1]) end
return {c, redis.call('PTTL', KEYS[1])}
`;

const memory = new Map(); // key -> { count, resetAt }
setInterval(() => {
  const now = Date.now();
  for (const [k, v] of memory) if (v.resetAt <= now) memory.delete(k);
}, 60_000).unref();

function hitMemory(key, windowMs) {
  const now = Date.now();
  let entry = memory.get(key);
  if (!entry || entry.resetAt <= now) {
    entry = { count: 0, resetAt: now + windowMs };
    memory.set(key, entry);
  }
  entry.count += 1;
  return [entry.count, entry.resetAt - now];
}

async function hit(key, windowMs) {
  if (isReady()) {
    try {
      const [count, ttl] = await getRedis().eval(LUA, 1, key, windowMs);
      return [count, ttl > 0 ? ttl : windowMs];
    } catch (err) {
      logger.warn("Rate limiter: Redis error, using in-memory fallback", { error: err.message });
    }
  }
  return hitMemory(`rl:${key}`, windowMs);
}

/**
 * rateLimit({ name, limit: [max, windowSec], key?: (req) => string, message? })
 * Default key is the client IP. Use `key` to limit by e-mail, user id, etc.
 */
function rateLimit({ name, limit, key, message }) {
  const [max, windowSec] = limit;
  const windowMs = windowSec * 1000;

  return async (req, res, next) => {
    try {
      const id = key ? key(req) : req.ip;
      if (!id) return next();
      const [count, ttl] = await hit(`rl:${name}:${id}`, windowMs);

      res.setHeader("RateLimit-Limit", max);
      res.setHeader("RateLimit-Remaining", Math.max(0, max - count));
      res.setHeader("RateLimit-Reset", Math.ceil(ttl / 1000));

      if (count > max) {
        res.setHeader("Retry-After", Math.ceil(ttl / 1000));
        return next(ApiError.tooMany(message, { code: "RATE_LIMITED" }));
      }
      next();
    } catch (err) {
      next(err);
    }
  };
}

const limits = config.limits;

module.exports = {
  rateLimit,
  globalLimiter: rateLimit({ name: "global", limit: limits.global }),
  loginLimiter: rateLimit({ name: "login", limit: limits.login, message: "Too many sign-in attempts. Please try again later." }),
  registerLimiter: rateLimit({ name: "register", limit: limits.register, message: "Too many sign-ups from this address. Please try again later." }),
  refreshLimiter: rateLimit({ name: "refresh", limit: limits.refresh }),
  contactLimiter: rateLimit({ name: "contact", limit: limits.contact, message: "You have sent several enquiries recently. Please try again later." }),
  contactEmailLimiter: rateLimit({
    name: "contact-email", limit: limits.contactPerEmail,
    key: (req) => req.body?.email,
    message: "Too many enquiries from this email address today. Please try again tomorrow.",
  }),
  applyLimiter: rateLimit({ name: "apply", limit: limits.apply, message: "Too many applications from this address. Please try again later." }),
  // Admin traffic is limited per user, not per IP (staff may share an office IP).
  adminLimiter: rateLimit({ name: "admin", limit: limits.admin, key: (req) => req.user?.id || req.ip }),
};
