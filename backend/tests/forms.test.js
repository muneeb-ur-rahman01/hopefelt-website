const h = require("./helpers");
h.setEnv();

const { describe, it, before, after } = require("node:test");
const assert = require("node:assert/strict");

let infra, server, base, db;
const PASSWORD = "Str0ngPassw0rd!";
const api = () => h.client(base);

before(async () => {
  infra = await h.startInfra();
  db = require("../config/db");
  server = require("../app")().listen(0);
  base = `http://127.0.0.1:${server.address().port}`;
});
after(async () => {
  server.close();
  await infra.stop();
});

const validContact = () => ({
  fullName: "Ayesha Khan",
  email: "ayesha@example.com",
  phone: "+92 371 0137556",
  organisation: "Health Org",
  enquiryType: "Partnership Enquiries",
  subject: "Partnership idea",
  message: "We would like to discuss a collaboration on community health.",
  responseMethod: "whatsapp",
  consent: true,
});

async function login(email, role) {
  const c = api();
  await c.post("/api/auth/register", { fullName: "Staff Person", email, password: PASSWORD });
  if (role) await db.query("UPDATE users SET role = $2 WHERE email = $1", [email, role]);
  const r = await c.post("/api/auth/login", { email, password: PASSWORD });
  return { c, token: r.body.data.accessToken, id: r.body.data.user.id };
}

describe("POST /api/contact", () => {
  it("stores a valid enquiry with all frontend fields", async () => {
    const r = await api().post("/api/contact", validContact());
    assert.equal(r.status, 201);
    assert.equal(r.body.success, true);
    assert.ok(r.body.data.id);
    const { rows } = await db.query("SELECT * FROM contact_messages WHERE id = $1", [r.body.data.id]);
    assert.equal(rows[0].organisation, "Health Org");
    assert.equal(rows[0].response_method, "whatsapp");
    assert.equal(rows[0].enquiry_type, "Partnership Enquiries");
    assert.ok(rows[0].ip);
  });

  it("validates every field and reports them all", async () => {
    const r = await api().post("/api/contact", { fullName: "", email: "bad", enquiryType: "Hack", subject: "", message: "short", consent: false });
    assert.equal(r.status, 400);
    const fields = r.body.errors.map((e) => e.field);
    for (const f of ["fullName", "email", "enquiryType", "subject", "message", "consent"]) assert.ok(fields.includes(f), `${f} flagged`);
  });

  it("accepts empty optional fields exactly as the form sends them", async () => {
    const r = await api().post("/api/contact", { ...validContact(), email: "opt@example.com", phone: "", organisation: "" });
    assert.equal(r.status, 201);
  });

  it("rejects bad phone numbers and over-long input", async () => {
    let r = await api().post("/api/contact", { ...validContact(), phone: "abc" });
    assert.equal(r.status, 400);
    r = await api().post("/api/contact", { ...validContact(), message: "x".repeat(3001) });
    assert.equal(r.status, 400);
  });

  it("strips HTML tags and control characters; SQL-ish input is stored inertly", async () => {
    const r = await api().post("/api/contact", {
      ...validContact(), email: "xss@example.com",
      subject: "<script>alert(1)</script>Hello there", message: "Robert'); DROP TABLE users;-- \u0000 plus <b>bold</b> text",
    });
    assert.equal(r.status, 201);
    const { rows } = await db.query("SELECT subject, message FROM contact_messages WHERE id = $1", [r.body.data.id]);
    assert.ok(!rows[0].subject.includes("<script>"));
    assert.ok(!rows[0].message.includes("<b>") && !rows[0].message.includes("\u0000"));
    assert.equal((await db.query("SELECT COUNT(*)::int AS c FROM users")).rows[0].c >= 0, true, "users table still exists");
  });

  it("silently drops honeypot submissions without storing them", async () => {
    const before = (await db.query("SELECT COUNT(*)::int AS c FROM contact_messages")).rows[0].c;
    const r = await api().post("/api/contact", { ...validContact(), email: "bot@example.com", website: "http://spam.example" });
    assert.equal(r.status, 200);
    assert.equal((await db.query("SELECT COUNT(*)::int AS c FROM contact_messages")).rows[0].c, before);
  });

  it("rejects oversized bodies", async () => {
    const r = await api().post("/api/contact", { ...validContact(), message: "x".repeat(40_000) });
    assert.equal(r.status, 413);
  });
});

describe("Get Involved applications", () => {
  const app = (extra = {}) => ({
    fullName: "Bilal Ahmed",
    email: "bilal@example.com",
    phone: "03001234567",
    city: "Karachi",
    country: "Pakistan",
    message: "I want to volunteer because I care about public health in my city.",
    availability: "Weekends",
    details: { skills: ["first aid", "photography"], hoursPerWeek: 6, hasExperience: true },
    consent: true,
    ...extra,
  });

  it("lists opportunities (all 20 frontend slugs)", async () => {
    const r = await api().get("/api/get-involved/opportunities");
    assert.equal(r.status, 200);
    assert.equal(r.body.data.length, 20);
    assert.ok(r.body.data.find((o) => o.slug === "campus-representative"));
  });

  it("accepts an application, stores details as JSON, blocks duplicates", async () => {
    const r = await api().post("/api/get-involved/volunteer", app());
    assert.equal(r.status, 201);
    const { rows } = await db.query("SELECT * FROM applications WHERE id = $1", [r.body.data.id]);
    assert.equal(rows[0].opportunity_title, "Official Volunteer");
    assert.deepEqual(rows[0].details.skills, ["first aid", "photography"]);
    const dupe = await api().post("/api/get-involved/volunteer", app({ email: "BILAL@example.com" }));
    assert.equal(dupe.status, 409);
    assert.equal(dupe.body.code, "DUPLICATE_APPLICATION");
    // different opportunity is fine
    assert.equal((await api().post("/api/get-involved/member", app())).status, 201);
  });

  it("404/400 on unknown slug, 400 on invalid fields and hostile `details`", async () => {
    assert.equal((await api().post("/api/get-involved/hacker", app({ email: "a1@example.com" }))).status, 400);
    assert.equal((await api().post("/api/get-involved/volunteer", app({ email: "a2@example.com", message: "short" }))).status, 400);
    assert.equal((await api().post("/api/get-involved/volunteer", app({ email: "a3@example.com", details: { nested: { a: 1 } } }))).status, 400);
    assert.equal((await api().post("/api/get-involved/volunteer", app({ email: "a4@example.com", details: { "bad key!": "x" } }))).status, 400);
    const proto = await api().call("POST", "/api/get-involved/volunteer", { headers: { "Content-Type": "application/json" }, raw: JSON.stringify({ ...app({ email: "a5@example.com" }), details: JSON.parse('{"__proto__":{"admin":true}}') }) });
    // zod drops the dangerous key; the request is stored without it and nothing is polluted
    assert.equal(proto.status, 201);
    const { rows } = await db.query("SELECT details FROM applications WHERE id = $1", [proto.body.data.id]);
    assert.deepEqual(rows[0].details, {});
    assert.equal(({}).admin, undefined);
    assert.equal(Object.prototype.admin, undefined);
  });

  it("enforces per-opportunity required details", async () => {
    const missing = await api().post("/api/get-involved/campus-representative", app({ email: "c1@example.com", details: {} }));
    assert.equal(missing.status, 400);
    const ok = await api().post("/api/get-involved/campus-representative", app({ email: "c1@example.com", details: { institution: "NED University" } }));
    assert.equal(ok.status, 201);
  });

  it("links the application to the signed-in user, who can list and withdraw only their own", async () => {
    const u1 = await login("owner@example.com");
    const u2 = await login("other@example.com");
    const sub = await u1.c.post("/api/get-involved/researcher", app({ email: "someone-else@example.com" }), { token: u1.token });
    assert.equal(sub.status, 201);

    const mine = await u1.c.get("/api/applications/mine", { token: u1.token });
    assert.equal(mine.body.data.length, 1);
    assert.equal(mine.body.data[0].adminNotes, undefined, "internal notes are hidden from applicants");
    assert.equal((await u2.c.get("/api/applications/mine", { token: u2.token })).body.data.length, 0);

    // IDOR check: another user cannot withdraw it
    assert.equal((await u2.c.post(`/api/applications/${sub.body.data.id}/withdraw`, {}, { token: u2.token })).status, 404);
    assert.equal((await u1.c.post(`/api/applications/${sub.body.data.id}/withdraw`, {}, { token: u1.token })).status, 200);
    assert.equal((await api().get("/api/applications/mine")).status, 401);
  });
});

describe("staff/admin management endpoints", () => {
  it("lists, filters, paginates, reads and updates enquiries & applications", async () => {
    const staff = await login("staff1@example.com", "staff");
    const seed = validContact();
    await api().post("/api/contact", { ...seed, email: "list1@example.com", enquiryType: "Media Enquiries", subject: "Press request" });
    await api().post("/api/contact", { ...seed, email: "list2@example.com", enquiryType: "Donation Enquiries", subject: "Donation 100%_x" });

    const all = await staff.c.get("/api/admin/contacts?limit=2&page=1", { token: staff.token });
    assert.equal(all.status, 200);
    assert.equal(all.body.data.length, 2);
    assert.ok(all.body.meta.total >= 2);

    const filtered = await staff.c.get("/api/admin/contacts?enquiryType=Media%20Enquiries", { token: staff.token });
    assert.ok(filtered.body.data.every((x) => x.enquiryType === "Media Enquiries"));

    // LIKE wildcards are escaped: searching for "%" must not match everything
    const pct = await staff.c.get("/api/admin/contacts?q=%25_x", { token: staff.token });
    assert.equal(pct.body.data.length, 1);

    const id = filtered.body.data[0].id;
    assert.equal((await staff.c.get(`/api/admin/contacts/${id}`, { token: staff.token })).status, 200);
    const upd = await staff.c.patch(`/api/admin/contacts/${id}`, { status: "resolved", adminNotes: "Replied by email" }, { token: staff.token });
    assert.equal(upd.status, 200);
    assert.equal(upd.body.data.status, "resolved");
    assert.equal(upd.body.data.handledBy, staff.id);
    assert.equal((await staff.c.patch(`/api/admin/contacts/${id}`, { status: "deleted" }, { token: staff.token })).status, 400);
    assert.equal((await staff.c.patch(`/api/admin/contacts/${id}`, {}, { token: staff.token })).status, 400);
    assert.equal((await staff.c.get("/api/admin/contacts?limit=5000", { token: staff.token })).status, 400);
    assert.equal((await staff.c.get("/api/admin/contacts/00000000-0000-0000-0000-000000000000", { token: staff.token })).status, 404);

    const sub = await api().post("/api/get-involved/donor", {
      fullName: "Donor Person", email: "donor@example.com", message: "I would like to contribute financially to the foundation.", consent: true,
    });
    const appUpd = await staff.c.patch(`/api/admin/applications/${sub.body.data.id}`, { status: "accepted" }, { token: staff.token });
    assert.equal(appUpd.body.data.status, "accepted");
    const apps = await staff.c.get("/api/admin/applications?status=accepted&slug=donor", { token: staff.token });
    assert.equal(apps.body.data.length, 1);

    const stats = await staff.c.get("/api/admin/stats", { token: staff.token });
    assert.ok(stats.body.data.contacts.resolved >= 1);
  });
});
