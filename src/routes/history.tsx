import { createFileRoute, Link } from "@tanstack/react-router";
import { timeline } from "@/lib/team";

export const Route = createFileRoute("/history")({
  component: History,
});

function History() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <p className="font-semibold uppercase tracking-[0.3em] text-accent">Since 2010</p>
      <h1 className="font-display text-6xl text-gold md:text-8xl">Our Story</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">From the street to our own ground — the journey of a pack that never stopped playing.</p>
      <ol className="mt-10 border-l-2 border-primary/40">
        {timeline.map((t) => (
          <li key={t.title} className="relative mb-8 pl-8">
            <span className="absolute -left-[11px] top-6 h-5 w-5 rounded-full bg-gold shadow-[0_0_20px_var(--primary)]" />
            <div className="rounded-2xl border border-primary/30 bg-card p-6 shadow-[0_20px_60px_-30px_var(--primary)]">
              <p className="font-bold uppercase tracking-widest text-accent">{t.years}</p>
              <h2 className="font-display text-4xl text-gold">{t.title}</h2>
              <p className="mt-2 text-foreground/85">{t.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="/squad" className="rounded-md bg-gold px-6 py-3 font-bold uppercase text-primary-foreground">Meet the Squad</Link>
        <Link to="/gallery" className="rounded-md border border-primary px-6 py-3 font-bold uppercase text-primary">See Memories</Link>
      </div>
    </div>
  );
}
