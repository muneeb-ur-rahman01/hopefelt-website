const express = require("express");
const c = require("../controllers/applicationController");
const validate = require("../middleware/validate");
const { optionalAuth } = require("../middleware/authenticate");
const { applyLimiter, rateLimit } = require("../middleware/rateLimiter");
const v = require("../validators/applicationValidators");

const router = express.Router();

// GET /api/get-involved/opportunities
router.get("/opportunities", c.listOpportunities);

// POST /api/get-involved/:slug  (e.g. /api/get-involved/volunteer)
router.post(
  "/:slug",
  applyLimiter,
  optionalAuth,
  validate({ params: v.slugParam, body: v.submit }),
  // one person cannot spam the same opportunity with different IPs
  rateLimit({ name: "apply-email", limit: [5, 24 * 3600], key: (req) => `${req.body.email}:${req.params.slug}` }),
  c.apply
);

module.exports = router;
