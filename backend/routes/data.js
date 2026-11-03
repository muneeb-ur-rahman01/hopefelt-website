const express = require("express");
const { getTeam, getProducts, getServices } = require("../controllers/dataController");

const router = express.Router();

router.get("/team", getTeam);
router.get("/products", getProducts);
router.get("/services", getServices);

module.exports = router;
