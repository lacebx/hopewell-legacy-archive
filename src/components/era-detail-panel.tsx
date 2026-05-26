import { Link } from "@tanstack/react-router";
import {
  ERA_DETAILS,
  HISTORICAL_EVENTS,
  eventById,
  familiesMentioningEvent,
  type HistoricalEventId,
} from "@/lib/family-records";
import { ERAS, type EraId } from "@/lib/timeline-data";
import { cn } from "@/lib/utils";

type Props = {
  eraId: EraId;
  selectedEventId: HistoricalEventId | null;
  onEventSelect: (id: HistoricalEventId | null) => void;
};

export function EraDetailPanel({ eraId, selectedEventId, onEventSelect }: Props) {
  const era = ERAS.find((e) => e.id === eraId) ?? ERAS[0];
  const detail = ERA_DETAILS[eraId];
  const events = detail.eventIds
    .map((id) => HISTORICAL_EVENTS.find((e) => e.id === id))
    .filter(Boolean);

  const linkedFamilies = selectedEventId ? familiesMentioningEvent(selectedEventId) : [];

  return (
    <div className="border border-border bg-background/80 p-6 md:p-8">
      <p className="eyebrow">Era expanded</p>
      <h3 className="mt-3 font-serif text-2xl text-foreground md:text-3xl">{era.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{era.body}</p>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        <section>
          <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary">
            Documented burials
          </h4>
          {detail.burials.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">No burials recorded for this era yet.</p>
          ) : (
            <ul className="mt-3 space-y-3">
              {detail.burials.map((b) => (
                <li key={`${b.name}-${b.year}`} className="text-sm">
                  <Link
                    to="/archive/$slug"
                    params={{ slug: b.familySlug }}
                    className="font-serif text-foreground hover:text-primary"
                  >
                    {b.name}
                  </Link>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">{b.year}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary">
            Family arrivals
          </h4>
          {detail.arrivals.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">No new arrivals documented.</p>
          ) : (
            <ul className="mt-3 space-y-3">
              {detail.arrivals.map((a) => (
                <li key={`${a.familySlug}-${a.year}`} className="text-sm text-muted-foreground">
                  <Link
                    to="/archive/$slug"
                    params={{ slug: a.familySlug }}
                    className="font-serif text-foreground hover:text-primary"
                  >
                    {a.surname}
                  </Link>
                  <span className="ml-2 font-mono text-xs">{a.year}</span>
                  <p className="mt-1 text-xs leading-relaxed">{a.note}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary">
            Historical events
          </h4>
          <ul className="mt-3 space-y-2">
            {events.map((ev) => {
              if (!ev) return null;
              const active = selectedEventId === ev.id;
              return (
                <li key={ev.id}>
                  <button
                    type="button"
                    onClick={() => onEventSelect(active ? null : ev.id)}
                    className={cn(
                      "w-full border px-3 py-2 text-left text-sm transition",
                      active
                        ? "border-primary bg-primary/15 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/50",
                    )}
                  >
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em]">
                      {ev.year}
                    </span>
                    <span className="mt-1 block font-serif text-foreground">{ev.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      {selectedEventId && linkedFamilies.length > 0 && (
        <div className="mt-8 border-t border-border pt-8">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary">
            Cross-linked records
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Families whose records mention{" "}
            <span className="text-foreground">{eventById(selectedEventId)?.label}</span>:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {linkedFamilies.map((f) => (
              <li key={f.slug}>
                <Link
                  to="/archive/$slug"
                  params={{ slug: f.slug }}
                  search={{ event: selectedEventId }}
                  className="border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary hover:bg-primary/20"
                >
                  {f.surname}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
