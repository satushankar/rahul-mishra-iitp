import type { Metadata } from "next";
import { Award, BookOpen, FileText, Users } from "lucide-react";
import { patents, books, awards } from "@/data/achievements";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Achievements of Dr. Rahul Mishra: a filed patent on grip-sensor sports monitoring, an AICTE textbook on Design and Analysis of Algorithms, and IEEE ComSoc conference grants.",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recognition"
        title="Achievements"
        description="Tangible research and academic outputs — a filed patent, an authored textbook, and competitive conference grants."
      />

      <Container className="flex flex-col gap-16 py-section">
        {/* Patents */}
        <section className="flex flex-col gap-6">
          <SectionHeading eyebrow="Intellectual Property" title="Patent" as="h2" />
          {patents.map((p) => (
            <article
              key={p.number}
              className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-7 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" aria-hidden />
                </span>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="accent">{p.status}</Badge>
                    <span className="text-sm font-semibold tabular-nums text-faint">
                      No. {p.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold leading-snug text-ink">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted">
                    Inventors: {p.inventors.join(", ")}
                  </p>
                  <p className="text-body">{p.description}</p>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Books */}
        <section className="flex flex-col gap-6">
          <SectionHeading eyebrow="Authorship" title="Book" as="h2" />
          {books.map((b) => (
            <article
              key={b.title}
              className="flex items-start gap-4 rounded-lg border border-border bg-surface p-7 shadow-[var(--shadow-card)]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent-soft">
                <BookOpen className="h-6 w-6 text-ink-strong" aria-hidden />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold leading-snug text-ink">
                  {b.title}
                </h3>
                <p className="text-sm font-semibold text-muted">{b.publisher}</p>
                <p className="text-body">{b.description}</p>
              </div>
            </article>
          ))}
        </section>

        {/* Awards */}
        <section className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Honours"
            title="Awards & Grants"
            as="h2"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {awards.map((a) => (
              <article
                key={a.name}
                className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-6 shadow-[var(--shadow-card)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10">
                  <Award className="h-5 w-5 text-primary" aria-hidden />
                </span>
                <h3 className="text-lg font-bold text-ink">{a.name}</h3>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-faint" aria-hidden />
                  <span className="font-semibold text-muted">
                    {a.organization}
                  </span>
                  <span className="tabular-nums text-faint">· {a.year}</span>
                </div>
                <p className="text-sm text-body">{a.description}</p>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
