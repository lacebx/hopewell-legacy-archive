import type { ReactNode } from "react";

export function ArchivalFigure({
  src,
  alt,
  caption,
  source,
  children,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  source: { label: string; href: string };
  children?: ReactNode;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="overflow-hidden border border-border">
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <figcaption className="mt-4 space-y-2">
        <p className="text-sm leading-relaxed text-muted-foreground">{caption}</p>
        <a
          href={source.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-mono text-[0.6rem] uppercase tracking-[0.24em] text-primary hover:underline"
        >
          Source: {source.label} ↗
        </a>
        {children}
      </figcaption>
    </figure>
  );
}
