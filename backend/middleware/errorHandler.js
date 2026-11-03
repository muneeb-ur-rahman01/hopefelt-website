const config = require("../config/config");
const logger = require("../utils/logger");

function notFoundHandler(req, res, next) {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.path}` });
}

// Last middleware. Operational errors (ApiError) are shown; anything unexpected is
// logged with the request id and returned as a generic 500 so internals never leak.
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  let status = err.status || err.statusCode || 500;
  let message = err.expose ? err.message : null;
  let code = err.code && typeof err.code === "string" && err.expose ? err.code : undefined;

  if (err.type === "entity.parse.failed") { status = 400; message = "Request body is not valid JSON."; code = "INVALID_JSON"; }
  else if (err.type === "entity.too.large") { status = 413; message = "Request body is too large."; code = "PAYLOAD_TOO_LARGE"; }
  else if (err.code === "23505") { status = 409; message = "This record already exists."; code = "DUPLICATE"; }
  else if (err.code === "22P02") { status = 400; message = "Invalid identifier."; }

  if (status >= 500) {
    logger.error("Unhandled error", { requestId: req.id, path: req.path, method: req.method, error: err.message, stack: config.isProd ? undefined : err.stack });
    message = status === 503 ? "Service temporarily unavailable." : "Internal server error.";
  }

  const body = { success: false, message: message || "Request failed." };
  if (code) body.code = code;
  if (err.errors) body.errors = err.errors;
  if (req.id) body.requestId = req.id;
  res.status(status).json(body);
}

module.exports = { notFoundHandler, errorHandler };
