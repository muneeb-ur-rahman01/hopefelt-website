// Every response uses the same envelope: { success, message?, data?, meta? }
function ok(res, data, message, status = 200) {
  const body = { success: true };
  if (message) body.message = message;
  if (data !== undefined) body.data = data;
  return res.status(status).json(body);
}

function created(res, data, message) {
  return ok(res, data, message, 201);
}

function paginated(res, items, { page, limit, total }) {
  return res.status(200).json({
    success: true,
    data: items,
    meta: { page, limit, total, totalPages: Math.max(1, Math.ceil(total / limit)) },
  });
}

module.exports = { ok, created, paginated };
