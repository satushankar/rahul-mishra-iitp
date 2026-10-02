"use client";

import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { allWorks, workYears, venueFamily, type Work } from "@/lib/works";
import { WorkCard } from "@/components/publications/work-card";

type SortKey = "year-desc" | "year-asc" | "title";

const KINDS = [
  { value: "all", label: "All" },
  { value: "journal", label: "Journals" },
  { value: "conference", label: "Conferences" },
] as const;

function matches(work: Work, query: string): boolean {
  if (!query) return true;
  // Match each whitespace-separated term against title, venue, authors,
  // keywords, type, and location. All terms must match (AND) for relevance.
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const haystack = [
    work.title,
    work.venue,
    work.type,
    work.location ?? "",
    work.authors.join(" "),
    work.keywords.join(" "),
  ]
    .join(" ")
    .toLowerCase();
  return terms.every((t) => haystack.includes(t));
}

export function PublicationsExplorer() {
  const router = useRouter();
  const params = useSearchParams();

  const q = params.get("q") ?? "";
  const kind = params.get("kind") ?? "all";
  const year = params.get("year") ?? "all";
  const ca = params.get("ca") === "1";
  const sort = (params.get("sort") as SortKey) ?? "year-desc";

  const setParam = useCallback(
    (key: string, value: string | null) => {
      const next = new URLSearchParams(params.toString());
      if (value === null || value === "" || value === "all" || value === "0") {
        next.delete(key);
      } else {
        next.set(key, value);
      }
      router.replace(`/publications?${next.toString()}`, { scroll: false });
    },
    [params, router],
  );

  const results = useMemo(() => {
    const filtered = allWorks.filter((w) => {
      if (kind !== "all" && w.kind !== kind) return false;
      if (year !== "all" && String(w.year) !== year) return false;
      if (ca && !w.correspondingAuthor) return false;
      if (!matches(w, q)) return false;
      return true;
    });
    filtered.sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      const ay = a.year ?? 0;
      const by = b.year ?? 0;
      return sort === "year-asc" ? ay - by : by - ay;
    });
    return filtered;
  }, [kind, year, ca, q, sort]);

  const hasFilters =
    q !== "" || kind !== "all" || year !== "all" || ca || sort !== "year-desc";

  return (
    <div className="flex flex-col gap-6">
      <h2 className="sr-only">Publication list</h2>
      {/* Controls */}
      <div className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-5 shadow-[var(--shadow-card)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
          <div className="flex flex-1 flex-col gap-1.5">
            <label htmlFor="pub-search" className="text-sm font-semibold text-ink">
              Search
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
                aria-hidden
              />
              <input
                id="pub-search"
                type="search"
                value={q}
                placeholder="Search by topic, title, author, or venue…"
                onChange={(e) => setParam("q", e.target.value)}
                className="h-11 w-full rounded-md border border-border bg-bg pl-9 pr-3 text-body outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-focus/40"
              />
            </div>
          </div>

          <Field label="Year" id="pub-year">
            <select
              id="pub-year"
              value={year}
              onChange={(e) => setParam("year", e.target.value)}
              className="h-11 rounded-md border border-border bg-bg px-3 text-body outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-focus/40"
            >
              <option value="all">All years</option>
              {workYears.map((y) => (
                <option key={y} value={String(y)}>
                  {y}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Sort" id="pub-sort">
            <select
              id="pub-sort"
              value={sort}
              onChange={(e) => setParam("sort", e.target.value)}
              className="h-11 rounded-md border border-border bg-bg px-3 text-body outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-focus/40"
            >
              <option value="year-desc">Newest first</option>
              <option value="year-asc">Oldest first</option>
              <option value="title">Title A–Z</option>
            </select>
          </Field>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div role="group" aria-label="Type" className="flex rounded-md border border-border p-0.5">
            {KINDS.map((k) => (
              <button
                key={k.value}
                type="button"
                aria-pressed={kind === k.value}
                onClick={() => setParam("kind", k.value)}
                className={`rounded px-3 py-1.5 text-sm font-semibold transition-colors ${
                  kind === k.value
                    ? "bg-primary text-white"
                    : "text-muted hover:text-ink"
                }`}
              >
                {k.label}
              </button>
            ))}
          </div>

          <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm font-semibold text-muted">
            <input
              type="checkbox"
              checked={ca}
              onChange={(e) => setParam("ca", e.target.checked ? "1" : "0")}
              className="h-4 w-4 accent-[var(--color-primary)]"
            />
            Corresponding author
          </label>

          {hasFilters && (
            <button
              type="button"
              onClick={() => router.replace("/publications", { scroll: false })}
              className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-semibold text-link hover:underline"
            >
              <X className="h-4 w-4" aria-hidden />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Result count (live) */}
      <p aria-live="polite" className="text-sm font-semibold text-muted">
        {results.length} {results.length === 1 ? "result" : "results"}
        {venueLabel(results)}
      </p>

      {/* Results */}
      {results.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2">
          {results.map((w) => (
            <WorkCard key={w.key} work={w} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-border bg-panel/40 p-12 text-center">
          <p className="font-display text-lg font-bold text-ink">
            {emptyMessage({ q, year, kind, ca })}
          </p>
          <p className="text-sm text-muted">
            Try a different keyword or broaden the filters.
          </p>
          <button
            type="button"
            onClick={() => router.replace("/publications", { scroll: false })}
            className="mt-2 inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}

function emptyMessage({
  q,
  year,
  kind,
  ca,
}: {
  q: string;
  year: string;
  kind: string;
  ca: boolean;
}): string {
  const kindWord =
    kind === "journal" ? "journal articles" : kind === "conference" ? "conference papers" : "publications";
  if (q) {
    return `No ${kindWord} found for “${q}”.`;
  }
  if (year !== "all") {
    return kind === "all"
      ? `No research papers published in ${year}.`
      : `No ${kindWord} published in ${year}.`;
  }
  if (ca) {
    return `No corresponding-author ${kindWord} match these filters.`;
  }
  return `No ${kindWord} match these filters.`;
}

function venueLabel(results: Work[]): string {
  if (results.length === 0) return "";
  const families = new Set(results.map((w) => venueFamily(w)));
  return families.size === 1 ? ` · ${[...families][0]}` : "";
}
