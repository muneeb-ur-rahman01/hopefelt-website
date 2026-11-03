const API_BASE_URL = process.env.API_BASE_URL;

async function proxyRequest(request, context) {
  if (!API_BASE_URL) {
    return Response.json(
      { message: "API_BASE_URL is not configured." },
      { status: 500 }
    );
  }

  const { path } = await context.params;
  const targetUrl = `${API_BASE_URL.replace(/\/$/, "")}/api/${path.join("/")}${new URL(request.url).search}`;

  const headers = new Headers(request.headers);
  headers.delete("host");
  headers.delete("connection");

  const body =
    request.method === "GET" || request.method === "HEAD"
      ? undefined
      : await request.arrayBuffer();

  try {
    const response = await fetch(targetUrl, {
      method: request.method,
      headers,
      body,
      redirect: "manual",
    });

    const responseHeaders = new Headers(response.headers);
    responseHeaders.delete("transfer-encoding");
    responseHeaders.delete("content-encoding");

    return new Response(
      response.status === 204 || response.status === 304
        ? null
        : await response.arrayBuffer(),
      {
        status: response.status,
        headers: responseHeaders,
      }
    );
  } catch (error) {
    return Response.json(
      { message: "Backend server se connection nahi ho saka." },
      { status: 502 }
    );
  }
}

export const GET = proxyRequest;
export const POST = proxyRequest;
export const PATCH = proxyRequest;
export const PUT = proxyRequest;
export const DELETE = proxyRequest;
export const OPTIONS = proxyRequest;
export const HEAD = proxyRequest;