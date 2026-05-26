import { Link, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { EraDetailPanel } from "@/components/era-detail-panel";
import { TimelineConstellation } from "@/components/timeline-constellation";
import { familiesMentioningEvent, type HistoricalEventId } from "@/lib/family-records";
import {
  ARCHIVAL_CARDS,
  CLUSTER_META,
  ERAS,
  type EraId,
} from "@/lib/timeline-data";
import { cn } from "@/lib/utils";

type Props = {
  initialEraId?: EraId;
  initialEventId?: HistoricalEventId;
};

export function InteractiveTimeline({ initialEraId, initialEventId }: Props) {
  const navigate = useNavigate({ from: "/" });
  const timelineBlockRef = useRef<HTMLDivElement>(null);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeEraId, setActiveEraId] = useState<EraId>(initialEraId ?? "pre-1830");
  const [selectedEventId, setSelectedEventId] = useState<HistoricalEventId | null>(
    initialEventId ?? null,
  );
  const [timelineInView, setTimelineInView] = useState(false);
  const [whooshKey, setWhooshKey] = useState(0);
  const isProgrammaticScroll = useRef(false);

  const panelCount = ERAS.length;

  const syncActiveEraFromScroll = useCallback(() => {
    const el = horizontalScrollRef.current;
    if (!el || isProgrammaticScroll.current) return;
    const idx = Math.min(
      panelCount - 1,
      Math.max(0, Math.round(el.scrollLeft / Math.max(el.clientWidth, 1))),
    );
    const nextId = ERAS[idx].id;
    setActiveEraId((prev) => (prev === nextId ? prev : nextId));
  }, [panelCount]);

  /** Horizontal wheel / trackpad only; vertical delta passes through to the page */
  useEffect(() => {
    const scroller = horizontalScrollRef.current;
    if (!scroller) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      const step = scroller.clientWidth * (e.key === "ArrowLeft" ? -1 : 1);
      scroller.scrollBy({ left: step, behavior: "smooth" });
    };

    const onWheel = (e: WheelEvent) => {
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);

      // Ignore predominantly vertical gestures (normal page scroll)
      if (absX <= absY) return;

      e.preventDefault();
      scroller.scrollLeft += e.deltaX;
    };

    scroller.addEventListener("wheel", onWheel, { passive: false });
    scroller.addEventListener("scroll", syncActiveEraFromScroll, { passive: true });
    scroller.addEventListener("keydown", onKeyDown);

    return () => {
      scroller.removeEventListener("wheel", onWheel);
      scroller.removeEventListener("scroll", syncActiveEraFromScroll);
      scroller.removeEventListener("keydown", onKeyDown);
    };
  }, [syncActiveEraFromScroll]);

  useEffect(() => {
    const block = timelineBlockRef.current;
    if (!block) return;
    const io = new IntersectionObserver(
      ([entry]) => setTimelineInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    io.observe(block);
    return () => io.disconnect();
  }, []);

  const scrollTimelineBlockIntoView = useCallback((animate: boolean) => {
    const block = timelineBlockRef.current;
    if (!block) return;
    const headerOffset = 96;
    const top = block.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({
      top: Math.max(0, top),
      behavior: animate ? "smooth" : "auto",
    });
  }, []);

  const jumpToEra = useCallback(
    (eraId: EraId, animate = true) => {
      const index = ERAS.findIndex((e) => e.id === eraId);
      const scroller = horizontalScrollRef.current;
      if (index < 0 || !scroller) return;

      setActiveEraId(eraId);
      setWhooshKey((k) => k + 1);

      scrollTimelineBlockIntoView(animate);

      isProgrammaticScroll.current = true;
      const left = index * scroller.clientWidth;
      scroller.scrollTo({ left, behavior: animate ? "smooth" : "auto" });

      window.setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, animate ? 600 : 50);
    },
    [scrollTimelineBlockIntoView],
  );

  useEffect(() => {
    if (!initialEraId) return;
    const t = window.setTimeout(() => jumpToEra(initialEraId, false), 200);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (initialEventId) setSelectedEventId(initialEventId);
  }, [initialEventId]);

  const syncUrl = useCallback(
    (era: EraId, event: HistoricalEventId | null) => {
      navigate({
        search: (prev) => ({
          ...prev,
          era,
          event: event ?? undefined,
        }),
        replace: true,
        resetScroll: false,
      });
    },
    [navigate],
  );

  const selectEra = useCallback(
    (id: EraId) => {
      jumpToEra(id);
      syncUrl(id, selectedEventId);
    },
    [jumpToEra, selectedEventId, syncUrl],
  );

  const selectEvent = useCallback(
    (id: HistoricalEventId | null) => {
      setSelectedEventId(id);
      syncUrl(activeEraId, id);
    },
    [activeEraId, syncUrl],
  );

  const activeEra = ERAS.find((e) => e.id === activeEraId) ?? ERAS[0];
  const activeIndex = ERAS.findIndex((e) => e.id === activeEraId);
  const activeClusters = useMemo(
    () => new Set(activeEra.clusters),
    [activeEra.clusters],
  );

  const eventFamilies = selectedEventId ? familiesMentioningEvent(selectedEventId) : [];
  const eventFamilySlugs = new Set(eventFamilies.map((f) => f.slug));

  return (
    <section className="relative border-y border-border bg-[oklch(0.15_0.01_55)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,oklch(0.22_0.02_60/0.5),transparent_55%)]" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-10 md:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow">A history in five movements</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground md:text-6xl">
            The land remembers what the map forgot.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            In the timeline below, use horizontal scroll only (trackpad sideways,
            tilt wheel, or Shift + scroll wheel) to move between eras.
            Scroll up and down normally to continue through the rest of the page.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {ERAS.map((era) => (
            <button
              key={era.id}
              type="button"
              onClick={() => selectEra(era.id)}
              className={cn(
                "border px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] transition",
                era.id === activeEraId
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/50",
              )}
            >
              {era.year}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline block: fixed height; horizontal scroll isolated from vertical page scroll */}
      <div
        ref={timelineBlockRef}
        className="relative mx-auto max-w-[1400px] px-4 pb-8 lg:px-10"
      >
        <div className="flex min-h-[min(88svh,920px)] flex-col overflow-hidden border border-border bg-[oklch(0.13_0.01_52)]">
          <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
            <div className="relative h-[36vh] shrink-0 border-b border-border lg:h-auto lg:w-[40%] lg:border-b-0 lg:border-r">
              <TimelineConstellation
                className="absolute inset-0"
                activeClusters={activeClusters}
                focusOnDetail={timelineInView}
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,transparent_40%,oklch(0.13_0.01_52)_85%)]" />
              <div className="pointer-events-none absolute bottom-4 left-4 flex flex-wrap gap-2">
                {activeEra.clusters.map((c) => (
                  <span
                    key={c}
                    className="border border-primary/40 bg-primary/10 px-2 py-1 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-primary"
                  >
                    {CLUSTER_META[c].label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex min-h-0 min-w-0 flex-1 flex-col">
              <div className="flex items-center justify-between border-b border-border px-4 py-3 lg:px-6">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.32em] text-muted-foreground">
                  ↔ Horizontal scroll only · {activeIndex + 1} / {panelCount}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                  {activeEra.year}
                </p>
              </div>

              <div
                ref={horizontalScrollRef}
                className="timeline-horizontal-scroll flex min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden overscroll-x-contain"
                aria-label="Era timeline, scroll horizontally"
                tabIndex={0}
              >
                {ERAS.map((era, i) => (
                  <div
                    key={era.id}
                    ref={(el) => {
                      panelRefs.current[i] = el;
                    }}
                    className="h-full w-full min-w-full shrink-0 snap-start overflow-y-auto px-4 py-6 lg:px-8 lg:py-8"
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">
                      {era.year}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
                      {era.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                      {era.body}
                    </p>

                    {era.id === activeEraId && (
                      <div className="mt-6">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={`${era.id}-${whooshKey}`}
                            initial={{ x: 100, opacity: 0, filter: "blur(10px)" }}
                            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                            exit={{ x: -72, opacity: 0, filter: "blur(8px)" }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <EraDetailPanel
                              eraId={era.id}
                              selectedEventId={selectedEventId}
                              onEventSelect={selectEvent}
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex shrink-0 gap-1 overflow-x-auto border-t border-border bg-background/90 px-2 py-2 backdrop-blur-sm">
            {ERAS.map((era, i) => (
              <button
                key={era.id}
                type="button"
                onClick={() => selectEra(era.id)}
                className={cn(
                  "shrink-0 border px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] transition",
                  era.id === activeEraId
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-transparent text-muted-foreground hover:text-primary",
                )}
              >
                <span className="mr-2 opacity-50">{String(i + 1).padStart(2, "0")}</span>
                {era.year}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Records for this era</p>
            <h3 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
              Archival cards: {activeEra.title}
              {selectedEventId && " · event filter active"}
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
            const eraMatch = card.eraIds.includes(activeEraId);
            const eventMatch =
              !selectedEventId ||
              !card.familySlug ||
              eventFamilySlugs.has(card.familySlug);
            const highlighted = eraMatch && eventMatch;

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
                <h4 className="mt-4 font-serif text-2xl text-foreground">{card.title}</h4>
                <p className="mt-2 font-mono text-xs text-muted-foreground">{card.years}</p>
                <div
                  className={cn(
                    "my-5 hairline w-10 transition-colors",
                    highlighted ? "bg-primary" : "bg-border",
                  )}
                />
                <p className="text-sm leading-relaxed text-muted-foreground">{card.excerpt}</p>
                {highlighted && card.familySlug && (
                  <Link
                    to="/archive/$slug"
                    params={{ slug: card.familySlug }}
                    search={selectedEventId ? { event: selectedEventId } : {}}
                    className="mt-6 inline-block font-mono text-[0.6rem] uppercase tracking-[0.28em] text-primary hover:underline"
                  >
                    Open family record →
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
