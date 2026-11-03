const { createClient } = require("@supabase/supabase-js");
const config = require("./config");
const logger = require("../utils/logger");

let supabase = null;

// Initialize Supabase client
function getPool() {
  if (!supabase) {
    const { url, serviceRoleKey } = config.supabase;

    if (!url || !serviceRoleKey) {
      throw new Error(
        "SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required"
      );
    }

    supabase = createClient(url, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false,
      },
    });
  }

  return supabase;
}

// Preferred Supabase client getter
function getSupabase() {
  return getPool();
}

// Allows tests to inject a custom client
function setPool(custom) {
  supabase = custom;
}

// Check Supabase connectivity
async function ping() {
  const client = getPool();

  // Lightweight API connectivity check.
  // Uses Supabase Auth instead of requiring a database table.
  const { error } = await client.auth.getSession();

  if (error) {
    logger.error("Supabase connection check failed", {
      error: error.message,
    });

    throw error;
  }

  return true;
}

// Supabase client does not require pool.end()
async function close() {
  supabase = null;
}

module.exports = {
  query: getPool,
  ping,
  close,
  setPool,
  getPool,
  getSupabase,
};