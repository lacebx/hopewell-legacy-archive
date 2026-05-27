import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as PageShell, P as PageHero, R as Reveal } from "./reveal-THcP2mTz.mjs";
import { F as FAMILY_RECORDS, d as familyImg, l as ledger } from "./router-WGWV-_zI.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function Page() {
  const [filter, setFilter] = reactExports.useState("All");
  const kinds = ["All", ...Array.from(new Set(FAMILY_RECORDS.map((e) => e.kind)))];
  const visible = filter === "All" ? FAMILY_RECORDS : FAMILY_RECORDS.filter((e) => e.kind === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Chapter III · The Vault", title: "Family Legacy Archive", subtitle: "Stevenson, Smith, Harper, Allen, and the families who built Hopewell, names returned to the page, one lineage at a time.", image: familyImg }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1400px] flex-wrap items-center gap-3 px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mr-4", children: "Filter" }),
      kinds.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setFilter(k), className: `border px-4 py-2 text-[0.7rem] uppercase tracking-[0.22em] transition ${filter === k ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`, children: k }, k))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3", children: visible.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/archive/$slug", params: {
      slug: e.slug
    }, className: "group relative block h-full bg-background p-10 transition-colors hover:bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[0.65rem] uppercase tracking-[0.32em] text-primary", children: e.kind }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-serif text-4xl text-foreground", children: e.surname }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-mono text-xs text-muted-foreground", children: e.years }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6 hairline w-12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: e.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-8 inline-block text-xs uppercase tracking-[0.28em] text-primary opacity-70 transition group-hover:opacity-100", children: "Open record →" })
    ] }) }, e.slug)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "grain relative overflow-hidden border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[60vh] min-h-[420px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ledger, alt: "Archival ledger", loading: "lazy", className: "h-full w-full object-cover opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative -mt-[60vh] flex h-[60vh] items-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-[1400px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Contribute" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-3xl leading-tight text-foreground md:text-5xl", children: "Hold a record we should hold too?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm leading-relaxed text-muted-foreground", children: "Photographs, family bibles, letters, recordings, even a name your grandmother spoke once. The archive grows by gift." })
      ] }) }) }) })
    ] }) })
  ] });
}
export {
  Page as component
};
