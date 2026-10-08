const express = require("express");
const { submitContact } = require("../controllers/contactController");
const validateContact = require("../middleware/validateContact");

const router = express.Router();

// POST /api/contact
router.post("/", validateContact, submitContact);

module.exports = router;
