const team = require("../data/team");
const products = require("../data/products");
const services = require("../data/services");

// Static, public content: let browsers/CDNs cache it for 5 minutes.
const send = (data) => (req, res) => {
  res.set("Cache-Control", "public, max-age=300");
  res.status(200).json({ success: true, data });
};

module.exports = {
  getTeam: send(team),
  getProducts: send(products),
  getServices: send(services),
};
