const ApiError = require("../utils/ApiError");

// validate({ body, query, params }) — each value is a zod schema.
// Parsed (cleaned, typed, unknown keys stripped) data replaces the raw input.
module.exports = function validate(schemas) {
  return (req, res, next) => {
    const errors = [];
    for (const part of ["params", "query", "body"]) {
      const schema = schemas[part];
      if (!schema) continue;
      const result = schema.safeParse(part === "body" ? req.body ?? {} : req[part]);
      if (!result.success) {
        for (const issue of result.error.issues) {
          errors.push({ field: [part === "body" ? null : part, ...issue.path].filter(Boolean).join("."), message: issue.message });
        }
      } else if (part === "query") {
        // Express 5 makes req.query read-only, so keep parsed values separately.
        req.validatedQuery = result.data;
      } else {
        req[part] = result.data;
      }
    }
    if (errors.length) {
      return next(ApiError.badRequest(errors[0].message, { code: "VALIDATION_ERROR", errors }));
    }
    next();
  };
};
