import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { DustCanvas } from "@/components/dust-canvas";
import { ConstellationCanvas } from "@/components/constellation-canvas";
import { EraTimeline } from "@/components/era-timeline";
import heroImg from "@/assets/hero-cemetery.jpg";
import mapImg from "@/assets/territory-map.jpg";
import familyImg from "@/assets/family-archive.jpg";
import cherokeeImg from "@/assets/cherokee-town.jpg";
import headstoneImg from "@/assets/headstone.jpg";
import communityImg from "@/assets/community.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Hopewell Cemetery Association — Before Oklahoma was Oklahoma" },
      { name: "description", content: "A sacred digital archive preserving the history, lineage, and legacy of the Hopewell Community, Cherokee Town, and the families of Indian Territory." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
});

const timeline = [
  { year: "Pre-1830", title: "Native Homelands", body: "Before removal, the lands along the Washita were home to Indigenous peoples whose presence shaped every trail, river crossing, and gathering ground." },
  { year: "1830s", title: "The Removal Era", body: "The Cherokee, Choctaw, Chickasaw, and others were forced west into Indian Territory — carrying with them the Black families bound to them by slavery and, eventually, by kinship." },
  { year: "1860s", title: "Emancipation in the Territory", body: "Treaties of 1866 recognized Freedmen of the tribes. Communities of Black and Native families began to root themselves to the land in their own right." },
  { year: "Late 1800s", title: "Cherokee Town & Hopewell", body: "A trading settlement on the Washita River crossing — Cherokee Town — anchored the surrounding farms, churches, and the small community known as Hopewell." },
  { year: "1907 →", title: "Statehood & Forgetting", body: "Oklahoma statehood erased many of these places from the official map. The headstones, the names, the kinships — they remained. Quietly. Patiently. Waiting." },
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <PageShell>
      {/* HERO */}
      <section ref={heroRef} className="relative grain vignette h-[100svh] min-h-[700px] w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={heroImg} alt="Hopewell Cemetery at golden hour" className="h-[120%] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
        </motion.div>

        {/* Drifting archival dust — Three.js */}
        <DustCanvas className="pointer-events-none absolute inset-0 z-[5]" />

        <motion.div style={{ opacity }} className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3 }}
            className="eyebrow"
          >
            Est. preservation · Indian Territory · Oklahoma
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-5xl font-serif text-5xl leading-[1.02] tracking-tight text-foreground text-balance md:text-7xl lg:text-[5.5rem]"
          >
            Before Oklahoma was Oklahoma,
            <br />
            <span className="italic text-primary/90">there was Hopewell.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1.1 }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            A sacred digital archive preserving the history, lineage, and legacy
            of the Hopewell Community, Cherokee Town, and the families connected
            to Indian Territory.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/community"
              className="group relative inline-flex items-center gap-3 border border-primary bg-primary px-8 py-4 text-xs uppercase tracking-[0.28em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
            >
              Explore the Legacy
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/archive"
              className="inline-flex items-center gap-3 border border-border px-8 py-4 text-xs uppercase tracking-[0.28em] text-foreground transition-all hover:border-primary hover:text-primary"
            >
              View Historical Archive
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">Scroll</span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="h-12 w-px bg-gradient-to-b from-primary to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* MISSION */}
      <section className="relative overflow-hidden border-y border-border bg-[oklch(0.16_0.01_55)] py-32">
        {/* Three.js constellation — kinship as star chart */}
        <ConstellationCanvas className="pointer-events-none absolute inset-0 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.16_0.01_55)_75%)]" />

        <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow text-center">Our Mission</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-10 max-w-4xl text-center font-serif text-3xl leading-[1.3] text-foreground text-balance md:text-5xl">
              We preserve the ground, the names, and the stories of those who
              built — and were buried in — the Hopewell Community, so that{" "}
              <span className="italic text-primary">no descendant ever again has to wonder if they came from somewhere.</span>
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mx-auto mt-12 hairline w-32" />
          </Reveal>
        </div>
      </section>

      {/* INTERACTIVE 3D TIMELINE */}
      <section className="relative py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16 max-w-3xl">
            <Reveal>
              <p className="eyebrow">A history in five movements</p>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground md:text-6xl">
                The land remembers what the map forgot.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Each cluster in the constellation marks an era. Select one to
                illuminate its stars — and the archival rooms that carry its
                record forward.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <EraTimeline />
          </Reveal>
        </div>
      </section>


      {/* FEATURED IMAGE — territory map */}
      <section className="relative grain overflow-hidden border-y border-border">
        <div className="relative h-[70vh] min-h-[500px] w-full">
          <img src={mapImg} alt="Antique map of Indian Territory" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-6 lg:px-10">
            <Reveal>
              <div className="max-w-xl">
                <p className="eyebrow">Cartography of memory</p>
                <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground md:text-6xl">
                  Cherokee Town stood here — at the crossing.
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Stagecoaches, trade routes, and migration paths converged at
                  the Washita River. What looks like empty land on a modern map
                  was, for a generation, the center of someone's world.
                </p>
                <Link
                  to="/cherokee-town"
                  className="mt-8 inline-block border-b border-primary pb-1 text-xs uppercase tracking-[0.28em] text-primary"
                >
                  Walk the route →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 border border-primary/30" />
                <img src={familyImg} alt="Archival family portrait, late 1800s" loading="lazy" className="relative w-full" />
                <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                  Plate I — composite archival portrait, c. 1890s
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <p className="eyebrow">Why this matters</p>
                <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground md:text-6xl">
                  Identity is restored one name at a time.
                </h2>
                <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
                  <p>
                    For more than a century, the Black and Native families of
                    the Hopewell Community lived at the intersection of two
                    erasures — written out of state history, and pushed to the
                    edges of tribal rolls.
                  </p>
                  <p>
                    Their headstones still stand. Their kinships still hold.
                    Their stories — once spoken in kitchens, churches, and
                    porches — are being gathered here, deliberately, with
                    reverence.
                  </p>
                  <p className="font-serif text-2xl italic leading-snug text-foreground">
                    "When the names return, the people return."
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PREVIEW CARDS */}
      <section className="border-t border-border bg-[oklch(0.15_0.01_55)] py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Enter the archive</p>
                <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-foreground md:text-6xl">
                  Six rooms in the preserved memory.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {[
              { to: "/community", num: "I", title: "The Hopewell Community", body: "Origins, migration, settlement, kinship.", img: communityImg },
              { to: "/cherokee-town", num: "II", title: "Cherokee Town", body: "Trade routes, the Washita crossing, frontier life.", img: cherokeeImg },
              { to: "/archive", num: "III", title: "Family Legacy Archive", body: "Stories, obituaries, lineages, oral histories.", img: familyImg },
              { to: "/gallery", num: "IV", title: "Gallery", body: "Photographs, documents, newspaper clippings.", img: headstoneImg },
              { to: "/map", num: "V", title: "Cemetery Map", body: "Burial records and the ground that holds them.", img: heroImg },
              { to: "/preservation", num: "VI", title: "Preservation", body: "How we protect, restore, and continue.", img: mapImg },
            ].map((card, i) => (
              <Reveal key={card.to} delay={i * 0.05}>
                <Link to={card.to} className="group relative block h-full overflow-hidden bg-background">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={card.img} alt="" loading="lazy" className="h-full w-full object-cover opacity-50 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-70" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <p className="font-serif text-sm italic text-primary">— {card.num} —</p>
                    <h3 className="mt-3 font-serif text-2xl text-foreground md:text-3xl">{card.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{card.body}</p>
                    <span className="mt-6 text-xs uppercase tracking-[0.28em] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Enter →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative grain vignette overflow-hidden py-40">
        <div className="absolute inset-0">
          <img src={headstoneImg} alt="" loading="lazy" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Reveal>
            <p className="font-serif text-3xl italic leading-[1.3] text-foreground text-balance md:text-5xl">
              "Every headstone is a sentence the land has been holding,
              waiting for someone to read it aloud."
            </p>
            <p className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.32em] text-primary">
              — From the founding statement
            </p>
          </Reveal>
        </div>
      </section>

      {/* DONATION CTA */}
      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-10">
          <Reveal>
            <p className="eyebrow">Help carry it forward</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight text-foreground text-balance md:text-6xl">
              Help preserve what history tried to forget.
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
              The Hopewell Cemetery Association is a 501(c)(3) nonprofit. Every
              contribution — financial, ancestral, or oral — protects ground that
              has waited a long time to be remembered.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link to="/preservation" className="border border-primary bg-primary px-10 py-4 text-xs uppercase tracking-[0.28em] text-primary-foreground transition hover:bg-transparent hover:text-primary">
                Support Preservation
              </Link>
              <Link to="/contact" className="border border-border px-10 py-4 text-xs uppercase tracking-[0.28em] text-foreground transition hover:border-primary hover:text-primary">
                Submit Family History
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
