// Creates (or promotes) the first admin: ADMIN_EMAIL=... ADMIN_PASSWORD=... npm run seed:admin
// Public sign-up can never create admins, so this is the only bootstrap path.
const bcrypt = require("bcryptjs");
const config = require("../config/config");
const db = require("../config/db");
const { password } = require("../validators/common");

(async () => {
  const email = (process.env.ADMIN_EMAIL || "").trim().toLowerCase();
  const pw = process.env.ADMIN_PASSWORD || "";
  const name = process.env.ADMIN_NAME || "Administrator";
  if (!email || !pw) throw new Error("Set ADMIN_EMAIL and ADMIN_PASSWORD.");
  const check = password.safeParse(pw);
  if (!check.success) throw new Error(check.error.issues[0].message);

  const hash = await bcrypt.hash(pw, config.auth.bcryptRounds);
  await db.query(
    `INSERT INTO users (full_name, email, password_hash, role)
     VALUES ($1, $2, $3, 'admin')
     ON CONFLICT (lower(email)) DO UPDATE SET role = 'admin', password_hash = EXCLUDED.password_hash, is_active = TRUE, updated_at = now()`,
    [name, email, hash]
  );
  console.log(`Admin ready: ${email}`);
  await db.close();
})().catch((err) => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
