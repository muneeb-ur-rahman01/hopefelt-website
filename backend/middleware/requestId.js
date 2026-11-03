const crypto = require("crypto");

// Reuses the gateway's id when present so one request can be traced end to end.
module.exports = function requestId(req, res, next) {
  const incoming = req.get("x-request-id");
  req.id = incoming && /^[\w-]{8,64}$/.test(incoming) ? incoming : crypto.randomUUID();
  res.setHeader("X-Request-Id", req.id);
  next();
};
