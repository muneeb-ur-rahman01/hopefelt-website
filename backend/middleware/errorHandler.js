// 404 handler — placed after all routes in server.js
function notFoundHandler(req, res, next) {
  res.status(404).json({ success: false, message: `Route not found: ${req.originalUrl}` });
}

// Centralized error handler — placed last in server.js
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: status === 500 ? "Internal server error." : err.message,
  });
}

module.exports = { notFoundHandler, errorHandler };
