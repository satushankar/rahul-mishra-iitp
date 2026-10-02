import { ArrowUpRight, MapPin } from "lucide-react";
import type { Work } from "@/lib/works";
import { Badge } from "@/components/ui/badge";
import { isFacultyAuthor } from "@/lib/format";

export function WorkCard({ work: w }: { work: Work }) {
  return (
    <article className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant={w.kind === "journal" ? "neutral" : "outline"}>
          {w.type}
        </Badge>
        {w.correspondingAuthor && (
          <Badge variant="accent">Corresponding Author</Badge>
        )}
        {w.year && (
          <span className="ml-auto text-sm font-bold tabular-nums text-faint">
            {w.year}
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold leading-snug text-ink">
        {w.url ? (
          <a
            href={w.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            {w.title}
          </a>
        ) : (
          w.title
        )}
      </h3>

      <p className="text-sm leading-relaxed text-muted">
        {w.authors.map((a, i) => (
          <span key={`${a}-${i}`}>
            <span className={isFacultyAuthor(a) ? "font-bold text-ink" : ""}>
              {a}
            </span>
            {i < w.authors.length - 1 && ", "}
          </span>
        ))}
      </p>

      <p className="text-sm italic text-muted">{w.venue}</p>

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-sm">
        {w.location && (
          <span className="inline-flex items-center gap-1 text-faint">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            {w.location}
          </span>
        )}
        {w.status && (
          <span className="text-faint">{w.status}</span>
        )}
        {w.url && (
          <a
            href={w.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-link transition-colors hover:text-primary"
          >
            View on DOI
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}
