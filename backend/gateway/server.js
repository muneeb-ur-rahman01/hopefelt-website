const config = require("../config/config");
const createGateway = require("./gateway");
const redis = require("../config/redis");
const logger = require("../utils/logger");

redis.getRedis(); // rate limiter + (optional) revocation checks

const server = createGateway().listen(config.gateway.port, () => {
  logger.info(`API Gateway listening on port ${config.gateway.port} -> ${config.gateway.upstream}`);
});

const shutdown = () => server.close(async () => { await redis.close(); process.exit(0); });
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
