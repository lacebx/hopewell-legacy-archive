import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { LANDMARKS, STEVENSON_LINEAGE } from "@/lib/historical-context";
import img from "@/assets/cherokee-town.jpg";
import mapImg from "@/assets/territory-map.jpg";

export const Route = createFileRoute("/cherokee-town")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Cherokee Town: A vanished crossroads of Indian Territory" },
      {
        name: "description",
        content:
          "The Washita River ford, John Shirley's trading post, and the supply hub that made Hopewell possible, five miles northeast along the corridor.",
      },
      { property: "og:image", content: img },
    ],
  }),
});

const chapters = [
  {
    num: "01",
    year: "c. 1840",
    title: "The solid-rock ford",
    body: `A natural river ford on the Washita drew traders and travelers long before platted towns. ${LANDMARKS.cherokeeTown.location} This crossing became one of Indian Territory's vital corridors.`,
  },
  {
    num: "02",
    year: "c. 1850s-80s",
    title: "John Shirley's trading post",
    body: `Cherokee Town grew into a massive supply hub: stagecoaches, wagon trains, military expeditions, and cattle drives between Fort Sill and Boggy Depot all stopped here. Merchant John Shirley ran a busy log trading post alongside a general store, cotton gin, blacksmith, and local doctor.`,
  },
  {
    num: "03",
    year: "1860s-70s",
    title: "Freedmen at the crossroad",
    body: "After the Civil War, Freedmen families migrating to the Washita valley camped south of the log store for supplies while clearing land, the practical economy that bound Cherokee Town to the rising Hopewell settlement a few miles northeast.",
  },
  {
    num: "04",
    year: "1880s-90s",
    title: "Hopewell rises nearby",
    body: "Cherokee Town was the marketplace; Hopewell was the home, church, school, and burial ground established a few miles away. Every kind of person Indian Territory had to offer passed through the ford on a Saturday in 1885.",
  },
  {
    num: "05",
    year: "1906-07",
    title: "Rail bypass & erasure",
    body: STEVENSON_LINEAGE.railwayEra,
  },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Chapter II · Documentary"
        title="Cherokee Town"
        subtitle="A frontier crossroad at the Washita, trading post, river ford, and the lost hub five miles from Hopewell."
        image={img}
      />

      <section className="py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {chapters.map((c, i) => (
            <Reveal key={c.num} delay={0}>
              <article className="grid gap-10 border-t border-border py-20 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.32em] text-primary">
                    Chapter {c.num} · {c.year}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
                    {c.title}
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {c.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal>
            <Link
              to="/history"
              className="inline-block border-b border-primary pb-1 text-xs uppercase tracking-[0.28em] text-primary"
            >
              Full historical context →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="grain vignette relative overflow-hidden">
        <img src={mapImg} alt="" loading="lazy" className="h-[80vh] w-full object-cover opacity-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-background/40 px-6 text-center">
          <Reveal>
            <p className="eyebrow">Route reconstructed from oral history</p>
            <p className="mt-6 max-w-3xl font-serif text-2xl italic leading-snug text-foreground text-balance md:text-4xl">
              "If you stood at the ford on a Saturday in 1885, you would have seen
              every kind of person Indian Territory had to offer."
            </p>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
