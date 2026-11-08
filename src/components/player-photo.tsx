import { User } from "lucide-react";
import type { Player } from "@/lib/team";

export function PlayerPhoto({ p, className = "" }: { p: Player; className?: string }) {
  return p.photo ? (
    <img src={p.photo} alt={p.name} className={`object-cover ${className}`} />
  ) : (
    <div className={`grid place-items-center bg-secondary text-muted-foreground ${className}`}>
      <div className="flex flex-col items-center gap-1">
        <User className="h-1/3 w-1/3 min-h-10 min-w-10 opacity-60" />
        <span className="text-[10px] uppercase tracking-widest opacity-60">Photo soon</span>
      </div>
    </div>
  );
}
