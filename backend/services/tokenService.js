const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const { getRedis } = require("../config/redis");
const ApiError = require("../utils/ApiError");

/*
 * Token model
 *  - Access token : JWT (HS256, 15 min). Sent as `Authorization: Bearer`. Kept in memory by the frontend.
 *  - Refresh token: JWT (HS256, 7 days, different secret). Sent only as an httpOnly cookie.
 *    Every refresh ROTATES the token. Re-using an already-rotated token is treated as theft and
 *    revokes every session of that user.
 *
 * Redis keys (prefix is added by the client):
 *  rt:<jti>      -> userId            live refresh tokens (TTL = refresh lifetime)
 *  sess:<userId> -> set of jti        so we can revoke all sessions of a user
 *  rtused:<jti>  -> unix ms           rotated tokens (reuse detection)
 *  bl:<jti>      -> 1                 revoked access tokens (TTL = remaining lifetime)
 *  urev:<userId> -> unix seconds      "everything issued before this is invalid"
 */

const { jwt: jwtCfg } = config;
const REUSE_GRACE_MS = 10_000; // tolerate two browser tabs refreshing at the same moment

const baseOptions = { algorithm: "HS256", issuer: jwtCfg.issuer, audience: jwtCfg.audience };
const verifyOptions = { algorithms: ["HS256"], issuer: jwtCfg.issuer, audience: jwtCfg.audience };

const redis = () => getRedis();

function signAccessToken(user) {
  const jti = crypto.randomUUID();
  const token = jwt.sign({ role: user.role }, jwtCfg.accessSecret, {
    ...baseOptions,
    subject: user.id,
    jwtid: jti,
    expiresIn: jwtCfg.accessTtlSec,
  });
  return { token, jti, expiresIn: jwtCfg.accessTtlSec };
}

function signRefreshToken(user) {
  const jti = crypto.randomUUID();
  const token = jwt.sign({ typ: "refresh" }, jwtCfg.refreshSecret, {
    ...baseOptions,
    subject: user.id,
    jwtid: jti,
    expiresIn: jwtCfg.refreshTtlSec,
  });
  return { token, jti };
}

function verifyAccessToken(token) {
  try {
    return jwt.verify(token, jwtCfg.accessSecret, verifyOptions);
  } catch (err) {
    const msg = err.name === "TokenExpiredError" ? "Access token expired." : "Invalid access token.";
    throw ApiError.unauthorized(msg, { code: err.name === "TokenExpiredError" ? "TOKEN_EXPIRED" : "TOKEN_INVALID" });
  }
}

function verifyRefreshToken(token) {
  try {
    const payload = jwt.verify(token, jwtCfg.refreshSecret, verifyOptions);
    if (payload.typ !== "refresh") throw new Error("wrong type");
    return payload;
  } catch {
    throw ApiError.unauthorized("Session expired. Please sign in again.", { code: "REFRESH_INVALID" });
  }
}

async function storeRefresh(userId, jti) {
  const r = redis();
  await r
    .multi()
    .set(`rt:${jti}`, userId, "EX", jwtCfg.refreshTtlSec)
    .sadd(`sess:${userId}`, jti)
    .expire(`sess:${userId}`, jwtCfg.refreshTtlSec)
    .exec();
}

// Creates a fresh access + refresh pair and registers the refresh token.
async function issueSession(user) {
  const access = signAccessToken(user);
  const refresh = signRefreshToken(user);
  await storeRefresh(user.id, refresh.jti);
  return { accessToken: access.token, expiresIn: access.expiresIn, refreshToken: refresh.token };
}

async function revokeAllSessions(userId) {
  const r = redis();
  const jtis = await r.smembers(`sess:${userId}`);
  const pipe = r.multi();
  jtis.forEach((j) => pipe.del(`rt:${j}`));
  pipe.del(`sess:${userId}`);
  // Invalidate already-issued access tokens too.
  pipe.set(`urev:${userId}`, Math.floor(Date.now() / 1000), "EX", jwtCfg.accessTtlSec + 5);
  await pipe.exec();
}

// Rotates a refresh token. `loadUser(id)` must return the current user row (or null).
async function rotateRefresh(refreshToken, loadUser) {
  const payload = verifyRefreshToken(refreshToken);
  const r = redis();
  const { sub: userId, jti } = payload;

  const live = await r.get(`rt:${jti}`);
  if (!live) {
    const usedAt = await r.get(`rtused:${jti}`);
    if (usedAt && Date.now() - Number(usedAt) > REUSE_GRACE_MS) {
      // A rotated token came back after the grace period: assume it was stolen.
      await revokeAllSessions(userId);
      throw ApiError.unauthorized("Session is no longer valid. Please sign in again.", { code: "REFRESH_REUSED" });
    }
    throw ApiError.unauthorized("Session expired. Please sign in again.", { code: "REFRESH_INVALID" });
  }

  // Atomically consume: only one concurrent caller gets a count of 1.
  const consumed = await r.del(`rt:${jti}`);
  if (consumed !== 1) {
    throw ApiError.unauthorized("Session expired. Please sign in again.", { code: "REFRESH_INVALID" });
  }
  await r.multi().srem(`sess:${userId}`, jti).set(`rtused:${jti}`, Date.now(), "EX", jwtCfg.refreshTtlSec).exec();

  const user = await loadUser(userId);
  if (!user || !user.is_active) throw ApiError.unauthorized("Account is not available.", { code: "ACCOUNT_DISABLED" });

  return { user, ...(await issueSession(user)) };
}

async function revokeRefreshToken(refreshToken) {
  try {
    const { sub, jti } = jwt.verify(refreshToken, jwtCfg.refreshSecret, verifyOptions);
    await redis().multi().del(`rt:${jti}`).srem(`sess:${sub}`, jti).exec();
  } catch {
    /* already invalid -> nothing to revoke */
  }
}

async function blacklistAccessToken(payload) {
  const ttl = payload.exp - Math.floor(Date.now() / 1000);
  if (ttl > 0) await redis().set(`bl:${payload.jti}`, "1", "EX", ttl);
}

// Throws unless the (already signature-verified) access token is still valid.
async function assertNotRevoked(payload) {
  const [blacklisted, revokedAt] = await redis().mget(`bl:${payload.jti}`, `urev:${payload.sub}`);
  if (blacklisted || (revokedAt && Number(revokedAt) >= payload.iat)) {
    throw ApiError.unauthorized("Session has been revoked. Please sign in again.", { code: "TOKEN_REVOKED" });
  }
}

module.exports = {
  issueSession,
  rotateRefresh,
  revokeRefreshToken,
  revokeAllSessions,
  blacklistAccessToken,
  assertNotRevoked,
  verifyAccessToken,
  verifyRefreshToken,
};
