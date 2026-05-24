import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import img from "@/assets/family-archive.jpg";
import ledger from "@/assets/ledger.jpg";

export const Route = createFileRoute("/archive")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Family Legacy Archive — Hopewell Cemetery Association" },
      { name: "description", content: "Stories, obituaries, lineages, oral histories, and archival documents from the families of the Hopewell Community." },
      { property: "og:image", content: img },
    ],
  }),
});

const entries = [
  { surname: "Smith", years: "1842 – 1919", kind: "Freedman lineage", excerpt: "Among the earliest documented burials at Hopewell. The Smith family carried both Cherokee and Freedman citizenship, recorded in the Dawes Rolls of 1902." },
  { surname: "Vann", years: "1855 – 1930", kind: "Cherokee Freedman", excerpt: "Farmed along the Washita bottoms east of Cherokee Town. Oral history places the family at the founding of the Hopewell church." },
  { surname: "Brown", years: "1860s – present", kind: "Continuing line", excerpt: "Descendants still living in Garvin County. Custodians of one of the few surviving photograph collections from the original community." },
  { surname: "Folsom", years: "1848 – 1912", kind: "Choctaw kinship", excerpt: "Marriage records connect the Folsom family to Hopewell through the late 1880s. Burial confirmed by surviving headstone fragment." },
  { surname: "Perry", years: "1851 – 1925", kind: "Freedman lineage", excerpt: "Schoolteacher and lay preacher. Oral histories from three descendant families confirm decades of service to the community." },
  { surname: "Walker", years: "1869 – 1934", kind: "Native–Black household", excerpt: "Last recorded burial of the original generation. Family bible held by descendants in Oklahoma City lists more than forty relations." },
];

function Page() {
  const [filter, setFilter] = useState<string>("All");
  const kinds = ["All", ...Array.from(new Set(entries.map((e) => e.kind)))];

  const visible = filter === "All" ? entries : entries.filter((e) => e.kind === filter);

  return (
    <PageShell>
      <PageHero
        eyebrow="Chapter III · The Vault"
        title="Family Legacy Archive"
        subtitle="A living record of the families connected to Hopewell — names returned to the page, one lineage at a time."
        image={img}
      />

      {/* Filter */}
      <section className="border-b border-border py-12">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-3 px-6 lg:px-10">
          <p className="eyebrow mr-4">Filter</p>
          {kinds.map((k) => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              className={`border px-4 py-2 text-[0.7rem] uppercase tracking-[0.22em] transition ${
                filter === k
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {visible.map((e, i) => (
              <Reveal key={e.surname} delay={i * 0.04}>
                <article className="group relative h-full bg-background p-10 transition-colors hover:bg-card">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-primary">{e.kind}</p>
                  <h3 className="mt-6 font-serif text-4xl text-foreground">{e.surname}</h3>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">{e.years}</p>
                  <div className="my-6 hairline w-12" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{e.excerpt}</p>
                  <button className="mt-8 text-xs uppercase tracking-[0.28em] text-primary opacity-70 transition group-hover:opacity-100">
                    Open record →
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden border-y border-border">
        <div className="relative h-[60vh] min-h-[420px]">
          <img src={ledger} alt="Archival ledger" loading="lazy" className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          <div className="relative -mt-[60vh] flex h-[60vh] items-center px-6">
            <div className="mx-auto w-full max-w-[1400px]">
              <Reveal>
                <div className="max-w-xl">
                  <p className="eyebrow">Contribute</p>
                  <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-5xl">
                    Hold a record we should hold too?
                  </h2>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                    Photographs, family bibles, letters, recordings — even a name
                    your grandmother spoke once. The archive grows by gift.
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
