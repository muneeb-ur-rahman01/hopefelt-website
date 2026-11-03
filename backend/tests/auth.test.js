const h = require("./helpers");
h.setEnv({ MAX_LOGIN_ATTEMPTS: "5" });

const { describe, it, before, after } = require("node:test");
const assert = require("node:assert/strict");
const jwt = require("jsonwebtoken");

let infra, server, base, db, config;
const PASSWORD = "Str0ngPassw0rd!";

before(async () => {
  infra = await h.startInfra();
  db = require("../config/db");
  config = require("../config/config");
  server = require("../app")().listen(0);
  base = `http://127.0.0.1:${server.address().port}`;
});
after(async () => {
  server.close();
  await infra.stop();
});

const api = () => h.client(base);

async function registerUser(email, extra = {}) {
  const c = api();
  const res = await c.post("/api/auth/register", { fullName: "Test User", email, password: PASSWORD, ...extra });
  return { c, res, token: res.body?.data?.accessToken, id: res.body?.data?.user?.id };
}

async function makeRole(email, role) {
  await db.query("UPDATE users SET role = $2 WHERE lower(email) = lower($1)", [email, role]);
  const c = api();
  const res = await c.post("/api/auth/login", { email, password: PASSWORD });
  return { c, token: res.body.data.accessToken, id: res.body.data.user.id };
}

describe("registration & validation", () => {
  it("creates an account, returns access token in body and refresh token ONLY as httpOnly cookie", async () => {
    const { res } = await registerUser("reg1@example.com");
    assert.equal(res.status, 201);
    assert.ok(res.body.data.accessToken);
    assert.equal(res.body.data.refreshToken, undefined);
    assert.equal(res.body.data.user.role, "user");
    assert.equal(res.body.data.user.password_hash, undefined);
    const cookie = res.setCookies.find((c) => c.startsWith(`${config.cookie.name}=`));
    assert.ok(cookie, "refresh cookie set");
    assert.match(cookie, /HttpOnly/i);
    assert.match(cookie, /Path=\/api\/auth/);
  });

  it("rejects weak / malformed input with field errors", async () => {
    const c = api();
    let r = await c.post("/api/auth/register", { fullName: "A", email: "nope", password: "short" });
    assert.equal(r.status, 400);
    assert.equal(r.body.code, "VALIDATION_ERROR");
    assert.ok(r.body.errors.length >= 3);
    r = await c.post("/api/auth/register", { fullName: "Valid Name", email: "x@example.com", password: "alllowercase123" });
    assert.equal(r.status, 400);
    assert.match(r.body.message, /upper-case/);
  });

  it("does NOT allow choosing a role at sign-up (mass-assignment)", async () => {
    const r = await api().post("/api/auth/register", { fullName: "Evil User", email: "evil@example.com", password: PASSWORD, role: "admin" });
    assert.equal(r.status, 400);
    const { rows } = await db.query("SELECT 1 FROM users WHERE email = 'evil@example.com'");
    assert.equal(rows.length, 0);
  });

  it("rejects duplicate e-mail (case-insensitive)", async () => {
    await registerUser("dupe@example.com");
    const { res } = await registerUser("DUPE@Example.com");
    assert.equal(res.status, 409);
  });

  it("rejects non-JSON content type and malformed JSON", async () => {
    const c = api();
    let r = await c.call("POST", "/api/auth/login", { raw: "email=a&password=b", headers: { "Content-Type": "application/x-www-form-urlencoded" } });
    assert.equal(r.status, 415);
    r = await c.call("POST", "/api/auth/login", { raw: "{bad json", headers: { "Content-Type": "application/json" } });
    assert.equal(r.status, 400);
    assert.equal(r.body.code, "INVALID_JSON");
  });
});

describe("login, lockout", () => {
  it("logs in and gives identical errors for wrong password vs unknown account", async () => {
    await registerUser("login1@example.com");
    const c = api();
    const ok = await c.post("/api/auth/login", { email: "LOGIN1@example.com", password: PASSWORD });
    assert.equal(ok.status, 200);
    const bad = await c.post("/api/auth/login", { email: "login1@example.com", password: "WrongPassw0rd!" });
    const none = await c.post("/api/auth/login", { email: "ghost@example.com", password: "WrongPassw0rd!" });
    assert.equal(bad.status, 401);
    assert.equal(none.status, 401);
    assert.equal(bad.body.message, none.body.message);
  });

  it("locks the account after repeated failures, even with the right password", async () => {
    await registerUser("lock@example.com");
    const c = api();
    for (let i = 0; i < 5; i++) {
      const r = await c.post("/api/auth/login", { email: "lock@example.com", password: "WrongPassw0rd!" });
      assert.equal(r.status, 401);
    }
    const locked = await c.post("/api/auth/login", { email: "lock@example.com", password: PASSWORD });
    assert.equal(locked.status, 429);
    assert.equal(locked.body.code, "ACCOUNT_LOCKED");
  });

  it("blocks disabled accounts", async () => {
    const { id } = await registerUser("disabled@example.com");
    await db.query("UPDATE users SET is_active = false WHERE id = $1", [id]);
    const r = await api().post("/api/auth/login", { email: "disabled@example.com", password: PASSWORD });
    assert.equal(r.status, 403);
  });
});

describe("JWT verification", () => {
  it("/me requires a token and returns the profile with a valid one", async () => {
    const { c, token } = await registerUser("me1@example.com");
    assert.equal((await c.get("/api/auth/me")).status, 401);
    const r = await c.get("/api/auth/me", { token });
    assert.equal(r.status, 200);
    assert.equal(r.body.data.user.email, "me1@example.com");
  });

  it("rejects garbage, expired, wrong-secret, alg=none and wrong-audience tokens", async () => {
    const { id } = await registerUser("jwt1@example.com");
    const c = api();
    const sign = (secret, opts = {}) =>
      jwt.sign({ role: "admin" }, secret, { subject: id, jwtid: "j1", issuer: config.jwt.issuer, audience: config.jwt.audience, expiresIn: 60, ...opts });

    assert.equal((await c.get("/api/auth/me", { token: "garbage" })).status, 401);

    const expired = sign(config.jwt.accessSecret, { expiresIn: -10 });
    const r = await c.get("/api/auth/me", { token: expired });
    assert.equal(r.status, 401);
    assert.equal(r.body.code, "TOKEN_EXPIRED");

    assert.equal((await c.get("/api/auth/me", { token: sign("some-other-secret-some-other-secret-1") })).status, 401);
    assert.equal((await c.get("/api/auth/me", { token: sign(config.jwt.refreshSecret) })).status, 401, "refresh secret must not validate as access");
    assert.equal((await c.get("/api/auth/me", { token: sign(config.jwt.accessSecret, { audience: "other" }) })).status, 401);

    const none = jwt.sign({ role: "admin" }, "", { algorithm: "none", subject: id, issuer: config.jwt.issuer, audience: config.jwt.audience });
    assert.equal((await c.get("/api/auth/me", { token: none })).status, 401);
  });

  it("a refresh token cannot be used as an access token", async () => {
    const { c } = await registerUser("jwt2@example.com");
    const refreshJwt = c.getCookie().split("=")[1];
    assert.equal((await c.get("/api/auth/me", { token: refreshJwt })).status, 401);
  });
});

describe("refresh rotation, logout, revocation", () => {
  it("requires the CSRF header and the cookie", async () => {
    const { c } = await registerUser("rf1@example.com");
    assert.equal((await c.post("/api/auth/refresh", {})).status, 403);
    assert.equal((await c.post("/api/auth/refresh", {}, { headers: { ...h.CSRF, Origin: "https://evil.example" } })).status, 403);
    assert.equal((await api().post("/api/auth/refresh", {}, { headers: h.CSRF })).status, 401);
  });

  it("rotates the refresh token and issues a working access token", async () => {
    const { c } = await registerUser("rf2@example.com");
    const before = c.getCookie();
    const r = await c.post("/api/auth/refresh", {}, { headers: h.CSRF });
    assert.equal(r.status, 200);
    assert.notEqual(c.getCookie(), before, "cookie must change");
    assert.equal((await c.get("/api/auth/me", { token: r.body.data.accessToken })).status, 200);
  });

  it("detects refresh-token reuse and revokes every session of the user", async () => {
    const { c } = await registerUser("rf3@example.com");
    const stolen = c.getCookie();
    const r1 = await c.post("/api/auth/refresh", {}, { headers: h.CSRF }); // legit rotation
    assert.equal(r1.status, 200);

    // Within the grace window a replay is just rejected...
    const attacker = api();
    attacker.setCookie(stolen);
    assert.equal((await attacker.post("/api/auth/refresh", {}, { headers: h.CSRF })).status, 401);

    // ...after the grace window it is treated as theft.
    const jti = jwt.decode(stolen.split("=")[1]).jti;
    await infra.redis.set(`rtused:${jti}`, Date.now() - 60_000);
    attacker.setCookie(stolen);
    const r2 = await attacker.post("/api/auth/refresh", {}, { headers: h.CSRF });
    assert.equal(r2.status, 401);
    assert.equal(r2.body.code, "REFRESH_REUSED");

    // The legitimate (newer) session and its access token are dead too.
    assert.equal((await c.post("/api/auth/refresh", {}, { headers: h.CSRF })).status, 401);
    assert.equal((await c.get("/api/auth/me", { token: r1.body.data.accessToken })).status, 401);
  });

  it("logout revokes the access token immediately and kills the refresh token", async () => {
    const { c, token } = await registerUser("lo1@example.com");
    const saved = c.getCookie();
    assert.equal((await c.get("/api/auth/me", { token })).status, 200);
    const out = await c.post("/api/auth/logout", {}, { token, headers: h.CSRF });
    assert.equal(out.status, 200);
    assert.equal((await c.get("/api/auth/me", { token })).status, 401, "blacklisted access token");
    const replay = api();
    replay.setCookie(saved);
    assert.equal((await replay.post("/api/auth/refresh", {}, { headers: h.CSRF })).status, 401, "refresh revoked");
  });

  it("changing the password signs out all sessions", async () => {
    const { c, token } = await registerUser("pw1@example.com");
    const wrong = await c.post("/api/auth/change-password", { currentPassword: "Nope-Nope-123", newPassword: "N3wStrongPass!!" }, { token });
    assert.equal(wrong.status, 400);
    const r = await c.post("/api/auth/change-password", { currentPassword: PASSWORD, newPassword: "N3wStrongPass!!" }, { token });
    assert.equal(r.status, 200);
    assert.equal((await c.get("/api/auth/me", { token })).status, 401);
    assert.equal((await api().post("/api/auth/login", { email: "pw1@example.com", password: PASSWORD })).status, 401);
    assert.equal((await api().post("/api/auth/login", { email: "pw1@example.com", password: "N3wStrongPass!!" })).status, 200);
  });
});

describe("authorization (RBAC)", () => {
  it("anonymous -> 401, user -> 403, staff -> ok (but not user admin), admin -> ok", async () => {
    const anon = api();
    assert.equal((await anon.get("/api/admin/stats")).status, 401);

    const u = await registerUser("rbac-user@example.com");
    assert.equal((await u.c.get("/api/admin/stats", { token: u.token })).status, 403);
    assert.equal((await u.c.get("/api/admin/users", { token: u.token })).status, 403);

    await registerUser("rbac-staff@example.com");
    const staff = await makeRole("rbac-staff@example.com", "staff");
    assert.equal((await staff.c.get("/api/admin/stats", { token: staff.token })).status, 200);
    assert.equal((await staff.c.get("/api/admin/contacts", { token: staff.token })).status, 200);
    assert.equal((await staff.c.get("/api/admin/users", { token: staff.token })).status, 403);

    await registerUser("rbac-admin@example.com");
    const admin = await makeRole("rbac-admin@example.com", "admin");
    assert.equal((await admin.c.get("/api/admin/users", { token: admin.token })).status, 200);
  });

  it("role changes take effect immediately (old token revoked) and admins cannot edit themselves", async () => {
    await registerUser("rbac-admin2@example.com");
    const admin = await makeRole("rbac-admin2@example.com", "admin");
    const target = await registerUser("rbac-target@example.com");

    const self = await admin.c.patch(`/api/admin/users/${admin.id}`, { role: "user" }, { token: admin.token });
    assert.equal(self.status, 400);

    const promote = await admin.c.patch(`/api/admin/users/${target.id}`, { role: "admin" }, { token: admin.token });
    assert.equal(promote.status, 200);
    assert.equal(promote.body.data.role, "admin");
    // target's pre-promotion token was revoked; they must sign in again
    assert.equal((await target.c.get("/api/auth/me", { token: target.token })).status, 401);

    const bad = await admin.c.patch(`/api/admin/users/${target.id}`, { role: "superuser" }, { token: admin.token });
    assert.equal(bad.status, 400);
    const badId = await admin.c.patch(`/api/admin/users/not-a-uuid`, { role: "user" }, { token: admin.token });
    assert.equal(badId.status, 400);
  });

  it("deactivating a user kills their session at once", async () => {
    await registerUser("rbac-admin3@example.com");
    const admin = await makeRole("rbac-admin3@example.com", "admin");
    const victim = await registerUser("rbac-victim@example.com");
    const r = await admin.c.patch(`/api/admin/users/${victim.id}`, { isActive: false }, { token: admin.token });
    assert.equal(r.status, 200);
    assert.equal((await victim.c.get("/api/auth/me", { token: victim.token })).status, 401);
    assert.equal((await victim.c.post("/api/auth/refresh", {}, { headers: h.CSRF })).status, 401);
  });
});

describe("security headers & misc", () => {
  it("sets hardening headers, hides x-powered-by, enforces CORS allowlist", async () => {
    const res = await fetch(`${base}/api/health`, { headers: { Origin: "http://localhost:3000" } });
    assert.equal(res.headers.get("x-powered-by"), null);
    assert.equal(res.headers.get("x-content-type-options"), "nosniff");
    assert.ok(res.headers.get("content-security-policy"));
    assert.ok(res.headers.get("x-request-id"));

    const ok = await fetch(`${base}/api/team`, { headers: { Origin: "http://localhost:3000" } });
    assert.equal(ok.headers.get("access-control-allow-origin"), "http://localhost:3000");
    assert.equal(ok.headers.get("access-control-allow-credentials"), "true");

    const evil = await fetch(`${base}/api/team`, { headers: { Origin: "https://evil.example" } });
    assert.equal(evil.status, 403);
    assert.equal(evil.headers.get("access-control-allow-origin"), null);
  });

  it("keeps the original public endpoints and readiness check working", async () => {
    const c = api();
    assert.equal((await c.get("/api/team")).status, 200);
    assert.ok(Array.isArray((await c.get("/api/products")).body.data));
    assert.ok(Array.isArray((await c.get("/api/services")).body.data));
    const ready = await c.get("/api/health/ready");
    assert.equal(ready.status, 200);
    assert.equal((await c.get("/api/nope")).status, 404);
  });
});
