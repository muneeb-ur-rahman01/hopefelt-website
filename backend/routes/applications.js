const express = require("express");
const c = require("../controllers/applicationController");
const validate = require("../middleware/validate");
const { authenticate } = require("../middleware/authenticate");
const { z, pagination, uuid } = require("../validators/common");

const router = express.Router();

// PUBLIC: Anyone can submit an application without creating an account.
// Register this BEFORE router.use(authenticate).
router.post("/:slug", c.apply);

// Everything below requires authentication.
router.use(authenticate);

// Signed-in applicant routes
router.get(
  "/mine",
  validate({
    query: z.object({
      page: pagination.page,
      limit: pagination.limit,
    }),
  }),
  c.myApplications
);

router.post(
  "/:id/withdraw",
  validate({ params: z.object({ id: uuid }) }),
  c.withdrawMine
);

module.exports = router;