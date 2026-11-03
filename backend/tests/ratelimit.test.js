const h = require("./helpers");
h.setEnv({ RL_CONTACT_MAX: "3", RL_CONTACT_EMAIL_MAX: "2", RL_LOGIN_MAX: "4", RL_GLOBAL_MAX: "25" });

const { describe, it, before, after } = require("node:test");
const assert = require("node:assert/strict");

let infra, server, base;
const api = () => h.client(base);

before(async () => {
  infra = await h.startInfra();
  server = require("../app")().listen(0);
  base = `http://127.0.0.1:${server.address().port}`;
});
after(async () => {
  server.close();
  await infra.stop();
});

const body = (email) => ({
  fullName: "Rate Tester", email, enquiryType: "General Enquiries",
  subject: "Hello there", message: "Just testing the rate limiter here.", consent: true,
});

describe("Redis rate limiting", () => {
  it("per-email limit on /contact returns 429 with Retry-After", async () => {
    const c = api();
    assert.equal((await c.post("/api/contact", body("same@example.com"))).status, 201);
    assert.equal((await c.post("/api/contact", body("same@example.com"))).status, 201);
    const r = await c.post("/api/contact", body("same@example.com"));
    assert.equal(r.status, 429);
    assert.equal(r.body.code, "RATE_LIMITED");
    assert.ok(Number(r.headers.get("retry-after")) > 0);
  });

  it("per-IP limit on /contact", async () => {
    // IP counter already at 3 from the previous test; a different e-mail is still blocked
    const r = await api().post("/api/contact", body("another@example.com"));
    assert.equal(r.status, 429);
    assert.equal(r.headers.get("ratelimit-remaining"), "0");
  });

  it("limits login attempts per IP", async () => {
    const c = api();
    const statuses = [];
    for (let i = 0; i < 6; i++) statuses.push((await c.post("/api/auth/login", { email: `u${i}@example.com`, password: "Whatever123" })).status);
    assert.deepEqual(statuses.slice(0, 4), [401, 401, 401, 401]);
    assert.deepEqual(statuses.slice(4), [429, 429]);
  });

  it("counters live in Redis (shared across instances) and expire", async () => {
    const keys = await infra.redis.keys("t:rl:*");
    assert.ok(keys.length >= 3);
    const ttl = await infra.redis.pttl(keys[0].replace(/^t:/, ""));
    assert.ok(ttl > 0);
  });

  it("global limiter eventually throttles everything", async () => {
    const c = api();
    let last;
    for (let i = 0; i < 30; i++) last = await c.get("/api/team");
    assert.equal(last.status, 429);
  });
});
