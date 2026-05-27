import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as PageShell, P as PageHero, R as Reveal } from "./reveal-THcP2mTz.mjs";
import { L as LANDMARKS, S as STEVENSON_LINEAGE } from "./historical-context-DlNAEFeO.mjs";
import { b as communityImg } from "./router-WGWV-_zI.mjs";
import { m as mapImg } from "./territory-map-Be_ddE_I.mjs";
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
const CEMETERY_SNIPPET = "Hopewell Cemetery, 4 miles north of Wynnewood, east of N County Road 3280, remains the permanent monument.";
const sections = [{
  eyebrow: "I · Origins",
  title: "A Freedmen's sanctuary on the Washita.",
  body: `Founded in the late 1860s, the Hopewell Community was established ${LANDMARKS.hopewell.location.toLowerCase()} Its pioneers were Freedmen with deep, generational ties to the Choctaw and Chickasaw nations, families who survived forced removal and the Trail of Tears.`
}, {
  eyebrow: "II · The anchor",
  title: "Log schoolhouse, church, and kinship.",
  body: LANDMARKS.hopewell.details[1]
}, {
  eyebrow: "III · The Stevenson & allied families",
  title: "Clearing land beside Cherokee Town.",
  body: `${STEVENSON_LINEAGE.fightForSovereignty} Patriarchs including ${STEVENSON_LINEAGE.patriarchs.join("; ")}, alongside the ${STEVENSON_LINEAGE.alliedFamilies.join(", ")} families, built dirt-floor log homes within weeks of arrival.`
}, {
  eyebrow: "IV · Economy & endurance",
  title: "Cattle, allotment, and education.",
  body: STEVENSON_LINEAGE.buildingCommunity.slice(1, 4).join(" ")
}, {
  eyebrow: "V · Continuity",
  title: "What the railroad and statehood could not take.",
  body: `When the Santa Fe Railway bypassed Hopewell in 1906 and Oklahoma statehood followed in 1907, the town faded from official maps, but families kept returning to bury, remember, and insist this ground meant something. ${CEMETERY_SNIPPET}`
}];
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Chapter I", title: "The Hopewell Community", subtitle: "A Freedmen's sanctuary, log school, Sunday church, and generations who cleared the Washita valley.", image: communityImg }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[900px] px-6 lg:px-10", children: [
      sections.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "border-t border-border py-16 first:border-t-0 first:pt-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: s.eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-serif text-3xl leading-tight text-foreground md:text-5xl", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base leading-relaxed text-muted-foreground md:text-lg", children: s.body })
      ] }) }, s.eyebrow)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/history", className: "mt-8 inline-block border-b border-primary pb-1 text-xs uppercase tracking-[0.28em] text-primary", children: "Full historical context →" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "grain relative overflow-hidden border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[60vh] min-h-[420px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mapImg, alt: "Antique map of Indian Territory", loading: "lazy", className: "h-full w-full object-cover opacity-60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-3xl text-center font-serif text-2xl italic leading-snug text-foreground text-balance md:text-4xl", children: '"We did not arrive in Oklahoma. Oklahoma arrived around us."' }) }) })
    ] }) })
  ] });
}
export {
  Page as component
};
