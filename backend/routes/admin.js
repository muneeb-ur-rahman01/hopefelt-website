const express = require("express");
const contact = require("../controllers/contactController");
const apps = require("../controllers/applicationController");
const admin = require("../controllers/adminController");
const validate = require("../middleware/validate");
const { authenticate } = require("../middleware/authenticate");
const authorize = require("../middleware/authorize");
const { adminLimiter } = require("../middleware/rateLimiter");
const contactV = require("../validators/contactValidators");
const appV = require("../validators/applicationValidators");
const adminV = require("../validators/adminValidators");

const router = express.Router();

// Everything under /api/admin requires a valid token AND a staff/admin role.
router.use(authenticate, adminLimiter, authorize("staff", "admin"));

router.get("/stats", admin.stats);

// Enquiries
router.get("/contacts", validate({ query: contactV.listQuery }), contact.listContacts);
router.get("/contacts/:id", validate({ params: adminV.idParam }), contact.getContact);
router.patch("/contacts/:id", validate({ params: adminV.idParam, body: contactV.updateStatus }), contact.updateContact);

// Applications
router.get("/applications", validate({ query: appV.listQuery }), apps.listApplications);
router.get("/applications/:id", validate({ params: adminV.idParam }), apps.getApplication);
router.patch("/applications/:id", validate({ params: adminV.idParam, body: appV.updateStatus }), apps.updateApplication);

// User management: admins only
router.get("/users", authorize("admin"), validate({ query: adminV.userListQuery }), admin.listUsers);
router.patch("/users/:id", authorize("admin"), validate({ params: adminV.idParam, body: adminV.updateUser }), admin.updateUser);

module.exports = router;
