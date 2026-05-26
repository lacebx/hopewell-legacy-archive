import * as d3 from "d3";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import {
  MILESTONE_LABELS,
  type FamilyRecord,
  type HistoricalEventId,
} from "@/lib/family-records";

const GOLD = "#e8c47a";
const MUTED = "#6b5a45";

type Props = {
  record: FamilyRecord;
  highlightEventId?: HistoricalEventId | null;
  onEventClick?: (id: HistoricalEventId) => void;
};

export function PersonalTimeline({ record, highlightEventId, onEventClick }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const sorted = [...record.milestones].sort((a, b) => a.year - b.year);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const container = containerRef.current;
    if (!svg.node() || !container || sorted.length === 0) return;

    const draw = () => {
      const width = container.clientWidth;
      const height = 120;
      svg.attr("viewBox", `0 0 ${width} ${height}`).attr("width", width).attr("height", height);
      svg.selectAll("*").remove();

      const margin = { left: 24, right: 24, top: 36, bottom: 36 };
      const innerW = width - margin.left - margin.right;

      const years = sorted.map((m) => m.year);
      const xScale = d3
        .scaleLinear()
        .domain([Math.min(...years) - 2, Math.max(...years) + 2])
        .range([0, innerW]);

      const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

      g.append("line")
        .attr("x1", 0)
        .attr("x2", innerW)
        .attr("y1", 24)
        .attr("y2", 24)
        .attr("stroke", MUTED)
        .attr("stroke-opacity", 0.4);

      sorted.forEach((m) => {
        const x = xScale(m.year);
        const highlighted = m.eventId && m.eventId === highlightEventId;

        g.append("circle")
          .attr("cx", x)
          .attr("cy", 24)
          .attr("r", highlighted ? 8 : 6)
          .attr("fill", highlighted ? GOLD : MUTED)
          .attr("fill-opacity", highlighted ? 1 : 0.7)
          .attr("stroke", GOLD)
          .attr("stroke-width", highlighted ? 2 : 0);

        g.append("text")
          .attr("x", x)
          .attr("y", 8)
          .attr("text-anchor", "middle")
          .attr("fill", MUTED)
          .attr("font-size", "9px")
          .attr("font-family", "JetBrains Mono, ui-monospace, monospace")
          .text(String(m.year));

        g.append("text")
          .attr("x", x)
          .attr("y", 48)
          .attr("text-anchor", "middle")
          .attr("fill", highlighted ? GOLD : "oklch(0.92 0.025 80)")
          .attr("font-size", "8px")
          .attr("font-family", "JetBrains Mono, ui-monospace, monospace")
          .attr("letter-spacing", "0.08em")
          .text(MILESTONE_LABELS[m.kind].split(" ")[0]);
      });
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(container);
    return () => ro.disconnect();
  }, [sorted, highlightEventId]);

  return (
    <div>
      <div ref={containerRef} className="w-full">
        <svg ref={svgRef} role="img" aria-label={`Personal timeline for ${record.surname} family`} />
      </div>

      <ol className="mt-6 space-y-4 border-t border-border pt-6">
        {sorted.map((m) => {
          const highlighted = m.eventId && m.eventId === highlightEventId;
          return (
            <li
              key={`${m.kind}-${m.year}-${m.label}`}
              className={highlighted ? "border-l-2 border-primary pl-4" : "pl-4"}
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                  {MILESTONE_LABELS[m.kind]}
                </span>
                <span className="font-mono text-xs text-muted-foreground">{m.year}</span>
              </div>
              <p className="mt-1 font-serif text-lg text-foreground">{m.label}</p>
              {m.detail && (
                <p className="mt-1 text-sm text-muted-foreground">{m.detail}</p>
              )}
              {m.eventId && (
                <button
                  type="button"
                  onClick={() => onEventClick?.(m.eventId!)}
                  className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-primary hover:underline"
                >
                  View linked families →
                </button>
              )}
            </li>
          );
        })}
      </ol>

      {highlightEventId && (
        <p className="mt-6 text-sm text-muted-foreground">
          <Link
            to="/"
            search={{ event: highlightEventId, era: record.eraIds[0] }}
            className="text-primary hover:underline"
          >
            See all families on the home timeline →
          </Link>
        </p>
      )}
    </div>
  );
}
