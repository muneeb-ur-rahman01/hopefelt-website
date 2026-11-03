const db = require("../config/db");
const ApiError = require("../utils/ApiError");
const { getOpportunity } = require("../config/opportunities");

const toDto = (r) => ({
  id: r.id,
  opportunitySlug: r.opportunity_slug,
  opportunityTitle: r.opportunity_title,
  fullName: r.full_name,
  email: r.email,
  phone: r.phone,
  city: r.city,
  country: r.country,
  organisation: r.organisation,
  message: r.message,
  availability: r.availability,
  details: r.details,
  status: r.status,
  adminNotes: r.admin_notes,
  reviewedBy: r.reviewed_by,
  createdAt: r.created_at,
  updatedAt: r.updated_at,
});

// Applicant can never see internal admin notes
const toOwnerDto = (r) => {
  const { adminNotes, reviewedBy, ...rest } = toDto(r);
  return rest;
};

const supabase = () => db.getSupabase();

// Create application
async function create(slug, data, { userId, ip, userAgent }) {
  const opp = getOpportunity(slug);

  if (!opp) {
    throw ApiError.notFound("Unknown opportunity.");
  }

  const missing = (opp.requiredDetails || []).filter(
    (k) =>
      data.details[k] === undefined ||
      data.details[k] === ""
  );

  if (missing.length) {
    throw ApiError.badRequest(
      `Missing required field: ${missing[0]}.`,
      {
        errors: missing.map((k) => ({
          field: `details.${k}`,
          message: `${k} is required.`,
        })),
      }
    );
  }

  const { data: application, error } = await supabase()
    .from("applications")
    .insert({
      user_id: userId || null,
      opportunity_slug: slug,
      opportunity_title: opp.title,
      full_name: data.fullName,
      email: data.email.trim().toLowerCase(),
      phone: data.phone || null,
      city: data.city || null,
      country: data.country || null,
      organisation: data.organisation || null,
      message: data.message,
      availability: data.availability || null,
      details: data.details,
      consent: data.consent,
      ip: ip || null,
      user_agent: (userAgent || "").slice(0, 300) || null,
    })
    .select("id, created_at")
    .single();

  if (error) {
    if (error.code === "23505") {
      throw ApiError.conflict(
        "You already have an open application for this opportunity.",
        { code: "DUPLICATE_APPLICATION" }
      );
    }

    throw error;
  }

  return {
    id: application.id,
    createdAt: application.created_at,
  };
}

// List applications for admin
async function list({ page, limit, q, status, slug }) {
  let query = supabase()
    .from("applications")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false });

  if (status) {
    query = query.eq("status", status);
  }

  if (slug) {
    query = query.eq("opportunity_slug", slug);
  }

  if (q && q.trim()) {
    const search = q.trim().replace(/[,%()]/g, "");

    if (search) {
      query = query.or(
        `full_name.ilike.%${search}%,email.ilike.%${search}%`
      );
    }
  }

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, count, error } = await query.range(from, to);

  if (error) throw error;

  return {
    items: (data || []).map(toDto),
    total: count || 0,
  };
}

// Get application by ID
async function getById(id) {
  const { data, error } = await supabase()
    .from("applications")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;

  if (!data) {
    throw ApiError.notFound("Application not found.");
  }

  return toDto(data);
}

// Admin updates application
async function update(id, { status, adminNotes }, reviewerId) {
  const updates = {
    reviewed_by: reviewerId,
    updated_at: new Date().toISOString(),
  };

  if (status !== undefined && status !== null) {
    updates.status = status;
  }

  if (adminNotes !== undefined && adminNotes !== null) {
    updates.admin_notes = adminNotes;
  }

  const { data, error } = await supabase()
    .from("applications")
    .update(updates)
    .eq("id", id)
    .select("*")
    .maybeSingle();

  if (error) throw error;

  if (!data) {
    throw ApiError.notFound("Application not found.");
  }

  return toDto(data);
}

// List applications belonging to signed-in user
async function listForUser(user, { page, limit }) {
  const normalizedEmail = user.email.trim().toLowerCase();

  let query = supabase()
    .from("applications")
    .select("*", { count: "exact" })
    .or(
      `user_id.eq.${user.id},email.ilike.${normalizedEmail}`
    )
    .order("created_at", { ascending: false });

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, count, error } = await query.range(from, to);

  if (error) throw error;

  return {
    items: (data || []).map(toOwnerDto),
    total: count || 0,
  };
}

// Applicant withdraws own open application
async function withdraw(id, user) {
  const { data, error } = await supabase()
    .from("applications")
    .update({
      status: "withdrawn",
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .or(
      `user_id.eq.${user.id},email.ilike.${user.email.trim().toLowerCase()}`
    )
    .in("status", ["pending", "under_review"])
    .select("*")
    .maybeSingle();

  if (error) throw error;

  if (!data) {
    throw ApiError.notFound("Open application not found.");
  }

  return toOwnerDto(data);
}

module.exports = {
  create,
  list,
  getById,
  update,
  listForUser,
  withdraw,
};