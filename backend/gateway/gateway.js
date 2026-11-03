const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const config = require("../config/config");
const requestId = require("../middleware/requestId");
const { corsMiddleware, helmetMiddleware } = require("../middleware/security");
const { rateLimit } = require("../middleware/rateLimiter");
const { verifyAccessToken } = require("../services/tokenService");
const ApiError = require("../utils/ApiError");
const { errorHandler } = require("../middleware/errorHandler");
const logger = require("../utils/logger");

/*
 * API Gateway — the single public entry point.
 *
 *   browser ──► gateway (:8080) ──► API (:5000)
 *
 * It does the cross-cutting work so the API only receives vetted traffic:
 *   1. request id + security headers + CORS (answers browser pre-flights itself)
 *   2. coarse, Redis-backed rate limit per client IP
 *   3. edge authentication: protected route prefixes need a valid, unexpired JWT,
 *      otherwise the request is rejected here and never reaches the API
 *   4. payload-size guard
 *   5. proxies to the upstream with a shared secret + the true client IP.
 *      The API rejects any request that lacks the secret (REQUIRE_GATEWAY=true).
 *
 * The API still performs full authentication (revocation check) and authorization.
 */

// Route table: prefix -> upstream. Add more services here later.
const routes = [{ prefix: "/api", target: config.gateway.upstream }];

// Prefixes that always need a valid access token at the edge.
const PROTECTED = ["/api/admin", "/api/applications", "/api/auth/me", "/api/auth/change-password", "/api/auth/logout-all"];
const MAX_BODY_BYTES = 64 * 1024;

function edgeAuth(req, res, next) {
  const needsAuth = PROTECTED.some((p) => req.path === p || req.path.startsWith(`${p}/`));
  if (!needsAuth || req.method === "OPTIONS") return next();
  const [scheme, token] = (req.get("authorization") || "").split(" ");
  if (scheme !== "Bearer" || !token) return next(ApiError.unauthorized());
  try {
    req.edgeUser = verifyAccessToken(token); // signature + expiry + issuer/audience
    next();
  } catch (err) {
    next(err);
  }
}

function sizeGuard(req, res, next) {
  if (Number(req.get("content-length")) > MAX_BODY_BYTES) {
    return next(new ApiError(413, "Request body is too large.", { code: "PAYLOAD_TOO_LARGE" }));
  }
  next();
}

function createGateway() {
  const app = express();
  app.disable("x-powered-by");
  app.set("trust proxy", config.gateway.trustProxy);

  app.use(requestId);
  app.use(helmetMiddleware);
  app.use(corsMiddleware);

  app.get("/gateway/health", async (req, res) => {
    const up = await fetch(`${config.gateway.upstream}/api/health`, { signal: AbortSignal.timeout(2000) })
      .then((r) => r.ok)
      .catch(() => false);
    res.status(up ? 200 : 503).json({ success: up, gateway: "ok", upstream: up ? "ok" : "down" });
  });

  app.use(rateLimit({ name: "gw-global", limit: config.limits.global }));
  app.use(sizeGuard);
  app.use(edgeAuth);

  for (const { prefix, target } of routes) {
    app.use(
      createProxyMiddleware({
        target,
        pathFilter: prefix,
        changeOrigin: true,
        xfwd: false,
        proxyTimeout: 15_000,
        timeout: 15_000,
        on: {
          proxyReq(proxyReq, req) {
            // Overwrite anything the client tried to send in these headers.
            proxyReq.setHeader("x-gateway-secret", config.gatewaySecret);
            proxyReq.setHeader("x-forwarded-for", req.ip);
            proxyReq.setHeader("x-request-id", req.id);
            proxyReq.removeHeader("x-forwarded-host");
          },
          error(err, req, res) {
            logger.error("Gateway upstream error", { requestId: req.id, error: err.message });
            if (!res.headersSent && res.writeHead) {
              const timeout = err.code === "ECONNRESET" || err.code === "ETIMEDOUT";
              res.writeHead(timeout ? 504 : 502, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ success: false, message: timeout ? "Upstream timed out." : "Service unavailable.", requestId: req.id }));
            }
          },
        },
      })
    );
  }

  app.use((req, res) => res.status(404).json({ success: false, message: "Route not found." }));
  app.use(errorHandler);
  return app;
}

module.exports = createGateway;
