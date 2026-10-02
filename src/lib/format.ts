import type { Publication } from "@/data/types";

const FACULTY_KEYS = ["r. mishra", "rahul mishra"];

export function isFacultyAuthor(name: string): boolean {
  return FACULTY_KEYS.includes(name.trim().toLowerCase());
}

/** Recent journals with a known year, newest first, limited. */
export function featuredPublications(
  pubs: Publication[],
  limit = 3,
): Publication[] {
  return [...pubs]
    .filter((p) => p.year !== null)
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0) || a.id - b.id)
    .slice(0, limit);
}

/** Compact venue + year + locator line for a publication. */
export function citationMeta(p: Publication): string {
  const parts: string[] = [p.venue];
  if (p.volume) parts.push(`vol. ${p.volume}`);
  if (p.issue) parts.push(`no. ${p.issue}`);
  if (p.pages) parts.push(`pp. ${p.pages}`);
  if (p.year) parts.push(String(p.year));
  return parts.join(", ");
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
