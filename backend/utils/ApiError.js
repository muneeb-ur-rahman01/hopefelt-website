// Operational error that is safe to show to the client.
class ApiError extends Error {
  constructor(status, message, { code, errors } = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.errors = errors;
    this.expose = true;
  }

  static badRequest(msg = "Bad request.", opts) { return new ApiError(400, msg, opts); }
  static unauthorized(msg = "Authentication required.", opts) { return new ApiError(401, msg, opts); }
  static forbidden(msg = "You do not have permission to do that.", opts) { return new ApiError(403, msg, opts); }
  static notFound(msg = "Resource not found.", opts) { return new ApiError(404, msg, opts); }
  static conflict(msg = "Conflict.", opts) { return new ApiError(409, msg, opts); }
  static tooMany(msg = "Too many requests. Please try again later.", opts) { return new ApiError(429, msg, opts); }
  static unavailable(msg = "Service temporarily unavailable.", opts) { return new ApiError(503, msg, opts); }
}

module.exports = ApiError;
