import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { researchDomains } from "@/data/research";
import { publications } from "@/data/publications";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research areas of Dr. Rahul Mishra: Deep Learning, Fog Computing, Internet of Things, Wireless Sensor Networks, and Smart Sensing.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Areas of Focus"
        description="Five interconnected domains spanning distributed learning systems, edge and fog computing, IoT, wireless sensor networks, and smart sensing."
      />

      <Container className="flex flex-col gap-16 py-section">
        {researchDomains.map((domain, index) => {
          const related = publications.filter((p) =>
            domain.relatedPublicationIds.includes(p.id),
          );
          return (
            <section
              key={domain.slug}
              id={domain.slug}
              className="scroll-mt-28 grid gap-8 md:grid-cols-[1fr_1.5fr]"
            >
              <div className="flex flex-col gap-4">
                <span className="font-display text-5xl font-bold text-primary/20 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="text-[length:var(--text-h2)] text-ink">
                  {domain.name}
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {domain.keywords.map((kw) => (
                    <li key={kw}>
                      <Badge variant="primary">{kw}</Badge>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-5">
                <p className="text-lg leading-relaxed text-body">
                  {domain.description}
                </p>

                <div className="rounded-lg border border-border bg-surface p-6 shadow-[var(--shadow-card)]">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-base font-bold text-ink">
                      Selected publications
                      <span className="ml-2 text-sm font-semibold tabular-nums text-faint">
                        {related.length}
                      </span>
                    </h3>
                  </div>
                  <ul className="flex flex-col divide-y divide-border">
                    {related.slice(0, 4).map((p) => (
                      <li key={p.id} className="py-2.5 first:pt-0 last:pb-0">
                        {p.url ? (
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-body transition-colors hover:text-primary"
                          >
                            {p.title}
                          </a>
                        ) : (
                          <span className="text-sm font-medium text-body">
                            {p.title}
                          </span>
                        )}
                        <span className="ml-1 text-xs text-faint tabular-nums">
                          {p.year ? `· ${p.year}` : ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/publications"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    Browse all publications{" "}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </Container>
    </>
  );
}
