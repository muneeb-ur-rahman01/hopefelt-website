// Escapes LIKE wildcards so user input is matched literally, then wraps for ILIKE.
const buildSearch = (q) => `%${q.replace(/[\\%_]/g, (c) => `\\${c}`)}%`;
const offset = (page, limit) => (page - 1) * limit;

module.exports = { buildSearch, offset };
