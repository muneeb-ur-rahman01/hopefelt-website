const team = require("../data/team");
const products = require("../data/products");
const services = require("../data/services");

function getTeam(req, res) {
  res.status(200).json({ success: true, data: team });
}

function getProducts(req, res) {
  res.status(200).json({ success: true, data: products });
}

function getServices(req, res) {
  res.status(200).json({ success: true, data: services });
}

module.exports = { getTeam, getProducts, getServices };
