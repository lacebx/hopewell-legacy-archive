import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as PageShell, P as PageHero, R as Reveal } from "./reveal-THcP2mTz.mjs";
import { L as LANDMARKS, S as STEVENSON_LINEAGE } from "./historical-context-DlNAEFeO.mjs";
import { c as cherokeeImg } from "./router-WGWV-_zI.mjs";
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
const chapters = [{
  num: "01",
  year: "c. 1840",
  title: "The solid-rock ford",
  body: `A natural river ford on the Washita drew traders and travelers long before platted towns. ${LANDMARKS.cherokeeTown.location} This crossing became one of Indian Territory's vital corridors.`
}, {
  num: "02",
  year: "c. 1850s-80s",
  title: "John Shirley's trading post",
  body: `Cherokee Town grew into a massive supply hub: stagecoaches, wagon trains, military expeditions, and cattle drives between Fort Sill and Boggy Depot all stopped here. Merchant John Shirley ran a busy log trading post alongside a general store, cotton gin, blacksmith, and local doctor.`
}, {
  num: "03",
  year: "1860s-70s",
  title: "Freedmen at the crossroad",
  body: "After the Civil War, Freedmen families migrating to the Washita valley camped south of the log store for supplies while clearing land, the practical economy that bound Cherokee Town to the rising Hopewell settlement a few miles northeast."
}, {
  num: "04",
  year: "1880s-90s",
  title: "Hopewell rises nearby",
  body: "Cherokee Town was the marketplace; Hopewell was the home, church, school, and burial ground established a few miles away. Every kind of person Indian Territory had to offer passed through the ford on a Saturday in 1885."
}, {
  num: "05",
  year: "1906-07",
  title: "Rail bypass & erasure",
  body: STEVENSON_LINEAGE.railwayEra
}];
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Chapter II · Documentary", title: "Cherokee Town", subtitle: "A frontier crossroad at the Washita, trading post, river ford, and the lost hub five miles from Hopewell.", image: cherokeeImg }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: [
      chapters.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid gap-10 border-t border-border py-20 lg:grid-cols-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[0.7rem] uppercase tracking-[0.32em] text-primary", children: [
          "Chapter ",
          c.num,
          " · ",
          c.year
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl leading-tight text-foreground md:text-5xl", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg", children: c.body })
        ] })
      ] }) }, c.num)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/history", className: "inline-block border-b border-primary pb-1 text-xs uppercase tracking-[0.28em] text-primary", children: "Full historical context →" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grain vignette relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mapImg, alt: "", loading: "lazy", className: "h-[80vh] w-full object-cover opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-6 bg-background/40 px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Route reconstructed from oral history" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-3xl font-serif text-2xl italic leading-snug text-foreground text-balance md:text-4xl", children: '"If you stood at the ford on a Saturday in 1885, you would have seen every kind of person Indian Territory had to offer."' })
      ] }) })
    ] })
  ] });
}
export {
  Page as component
};
