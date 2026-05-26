import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import hero from "@/assets/headstone.jpg";
import a from "@/assets/family-archive.jpg";
import b from "@/assets/community.jpg";
import c from "@/assets/cherokee-town.jpg";
import d from "@/assets/territory-map.jpg";
import e from "@/assets/ledger.jpg";
import f from "@/assets/hero-cemetery.jpg";

export const Route = createFileRoute("/gallery")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Gallery | Hopewell Cemetery Association" },
      { name: "description", content: "Photographs, maps, scanned documents, and historical references from the Hopewell archive." },
      { property: "og:image", content: hero },
    ],
  }),
});

const plates = [
  { src: a, caption: "Composite family portrait, c. 1890s", span: "row-span-2" },
  { src: b, caption: "Hopewell congregation, undated", span: "" },
  { src: f, caption: "Hopewell Cemetery, aerial view", span: "" },
  { src: c, caption: "Washita River crossing at dawn", span: "row-span-2" },
  { src: d, caption: "Cherokee Territory map, 19th c.", span: "" },
  { src: e, caption: "Ledger fragment, names of the interred", span: "" },
  { src: hero, caption: "Single headstone, west pasture", span: "" },
];

function Page() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <PageShell>
      <PageHero
        eyebrow="Chapter IV · Plates"
        title="The Gallery"
        subtitle="A visual record, photographs, maps, and documents preserved for the families and for the historical memory of Indian Territory."
        image={hero}
      />

      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[300px] lg:grid-cols-4">
            {plates.map((p, i) => (
              <Reveal key={i} delay={i * 0.04} className={p.span}>
                <button
                  onClick={() => setOpen(i)}
                  className={`group relative block h-full w-full overflow-hidden border border-border bg-card ${p.span}`}
                >
                  <img src={p.src} alt={p.caption} loading="lazy" className="h-full w-full object-cover opacity-80 grayscale-[15%] transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary">Plate {String(i + 1).padStart(2, "0")}</p>
                    <p className="mt-1 font-serif text-sm italic text-foreground">{p.caption}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-6 backdrop-blur-md"
          onClick={() => setOpen(null)}
        >
          <div className="relative max-h-[90vh] max-w-5xl">
            <img src={plates[open].src} alt={plates[open].caption} className="max-h-[80vh] w-auto object-contain" />
            <p className="mt-4 text-center font-serif text-sm italic text-muted-foreground">
              Plate {String(open + 1).padStart(2, "0")}, {plates[open].caption}
            </p>
            <button
              onClick={() => setOpen(null)}
              className="absolute -top-12 right-0 text-xs uppercase tracking-[0.28em] text-primary"
            >
              Close ×
            </button>
          </div>
        </div>
      )}
    </PageShell>
  );
}
