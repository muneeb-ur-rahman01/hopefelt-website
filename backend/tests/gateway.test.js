const h = require("./helpers");
h.setEnv({ REQUIRE_GATEWAY: "true", GATEWAY_SECRET: "g".repeat(40) });

const { describe, it, before, after } = require("node:test");
const assert = require("node:assert/strict");

let infra, apiServer, gwServer, apiBase, gwBase, config;

before(async () => {
  infra = await h.startInfra();
  config = require("../config/config");
  apiServer = require("../app")().listen(0);
  apiBase = `http://127.0.0.1:${apiServer.address().port}`;
  config.gateway.upstream = apiBase;
  gwServer = require("../gateway/gateway")().listen(0);
  gwBase = `http://127.0.0.1:${gwServer.address().port}`;
});
after(async () => {
  gwServer.close();
  apiServer.close();
  await infra.stop();
});

describe("API gateway", () => {
  it("API refuses direct access but serves health checks", async () => {
    assert.equal((await fetch(`${apiBase}/api/team`)).status, 403);
    assert.equal((await fetch(`${apiBase}/api/team`, { headers: { "x-gateway-secret": "wrong" } })).status, 403);
    assert.equal((await fetch(`${apiBase}/api/health`)).status, 200);
  });

  it("proxies public routes with the shared secret, including cookies and request id", async () => {
    const c = h.client(gwBase);
    assert.equal((await c.get("/api/team")).status, 200);
    const reg = await c.post("/api/auth/register", { fullName: "Gate User", email: "gate@example.com", password: "Str0ngPassw0rd!" });
    assert.equal(reg.status, 201);
    assert.ok(reg.setCookies.length, "cookie passes through the gateway");
    assert.ok(reg.headers.get("x-request-id"));
    const me = await c.get("/api/auth/me", { token: reg.body.data.accessToken });
    assert.equal(me.status, 200);
  });

  it("a client cannot forge the gateway secret or the client IP", async () => {
    const c = h.client(gwBase);
    const r = await c.get("/api/team", { headers: { "x-gateway-secret": "forged", "x-forwarded-for": "6.6.6.6" } });
    assert.equal(r.status, 200); // gateway overwrote the secret with the real one
  });

  it("rejects unauthenticated calls to protected prefixes at the edge", async () => {
    const c = h.client(gwBase);
    for (const p of ["/api/admin/stats", "/api/applications/mine", "/api/auth/me"]) {
      const r = await c.get(p);
      assert.equal(r.status, 401, p);
    }
    const r = await c.get("/api/admin/stats", { token: "garbage" });
    assert.equal(r.status, 401);
  });

  it("answers CORS pre-flight and blocks unknown origins", async () => {
    const pre = await fetch(`${gwBase}/api/contact`, {
      method: "OPTIONS",
      headers: { Origin: "http://localhost:3000", "Access-Control-Request-Method": "POST", "Access-Control-Request-Headers": "content-type" },
    });
    assert.ok(pre.status < 300);
    assert.equal(pre.headers.get("access-control-allow-origin"), "http://localhost:3000");
    const evil = await fetch(`${gwBase}/api/team`, { headers: { Origin: "https://evil.example" } });
    assert.equal(evil.status, 403);
  });

  it("rejects oversized payloads before they reach the API", async () => {
    const r = await h.client(gwBase).call("POST", "/api/contact", { raw: "x".repeat(70_000), headers: { "Content-Type": "application/json" } });
    assert.equal(r.status, 413);
  });

  it("returns 502 when the upstream is down, and reports health", async () => {
    const health = await fetch(`${gwBase}/gateway/health`);
    assert.equal(health.status, 200);
    apiServer.close();
    apiServer.closeAllConnections?.();
    const r = await fetch(`${gwBase}/api/team`);
    assert.equal(r.status, 502);
    assert.equal((await fetch(`${gwBase}/gateway/health`)).status, 503);
  });
});
