// @lovable.dev/vite-tanstack-config already includes the following. Do NOT add them manually.
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this; wrangler.jsonc main alone is insufficient.
export default defineConfig({
  // This repo is currently scaffolded for Cloudflare Workers. For Vercel, we must disable
  // the Cloudflare Workers adapter and output a Nitro bundle (serverless handlers) instead.
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [
      nitro({
        // Generate Vercel-compatible serverless output.
        preset: "vercel",
      }),
    ],
    server: {
      // Dev server: same CORP / CSP as production where the sandbox allows custom headers.
      // (Lovable sandbox strips custom server.headers; production uses src/server.ts + public/_headers.)
      headers: {
        "Cross-Origin-Resource-Policy": "cross-origin",
        "Content-Security-Policy": "frame-ancestors *",
      },
    },
  },
});
