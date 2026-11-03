const config = require("../config/config");
const authService = require("../services/authService");
const tokens = require("../services/tokenService");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const { ok, created } = require("../utils/response");

const cookieOptions = () => ({
  httpOnly: true, // not readable from JavaScript -> XSS cannot steal it
  secure: config.cookie.secure,
  sameSite: config.cookie.sameSite,
  domain: config.cookie.domain,
  path: "/api/auth", // only sent to auth endpoints
});

function setRefreshCookie(res, token) {
  res.cookie(config.cookie.name, token, { ...cookieOptions(), maxAge: config.jwt.refreshTtlSec * 1000 });
}
const clearRefreshCookie = (res) => res.clearCookie(config.cookie.name, cookieOptions());

// Refresh token goes to the cookie only; the body carries just the access token.
function sessionResponse(res, session, message, status = 200) {
  setRefreshCookie(res, session.refreshToken);
  const data = { user: session.user, accessToken: session.accessToken, expiresIn: session.expiresIn };
  return status === 201 ? created(res, data, message) : ok(res, data, message);
}

const register = asyncHandler(async (req, res) => {
  const session = await authService.register(req.body);
  sessionResponse(res, session, "Account created.", 201);
});

const login = asyncHandler(async (req, res) => {
  const session = await authService.login(req.body);
  sessionResponse(res, session, "Signed in.");
});

const refresh = asyncHandler(async (req, res) => {
  const token = req.cookies?.[config.cookie.name];
  if (!token) throw ApiError.unauthorized("No active session.", { code: "NO_SESSION" });
  try {
    const session = await authService.refresh(token);
    sessionResponse(res, session);
  } catch (err) {
    clearRefreshCookie(res); // a dead cookie is useless; remove it
    throw err;
  }
});

const logout = asyncHandler(async (req, res) => {
  let accessPayload;
  const bearer = (req.get("authorization") || "").split(" ")[1];
  if (bearer) {
    try { accessPayload = tokens.verifyAccessToken(bearer); } catch { /* expired token is fine on logout */ }
  }
  await authService.logout({ refreshToken: req.cookies?.[config.cookie.name], accessPayload });
  clearRefreshCookie(res);
  ok(res, undefined, "Signed out.");
});

const logoutAll = asyncHandler(async (req, res) => {
  await authService.logoutAll(req.user.id);
  clearRefreshCookie(res);
  ok(res, undefined, "Signed out of all devices.");
});

const me = asyncHandler(async (req, res) => {
  ok(res, { user: await authService.getProfile(req.user.id) });
});

const updateMe = asyncHandler(async (req, res) => {
  ok(res, { user: await authService.updateProfile(req.user.id, req.body) }, "Profile updated.");
});

const changePassword = asyncHandler(async (req, res) => {
  await authService.changePassword(req.user.id, req.body);
  clearRefreshCookie(res);
  ok(res, undefined, "Password changed. Please sign in again.");
});

module.exports = { register, login, refresh, logout, logoutAll, me, updateMe, changePassword };
