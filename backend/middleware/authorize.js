const ApiError = require("../utils/ApiError");

// authorize("admin") or authorize("staff", "admin"). Must run after `authenticate`.
// The role comes from the signed token; role changes revoke tokens (see adminService.updateUser),
// so a demoted user cannot keep using an old, more powerful token.
module.exports = function authorize(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) return next(ApiError.unauthorized());
    if (!allowedRoles.includes(req.user.role)) return next(ApiError.forbidden());
    next();
  };
};
