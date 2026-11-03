const { z, text, optionalText, email, phone, consent, honeypot, pagination } = require("./common");
const enquiryTypes = require("../config/enquiryTypes");

const submit = z.object({
  fullName: text("Full name", { min: 2, max: 100 }),
  email,
  phone,
  organisation: optionalText("Organisation", { max: 150 }),
  enquiryType: z.enum(enquiryTypes, { error: "Please select a valid enquiry type." }),
  subject: text("Subject", { min: 3, max: 150 }),
  message: text("Message", { min: 10, max: 3000, multiline: true }),
  responseMethod: z.enum(["email", "phone", "whatsapp"]).default("email"),
  // Contact page checkbox defaults to true; required for GDPR-style consent.
  consent,
  website: honeypot,
});

const STATUSES = ["new", "in_progress", "resolved", "spam"];

const listQuery = z.object({
  ...pagination,
  status: z.enum(STATUSES).optional(),
  enquiryType: z.enum(enquiryTypes).optional(),
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

module.exports = { submit, listQuery, updateStatus, STATUSES };
