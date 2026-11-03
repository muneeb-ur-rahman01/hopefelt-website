const adminService = require("../services/adminService");
const asyncHandler = require("../utils/asyncHandler");
const { ok, paginated } = require("../utils/response");

const stats = asyncHandler(async (req, res) => ok(res, await adminService.stats()));

const listUsers = asyncHandler(async (req, res) => {
  const { items, total } = await adminService.listUsers(req.validatedQuery);
  paginated(res, items, { page: req.validatedQuery.page, limit: req.validatedQuery.limit, total });
});

const updateUser = asyncHandler(async (req, res) => {
  ok(res, await adminService.updateUser(req.params.id, req.body, req.user), "User updated.");
});

module.exports = { stats, listUsers, updateUser };
