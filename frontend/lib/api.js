const API_BASE_URL = (
    process.env.NEXT_PUBLIC_API_BASE_URL || ""
).replace(/\/$/, "");

let getAccessToken = () => null;
let refreshAccessToken = null;

export function configureApi(config = {}) {
  getAccessToken =
    typeof config.getAccessToken === "function"
      ? config.getAccessToken
      : () => null;

  refreshAccessToken =
    typeof config.refreshAccessToken === "function"
      ? config.refreshAccessToken
      : null;
}

async function request(path, options = {}, retry = true) {
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const token = getAccessToken();

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
    credentials: "include",
  });

  if (
    response.status === 401 &&
    retry &&
    refreshAccessToken &&
    !path.includes("/auth/refresh")
  ) {
    const newToken = await refreshAccessToken();

    if (newToken) {
      headers.Authorization = `Bearer ${newToken}`;

      response = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        headers,
        credentials: "include",
      });
    }
  }

  const result =
    response.status === 204
      ? null
      : await response.json().catch(() => null);

  if (!response.ok) {
    const error = new Error(
      result?.message || result?.error || "Something went wrong."
    );

    error.status = response.status;
    error.data = result;

    throw error;
  }

  return result;
}

const post = (path, data) =>
  request(path, {
    method: "POST",
    body: JSON.stringify(data),
  });

const patch = (path, data) =>
  request(path, {
    method: "PATCH",
    body: JSON.stringify(data),
  });

const get = (path) => request(path);

const del = (path) =>
  request(path, { method: "DELETE" });

/* ---------- Authentication ---------- */

export async function loginUser(data) {
  return post("/api/auth/login", data);
}

export async function registerUser(data) {
  return post("/api/auth/register", data);
}

export async function refreshSession() {
  return post("/api/auth/refresh", {});
}

export async function logoutUser() {
  return post("/api/auth/logout", {});
}

export async function logoutAllDevices() {
  return post("/api/auth/logout-all", {});
}

export async function updateMe(data) {
  return patch("/api/auth/me", data);
}

export async function changePassword(data) {
  return post("/api/auth/change-password", data);
}

/* ---------- Contact ---------- */

export async function submitContactForm(data) {
  return post("/api/contact", data);
}

/* ---------- Applications ---------- */

export async function submitApplication(slug, data) {
  return post(
    `/api/applications/${encodeURIComponent(slug)}`,
    data
  );
}

export async function getMyApplications() {
  return get("/api/applications/my");
}

export async function withdrawApplication(id) {
  return post(`/api/applications/${encodeURIComponent(id)}/withdraw`, {});
}

/* ---------- Opportunities ---------- */

export async function getOpportunities() {
  return get("/api/opportunities");
}

/* ---------- Admin API ---------- */

export const admin = {
  getDashboard: () => get("/api/admin/dashboard"),

  getApplications: (params = "") =>
    get(`/api/admin/applications${params ? `?${params}` : ""}`),

  getContacts: (params = "") =>
    get(`/api/admin/contacts${params ? `?${params}` : ""}`),

  getUsers: (params = "") =>
    get(`/api/admin/users${params ? `?${params}` : ""}`),

  updateApplication: (id, data) =>
    patch(`/api/admin/applications/${encodeURIComponent(id)}`, data),

  updateContact: (id, data) =>
    patch(`/api/admin/contacts/${encodeURIComponent(id)}`, data),
};