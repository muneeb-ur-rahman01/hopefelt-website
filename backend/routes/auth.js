const express = require("express");
const c = require("../controllers/authController");
const validate = require("../middleware/validate");
const { authenticate } = require("../middleware/authenticate");
const { csrfGuard } = require("../middleware/security");
const { loginLimiter, registerLimiter, refreshLimiter, rateLimit } = require("../middleware/rateLimiter");
const v = require("../validators/authValidators");

const router = express.Router();

// Public
router.post("/register", registerLimiter, validate({ body: v.register }), c.register);
router.post(
  "/login",
  loginLimiter,
  validate({ body: v.login }),
  // second limiter keyed by target account: slows distributed guessing against one e-mail
  rateLimit({ name: "login-email", limit: [20, 15 * 60], key: (req) => req.body.email }),
  c.login
);

// Cookie-based: protected against CSRF
router.post("/refresh", csrfGuard, refreshLimiter, c.refresh);
router.post("/logout", csrfGuard, c.logout);

// Authenticated
router.get("/me", authenticate, c.me);
router.patch("/me", authenticate, validate({ body: v.updateProfile }), c.updateMe);
router.post("/change-password", authenticate, rateLimit({ name: "chpw", limit: [5, 3600], key: (r) => r.user?.id }), validate({ body: v.changePassword }), c.changePassword);
router.post("/logout-all", authenticate, c.logoutAll);

module.exports = router;
