const db = require("../config/db");
const { getRedis } = require("../config/redis");

const live = (req, res) => res.status(200).json({ success: true, message: "Hopefelt Foundation API is running." });

// Readiness: only report healthy when the dependencies answer.
async function ready(req, res) {
  const checks = { database: "ok", redis: "ok" };
  await Promise.all([
    db.ping().catch(() => { checks.database = "down"; }),
    getRedis().ping().catch(() => { checks.redis = "down"; }),
  ]);
  const healthy = Object.values(checks).every((v) => v === "ok");
  res.status(healthy ? 200 : 503).json({ success: healthy, checks });
}

module.exports = { live, ready };
