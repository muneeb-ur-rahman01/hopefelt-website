const tokens = require("../services/tokenService");
const { isReady } = require("../config/redis");
const ApiError = require("../utils/ApiError");

function readBearer(req) {
  const header = req.get("authorization");
  if (!header) return null;
  const [scheme, token] = header.split(" ");
  if (scheme !== "Bearer" || !token || token.length > 2048) {
    throw ApiError.unauthorized("Malformed Authorization header.", { code: "TOKEN_INVALID" });
  }
  return token;
}

async function resolve(req) {
  const token = readBearer(req);
  if (!token) return null;
  const payload = tokens.verifyAccessToken(token);
  // The revocation list lives in Redis. If it is down we refuse (fail closed) rather than trust blindly.
  if (!isReady()) throw ApiError.unavailable();
  await tokens.assertNotRevoked(payload);
  return { id: payload.sub, role: payload.role, jti: payload.jti, payload };
}

// Requires a valid access token. Sets req.user = { id, role, jti, payload }.
async function authenticate(req, res, next) {
  try {
    const user = await resolve(req);
    if (!user) throw ApiError.unauthorized();
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
}

// Attaches req.user when a valid token is present; anonymous requests pass through.
// A token that is present but invalid is still rejected (never silently ignored).
async function optionalAuth(req, res, next) {
  try {
    req.user = (await resolve(req)) || undefined;
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = { authenticate, optionalAuth };
