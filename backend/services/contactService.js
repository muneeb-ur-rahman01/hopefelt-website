const db = require("../config/db");
const ApiError = require("../utils/ApiError");
const { offset } = require("./queryHelpers");

const toDto = (r) => ({
  id: r.id,
  fullName: r.full_name,
  email: r.email,
  phone: r.phone,
  organisation: r.organisation,
  enquiryType: r.enquiry_type,
  subject: r.subject,
  message: r.message,
  responseMethod: r.response_method,
  status: r.status,
  adminNotes: r.admin_notes,
  handledBy: r.handled_by,
  createdAt: r.created_at,
  updatedAt: r.updated_at,
});

// PostgREST .or() filter syntax ke liye search input ko safe rakhein.
function cleanSearch(value) {
  return String(value || "")
    .trim()
    .replace(/[(),\\%"_*]/g, " ")
    .replace(/\s+/g, " ")
    .slice(0, 100);
}

async function create(data, { userId, ip, userAgent } = {}) {
  const supabase = db.getSupabase();

  const { data: row, error } = await supabase
    .from("contact_messages")
    .insert({
      user_id: userId || null,
      full_name: data.fullName,
      email: data.email,
      phone: data.phone || null,
      organisation: data.organisation || null,
      enquiry_type: data.enquiryType,
      subject: data.subject,
      message: data.message,
      response_method: data.responseMethod,
      consent: data.consent,
      ip: ip || null,
      user_agent: (userAgent || "").slice(0, 300) || null,
    })
    .select("id, created_at")
    .single();

  if (error) throw error;

  return {
    id: row.id,
    createdAt: row.created_at,
  };
}

async function list({ page, limit, q, status, enquiryType }) {
  const supabase = db.getSupabase();

  let query = supabase
    .from("contact_messages")
    .select("*", { count: "exact" });

  if (status) {
    query = query.eq("status", status);
  }

  if (enquiryType) {
    query = query.eq("enquiry_type", enquiryType);
  }

  const search = cleanSearch(q);

  if (search) {
    query = query.or(
      `full_name.ilike.%${search}%,email.ilike.%${search}%,subject.ilike.%${search}%`
    );
  }

  const from = offset(page, limit);
  const to = from + limit - 1;

  const { data, count, error } = await query
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) throw error;

  return {
    items: (data || []).map(toDto),
    total: count || 0,
  };
}

async function getById(id) {
  const supabase = db.getSupabase();

  const { data, error } = await supabase
    .from("contact_messages")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  if (!data) throw ApiError.notFound("Enquiry not found.");

  return toDto(data);
}

async function update(id, { status, adminNotes }, handlerId) {
  const supabase = db.getSupabase();

  const updates = {
    handled_by: handlerId,
    updated_at: new Date().toISOString(),
  };

  if (status) {
    updates.status = status;
  }

  if (adminNotes) {
    updates.admin_notes = adminNotes;
  }

  const { data, error } = await supabase
    .from("contact_messages")
    .update(updates)
    .eq("id", id)
    .select("*")
    .maybeSingle();

  if (error) throw error;
  if (!data) throw ApiError.notFound("Enquiry not found.");

  return toDto(data);
}

module.exports = {
  create,
  list,
  getById,
  update,
};