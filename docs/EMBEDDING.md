# Embedding this site in another page (iframe)

Some hosts (for example StackBlitz-style previews) show:

> Unable to run Embedded Project. Looks like this project is being embedded without proper isolation headers.

That check usually means **the parent page** has turned on **cross-origin isolation** (`Cross-Origin-Opener-Policy` + `Cross-Origin-Embedder-Policy`). In that mode, every subresource (including an iframe document) must opt in with **`Cross-Origin-Resource-Policy: cross-origin`** (or otherwise satisfy CORP/COEP rules).

This project now sends:

- **`Cross-Origin-Resource-Policy: cross-origin`** on Worker responses and on static assets (via `public/_headers` on Cloudflare).
- **`Content-Security-Policy: frame-ancestors *`** so the app is allowed inside cross-origin iframes (adjust if you want to restrict to specific origins).
- Removes **`X-Frame-Options: DENY` / `SAMEORIGIN`** if the framework added them, so embedding is not blocked at that layer.

## Parent page checklist

If you control the site that contains the `<iframe>`:

1. If you use **COEP `require-corp`**, every cross-origin asset (including the iframe URL) must send CORP or use CORS correctly. This repo sends **`Cross-Origin-Resource-Policy: cross-origin`** for that case.
2. If embeds still fail, confirm the **iframe URL** is the same deployment that includes these headers (open DevTools, Network tab, select the document request, inspect response headers).
3. Optional: on the iframe element you can use **`credentialless`** (and related `allow` attributes) if your host documents require it for isolated previews.

## Locking embedding down later

To allow only specific sites, replace `frame-ancestors *` in `src/lib/http-embed-headers.ts` and in `public/_headers` with an explicit list, for example:

`frame-ancestors https://your-marketing-site.example https://another.example`
