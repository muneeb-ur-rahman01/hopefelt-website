const { z, uuid, pagination } = require("./common");

const idParam = z.object({ id: uuid });

const userListQuery = z.object({
  ...pagination,
  role: z.enum(["user", "staff", "admin"]).optional(),
});

const updateUser = z
  .object({
    role: z.enum(["user", "staff", "admin"]).optional(),
    isActive: z.boolean().optional(),
  })
  .strict()
  .refine((v) => v.role !== undefined || v.isActive !== undefined, {
    message: "Provide a role or isActive.",
  });

module.exports = { idParam, userListQuery, updateUser };
