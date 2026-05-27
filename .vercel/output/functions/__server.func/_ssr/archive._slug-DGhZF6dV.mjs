import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as PageShell, R as Reveal } from "./reveal-THcP2mTz.mjs";
import "../_libs/d3-transition.mjs";
import "../_libs/d3-zoom.mjs";
import { a as Route, H as HISTORICAL_EVENTS, f as familiesMentioningEvent, M as MILESTONE_LABELS } from "./router-WGWV-_zI.mjs";
import { l as linear } from "../_libs/d3-scale.mjs";
import { s as select } from "../_libs/d3-selection.mjs";
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
import "../_libs/d3-timer.mjs";
import "../_libs/d3-dispatch.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-ease.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-format.mjs";
const GOLD = "#e8c47a";
const MUTED = "#6b5a45";
function PersonalTimeline({ record, highlightEventId, onEventClick }) {
  const svgRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const sorted = [...record.milestones].sort((a, b) => a.year - b.year);
  reactExports.useEffect(() => {
    const svg = select(svgRef.current);
    const container = containerRef.current;
    if (!svg.node() || !container || sorted.length === 0) return;
    const draw = () => {
      const width = container.clientWidth;
      const height = 120;
      svg.attr("viewBox", `0 0 ${width} ${height}`).attr("width", width).attr("height", height);
      svg.selectAll("*").remove();
      const margin = { left: 24, right: 24, top: 36 };
      const innerW = width - margin.left - margin.right;
      const years = sorted.map((m) => m.year);
      const xScale = linear().domain([Math.min(...years) - 2, Math.max(...years) + 2]).range([0, innerW]);
      const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
      g.append("line").attr("x1", 0).attr("x2", innerW).attr("y1", 24).attr("y2", 24).attr("stroke", MUTED).attr("stroke-opacity", 0.4);
      sorted.forEach((m) => {
        const x = xScale(m.year);
        const highlighted = m.eventId && m.eventId === highlightEventId;
        g.append("circle").attr("cx", x).attr("cy", 24).attr("r", highlighted ? 8 : 6).attr("fill", highlighted ? GOLD : MUTED).attr("fill-opacity", highlighted ? 1 : 0.7).attr("stroke", GOLD).attr("stroke-width", highlighted ? 2 : 0);
        g.append("text").attr("x", x).attr("y", 8).attr("text-anchor", "middle").attr("fill", MUTED).attr("font-size", "9px").attr("font-family", "JetBrains Mono, ui-monospace, monospace").text(String(m.year));
        g.append("text").attr("x", x).attr("y", 48).attr("text-anchor", "middle").attr("fill", highlighted ? GOLD : "oklch(0.92 0.025 80)").attr("font-size", "8px").attr("font-family", "JetBrains Mono, ui-monospace, monospace").attr("letter-spacing", "0.08em").text(MILESTONE_LABELS[m.kind].split(" ")[0]);
      });
    };
    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(container);
    return () => ro.disconnect();
  }, [sorted, highlightEventId]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { ref: svgRef, role: "img", "aria-label": `Personal timeline for ${record.surname} family` }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-6 space-y-4 border-t border-border pt-6", children: sorted.map((m) => {
      const highlighted = m.eventId && m.eventId === highlightEventId;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: highlighted ? "border-l-2 border-primary pl-4" : "pl-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs uppercase tracking-[0.22em] text-primary", children: MILESTONE_LABELS[m.kind] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: m.year })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-serif text-lg text-foreground", children: m.label }),
            m.detail && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: m.detail }),
            m.eventId && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => onEventClick?.(m.eventId),
                className: "mt-2 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-primary hover:underline",
                children: "View linked families →"
              }
            )
          ]
        },
        `${m.kind}-${m.year}-${m.label}`
      );
    }) }),
    highlightEventId && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        search: { event: highlightEventId, era: record.eraIds[0] },
        className: "text-primary hover:underline",
        children: "See all families on the home timeline →"
      }
    ) })
  ] });
}
function FamilyRecordPage() {
  const {
    record
  } = Route.useLoaderData();
  const {
    event: eventFromUrl
  } = Route.useSearch();
  const [highlightEvent, setHighlightEvent] = reactExports.useState(eventFromUrl ?? null);
  const linkedEvent = highlightEvent ? HISTORICAL_EVENTS.find((e) => e.id === highlightEvent) : null;
  const linkedFamilies = highlightEvent ? familiesMentioningEvent(highlightEvent) : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[900px] px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/archive", className: "font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground hover:text-primary", children: "← Archive" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mt-8", children: record.kind }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-serif text-5xl text-foreground md:text-7xl", children: record.surname }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-mono text-sm text-muted-foreground", children: record.years }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-base leading-relaxed text-muted-foreground md:text-lg", children: record.narrative })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-[oklch(0.15_0.01_55)] py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[900px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Personal timeline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-3xl text-foreground md:text-4xl", children: "Birth → arrival → Dawes Roll → allotment → burial" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PersonalTimeline, { record, highlightEventId: highlightEvent, onEventClick: setHighlightEvent }) })
    ] }) }) }),
    linkedEvent && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[900px] px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Linked historical event" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-3xl text-foreground", children: linkedEvent.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-mono text-xs text-primary", children: linkedEvent.year }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: linkedEvent.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-muted-foreground", children: "Other families whose records mention this event:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 flex flex-wrap gap-2", children: linkedFamilies.filter((f) => f.slug !== record.slug).map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/archive/$slug", params: {
        slug: f.slug
      }, search: {
        event: highlightEvent
      }, className: "border border-border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-foreground hover:border-primary hover:text-primary", children: f.surname }) }, f.slug)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", search: {
        event: highlightEvent,
        era: linkedEvent.eraIds[0]
      }, className: "mt-8 inline-block border-b border-primary pb-1 text-xs uppercase tracking-[0.28em] text-primary", children: "View on home timeline →" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[900px] px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Related events in this record" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 flex flex-wrap gap-2", children: record.eventIds.map((id) => {
        const ev = HISTORICAL_EVENTS.find((e) => e.id === id);
        if (!ev) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setHighlightEvent(id), className: "border border-border px-3 py-2 text-left text-sm hover:border-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[0.6rem] uppercase tracking-[0.2em] text-primary", children: ev.year }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block font-serif text-foreground", children: ev.label })
        ] }) }, id);
      }) })
    ] }) })
  ] });
}
export {
  FamilyRecordPage as component
};
