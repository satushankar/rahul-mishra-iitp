import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { contact } from "@/data/contact";
import { slugify } from "@/lib/format";

export function FacultyHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-bg">
      {/* soft decorative wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
      />
      <Container className="grid items-center gap-12 py-section md:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-6">
          <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-primary">
            {profile.designation} · {profile.institutionShort}
          </span>

          <h1 className="text-[length:var(--text-display)] leading-[1.1] text-ink">
            {profile.fullName}
          </h1>

          <p className="max-w-xl text-lead text-muted">{profile.thesis}</p>

          {/* research-area chips */}
          <ul className="flex flex-wrap gap-2">
            {profile.researchAreas.map((area) => (
              <li key={area}>
                <Link
                  href={`/research#${slugify(area)}`}
                  className="inline-flex rounded-md bg-panel px-3 py-1.5 text-sm font-semibold text-muted transition-colors hover:bg-primary hover:text-white"
                >
                  {area}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap gap-3">
            <Button href="/publications" variant="primary">
              View Publications
            </Button>
            <Button href="/research" variant="secondary">
              Research Areas
            </Button>
            <Button
              href={`mailto:${contact.email}`}
              variant="ghost"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Contact
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-full bg-accent/30"
            />
            <Image
              src={profile.image.src}
              alt={profile.image.alt}
              width={profile.image.width}
              height={profile.image.height}
              priority
              sizes="(max-width: 768px) 240px, 320px"
              className="h-60 w-60 rounded-full object-cover shadow-[var(--shadow-card)] ring-4 ring-surface md:h-80 md:w-80"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
