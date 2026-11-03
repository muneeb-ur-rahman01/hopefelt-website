const { z, clean, text, optionalText, email, phone, consent, honeypot, pagination } = require("./common");
const { opportunities } = require("../config/opportunities");

const SLUGS = opportunities.map((o) => o.slug);
const STATUSES = ["pending", "under_review", "accepted", "rejected", "withdrawn"];

const slugParam = z.object({ slug: z.enum(SLUGS, { error: "Unknown opportunity." }) });

const DETAIL_KEY = /^[a-zA-Z][a-zA-Z0-9_]{0,39}$/;
const MAX_DETAILS_BYTES = 8 * 1024;

// Free-form, opportunity-specific answers (e.g. institution, skills, areaOfInterest).
// Flat structure only: string | number | boolean | string[]. Bounded size and keys.
const details = z
  .record(z.string(), z.unknown())
  .default({})
  .transform((obj, ctx) => {
    const out = {};
    const keys = Object.keys(obj);
    if (keys.length > 30) {
      ctx.addIssue({ code: "custom", message: "Too many additional fields." });
      return z.NEVER;
    }
    for (const key of keys) {
      const v = obj[key];
      if (!DETAIL_KEY.test(key)) {
        ctx.addIssue({ code: "custom", message: `Invalid field name: ${key.slice(0, 40)}` });
        return z.NEVER;
      }
      if (typeof v === "string") {
        const s = clean(v);
        if (s.length > 1000) {
          ctx.addIssue({ code: "custom", message: `${key} is too long (max 1000 characters).` });
          return z.NEVER;
        }
        if (s) out[key] = s;
      } else if (typeof v === "number" && Number.isFinite(v)) out[key] = v;
      else if (typeof v === "boolean") out[key] = v;
      else if (Array.isArray(v) && v.length <= 20 && v.every((x) => typeof x === "string" && x.length <= 200)) {
        out[key] = v.map(clean).filter(Boolean);
      } else {
        ctx.addIssue({ code: "custom", message: `${key} has an unsupported value.` });
        return z.NEVER;
      }
    }
    if (Buffer.byteLength(JSON.stringify(out)) > MAX_DETAILS_BYTES) {
      ctx.addIssue({ code: "custom", message: "Additional details are too large." });
      return z.NEVER;
    }
    return out;
  });

const submit = z.object({
  fullName: text("Full name", { min: 2, max: 100 }),
  email,
  phone,
  city: optionalText("City", { max: 100 }),
  country: optionalText("Country", { max: 100 }),
  organisation: optionalText("Organisation", { max: 150 }),
  message: text("Message", { min: 20, max: 3000, multiline: true }),
  availability: optionalText("Availability", { max: 200 }),
  details,
  consent,
  website: honeypot,
});

const listQuery = z.object({
  ...pagination,
  status: z.enum(STATUSES).optional(),
  slug: z.enum(SLUGS).optional(),
});

const updateStatus = z
  .object({
    status: z.enum(STATUSES).optional(),
    adminNotes: optionalText("Admin notes", { max: 2000, multiline: true }),
  })
  .strict()
  .refine((v) => v.status !== undefined || v.adminNotes !== undefined, {
    message: "Provide a status or admin notes.",
  });

module.exports = { slugParam, submit, listQuery, updateStatus, STATUSES, SLUGS };
