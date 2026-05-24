import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import hero from "@/assets/headstone.jpg";

export const Route = createFileRoute("/preservation")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Preservation & Donations — Hopewell Cemetery Association" },
      { name: "description", content: "Support the restoration, marking, and educational preservation of Hopewell Cemetery and its history." },
      { property: "og:image", content: hero },
    ],
  }),
});

const goals = [
  { num: "01", title: "Restoration", body: "Cleaning, resetting, and conservation of every standing headstone — and the documented recovery of those that have fallen." },
  { num: "02", title: "Historical marker", body: "A permanent state and federally recognized marker honoring the Hopewell Community and Cherokee Town." },
  { num: "03", title: "Education", body: "Curriculum partnerships with Oklahoma schools and tribal nations to teach the lived history of Indian Territory's Black and Native families." },
  { num: "04", title: "Digital archive", body: "Expansion of the lineage record, oral history collection, and document scanning program housed on this site." },
  { num: "05", title: "Annual gathering", body: "An on-the-ground day of remembrance for descendants, scholars, and friends of the community." },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Chapter VI · The Work Continues"
        title="Preservation & Donations"
        subtitle="Help preserve what history tried to forget."
        image={hero}
      />

      <section className="py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow">Mission</p>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground md:text-5xl">
                We are restoring more than stone.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Every donation — large or small — protects a name, a lineage, and
                a piece of American history that the official record nearly let
                slip away. The Hopewell Cemetery Association is a 501(c)(3)
                nonprofit; contributions are tax-deductible to the extent
                allowed by law.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:HopewellLegacyOK@gmail.com?subject=Donation%20to%20Hopewell%20Cemetery%20Association"
                  className="border border-primary bg-primary px-8 py-4 text-xs uppercase tracking-[0.28em] text-primary-foreground transition hover:bg-transparent hover:text-primary"
                >
                  Donate
                </a>
                <Link
                  to="/contact"
                  className="border border-border px-8 py-4 text-xs uppercase tracking-[0.28em] text-foreground transition hover:border-primary hover:text-primary"
                >
                  Volunteer
                </Link>
              </div>
            </Reveal>

            <ol className="lg:col-span-7 space-y-px bg-border">
              {goals.map((g, i) => (
                <Reveal key={g.num} delay={i * 0.06}>
                  <li className="group bg-background p-8 transition hover:bg-card">
                    <div className="flex items-start gap-8">
                      <span className="font-mono text-xs uppercase tracking-[0.32em] text-primary">{g.num}</span>
                      <div className="flex-1">
                        <h3 className="font-serif text-2xl text-foreground md:text-3xl">{g.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.body}</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
