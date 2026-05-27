import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as PageShell, P as PageHero, R as Reveal } from "./reveal-THcP2mTz.mjs";
import { h as headstoneImg } from "./router-WGWV-_zI.mjs";
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
const goals = [{
  num: "01",
  title: "Restoration",
  body: "Cleaning, resetting, and conservation of every standing headstone, and the documented recovery of those that have fallen."
}, {
  num: "02",
  title: "Historical marker",
  body: "A permanent state and federally recognized marker honoring the Hopewell Community and Cherokee Town."
}, {
  num: "03",
  title: "Education",
  body: "Curriculum partnerships with Oklahoma schools and tribal nations to teach the lived history of Indian Territory's Black and Native families."
}, {
  num: "04",
  title: "Digital archive",
  body: "Expansion of the lineage record, oral history collection, and document scanning program housed on this site."
}, {
  num: "05",
  title: "Annual gathering",
  body: "An on-the-ground day of remembrance for descendants, scholars, and friends of the community."
}];
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Chapter VI · The Work Continues", title: "Preservation & Donations", subtitle: "Help preserve what history tried to forget.", image: headstoneImg }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-serif text-4xl leading-tight text-foreground md:text-5xl", children: "We are restoring more than stone." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base leading-relaxed text-muted-foreground", children: "Every donation, large or small, protects a name, a lineage, and a piece of American history that the official record nearly let slip away. The Hopewell Cemetery Association is a 501(c)(3) nonprofit; contributions are tax-deductible to the extent allowed by law." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:HopewellLegacyOK@gmail.com?subject=Donation%20to%20Hopewell%20Cemetery%20Association", className: "border border-primary bg-primary px-8 py-4 text-xs uppercase tracking-[0.28em] text-primary-foreground transition hover:bg-transparent hover:text-primary", children: "Donate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "border border-border px-8 py-4 text-xs uppercase tracking-[0.28em] text-foreground transition hover:border-primary hover:text-primary", children: "Volunteer" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "lg:col-span-7 space-y-px bg-border", children: goals.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "group bg-background p-8 transition hover:bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs uppercase tracking-[0.32em] text-primary", children: g.num }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl text-foreground md:text-3xl", children: g.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: g.body })
        ] })
      ] }) }) }, g.num)) })
    ] }) }) })
  ] });
}
export {
  Page as component
};
