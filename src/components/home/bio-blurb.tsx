import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function BioBlurb() {
  return (
    <section className="py-section">
      <Container className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
        <SectionHeading eyebrow="About" title="Profile" />
        <div className="flex flex-col gap-5">
          <p className="text-lg leading-relaxed text-body">{profile.bio}</p>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/experience"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Experience &amp; Teaching <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/achievements"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Achievements <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
