const express = require("express");
const { getTeam, getProducts, getServices } = require("../controllers/dataController");

const router = express.Router();

// GET /api/team
router.get("/team", getTeam);

// GET /api/products
router.get("/products", getProducts);

// GET /api/services
router.get("/services", getServices);

module.exports = router;
