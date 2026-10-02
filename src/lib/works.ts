import { publications } from "@/data/publications";
import { conferences } from "@/data/conferences";
import type { Publication, Conference } from "@/data/types";

export type WorkKind = "journal" | "conference";

export interface Work {
  key: string;
  kind: WorkKind;
  title: string;
  authors: string[];
  venue: string;
  year: number | null;
  type: string; // facet label
  correspondingAuthor: boolean;
  url: string | null;
  status: string | null;
  meta: string; // citation-ish line
  location: string | null;
  keywords: string[];
}

const VENUE_FAMILIES: { label: string; test: (v: string) => boolean }[] = [
  { label: "IEEE Transactions", test: (v) => /IEEE Transactions/i.test(v) },
  {
    label: "IEEE Journal / Letters / Magazine",
    test: (v) =>
      /IEEE (Sensors Journal|Internet of Things Journal|Journal of|Sensors Letters|Access|Consumer Electronics|Internet of Things Magazine)/i.test(
        v,
      ),
  },
  { label: "ACM", test: (v) => /ACM/i.test(v) },
  { label: "IEEE Conference", test: (v) => /IEEE|INFOCOM|WoWMoM|COMSNETS|WCNC|ANTS|WF-IoT|INDICON/i.test(v) },
  { label: "ACM Conference", test: (v) => /ACM|BuildSys|SenSys|MSWIM/i.test(v) },
  { label: "Springer / Elsevier", test: (v) => /Innovative|Multimedia|Journal of Network/i.test(v) },
];

export function venueFamily(work: Work): string {
  const source = work.kind === "journal" ? work.venue : work.venue;
  if (work.kind === "conference") {
    if (/ACM|BuildSys|SenSys|MSWIM/i.test(source)) return "ACM Conference";
    return "IEEE / Other Conference";
  }
  const match = VENUE_FAMILIES.find((f) => f.test(source));
  return match ? match.label : "Other";
}

function journalToWork(p: Publication): Work {
  const loc: string[] = [];
  if (p.volume) loc.push(`vol. ${p.volume}`);
  if (p.issue) loc.push(`no. ${p.issue}`);
  if (p.pages) loc.push(`pp. ${p.pages}`);
  return {
    key: `j-${p.id}`,
    kind: "journal",
    title: p.title,
    authors: p.authors,
    venue: p.venue,
    year: p.year,
    type: p.type,
    correspondingAuthor: p.correspondingAuthor,
    url: p.url,
    status: p.status ?? null,
    meta: [p.venue, ...loc, p.year].filter(Boolean).join(", "),
    location: null,
    keywords: p.keywords,
  };
}

function conferenceToWork(c: Conference): Work {
  return {
    key: `c-${c.id}`,
    kind: "conference",
    title: c.title,
    authors: c.authors,
    venue: c.conference,
    year: c.year,
    type: "Conference",
    correspondingAuthor: false,
    url: null,
    status: c.status,
    meta: [c.conference, c.location, c.year].filter(Boolean).join(", "),
    location: c.location,
    keywords: [],
  };
}

export const allWorks: Work[] = [
  ...publications.map(journalToWork),
  ...conferences.map(conferenceToWork),
];

export const workYears: number[] = Array.from(
  new Set(allWorks.map((w) => w.year).filter((y): y is number => y !== null)),
).sort((a, b) => b - a);

export const workTypes: string[] = Array.from(
  new Set(allWorks.map((w) => w.type)),
).sort();

export const venueFamilies: string[] = Array.from(
  new Set(allWorks.map((w) => venueFamily(w))),
).sort();

/** Per-year counts for the timeline (journals vs conferences). */
export function perYearCounts(): {
  year: number;
  journals: number;
  conferences: number;
  total: number;
}[] {
  const map = new Map<number, { journals: number; conferences: number }>();
  for (const w of allWorks) {
    if (w.year === null) continue;
    const entry = map.get(w.year) ?? { journals: 0, conferences: 0 };
    if (w.kind === "journal") entry.journals += 1;
    else entry.conferences += 1;
    map.set(w.year, entry);
  }
  return Array.from(map.entries())
    .map(([year, v]) => ({
      year,
      journals: v.journals,
      conferences: v.conferences,
      total: v.journals + v.conferences,
    }))
    .sort((a, b) => a.year - b.year);
}
