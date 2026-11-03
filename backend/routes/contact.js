const express = require("express");
const { submitContact } = require("../controllers/contactController");
const validate = require("../middleware/validate");
const { optionalAuth } = require("../middleware/authenticate");
const { contactLimiter, contactEmailLimiter } = require("../middleware/rateLimiter");
const { submit } = require("../validators/contactValidators");

const router = express.Router();

// POST /api/contact — public. Order matters: cheap IP limit -> validate -> per-email limit.
router.post("/", contactLimiter, optionalAuth, validate({ body: submit }), contactEmailLimiter, submitContact);

module.exports = router;
