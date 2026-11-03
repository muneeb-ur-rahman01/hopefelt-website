const express = require("express");

const router = express.Router();

router.use("/auth", require("./auth"));
router.use("/contact", require("./contact"));
router.use("/get-involved", require("./getInvolved"));
router.use("/applications", require("./applications"));
router.use("/admin", require("./admin"));
router.use("/", require("./data")); // /team, /products, /services

module.exports = router;
