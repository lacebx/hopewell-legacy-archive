import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import img from "@/assets/community.jpg";
import mapImg from "@/assets/territory-map.jpg";

export const Route = createFileRoute("/community")({
  component: Page,
  head: () => ({
    meta: [
      { title: "The Hopewell Community — Hopewell Cemetery Association" },
      { name: "description", content: "Origins, migration, and the Black and Native families who built the Hopewell Community in Indian Territory." },
      { property: "og:image", content: img },
    ],
  }),
});

const sections = [
  {
    eyebrow: "I · Origins",
    title: "A community born at the edge of two histories.",
    body: "The Hopewell Community formed in the late nineteenth century along the Washita River in what was then Indian Territory. Its founders were Freedmen of the Five Tribes and free-born Black families who had migrated west — many of them carrying both African and Native ancestry in the same household.",
  },
  {
    eyebrow: "II · The land",
    title: "Why this stretch of Washita riverbank.",
    body: "The land near Cherokee Town offered timber, water, and proximity to the trading post — the practical things a community needs. But it also offered something less measurable: distance from the violence of Reconstruction-era Texas, and the legal protection (however fragile) of the tribal nations.",
  },
  {
    eyebrow: "III · Kinship",
    title: "Black and Native, joined by treaty and by blood.",
    body: "The 1866 treaties between the United States and the Five Tribes recognized Freedmen as citizens of those nations. In Hopewell, that legal status was lived out daily — in marriages, in shared schoolhouses, in burial grounds where a Cherokee surname and a Freedman surname could rest side by side under the same oak.",
  },
  {
    eyebrow: "IV · Continuity",
    title: "What statehood took, the families kept.",
    body: "When Oklahoma became a state in 1907, the federal government dissolved much of the tribal infrastructure that had protected Freedmen citizens. Many Hopewell families lost land. None of them lost the cemetery. They kept coming back — to bury, to remember, to insist that this ground meant something.",
  },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Chapter I"
        title="The Hopewell Community"
        subtitle="Origins, migration, and the lives of the Black and Native families who built a home in Indian Territory."
        image={img}
      />

      <section className="py-32">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          {sections.map((s, i) => (
            <Reveal key={s.eyebrow} delay={i * 0.05}>
              <article className="border-t border-border py-16 first:border-t-0 first:pt-0">
                <p className="eyebrow">{s.eyebrow}</p>
                <h2 className="mt-6 font-serif text-3xl leading-tight text-foreground md:text-5xl">{s.title}</h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grain relative overflow-hidden border-y border-border">
        <div className="relative h-[60vh] min-h-[420px]">
          <img src={mapImg} alt="Antique map of Indian Territory" loading="lazy" className="h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <Reveal>
              <p className="max-w-3xl text-center font-serif text-2xl italic leading-snug text-foreground text-balance md:text-4xl">
                "We did not arrive in Oklahoma. Oklahoma arrived around us."
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
