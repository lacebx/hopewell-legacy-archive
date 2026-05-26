import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import { ArchivalFigure } from "@/components/archival-figure";
import { Reveal } from "@/components/reveal";
import heroImg from "@/assets/hero-cemetery.jpg";
import mapImg from "@/assets/territory-map.jpg";
import familyImg from "@/assets/family-archive.jpg";
import cherokeeImg from "@/assets/cherokee-town.jpg";
import communityImg from "@/assets/community.jpg";
import {
  ARCHIVAL_SOURCES,
  CEMETERY_LEGACY,
  CROSSROADS_INTRO,
  LANDMARKS,
  STEVENSON_LINEAGE,
} from "@/lib/historical-context";

export const Route = createFileRoute("/history")({
  component: Page,
  head: () => ({
    meta: [
      {
        title:
          "The Crossroads of Freedom — Cherokee Town, Hopewell & the Stevenson Legacy",
      },
      {
        name: "description",
        content:
          "Historical context linking Cherokee Town, the Hopewell Community, and Chickasaw Freedmen families along the Washita River in Indian Territory.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
});

function Page() {
  const sources = Object.fromEntries(ARCHIVAL_SOURCES.map((s) => [s.id, s]));

  return (
    <PageShell>
      <PageHero
        eyebrow="Historical context"
        title="The Crossroads of Freedom"
        subtitle="Cherokee Town, the Hopewell Community, and the Stevenson lineage of Chickasaw Freedmen — five miles apart along the Washita, forever linked in memory."
        image={heroImg}
      />

      <section className="py-24">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <Reveal>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {CROSSROADS_INTRO}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Two landmarks */}
      <section className="border-y border-border bg-[oklch(0.15_0.01_55)] py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow text-center">Two connected landmarks</p>
            <h2 className="mx-auto mt-6 max-w-3xl text-center font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Five miles apart along the Washita — before Oklahoma was Oklahoma.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            {(
              [
                { key: "cherokeeTown" as const, image: cherokeeImg, to: "/cherokee-town" },
                { key: "hopewell" as const, image: communityImg, to: "/community" },
              ] as const
            ).map(({ key, image, to }) => {
              const site = LANDMARKS[key];
              return (
                <Reveal key={key}>
                  <article className="border border-border bg-background">
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover opacity-70"
                    />
                    <div className="p-8 md:p-10">
                      <p className="eyebrow">{site.subtitle}</p>
                      <h3 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
                        {site.title}
                      </h3>
                      <p className="mt-4 font-mono text-xs uppercase tracking-[0.22em] text-primary">
                        {site.location}
                      </p>
                      <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                        {site.details.map((d) => (
                          <li key={d.slice(0, 40)}>{d}</li>
                        ))}
                      </ul>
                      <Link
                        to={to}
                        className="mt-8 inline-block border-b border-primary pb-1 text-xs uppercase tracking-[0.28em] text-primary"
                      >
                        Explore →
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Washita banner */}
      <section className="grain relative overflow-hidden">
        <img
          src={mapImg}
          alt="Historic map of Indian Territory"
          loading="lazy"
          className="h-[50vh] min-h-[360px] w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 flex items-center px-6 lg:px-10">
          <Reveal className="mx-auto max-w-[1400px]">
            <p className="eyebrow">Geography of memory</p>
            <p className="mt-6 max-w-2xl font-serif text-2xl italic leading-snug text-foreground md:text-4xl">
              The Washita River corridor — where ford, trade route, and Freedmen
              settlement met on the same stretch of water.
            </p>
            <a
              href={sources["washita-landscape"].href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-mono text-[0.6rem] uppercase tracking-[0.28em] text-primary hover:underline"
            >
              {sources["washita-landscape"].institution} ↗
            </a>
          </Reveal>
        </div>
      </section>

      {/* Stevenson legacy */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-start gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <ArchivalFigure
                src={familyImg}
                alt="Archival photograph of Chickasaw Freedmen families"
                caption="The Stevenson legacy and the fight for sovereignty — families who cleared the Washita valley, secured allotments, and held kinship through removal, emancipation, and statehood."
                source={{
                  label: sources["freedmen-photo"].institution,
                  href: sources["freedmen-photo"].href,
                }}
              />
            </Reveal>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <p className="eyebrow">Stevenson lineage</p>
                <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground md:text-5xl">
                  {STEVENSON_LINEAGE.title}
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <h3 className="mt-10 font-serif text-2xl text-foreground">
                  The fight for sovereignty
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {STEVENSON_LINEAGE.fightForSovereignty}
                </p>
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-primary">
                  Foundational patriarchs & matriarchs
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {STEVENSON_LINEAGE.patriarchs.map((name) => (
                    <li key={name}>· {name}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  Allied pioneer families: {STEVENSON_LINEAGE.alliedFamilies.join(", ")}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <h3 className="mt-12 font-serif text-2xl text-foreground">
                  Building a community
                </h3>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  {STEVENSON_LINEAGE.buildingCommunity.map((item) => (
                    <li key={item.slice(0, 48)}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Railway & statehood */}
      <section className="border-y border-border py-24">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow">1906 – 1907</p>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              The rise of rail & the fading towns
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              {STEVENSON_LINEAGE.railwayEra}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Living legacy */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <ArchivalFigure
                src={heroImg}
                alt="Hopewell Cemetery"
                caption={CEMETERY_LEGACY.body}
                source={{
                  label: sources["cemetery-sign"].institution,
                  href: sources["cemetery-sign"].href,
                }}
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary">
                  {CEMETERY_LEGACY.location}
                </p>
              </ArchivalFigure>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">The living legacy</p>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground md:text-5xl">
                Hopewell Cemetery endures
              </h2>
              <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                This historic Freedmen burial ground holds the remains of original
                trailblazers, Black cowboys, military veterans, and generations of
                their descendants — while the Stevenson family continues to steward
                the story.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/map"
                  className="border border-primary bg-primary px-8 py-3 text-xs uppercase tracking-[0.28em] text-primary-foreground transition hover:bg-transparent hover:text-primary"
                >
                  Cemetery map
                </Link>
                <Link
                  to="/archive"
                  className="border border-border px-8 py-3 text-xs uppercase tracking-[0.28em] text-foreground transition hover:border-primary hover:text-primary"
                >
                  Family archive
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Archival references */}
      <section className="border-t border-border bg-[oklch(0.14_0.01_52)] py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow">Visual references</p>
            <h2 className="mt-6 font-serif text-3xl text-foreground md:text-4xl">
              Archival sources for designers & researchers
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {ARCHIVAL_SOURCES.map((src, i) => (
              <Reveal key={src.id} delay={i * 0.04}>
                <li className="border border-border bg-background p-8">
                  <h3 className="font-serif text-xl text-foreground">{src.title}</h3>
                  <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-primary">
                    {src.institution}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {src.designNote}
                  </p>
                  <a
                    href={src.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-xs uppercase tracking-[0.28em] text-primary hover:underline"
                  >
                    View source ↗
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
