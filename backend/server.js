const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const contactRoutes = require("./routes/contact");
const dataRoutes = require("./routes/data");
const { notFoundHandler, errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(cors({ origin: config.corsOrigin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET /api/health
app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true, message: "Hopefelt Foundation API is running." });
});

app.use("/api/contact", contactRoutes);
app.use("/api", dataRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Hopefelt Foundation API listening on port ${config.port}`);
});
