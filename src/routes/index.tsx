import { createFileRoute, Link } from "@tanstack/react-router";
const logo = { url: "/kooi-logo.jpeg" };
import { squad } from "@/lib/team";
import { StarCard } from "@/components/star-card";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const leaders = squad.filter((p) => p.tag);
  return (
    <div>
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-12 text-center md:flex-row md:text-left">
        <img src={logo.url} alt="KOOI TEAM crest" className="w-64 rounded-3xl bg-foreground p-2 md:w-96" />
        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-accent">Poompukar · Batticaloa</p>
          <h1 className="font-display text-7xl leading-none text-gold md:text-9xl">KOOI TEAM</h1>
          <p className="mt-4 max-w-lg text-lg text-muted-foreground">A pack of friends who started playing cricket on the streets of Poompukar in 2010 — and never stopped.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link to="/squad" className="rounded-md bg-gold px-6 py-3 font-bold uppercase text-primary-foreground">Meet the Squad</Link>
            <Link to="/history" className="rounded-md border border-primary px-6 py-3 font-bold uppercase text-primary">Our Story</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl grid-cols-3 gap-3 px-4">
        {[["2010", "Founded"], ["11", "Players"], ["2014", "Named KOOI"]].map(([n, l]) => (
          <div key={l} className="rounded-lg border border-border bg-card p-4 text-center">
            <p className="font-display text-4xl text-gold md:text-5xl">{n}</p>
            <p className="text-xs uppercase tracking-wide text-muted-foreground md:text-sm">{l}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto mt-16 max-w-6xl px-4">
        <p className="font-semibold uppercase tracking-[0.3em] text-accent">Leaders of the pack</p>
        <h2 className="font-display text-5xl text-gold md:text-7xl">Our Stars</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {leaders.map((p) => <StarCard key={p.name} p={p} />)}
        </div>
      </section>
    </div>
  );
}
