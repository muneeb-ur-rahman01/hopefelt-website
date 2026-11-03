const Redis = require("ioredis");
const config = require("./config");
const logger = require("../utils/logger");

// Redis is used for: rate limiting, refresh-token store, access-token
// revocation list, login lockout counters and small response caches.
let client = null;

function getRedis() {
  if (!client) {
    client = new Redis(config.redisUrl, {
      keyPrefix: config.redisPrefix,
      maxRetriesPerRequest: 2,
      enableOfflineQueue: false, // fail fast instead of hanging requests
      retryStrategy: (times) => Math.min(times * 200, 3000),
    });
    client.on("error", (err) => logger.error("Redis error", { error: err.message }));
  }
  return client;
}

const isReady = () => !!client && client.status === "ready";

async function close() {
  if (client) {
    await client.quit().catch(() => {});
    client = null;
  }
}

module.exports = { getRedis, isReady, close };
