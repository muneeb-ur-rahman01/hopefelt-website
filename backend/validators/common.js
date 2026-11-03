const { z } = require("zod");

// Strips control characters + HTML tags, collapses nothing else. Output is
// plain text; the frontend (React) escapes it on render as a second layer.
const CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const TAGS = /<\/?[a-zA-Z!][^>]*>/g;
const clean = (s) => s.normalize("NFC").replace(CONTROL, "").replace(TAGS, "").trim();

const text = (label, { min = 1, max = 200, multiline = false } = {}) =>
  z
    .string({ error: (iss) => (iss.input === undefined ? `${label} is required.` : `${label} must be text.`) })
    .transform((s) => (multiline ? clean(s) : clean(s).replace(/\s+/g, " ")))
    .pipe(
      z
        .string()
        .min(min, min === 1 ? `${label} is required.` : `${label} must be at least ${min} characters.`)
        .max(max, `${label} must be at most ${max} characters.`)
    );

// Optional text: missing / empty string -> undefined.
const optionalText = (label, opts = {}) =>
  z.preprocess(
    (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
    text(label, { ...opts, min: 1 }).optional()
  );

const email = z
  .string({ error: "Email is required." })
  .trim()
  .toLowerCase()
  .min(1, "Email is required.")
  .max(254, "Email is too long.")
  .email("Email is not valid.");

const PHONE = /^\+?[0-9][0-9\s\-().]{5,22}[0-9]$/;
const phone = z.preprocess(
  (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
  z.string().trim().regex(PHONE, "Phone number is not valid.").optional()
);

// bcrypt only uses the first 72 bytes, so cap there to avoid silent truncation.
const password = z
  .string({ error: "Password is required." })
  .min(10, "Password must be at least 10 characters.")
  .refine((p) => Buffer.byteLength(p, "utf8") <= 72, "Password is too long (max 72 bytes).")
  .refine((p) => /[a-z]/.test(p) && /[A-Z]/.test(p) && /\d/.test(p), "Password must include upper-case, lower-case and a number.");

const consent = z
  .boolean({ error: "Consent is required." })
  .refine((v) => v === true, "You must agree before submitting.");

// Hidden "website" field: humans leave it empty, bots fill it in.
const honeypot = z.string().max(500).optional();

const uuid = z.string().uuid("Invalid id.");

const pagination = {
  page: z.coerce.number().int().min(1).max(10_000).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  q: z.string().trim().max(100).optional(),
};

module.exports = { z, clean, text, optionalText, email, phone, password, consent, honeypot, uuid, pagination };
