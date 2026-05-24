import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import hero from "@/assets/hero-cemetery.jpg";

export const Route = createFileRoute("/map")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Cemetery Map — Hopewell Cemetery Association" },
      { name: "description", content: "Interactive map of Hopewell Cemetery with searchable burial records and section markers." },
      { property: "og:image", content: hero },
    ],
  }),
});

const sections = [
  { id: "A", x: 25, y: 30, name: "Section A · Founders", count: 18 },
  { id: "B", x: 55, y: 25, name: "Section B · Freedmen Families", count: 34 },
  { id: "C", x: 70, y: 55, name: "Section C · Children's Ground", count: 11 },
  { id: "D", x: 35, y: 65, name: "Section D · Veterans", count: 7 },
  { id: "E", x: 60, y: 75, name: "Section E · Continuing Burials", count: 22 },
];

function Page() {
  const [active, setActive] = useState<string>("B");
  const [query, setQuery] = useState("");
  const activeSec = sections.find((s) => s.id === active)!;

  return (
    <PageShell>
      <PageHero
        eyebrow="Chapter V · Sacred Ground"
        title="The Cemetery Map"
        subtitle="A scalable map and burial record system. The ground is small. The memory it holds is not."
        image={hero}
      />

      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden border border-border bg-[oklch(0.22_0.02_60)]">
                  {/* Map "paper" */}
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, transparent 0 30px, oklch(0.4 0.02 60 / 0.2) 30px 31px), repeating-linear-gradient(90deg, transparent 0 30px, oklch(0.4 0.02 60 / 0.2) 30px 31px)",
                    }}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,oklch(0.14_0.01_55/0.6))]" />

                  {/* Markers */}
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActive(s.id)}
                      style={{ left: `${s.x}%`, top: `${s.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                    >
                      <span className="relative flex h-12 w-12 items-center justify-center">
                        <span className={`absolute inset-0 rounded-full ${active === s.id ? "bg-primary/40 animate-ping" : "bg-primary/0"}`} />
                        <span className={`relative flex h-8 w-8 items-center justify-center rounded-full border font-serif text-sm transition ${active === s.id ? "border-primary bg-primary text-primary-foreground" : "border-primary/60 bg-background/80 text-primary"}`}>
                          {s.id}
                        </span>
                      </span>
                    </button>
                  ))}

                  {/* Compass */}
                  <div className="absolute right-6 top-6 font-mono text-[0.65rem] uppercase tracking-[0.32em] text-primary/80">
                    N ↑
                  </div>
                  <p className="absolute bottom-4 left-6 font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                    Hopewell Cemetery · Garvin County · OK
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow">Section {activeSec.id}</p>
                <h3 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">{activeSec.name}</h3>
                <p className="mt-2 font-mono text-xs text-muted-foreground">{activeSec.count} documented interments</p>
                <div className="my-6 hairline w-12" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Select a section to view the families and individuals
                  documented in that part of the ground. The full record system
                  is built to scale as more burials are confirmed by descendant
                  research and on-site survey.
                </p>

                <div className="mt-10">
                  <p className="eyebrow">Search records</p>
                  <input
                    type="text"
                    value={query}
                    maxLength={80}
                    onChange={(e) => setQuery(e.target.value.slice(0, 80))}
                    placeholder="Surname, given name, or year"
                    className="mt-4 w-full border border-border bg-input/40 px-4 py-3 font-serif text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                  />
                  <p className="mt-3 text-xs italic text-muted-foreground">
                    Search index in development — placeholder for the public
                    record interface launching with the next preservation phase.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
