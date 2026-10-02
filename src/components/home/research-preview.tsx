import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { researchDomains } from "@/data/research";
import { publications } from "@/data/publications";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ResearchPreview() {
  return (
    <section className="py-section">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Research"
            title="Areas of Focus"
            description="Five interconnected domains spanning learning systems, networks, and sensing."
          />
          <Link
            href="/research"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            All research <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {researchDomains.map((domain) => {
            const count = domain.relatedPublicationIds.filter((id) =>
              publications.some((p) => p.id === id),
            ).length;
            return (
              <li key={domain.slug}>
                <Link
                  href={`/research#${domain.slug}`}
                  className="group flex h-full flex-col gap-3 rounded-lg border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-ink transition-colors group-hover:text-primary">
                      {domain.name}
                    </h3>
                    <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-bold tabular-nums text-primary">
                      {count}+
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    {domain.description}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
