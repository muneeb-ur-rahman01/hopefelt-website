const { z, text, email, password } = require("./common");

const register = z
  .object({
    fullName: text("Full name", { min: 2, max: 100 }),
    email,
    password,
  })
  .strict();

const login = z
  .object({
    email,
    // Do not apply the strength policy at login (old passwords must still work).
    password: z.string({ error: "Password is required." }).min(1, "Password is required.").max(200),
  })
  .strict();

const changePassword = z
  .object({
    currentPassword: z.string({ error: "Current password is required." }).min(1).max(200),
    newPassword: password,
  })
  .strict()
  .refine((v) => v.currentPassword !== v.newPassword, {
    path: ["newPassword"],
    message: "New password must be different from the current one.",
  });

const updateProfile = z.object({ fullName: text("Full name", { min: 2, max: 100 }) }).strict();

module.exports = { register, login, changePassword, updateProfile };
