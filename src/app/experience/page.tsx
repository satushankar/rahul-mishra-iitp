import type { Metadata } from "next";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience, courses } from "@/data/experience";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Experience & Teaching",
  description:
    "Academic career and teaching of Dr. Rahul Mishra: positions at IIT Patna, DA-IICT Gandhinagar, and IISc Bangalore, plus courses taught at IIT Patna.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Career"
        title="Experience & Teaching"
        description="A research path from IISc Bangalore through DA-IICT Gandhinagar to IIT Patna, alongside graduate and undergraduate teaching."
      />

      <Container className="grid gap-16 py-section lg:grid-cols-[1.1fr_1fr]">
        {/* Career timeline */}
        <section className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Positions"
            title="Career Timeline"
            as="h2"
          />
          <ol className="relative flex flex-col gap-8 border-l border-border pl-8">
            {experience.map((item) => (
              <li key={`${item.organization}-${item.start}`} className="relative">
                <span
                  aria-hidden
                  className={`absolute -left-[2.6rem] top-1 flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-bg ${
                    item.current ? "bg-primary" : "bg-panel"
                  }`}
                >
                  <Briefcase
                    className={`h-3 w-3 ${item.current ? "text-white" : "text-muted"}`}
                  />
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-ink">
                      {item.position}
                    </h3>
                    {item.current && <Badge variant="primary">Current</Badge>}
                  </div>
                  <p className="font-semibold text-body">{item.organization}</p>
                  <p className="text-sm tabular-nums text-faint">
                    {item.start} — {item.end}
                    <span className="ml-2 text-muted">· {item.duration}</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Teaching */}
        <section className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Teaching"
            title="Courses at IIT Patna"
            as="h2"
          />
          <ul className="flex flex-col gap-3">
            {courses.map((c) => (
              <li
                key={c.code}
                className="flex items-start gap-4 rounded-lg border border-border bg-surface p-5 shadow-[var(--shadow-card)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" aria-hidden />
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-mono text-sm font-bold text-primary">
                      {c.code}
                    </span>
                    <h3 className="text-base font-bold text-ink">{c.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-muted">
                    <Badge variant="outline">{c.category}</Badge>
                    <Badge variant="outline">{c.level}</Badge>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
}
