# Hopefelt Foundation — Backend

Node.js + Express API with PostgreSQL (Supabase-compatible), Redis, JWT auth/RBAC, and an API Gateway.

```
Next.js (:3000) ──► API Gateway (:8080) ──► API (:5000) ──► PostgreSQL
                         │                      │
                         └──────── Redis ───────┘
              (rate limits, refresh tokens, token revocation, caches)
```

## Quick start

```bash
docker compose up -d                 # PostgreSQL + Redis (or use your own / Supabase)
cp .env.example .env                 # then fill JWT_ACCESS_SECRET, JWT_REFRESH_SECRET, GATEWAY_SECRET
npm install
npm run migrate                      # creates tables
ADMIN_EMAIL=you@example.org ADMIN_PASSWORD='Str0ng-Pass-123' npm run seed:admin
npm run dev:all                      # API :5000 + Gateway :8080
npm test                             # 46 tests (needs `redis-server` on PATH; DB is in-memory)
```

Generate secrets: `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"` (use a different value for each).

## Folder layout

```
server.js            API bootstrap (checks DB + Redis, graceful shutdown)
app.js               Express app assembly (middleware order lives here)
gateway/             API Gateway (separate process)
config/              env config, DB pool, Redis client, opportunities & enquiry types
routes/              URL -> middleware chain -> controller
controllers/         thin HTTP layer (no SQL, no business rules)
services/            business logic + SQL (auth, tokens, contact, applications, admin, cache)
middleware/          authenticate, authorize, rateLimiter, validate, security, errorHandler
validators/          zod schemas (the single place input rules live)
db/schema.sql        tables, indexes, constraints
scripts/             migrate, seedAdmin
tests/               integration tests (real Redis + real Postgres engine)
```

## Endpoints

Base URL (frontend): `http://localhost:8080/api`

| Method | Path | Access | Notes |
|---|---|---|---|
| POST | `/auth/register` | public | always creates role `user` |
| POST | `/auth/login` | public | lockout after 5 failures |
| POST | `/auth/refresh` | cookie + CSRF header | rotates refresh token |
| POST | `/auth/logout` | cookie + CSRF header | revokes access + refresh |
| POST | `/auth/logout-all` | user | all devices |
| GET/PATCH | `/auth/me` | user | profile |
| POST | `/auth/change-password` | user | signs out everywhere |
| POST | `/contact` | public (token optional) | Contact Us form |
| GET | `/get-involved/opportunities` | public | the 20 opportunities |
| POST | `/get-involved/:slug` | public (token optional) | e.g. `/get-involved/volunteer` |
| GET | `/applications/mine` | user | only their own |
| POST | `/applications/:id/withdraw` | user | only their own |
| GET | `/admin/stats` | staff, admin | |
| GET/PATCH | `/admin/contacts[/:id]` | staff, admin | filter: `status`, `enquiryType`, `q`, `page`, `limit` |
| GET/PATCH | `/admin/applications[/:id]` | staff, admin | filter: `status`, `slug`, `q` |
| GET/PATCH | `/admin/users[/:id]` | admin | role / isActive |
| GET | `/team`, `/products`, `/services` | public | unchanged from before |
| GET | `/health`, `/health/ready` | public | liveness / readiness |

Responses: `{ success, message?, data?, meta? }`; errors: `{ success:false, message, code?, errors?:[{field,message}], requestId }`.

## Security measures

| Area | What is implemented |
|---|---|
| Validation | zod schemas on every body/query/param; unknown keys stripped (strict on auth); HTML tags + control chars removed; length limits; enum-checked `enquiryType` / `slug`; flat, size-bounded `details` JSON; UUID params |
| SQL injection | only parameterised queries; `LIKE` wildcards escaped in search |
| Passwords | bcrypt (12 rounds), policy (10+ chars, upper/lower/digit, ≤72 bytes), constant-time-ish login (dummy hash), generic error messages |
| JWT | HS256 pinned, separate secrets for access/refresh, `iss`/`aud` checked, 15 min access / 7 day refresh, `jti` on every token |
| Sessions | refresh token only in an `httpOnly` cookie (path `/api/auth`); rotation on every refresh; **reuse detection** revokes all sessions; logout blacklists the access token; password/role/disable changes invalidate old tokens immediately |
| Authorization | `authenticate` → `authorize(roles)`; roles `user < staff < admin`; role never accepted from clients; admins cannot edit themselves; applicants can only see/withdraw their own rows (checked in SQL) |
| Rate limiting | Redis, atomic Lua, shared across instances: global, login (per IP **and** per e-mail), register, refresh, contact (per IP **and** per e-mail), applications, admin (per user). Falls back to in-memory if Redis fails |
| Brute force | account lockout counter in Redis |
| Bots | honeypot field `website` on both forms |
| CSRF | JSON-only content type, CORS allowlist, custom header + Origin check on cookie endpoints, SameSite cookie |
| Gateway | only entry point; CORS, rate limit, size cap, edge JWT check on protected prefixes, shared secret + real client IP forwarded; API rejects direct calls (`REQUIRE_GATEWAY=true`) |
| Headers / misc | helmet (CSP `default-src 'none'`, HSTS in prod), hpp, `x-powered-by` off, 20 KB body limit, request ids, no stack traces to clients, RLS enabled on tables |

## Production checklist

- `NODE_ENV=production` (the server refuses to start without strong secrets).
- `REQUIRE_GATEWAY=true` and do **not** expose port 5000 publicly — only the gateway.
- Supabase: set `DATABASE_URL` to the connection string (use the pooler URL), `DATABASE_SSL=true`.
- Frontend and API on different domains: `COOKIE_SAMESITE=none`, `COOKIE_SECURE=true`, set `CORS_ORIGIN` to the exact site URL. Same site (e.g. `www.` and `api.` of one domain): keep `lax` and set `COOKIE_DOMAIN`.
- Behind a cloud load balancer in front of the gateway: `GATEWAY_TRUST_PROXY=1`.
- Use TLS everywhere; run Redis with a password / private network.

## Adding things later

- **New opportunity**: add `{ slug, title }` to `config/opportunities.js` (use `requiredDetails` for mandatory extra fields).
- **New form**: validator in `validators/`, service in `services/`, controller, route, table in `db/schema.sql`.
- **Not included (by design, ask if needed)**: e-mail verification / password reset / notification e-mails (needs an SMTP provider), CV/file uploads.
