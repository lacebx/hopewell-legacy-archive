import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as PageShell, P as PageHero, R as Reveal } from "./reveal-THcP2mTz.mjs";
import { g as heroImg } from "./router-WGWV-_zI.mjs";
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
const sections = [{
  id: "A",
  x: 25,
  y: 30,
  name: "Section A · Founders",
  count: 18
}, {
  id: "B",
  x: 55,
  y: 25,
  name: "Section B · Freedmen Families",
  count: 34
}, {
  id: "C",
  x: 70,
  y: 55,
  name: "Section C · Children's Ground",
  count: 11
}, {
  id: "D",
  x: 35,
  y: 65,
  name: "Section D · Veterans",
  count: 7
}, {
  id: "E",
  x: 60,
  y: 75,
  name: "Section E · Continuing Burials",
  count: 22
}];
function Page() {
  const [active, setActive] = reactExports.useState("B");
  const [query, setQuery] = reactExports.useState("");
  const activeSec = sections.find((s) => s.id === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Chapter V · Sacred Ground", title: "The Cemetery Map", subtitle: "A scalable map and burial record system. The ground is small. The memory it holds is not.", image: heroImg }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden border border-border bg-[oklch(0.22_0.02_60)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-40", style: {
          backgroundImage: "repeating-linear-gradient(0deg, transparent 0 30px, oklch(0.4 0.02 60 / 0.2) 30px 31px), repeating-linear-gradient(90deg, transparent 0 30px, oklch(0.4 0.02 60 / 0.2) 30px 31px)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,oklch(0.14_0.01_55/0.6))]" }),
        sections.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(s.id), style: {
          left: `${s.x}%`,
          top: `${s.y}%`
        }, className: "absolute -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-12 w-12 items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute inset-0 rounded-full ${active === s.id ? "bg-primary/40 animate-ping" : "bg-primary/0"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `relative flex h-8 w-8 items-center justify-center rounded-full border font-serif text-sm transition ${active === s.id ? "border-primary bg-primary text-primary-foreground" : "border-primary/60 bg-background/80 text-primary"}`, children: s.id })
        ] }) }, s.id)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-6 top-6 font-mono text-[0.65rem] uppercase tracking-[0.32em] text-primary/80", children: "N ↑" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "absolute bottom-4 left-6 font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground", children: "Hopewell Cemetery · Garvin County · OK" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "eyebrow", children: [
          "Section ",
          activeSec.id
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-serif text-3xl text-foreground md:text-4xl", children: activeSec.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 font-mono text-xs text-muted-foreground", children: [
          activeSec.count,
          " documented interments"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6 hairline w-12" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: "Select a section to view the families and individuals documented in that part of the ground. The full record system is built to scale as more burials are confirmed by descendant research and on-site survey." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Search records" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: query, maxLength: 80, onChange: (e) => setQuery(e.target.value.slice(0, 80)), placeholder: "Surname, given name, or year", className: "mt-4 w-full border border-border bg-input/40 px-4 py-3 font-serif text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs italic text-muted-foreground", children: "Search index in development: placeholder for the public record interface launching with the next preservation phase." })
        ] })
      ] }) })
    ] }) }) })
  ] });
}
export {
  Page as component
};
