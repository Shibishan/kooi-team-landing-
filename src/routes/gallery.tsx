import { createFileRoute } from "@tanstack/react-router";
import { ImageIcon } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
});

// Add photos here later: { src: "...", caption: "2011 – first match" }
const photos: { src: string; caption: string }[] = [];

function Gallery() {
  const slots = photos.length ? photos : Array.from({ length: 8 }, () => null);
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="font-semibold uppercase tracking-[0.3em] text-accent">Street to ground</p>
      <h1 className="font-display text-6xl text-gold md:text-8xl">Memories</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Old pictures from the streets of Poompukar, the curfew-time matches and our days on the ground — coming soon.</p>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {slots.map((p, i) =>
          p ? (
            <figure key={i} className="overflow-hidden rounded-2xl border border-primary/40 bg-card shadow-[0_20px_60px_-30px_var(--primary)]">
              <img src={p.src} alt={p.caption} className="aspect-square w-full object-cover" />
              <figcaption className="p-2 text-sm text-muted-foreground">{p.caption}</figcaption>
            </figure>
          ) : (
            <div key={i} className="grid aspect-square place-items-center rounded-2xl border-2 border-dashed border-primary/30 bg-card text-primary/60">
              <ImageIcon className="h-8 w-8" />
            </div>
          ),
        )}
      </div>
    </div>
  );
}
