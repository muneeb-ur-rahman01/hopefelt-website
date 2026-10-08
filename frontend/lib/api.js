// Every call to the backend goes through this file. Today only the
// contact form needs the backend; products/team/services are still
// served from local data files. When those move to the backend/database,
// swap the data-file imports for calls here — components won't change.

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

export async function submitContactForm(payload) {
  const res = await fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data?.message || "Something went wrong. Please try again.");
  }

  return data;
}
