import type { Player } from "@/lib/team";
import { PlayerPhoto } from "./player-photo";

export function StarCard({ p }: { p: Player }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-primary/40 bg-card shadow-[0_20px_60px_-20px_var(--primary)]">
      <div className="relative">
        <PlayerPhoto p={p} className="aspect-[4/5] w-full transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">{p.tag}</span>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display text-5xl leading-none text-gold">{p.name}</h3>
          <p className="text-sm uppercase tracking-wide text-muted-foreground">{p.role} · {p.style}</p>
        </div>
      </div>
      {p.hype && <p className="border-t border-border p-5 italic text-foreground/90">“{p.hype}”</p>}
    </article>
  );
}
