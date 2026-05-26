import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { LANDMARKS, STEVENSON_LINEAGE } from "@/lib/historical-context";
import img from "@/assets/community.jpg";
import mapImg from "@/assets/territory-map.jpg";

export const Route = createFileRoute("/community")({
  component: Page,
  head: () => ({
    meta: [
      { title: "The Hopewell Community — Hopewell Cemetery Association" },
      {
        name: "description",
        content:
          "A Freedmen's sanctuary northeast of Cherokee Town — founded in the late 1860s by Chickasaw and Choctaw Freedmen along the Washita River.",
      },
      { property: "og:image", content: img },
    ],
  }),
});

const CEMETERY_SNIPPET =
  "Hopewell Cemetery — 4 miles north of Wynnewood, east of N County Road 3280 — remains the permanent monument.";

const sections = [
  {
    eyebrow: "I · Origins",
    title: "A Freedmen's sanctuary on the Washita.",
    body: `Founded in the late 1860s, the Hopewell Community was established ${LANDMARKS.hopewell.location.toLowerCase()} Its pioneers were Freedmen with deep, generational ties to the Choctaw and Chickasaw nations — families who survived forced removal and the Trail of Tears.`,
  },
  {
    eyebrow: "II · The anchor",
    title: "Log schoolhouse, church, and kinship.",
    body: LANDMARKS.hopewell.details[1],
  },
  {
    eyebrow: "III · The Stevenson & allied families",
    title: "Clearing land beside Cherokee Town.",
    body: `${STEVENSON_LINEAGE.fightForSovereignty} Patriarchs including ${STEVENSON_LINEAGE.patriarchs.join("; ")} — alongside the ${STEVENSON_LINEAGE.alliedFamilies.join(", ")} families — built dirt-floor log homes within weeks of arrival.`,
  },
  {
    eyebrow: "IV · Economy & endurance",
    title: "Cattle, allotment, and education.",
    body: STEVENSON_LINEAGE.buildingCommunity.slice(1, 4).join(" "),
  },
  {
    eyebrow: "V · Continuity",
    title: "What the railroad and statehood could not take.",
    body: `When the Santa Fe Railway bypassed Hopewell in 1906 and Oklahoma statehood followed in 1907, the town faded from official maps — but families kept returning to bury, remember, and insist this ground meant something. ${CEMETERY_SNIPPET}`,
  },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Chapter I"
        title="The Hopewell Community"
        subtitle="A Freedmen's sanctuary — log school, Sunday church, and generations who cleared the Washita valley."
        image={img}
      />

      <section className="py-32">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          {sections.map((s, i) => (
            <Reveal key={s.eyebrow} delay={i * 0.05}>
              <article className="border-t border-border py-16 first:border-t-0 first:pt-0">
                <p className="eyebrow">{s.eyebrow}</p>
                <h2 className="mt-6 font-serif text-3xl leading-tight text-foreground md:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {s.body}
                </p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <Link
              to="/history"
              className="mt-8 inline-block border-b border-primary pb-1 text-xs uppercase tracking-[0.28em] text-primary"
            >
              Full historical context →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="grain relative overflow-hidden border-y border-border">
        <div className="relative h-[60vh] min-h-[420px]">
          <img
            src={mapImg}
            alt="Antique map of Indian Territory"
            loading="lazy"
            className="h-full w-full object-cover opacity-60"
          />
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
