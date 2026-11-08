import { createFileRoute } from "@tanstack/react-router";
import { squad } from "@/lib/team";
import { PlayerPhoto } from "@/components/player-photo";
import { StarCard } from "@/components/star-card";

export const Route = createFileRoute("/squad")({
  component: Squad,
});

function Squad() {
  const stars = squad.filter((p) => p.tag);
  const rest = squad.filter((p) => !p.tag);
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="font-semibold uppercase tracking-[0.3em] text-accent">Current squad</p>
      <h1 className="font-display text-6xl text-gold md:text-8xl">The Squad</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {stars.map((p) => <StarCard key={p.name} p={p} />)}
      </div>
      <h2 className="mt-14 font-display text-4xl text-gold">The Pack</h2>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {rest.map((p) => (
          <div key={p.name} className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary">
            <PlayerPhoto p={p} className="aspect-square w-full" />
            <div className="p-4">
              <p className="font-display text-2xl leading-tight">{p.name}</p>
              <p className="text-xs uppercase tracking-wide text-accent">{p.role}</p>
              <p className="text-sm text-muted-foreground">{p.style}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
