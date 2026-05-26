import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-[oklch(0.14_0.01_55)]">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">In memoriam · est. preservation</p>
            <h3 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Hopewell Cemetery Association
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              A 501(c)(3) nonprofit devoted to preserving the history, lineage,
              and sacred ground of the Hopewell Community, Cherokee Town, and
              the Black and Native families of Indian Territory.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow">Archive</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/history" className="hover:text-primary">Historical Context</Link></li>
              <li><Link to="/community" className="hover:text-primary">The Hopewell Community</Link></li>
              <li><Link to="/cherokee-town" className="hover:text-primary">Cherokee Town</Link></li>
              <li><Link to="/archive" className="hover:text-primary">Family Legacy Archive</Link></li>
              <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
              <li><Link to="/map" className="hover:text-primary">Cemetery Map</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="eyebrow">Correspondence</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Thomas Clark · Board Member</li>
              <li>
                <a href="mailto:HopewellLegacyOK@gmail.com" className="hover:text-primary">
                  HopewellLegacyOK@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+14054130526" className="hover:text-primary">
                  405 · 413 · 0526
                </a>
              </li>
              <li>Oklahoma · United States</li>
            </ul>
            <Link
              to="/preservation"
              className="mt-6 inline-block border-b border-primary pb-1 text-xs uppercase tracking-[0.28em] text-primary hover:opacity-80"
            >
              Support Preservation →
            </Link>
          </div>
        </div>

        <div className="mt-16 hairline" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Hopewell Cemetery Association · 501(c)(3)</span>
          <span className="font-serif italic normal-case tracking-wide text-primary/80">
            "Help preserve what history tried to forget."
          </span>
        </div>
      </div>
    </footer>
  );
}
