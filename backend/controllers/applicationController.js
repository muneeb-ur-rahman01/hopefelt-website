const applicationService = require("../services/applicationService");
const authService = require("../services/authService");
const asyncHandler = require("../utils/asyncHandler");
const logger = require("../utils/logger");
const { opportunities } = require("../config/opportunities");
const { ok, created, paginated } = require("../utils/response");

const SUCCESS = "Thank you! Your application has been received.";

// GET /api/get-involved/opportunities (public)
const listOpportunities = (req, res) => {
  res.set("Cache-Control", "public, max-age=300");

  ok(
    res,
    opportunities.map(({ slug, title }) => ({
      slug,
      title,
    }))
  );
};

// POST /api/applications/:slug (public)
const apply = asyncHandler(async (req, res) => {
  // Support both the new and old honeypot field names.
  const honeypot =
    req.body?.company_website_check ||
    req.body?.website;

  // If honeypot is filled, silently reject the submission.
  if (
    typeof honeypot === "string" &&
    honeypot.trim() !== ""
  ) {
    logger.info("Application honeypot triggered", {
      requestId: req.id,
      ip: req.ip,
    });

    return ok(res, undefined, SUCCESS);
  }

  // Remove honeypot fields before passing data to the service.
  const {
    website,
    company_website_check,
    ...data
  } = req.body || {};

  // Validate basic required fields.
  if (
    !data.fullName?.trim() ||
    !data.email?.trim() ||
    !data.message?.trim()
  ) {
    const ApiError = require("../utils/ApiError");

    throw ApiError.badRequest(
      "Please provide your name, email and application message."
    );
  }

  // Ensure details is always an object.
  data.details =
    data.details &&
    typeof data.details === "object" &&
    !Array.isArray(data.details)
      ? data.details
      : {};

  // Create application.
  const result = await applicationService.create(
    req.params.slug,
    data,
    {
      // Guest application = null
      // Logged-in application = authenticated user ID
      userId: req.user?.id || null,
      ip: req.ip,
      userAgent: req.get("user-agent"),
    }
  );

  return created(
    res,
    {
      id: result.id,
    },
    SUCCESS
  );
});

// ---- Signed-in applicant ----

// GET /api/applications/mine
const myApplications = asyncHandler(async (req, res) => {
  const user = await authService.getProfile(req.user.id);

  const { page, limit } = req.validatedQuery;

  const { items, total } =
    await applicationService.listForUser(user, {
      page,
      limit,
    });

  paginated(res, items, {
    page,
    limit,
    total,
  });
});

// POST /api/applications/:id/withdraw
const withdrawMine = asyncHandler(async (req, res) => {
  const user = await authService.getProfile(req.user.id);

  const result = await applicationService.withdraw(
    req.params.id,
    user
  );

  ok(res, result, "Application withdrawn.");
});

// ---- Staff / Admin ----

// GET /api/admin/applications
const listApplications = asyncHandler(async (req, res) => {
  const { items, total } =
    await applicationService.list(req.validatedQuery);

  paginated(res, items, {
    page: req.validatedQuery.page,
    limit: req.validatedQuery.limit,
    total,
  });
});

// GET /api/admin/applications/:id
const getApplication = asyncHandler(async (req, res) => {
  const result = await applicationService.getById(
    req.params.id
  );

  ok(res, result);
});

// PATCH /api/admin/applications/:id
const updateApplication = asyncHandler(async (req, res) => {
  const result = await applicationService.update(
    req.params.id,
    req.body,
    req.user.id
  );

  ok(res, result, "Application updated.");
});

module.exports = {
  listOpportunities,
  apply,
  myApplications,
  withdrawMine,
  listApplications,
  getApplication,
  updateApplication,
};