import type { Metadata } from "next";
import { BadgeCheck, Presentation, Users2 } from "lucide-react";
import { memberships } from "@/data/achievements";
import { conferences } from "@/data/conferences";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Professional Activities",
  description:
    "Professional activities of Dr. Rahul Mishra: IEEE membership, IEEE ComSoc conference grants, and participation in A*/A venues including INFOCOM, SenSys, WoWMoM, and MSWIM.",
};

// Flagship venues the faculty has published/presented at (factual, from conferences data)
const flagshipVenues = [
  "IEEE INFOCOM",
  "ACM SenSys",
  "IEEE WoWMoM",
  "ACM MSWIM",
  "ACM BuildSys",
  "IEEE WCNC",
  "IEEE COMSNETS",
];

export default function ActivitiesPage() {
  const starVenues = conferences.filter((c) =>
    /Core A\*?/i.test(c.status ?? ""),
  ).length;

  return (
    <>
      <PageHeader
        eyebrow="Community"
        title="Professional Activities"
        description="Memberships, scholarly community engagement, and participation in the field's leading venues."
      />

      <Container className="flex flex-col gap-16 py-section">
        {/* Memberships */}
        <section className="flex flex-col gap-6">
          <SectionHeading eyebrow="Affiliations" title="Memberships" as="h2" />
          <div className="grid gap-5 sm:grid-cols-2">
            {memberships.map((m) => (
              <article
                key={m.organization}
                className="flex items-start gap-4 rounded-lg border border-border bg-surface p-6 shadow-[var(--shadow-card)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <BadgeCheck className="h-5 w-5 text-primary" aria-hidden />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-ink">
                    {m.organization}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary">{m.type}</Badge>
                    <Badge variant="outline">{m.status}</Badge>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Conference engagement */}
        <section className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Scholarly Community"
            title="Venue Participation"
            description="Research presented and published across the field's flagship networking, mobile-computing, and sensing venues."
            as="h2"
          />
          <div className="rounded-lg border border-border bg-surface p-7 shadow-[var(--shadow-card)]">
            <div className="mb-5 flex items-center gap-3">
              <Presentation className="h-6 w-6 text-primary" aria-hidden />
              <p className="text-body">
                <span className="font-bold tabular-nums text-ink">
                  {starVenues}
                </span>{" "}
                contributions at Core A* / A conferences out of{" "}
                <span className="font-bold tabular-nums text-ink">
                  {conferences.length}
                </span>{" "}
                total conference papers.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {flagshipVenues.map((v) => (
                <li key={v}>
                  <Badge variant="neutral">{v}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Grants / service */}
        <section className="flex flex-col gap-6">
          <SectionHeading eyebrow="Recognition" title="Grants & Service" as="h2" />
          <article className="flex items-start gap-4 rounded-lg border border-border bg-surface p-6 shadow-[var(--shadow-card)]">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent-soft">
              <Users2 className="h-5 w-5 text-ink-strong" aria-hidden />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-bold text-ink">
                IEEE ComSoc Student Conference Grants
              </h3>
              <p className="text-sm text-muted">
                IEEE Communications Society · INFOCOM 2021 &amp; 2022
              </p>
              <p className="text-sm text-body">
                Competitive travel grants supporting participation at IEEE
                INFOCOM, a Core A* networking conference.
              </p>
            </div>
          </article>
        </section>
      </Container>
    </>
  );
}
