const crypto = require("crypto");
const helmet = require("helmet");
const hpp = require("hpp");
const cors = require("cors");
const config = require("../config/config");
const ApiError = require("../utils/ApiError");

const originAllowed = (origin) => config.corsOrigins.includes(origin);

// Browser access is limited to the configured frontend origin(s). Requests without
// an Origin header (curl, server-to-server, the gateway) are not CORS requests.
const corsMiddleware = cors({
  origin(origin, cb) {
    if (!origin || originAllowed(origin)) return cb(null, true);
    cb(ApiError.forbidden("Origin not allowed.", { code: "CORS_DENIED" }));
  },
  credentials: true, // refresh-token cookie
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "X-Request-Id"],
  exposedHeaders: ["X-Request-Id", "RateLimit-Limit", "RateLimit-Remaining", "RateLimit-Reset", "Retry-After"],
  maxAge: 600,
});

// A JSON API: lock everything down (no scripts, no framing, no sniffing).
const helmetMiddleware = helmet({
  contentSecurityPolicy: { directives: { defaultSrc: ["'none'"], frameAncestors: ["'none'"] } },
  crossOriginResourcePolicy: { policy: "same-site" },
  referrerPolicy: { policy: "no-referrer" },
  hsts: config.isProd ? { maxAge: 15552000, includeSubDomains: true } : false,
});

// State-changing requests must be JSON. This blocks cross-site <form> posts,
// which can only send urlencoded / multipart / text.
function requireJson(req, res, next) {
  if (["POST", "PATCH", "PUT"].includes(req.method)) {
    const hasBody = Number(req.get("content-length")) > 0 || req.get("transfer-encoding");
    if (hasBody && !req.is("application/json")) {
      return next(new ApiError(415, "Content-Type must be application/json.", { code: "UNSUPPORTED_MEDIA_TYPE" }));
    }
  }
  next();
}

// Extra protection for the endpoints that rely on the refresh COOKIE (refresh, logout):
// require our custom header (forces a CORS pre-flight) and a trusted Origin.
function csrfGuard(req, res, next) {
  const origin = req.get("origin");
  if (origin && !originAllowed(origin)) return next(ApiError.forbidden("Origin not allowed.", { code: "CSRF" }));
  if (req.get("x-requested-with") !== "hopefelt-web") {
    return next(ApiError.forbidden("Missing required header.", { code: "CSRF" }));
  }
  next();
}

// Only the API gateway may talk to this service when REQUIRE_GATEWAY=true.
function requireGateway(req, res, next) {
  if (!config.requireGateway) return next();
  const provided = Buffer.from(req.get("x-gateway-secret") || "");
  const expected = Buffer.from(config.gatewaySecret);
  const ok = provided.length === expected.length && crypto.timingSafeEqual(provided, expected);
  if (!ok) return next(ApiError.forbidden("Direct access is not allowed.", { code: "GATEWAY_REQUIRED" }));
  next();
}

module.exports = { corsMiddleware, helmetMiddleware, hppMiddleware: hpp(), requireJson, csrfGuard, requireGateway, originAllowed };
