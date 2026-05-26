import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { TimelineConstellation } from "@/components/timeline-constellation";
import { cn } from "@/lib/utils";
import {
  ARCHIVAL_CARDS,
  CLUSTER_META,
  ERAS,
  type EraId,
} from "@/lib/timeline-data";

export function InteractiveTimeline() {
  const [activeEraId, setActiveEraId] = useState<EraId>("pre-1830");

  const activeEra = ERAS.find((e) => e.id === activeEraId) ?? ERAS[0];
  const activeClusters = useMemo(
    () => new Set(activeEra.clusters),
    [activeEra.clusters],
  );
  return (
    <section className="relative overflow-hidden border-y border-border bg-[oklch(0.15_0.01_55)] py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,oklch(0.22_0.02_60/0.5),transparent_55%)]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">A history in five movements</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground md:text-6xl">
            The land remembers what the map forgot.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Select an era along the arc — constellation clusters and archival
            records below will illuminate what belonged to that time.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* 3D timeline + constellation */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] min-h-[320px] overflow-hidden border border-border bg-[oklch(0.13_0.01_52)] sm:min-h-[400px]">
              <TimelineConstellation
                className="pointer-events-auto absolute inset-0"
                activeEraId={activeEraId}
                activeClusters={activeClusters}
                onEraSelect={setActiveEraId}
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,oklch(0.13_0.01_52)_80%)]" />
            </div>
            <p className="mt-4 font-mono text-[0.6rem] uppercase tracking-[0.32em] text-muted-foreground">
              Click a node on the arc · {activeEra.year}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {activeEra.clusters.map((c) => (
                <span
                  key={c}
                  className="border border-primary/40 bg-primary/10 px-2 py-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-primary"
                >
                  {CLUSTER_META[c].label}
                </span>
              ))}
            </div>
          </div>

          {/* Era list */}
          <div className="lg:col-span-7">
            <div
              className="flex flex-col gap-2"
              role="tablist"
              aria-label="Historical eras"
            >
              {ERAS.map((era) => {
                const selected = era.id === activeEraId;
                return (
                  <button
                    key={era.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveEraId(era.id)}
                    className={cn(
                      "group w-full border px-6 py-5 text-left transition-all duration-500",
                      selected
                        ? "border-primary bg-primary/10"
                        : "border-border bg-background/40 hover:border-primary/50",
                    )}
                  >
                    <p
                      className={cn(
                        "font-mono text-xs uppercase tracking-[0.28em] transition-colors",
                        selected ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {era.year}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-foreground md:text-3xl">
                      {era.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 max-w-xl text-sm leading-relaxed transition-all duration-500",
                        selected
                          ? "text-muted-foreground"
                          : "max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-70 md:max-h-none md:opacity-60",
                      )}
                    >
                      {era.body}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Archival cards */}
        <div className="mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Records for this era</p>
              <h3 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
                Archival cards — {activeEra.title}
              </h3>
            </div>
            <Link
              to="/archive"
              className="shrink-0 border-b border-primary pb-1 text-xs uppercase tracking-[0.28em] text-primary"
            >
              Full archive →
            </Link>
          </div>

          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ARCHIVAL_CARDS.map((card) => {
              const highlighted = card.eraIds.includes(activeEraId);
              return (
                <article
                  key={card.id}
                  aria-hidden={!highlighted}
                  className={cn(
                    "relative bg-background p-8 transition-all duration-700",
                    highlighted
                      ? "ring-1 ring-inset ring-primary/60 opacity-100"
                      : "opacity-25 grayscale-[0.4]",
                  )}
                >
                  <p
                    className={cn(
                      "font-mono text-[0.65rem] uppercase tracking-[0.32em]",
                      highlighted ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {card.kind}
                  </p>
                  <h4 className="mt-4 font-serif text-2xl text-foreground">
                    {card.title}
                  </h4>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">
                    {card.years}
                  </p>
                  <div
                    className={cn(
                      "my-5 hairline w-10 transition-colors",
                      highlighted ? "bg-primary" : "bg-border",
                    )}
                  />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {card.excerpt}
                  </p>
                  {highlighted && (
                    <p className="mt-6 font-mono text-[0.6rem] uppercase tracking-[0.28em] text-primary">
                      Illuminated
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
