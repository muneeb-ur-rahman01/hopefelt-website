const config = require("./config/config");
const createApp = require("./app");
const db = require("./config/db");
const redis = require("./config/redis");
const logger = require("./utils/logger");

async function main() {
  const r = redis.getRedis();
  await new Promise((resolve, reject) => {
    if (r.status === "ready") return resolve();
    r.once("ready", resolve);
    setTimeout(() => reject(new Error(`Cannot connect to Redis at ${config.redisUrl}`)), 8000).unref();
  });
  await db.ping().catch((e) => {
    throw new Error(`Cannot connect to PostgreSQL: ${e.message}. Check DATABASE_URL and run "npm run migrate".`);
  });

  const server = createApp().listen(config.port, () => {
    logger.info(`Hopefelt Foundation API listening on port ${config.port}`, { env: config.nodeEnv, gatewayRequired: config.requireGateway });
  });

  const shutdown = (signal) => {
    logger.info(`${signal} received, shutting down`);
    server.close(async () => {
      await Promise.allSettled([db.close(), redis.close()]);
      process.exit(0);
    });
    setTimeout(() => process.exit(1), 10_000).unref();
  };
  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));
}

process.on("unhandledRejection", (err) => logger.error("Unhandled rejection", { error: err?.message }));

main().catch((err) => {
  logger.error("Failed to start", { error: err.message });
  process.exit(1);
});
