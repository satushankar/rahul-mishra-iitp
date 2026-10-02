import { ArrowUpRight } from "lucide-react";
import type { Publication } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { isFacultyAuthor, citationMeta } from "@/lib/format";
import { cn } from "@/lib/utils";

interface PublicationCardProps {
  publication: Publication;
  className?: string;
}

export function PublicationCard({
  publication: p,
  className,
}: PublicationCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col gap-3 rounded-lg border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]",
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="neutral">{p.type}</Badge>
        {p.correspondingAuthor && (
          <Badge variant="accent">Corresponding Author</Badge>
        )}
        {p.status && <Badge variant="outline">{p.status}</Badge>}
        {p.year && (
          <span className="ml-auto text-sm font-semibold tabular-nums text-faint">
            {p.year}
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold leading-snug text-ink">
        {p.url ? (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary focus-visible:text-primary"
          >
            {p.title}
          </a>
        ) : (
          p.title
        )}
      </h3>

      <p className="text-sm leading-relaxed text-muted">
        {p.authors.map((author, i) => (
          <span key={`${author}-${i}`}>
            <span className={isFacultyAuthor(author) ? "font-bold text-ink" : ""}>
              {author}
            </span>
            {i < p.authors.length - 1 && ", "}
          </span>
        ))}
      </p>

      <p className="text-sm italic text-muted">{citationMeta(p)}</p>

      {p.url && (
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex w-fit items-center gap-1 text-sm font-semibold text-link transition-colors hover:text-primary"
        >
          View on DOI
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      )}
    </article>
  );
}
