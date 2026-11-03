const express = require("express");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const config = require("./config/config");
const health = require("./controllers/healthController");
const routes = require("./routes");
const requestId = require("./middleware/requestId");
const {
  corsMiddleware, helmetMiddleware, hppMiddleware, requireJson, requireGateway,
} = require("./middleware/security");
const { globalLimiter } = require("./middleware/rateLimiter");
const { notFoundHandler, errorHandler } = require("./middleware/errorHandler");

function createApp() {
  const app = express();
  app.disable("x-powered-by");
  app.set("trust proxy", config.trustProxy); // so req.ip is the real client IP behind the gateway

  app.use(requestId);
  app.use(helmetMiddleware);

  // Health checks stay reachable for load balancers / the gateway.
  app.get("/api/health", health.live);
  app.get("/api/health/ready", health.ready);

  app.use(requireGateway); // only the API gateway may call the routes below
  app.use(corsMiddleware);
  app.use(hppMiddleware);
  app.use(compression());
  app.use(globalLimiter); // cheap flood protection before any body is parsed
  app.use(requireJson);
  app.use(express.json({ limit: config.bodyLimit, strict: true }));
  app.use(cookieParser());

  app.use("/api", routes);

  app.use(notFoundHandler);
  app.use(errorHandler);
  return app;
}

module.exports = createApp;
