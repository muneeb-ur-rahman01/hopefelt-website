const fs = require("fs");
const path = require("path");
const db = require("../config/db");

(async () => {
  const sql = fs.readFileSync(path.join(__dirname, "../db/schema.sql"), "utf8");
  await db.query(sql);
  console.log("Database schema is up to date.");
  await db.close();
})().catch((err) => {
  console.error("Migration failed:", err.message);
  process.exit(1);
});
