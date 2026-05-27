/**
 * Headers so this app can load inside cross-origin iframes when the parent page
 * opts into cross-origin isolation (e.g. COOP + COEP). Browsers require the
 * embedded document to send Cross-Origin-Resource-Policy for those cases.
 *
 * Also relaxes common anti-embedding defaults (X-Frame-Options, frame-ancestors)
 * so third-party sites can iframe this project when they need to.
 */
export function withIframeEmbedHeaders(response: Response): Response {
  const headers = new Headers(response.headers);

  headers.set("Cross-Origin-Resource-Policy", "cross-origin");

  const xfo = headers.get("X-Frame-Options");
  if (xfo) {
    const v = xfo.trim().toUpperCase();
    if (v === "DENY" || v === "SAMEORIGIN") {
      headers.delete("X-Frame-Options");
    }
  }

  const csp = headers.get("Content-Security-Policy");
  if (csp) {
    if (/\bframe-ancestors\b/i.test(csp)) {
      headers.set(
        "Content-Security-Policy",
        csp.replace(/\bframe-ancestors\s+[^;]*/i, "frame-ancestors *").trim(),
      );
    } else {
      headers.set("Content-Security-Policy", `${csp.trim()}; frame-ancestors *`);
    }
  } else {
    headers.set("Content-Security-Policy", "frame-ancestors *");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
