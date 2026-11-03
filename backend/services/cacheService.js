const { getRedis } = require("../config/redis");

// Tiny read-through cache. Cache failures never break a request.
async function getOrSet(key, ttlSec, producer) {
  const redis = getRedis();
  try {
    const hit = await redis.get(`cache:${key}`);
    if (hit) return JSON.parse(hit);
  } catch { /* fall through to producer */ }

  const value = await producer();
  try {
    await redis.set(`cache:${key}`, JSON.stringify(value), "EX", ttlSec);
  } catch { /* ignore */ }
  return value;
}

async function del(key) {
  try { await getRedis().del(`cache:${key}`); } catch { /* ignore */ }
}

module.exports = { getOrSet, del };
