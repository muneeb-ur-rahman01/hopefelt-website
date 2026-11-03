// Test harness: real redis-server (child process) + real PostgreSQL engine in memory (PGlite).
// Must be required BEFORE any app module so the env overrides are picked up.
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const net = require("net");

const REDIS_PORT = 6390;

function setEnv(overrides = {}) {
  Object.assign(process.env, {
    NODE_ENV: "test",
    REDIS_URL: `redis://127.0.0.1:${REDIS_PORT}`,
    REDIS_PREFIX: "t:",
    RL_GLOBAL_MAX: "100000",
    RL_LOGIN_MAX: "100000",
    RL_REGISTER_MAX: "100000",
    RL_REFRESH_MAX: "100000",
    RL_CONTACT_MAX: "100000",
    RL_CONTACT_EMAIL_MAX: "100000",
    RL_APPLY_MAX: "100000",
    RL_ADMIN_MAX: "100000",
    ...overrides,
  });
}

function waitPort(port, timeoutMs = 5000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tryOnce = () => {
      const s = net.connect(port, "127.0.0.1");
      s.once("connect", () => { s.destroy(); resolve(); });
      s.once("error", () => {
        s.destroy();
        if (Date.now() - start > timeoutMs) reject(new Error("redis did not start"));
        else setTimeout(tryOnce, 50);
      });
    };
    tryOnce();
  });
}

async function startInfra() {
  const redis = spawn("redis-server", ["--port", String(REDIS_PORT), "--save", "", "--appendonly", "no"], { stdio: "ignore" });
  await waitPort(REDIS_PORT);

  const { PGlite } = require("@electric-sql/pglite");
  const pg = new PGlite();
  await pg.exec(fs.readFileSync(path.join(__dirname, "../db/schema.sql"), "utf8"));
  require("../config/db").setPool({ query: (t, p) => pg.query(t, p), end: async () => {} });

  const redisModule = require("../config/redis");
  const client = redisModule.getRedis();
  await new Promise((r) => (client.status === "ready" ? r() : client.once("ready", r)));

  return {
    pg,
    redis: client,
    async stop() {
      await redisModule.close();
      redis.kill();
      await pg.close();
    },
  };
}

// Minimal HTTP client with a cookie jar (keeps the refresh cookie between calls).
function client(baseUrl) {
  let cookie = "";
  async function call(method, url, { body, token, headers = {}, raw } = {}) {
    const h = { ...headers };
    if (body !== undefined && !h["Content-Type"]) h["Content-Type"] = "application/json";
    if (token) h.Authorization = `Bearer ${token}`;
    if (cookie) h.Cookie = cookie;
    const res = await fetch(baseUrl + url, { method, headers: h, body: raw ?? (body === undefined ? undefined : JSON.stringify(body)) });
    const setCookies = res.headers.getSetCookie?.() || [];
    for (const c of setCookies) {
      const [pair] = c.split(";");
      const [name, value] = pair.split("=");
      if (/Expires=Thu, 01 Jan 1970/i.test(c) || value === "") cookie = cookie.split("; ").filter((x) => !x.startsWith(name + "=")).join("; ");
      else cookie = [...cookie.split("; ").filter((x) => x && !x.startsWith(name + "=")), pair].join("; ");
    }
    let json = null;
    try { json = await res.json(); } catch { /* no body */ }
    return { status: res.status, body: json, headers: res.headers, setCookies };
  }
  return {
    get: (u, o) => call("GET", u, o),
    post: (u, body, o) => call("POST", u, { ...o, body }),
    patch: (u, body, o) => call("PATCH", u, { ...o, body }),
    call,
    getCookie: () => cookie,
    setCookie: (c) => { cookie = c; },
    clearCookies: () => { cookie = ""; },
  };
}

const CSRF = { "X-Requested-With": "hopefelt-web" };

module.exports = { setEnv, startInfra, client, CSRF };
