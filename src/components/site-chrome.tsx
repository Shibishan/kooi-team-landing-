import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const logo = { url: "/kooi-logo.jpeg" };

const links = [
  { to: "/", label: "Home" },
  { to: "/history", label: "History" },
  { to: "/squad", label: "Squad" },
  { to: "/gallery", label: "Gallery" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="KOOI TEAM logo" className="h-10 w-10 shrink-0 rounded-full bg-foreground object-contain" />
          <span className="truncate font-display text-2xl tracking-wider text-gold">KOOI TEAM</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-foreground" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col border-t border-border px-4 pb-4 md:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-3 font-semibold uppercase tracking-wide text-muted-foreground" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border py-8 text-center text-sm text-muted-foreground">
      <p className="font-display text-xl tracking-widest text-gold">KOOI TEAM</p>
      <p>Poompukar, Batticaloa · Playing together since 2010</p>
    </footer>
  );
}
