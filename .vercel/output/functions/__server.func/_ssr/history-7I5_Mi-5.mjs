import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as PageShell, P as PageHero, R as Reveal } from "./reveal-THcP2mTz.mjs";
import { g as heroImg, c as cherokeeImg, b as communityImg, d as familyImg } from "./router-WGWV-_zI.mjs";
import { m as mapImg } from "./territory-map-Be_ddE_I.mjs";
import { A as ARCHIVAL_SOURCES, a as CROSSROADS_INTRO, L as LANDMARKS, S as STEVENSON_LINEAGE, C as CEMETERY_LEGACY } from "./historical-context-DlNAEFeO.mjs";
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
function ArchivalFigure({
  src,
  alt,
  caption,
  source,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt, loading: "lazy", className: "h-full w-full object-cover" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: caption }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: source.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-block font-mono text-[0.6rem] uppercase tracking-[0.24em] text-primary hover:underline",
          children: [
            "Source: ",
            source.label,
            " ↗"
          ]
        }
      ),
      children
    ] })
  ] });
}
function Page() {
  const sources = Object.fromEntries(ARCHIVAL_SOURCES.map((s) => [s.id, s]));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Historical context", title: "The Crossroads of Freedom", subtitle: "Cherokee Town, the Hopewell Community, and the Stevenson lineage of Chickasaw Freedmen, five miles apart along the Washita, forever linked in memory.", image: heroImg }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[900px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-muted-foreground md:text-lg", children: CROSSROADS_INTRO }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-[oklch(0.15_0.01_55)] py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-center", children: "Two connected landmarks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mx-auto mt-6 max-w-3xl text-center font-serif text-4xl leading-tight text-foreground md:text-5xl", children: "Five miles apart along the Washita, before Oklahoma was Oklahoma." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-12 lg:grid-cols-2", children: [{
        key: "cherokeeTown",
        image: cherokeeImg,
        to: "/cherokee-town"
      }, {
        key: "hopewell",
        image: communityImg,
        to: "/community"
      }].map(({
        key,
        image,
        to
      }) => {
        const site = LANDMARKS[key];
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "border border-border bg-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: "", loading: "lazy", className: "aspect-[16/10] w-full object-cover opacity-70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: site.subtitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-serif text-3xl text-foreground md:text-4xl", children: site.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-mono text-xs uppercase tracking-[0.22em] text-primary", children: site.location }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground", children: site.details.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: d }, d.slice(0, 40))) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "mt-8 inline-block border-b border-primary pb-1 text-xs uppercase tracking-[0.28em] text-primary", children: "Explore →" })
          ] })
        ] }) }, key);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grain relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mapImg, alt: "Historic map of Indian Territory", loading: "lazy", className: "h-[50vh] min-h-[360px] w-full object-cover opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mx-auto max-w-[1400px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Geography of memory" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl font-serif text-2xl italic leading-snug text-foreground md:text-4xl", children: "The Washita River corridor, where ford, trade route, and Freedmen settlement met on the same stretch of water." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: sources["washita-landscape"].href, target: "_blank", rel: "noopener noreferrer", className: "mt-6 inline-block font-mono text-[0.6rem] uppercase tracking-[0.28em] text-primary hover:underline", children: [
          sources["washita-landscape"].institution,
          " ↗"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-start gap-16 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArchivalFigure, { src: familyImg, alt: "Archival photograph of Chickasaw Freedmen families", caption: "The Stevenson legacy and the fight for sovereignty, families who cleared the Washita valley, secured allotments, and held kinship through removal, emancipation, and statehood.", source: {
        label: sources["freedmen-photo"].institution,
        href: sources["freedmen-photo"].href
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Stevenson lineage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-serif text-4xl leading-tight text-foreground md:text-5xl", children: STEVENSON_LINEAGE.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.15, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-10 font-serif text-2xl text-foreground", children: "The fight for sovereignty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: STEVENSON_LINEAGE.fightForSovereignty }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-mono text-xs uppercase tracking-[0.22em] text-primary", children: "Foundational patriarchs & matriarchs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: STEVENSON_LINEAGE.patriarchs.map((name) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "· ",
            name
          ] }, name)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm text-muted-foreground", children: [
            "Allied pioneer families: ",
            STEVENSON_LINEAGE.alliedFamilies.join(", ")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-12 font-serif text-2xl text-foreground", children: "Building a community" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground", children: STEVENSON_LINEAGE.buildingCommunity.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: item }, item.slice(0, 48))) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[900px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "1906-1907" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-serif text-4xl leading-tight text-foreground md:text-5xl", children: "The rise of rail & the fading towns" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-base leading-relaxed text-muted-foreground md:text-lg", children: STEVENSON_LINEAGE.railwayEra })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArchivalFigure, { src: heroImg, alt: "Hopewell Cemetery", caption: CEMETERY_LEGACY.body, source: {
        label: sources["cemetery-sign"].institution,
        href: sources["cemetery-sign"].href
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary", children: CEMETERY_LEGACY.location }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "The living legacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-serif text-4xl leading-tight text-foreground md:text-5xl", children: "Hopewell Cemetery endures" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-base leading-relaxed text-muted-foreground", children: "This historic Freedmen burial ground holds the remains of original trailblazers, Black cowboys, military veterans, and generations of their descendants, while the Stevenson family continues to steward the story." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/map", className: "border border-primary bg-primary px-8 py-3 text-xs uppercase tracking-[0.28em] text-primary-foreground transition hover:bg-transparent hover:text-primary", children: "Cemetery map" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/archive", className: "border border-border px-8 py-3 text-xs uppercase tracking-[0.28em] text-foreground transition hover:border-primary hover:text-primary", children: "Family archive" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border bg-[oklch(0.14_0.01_52)] py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Visual references" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-serif text-3xl text-foreground md:text-4xl", children: "Archival sources for designers & researchers" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-12 grid gap-6 md:grid-cols-2", children: ARCHIVAL_SOURCES.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "border border-border bg-background p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl text-foreground", children: src.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-primary", children: src.institution }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: src.designNote }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: src.href, target: "_blank", rel: "noopener noreferrer", className: "mt-6 inline-block text-xs uppercase tracking-[0.28em] text-primary hover:underline", children: "View source ↗" })
      ] }) }, src.id)) })
    ] }) })
  ] });
}
export {
  Page as component
};
