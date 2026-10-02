import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { publications } from "@/data/publications";
import { featuredPublications } from "@/lib/format";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PublicationCard } from "@/components/publication-card";

export function FeaturedPublications() {
  const featured = featuredPublications(publications, 3);

  return (
    <section className="bg-panel/40 py-section">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Selected Work"
            title="Recent Publications"
            description="Latest peer-reviewed research. Browse the full record with filters and search."
          />
          <Link
            href="/publications"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            All publications <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((p) => (
            <PublicationCard key={p.id} publication={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
