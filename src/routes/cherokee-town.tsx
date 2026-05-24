import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import img from "@/assets/cherokee-town.jpg";
import mapImg from "@/assets/territory-map.jpg";

export const Route = createFileRoute("/cherokee-town")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Cherokee Town — A vanished crossroads of Indian Territory" },
      { name: "description", content: "The history of Cherokee Town, the Washita River crossing, and its connection to Hopewell Cemetery." },
      { property: "og:image", content: img },
    ],
  }),
});

const chapters = [
  { num: "01", year: "c. 1840", title: "The crossing", body: "A natural ford on the Washita River drew Native traders, drovers, and travelers north and south. Long before any white settlement, this bend in the river had a name in Cherokee, in Chickasaw, and in the languages of the plains." },
  { num: "02", year: "c. 1850s", title: "The trading post", body: "A small store and stagecoach stop took root on the high ground above the ford. Cherokee Town — never large, never platted on most maps — served as the supply point for ranches, farms, and the Black and Native households spreading along the river." },
  { num: "03", year: "1860s–70s", title: "After the war", body: "Freedmen returning from the Civil War and from displacement east of the Mississippi gathered here. The town's economy ran on trade, cattle, and the constant movement of people between the tribal nations and the southern states." },
  { num: "04", year: "1880s–90s", title: "Hopewell rises", body: "A few miles from the trading post, the families established a church, a school, and the burial ground that would become Hopewell Cemetery. Cherokee Town was the marketplace; Hopewell was the home." },
  { num: "05", year: "Post-1907", title: "Erasure", body: "Statehood redrew the maps, and the railroads chose other towns. Cherokee Town faded from the official record. But the families of Hopewell never stopped saying its name." },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Chapter II · Documentary"
        title="Cherokee Town"
        subtitle="A trading settlement at the Washita River crossing — and the lost crossroads that made Hopewell possible."
        image={img}
      />

      {/* Cinematic chaptered scroll */}
      <section className="py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {chapters.map((c, i) => (
            <Reveal key={c.num} delay={0}>
              <article className={`grid gap-10 border-t border-border py-20 lg:grid-cols-12 ${i % 2 === 1 ? "" : ""}`}>
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
