import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as PageShell, P as PageHero, R as Reveal } from "./reveal-THcP2mTz.mjs";
import { h as headstoneImg, d as familyImg, b as communityImg, g as heroImg, c as cherokeeImg, l as ledger } from "./router-WGWV-_zI.mjs";
import { m as mapImg } from "./territory-map-Be_ddE_I.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const plates = [{
  src: familyImg,
  caption: "Composite family portrait, c. 1890s",
  span: "row-span-2"
}, {
  src: communityImg,
  caption: "Hopewell congregation, undated",
  span: ""
}, {
  src: heroImg,
  caption: "Hopewell Cemetery, aerial view",
  span: ""
}, {
  src: cherokeeImg,
  caption: "Washita River crossing at dawn",
  span: "row-span-2"
}, {
  src: mapImg,
  caption: "Cherokee Territory map, 19th c.",
  span: ""
}, {
  src: ledger,
  caption: "Ledger fragment, names of the interred",
  span: ""
}, {
  src: headstoneImg,
  caption: "Single headstone, west pasture",
  span: ""
}];
function Page() {
  const [open, setOpen] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Chapter IV · Plates", title: "The Gallery", subtitle: "A visual record, photographs, maps, and documents preserved for the families and for the historical memory of Indian Territory.", image: headstoneImg }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[300px] lg:grid-cols-4", children: plates.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.04, className: p.span, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(i), className: `group relative block h-full w-full overflow-hidden border border-border bg-card ${p.span}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.src, alt: p.caption, loading: "lazy", className: "h-full w-full object-cover opacity-80 grayscale-[15%] transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary", children: [
          "Plate ",
          String(i + 1).padStart(2, "0")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-serif text-sm italic text-foreground", children: p.caption })
      ] })
    ] }) }, i)) }) }) }),
    open !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-6 backdrop-blur-md", onClick: () => setOpen(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-h-[90vh] max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: plates[open].src, alt: plates[open].caption, className: "max-h-[80vh] w-auto object-contain" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-center font-serif text-sm italic text-muted-foreground", children: [
        "Plate ",
        String(open + 1).padStart(2, "0"),
        ", ",
        plates[open].caption
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(null), className: "absolute -top-12 right-0 text-xs uppercase tracking-[0.28em] text-primary", children: "Close ×" })
    ] }) })
  ] });
}
export {
  Page as component
};
