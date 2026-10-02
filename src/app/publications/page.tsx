import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { YearTimeline } from "@/components/publications/year-timeline";
import { PublicationsExplorer } from "@/components/publications/publications-explorer";
import { profile } from "@/data/profile";
import { publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Complete publication record of Dr. Rahul Mishra — 29 journal articles and 16 conference papers across IEEE Transactions, ACM, and A*/A venues. Filter by year, type, and corresponding-author role.",
};

const articlesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: publications.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "ScholarlyArticle",
      headline: p.title,
      author: p.authors.map((name) => ({ "@type": "Person", name })),
      isPartOf: p.venue,
      datePublished: p.year ? String(p.year) : undefined,
      ...(p.doi ? { sameAs: `https://doi.org/${p.doi}` } : {}),
    },
  })),
};

export default function PublicationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articlesJsonLd) }}
      />
      <PageHeader
        eyebrow="Scholarship"
        title="Publications"
        description={`${profile.stats.journals} peer-reviewed journal articles and ${profile.stats.conferences} conference papers across top-tier IEEE Transactions, ACM, and A*/A venues.`}
      />

      <Container className="flex flex-col gap-10 py-section">
        <YearTimeline />
        <Suspense fallback={<p className="text-muted">Loading publications…</p>}>
          <PublicationsExplorer />
        </Suspense>
      </Container>
    </>
  );
}
