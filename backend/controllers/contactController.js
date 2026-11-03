const contactService = require("../services/contactService");
const asyncHandler = require("../utils/asyncHandler");
const logger = require("../utils/logger");
const { ok, created, paginated } = require("../utils/response");

const SUCCESS = "Thanks for reaching out — we'll get back to you shortly.";

// POST /api/contact (public)
const submitContact = asyncHandler(async (req, res) => {
  // Honeypot: bots fill the hidden field. Pretend it worked, store nothing.
  if (req.body.website) {
    logger.info("Contact honeypot triggered", { requestId: req.id, ip: req.ip });
    return ok(res, undefined, SUCCESS);
  }
  const { website, ...data } = req.body;
  const result = await contactService.create(data, {
    userId: req.user?.id,
    ip: req.ip,
    userAgent: req.get("user-agent"),
  });
  created(res, { id: result.id }, SUCCESS);
});

// ---- staff / admin ----
const listContacts = asyncHandler(async (req, res) => {
  const { items, total } = await contactService.list(req.validatedQuery);
  paginated(res, items, { page: req.validatedQuery.page, limit: req.validatedQuery.limit, total });
});

const getContact = asyncHandler(async (req, res) => {
  ok(res, await contactService.getById(req.params.id));
});

const updateContact = asyncHandler(async (req, res) => {
  ok(res, await contactService.update(req.params.id, req.body, req.user.id), "Enquiry updated.");
});

module.exports = { submitContact, listContacts, getContact, updateContact };
