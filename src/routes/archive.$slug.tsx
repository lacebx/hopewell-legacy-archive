import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { PersonalTimeline } from "@/components/personal-timeline";
import { Reveal } from "@/components/reveal";
import {
  HISTORICAL_EVENTS,
  familiesMentioningEvent,
  familyBySlug,
  type HistoricalEventId,
} from "@/lib/family-records";
import img from "@/assets/family-archive.jpg";

type ArchiveSearch = {
  event?: HistoricalEventId;
};

export const Route = createFileRoute("/archive/$slug")({
  validateSearch: (search: Record<string, unknown>): ArchiveSearch => ({
    event:
      typeof search.event === "string"
        ? (search.event as HistoricalEventId)
        : undefined,
  }),
  loader: ({ params }) => {
    const record = familyBySlug(params.slug);
    if (!record) throw notFound();
    return { record };
  },
  component: FamilyRecordPage,
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.record.surname} Family | Hopewell Cemetery Archive`,
      },
      {
        name: "description",
        content: loaderData?.record.excerpt ?? "",
      },
      { property: "og:image", content: img },
    ],
  }),
});

function FamilyRecordPage() {
  const { record } = Route.useLoaderData();
  const { event: eventFromUrl } = Route.useSearch();
  const [highlightEvent, setHighlightEvent] = useState<HistoricalEventId | null>(
    eventFromUrl ?? null,
  );

  const linkedEvent = highlightEvent
    ? HISTORICAL_EVENTS.find((e) => e.id === highlightEvent)
    : null;
  const linkedFamilies = highlightEvent ? familiesMentioningEvent(highlightEvent) : [];

  return (
    <PageShell>
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <Link
            to="/archive"
            className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground hover:text-primary"
          >
            ← Archive
          </Link>
          <p className="eyebrow mt-8">{record.kind}</p>
          <h1 className="mt-4 font-serif text-5xl text-foreground md:text-7xl">
            {record.surname}
          </h1>
          <p className="mt-4 font-mono text-sm text-muted-foreground">{record.years}</p>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            {record.narrative}
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-[oklch(0.15_0.01_55)] py-20">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow">Personal timeline</p>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Birth → arrival → Dawes Roll → allotment → burial
            </h2>
            <div className="mt-10">
              <PersonalTimeline
                record={record}
                highlightEventId={highlightEvent}
                onEventClick={setHighlightEvent}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {linkedEvent && (
        <section className="py-16">
          <div className="mx-auto max-w-[900px] px-6 lg:px-10">
            <p className="eyebrow">Linked historical event</p>
            <h2 className="mt-4 font-serif text-3xl text-foreground">{linkedEvent.label}</h2>
            <p className="mt-2 font-mono text-xs text-primary">{linkedEvent.year}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {linkedEvent.description}
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Other families whose records mention this event:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {linkedFamilies
                .filter((f) => f.slug !== record.slug)
                .map((f) => (
                  <li key={f.slug}>
                    <Link
                      to="/archive/$slug"
                      params={{ slug: f.slug }}
                      search={{ event: highlightEvent! }}
                      className="border border-border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-foreground hover:border-primary hover:text-primary"
                    >
                      {f.surname}
                    </Link>
                  </li>
                ))}
            </ul>
            <Link
              to="/"
              search={{ event: highlightEvent!, era: linkedEvent.eraIds[0] }}
              className="mt-8 inline-block border-b border-primary pb-1 text-xs uppercase tracking-[0.28em] text-primary"
            >
              View on home timeline →
            </Link>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <p className="eyebrow">Related events in this record</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {record.eventIds.map((id) => {
              const ev = HISTORICAL_EVENTS.find((e) => e.id === id);
              if (!ev) return null;
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => setHighlightEvent(id)}
                    className="border border-border px-3 py-2 text-left text-sm hover:border-primary"
                  >
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-primary">
                      {ev.year}
                    </span>
                    <span className="mt-1 block font-serif text-foreground">{ev.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
