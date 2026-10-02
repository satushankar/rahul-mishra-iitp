import type { Metadata } from "next";
import { Mail, Phone, Building2, MapPin, ExternalLink } from "lucide-react";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dr. Rahul Mishra, Assistant Professor in Computer Science and Engineering at IIT Patna.",
};

export default function ContactPage() {
  const telHref = `tel:${contact.phone.replace(/[^0-9+]/g, "")}`;

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact"
        description="For research collaboration, prospective students, and academic enquiries."
      />

      <Container className="grid gap-8 py-section md:grid-cols-2">
        <a
          href={`mailto:${contact.email}`}
          className="group flex items-start gap-4 rounded-lg border border-border bg-surface p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
            <Mail className="h-6 w-6 text-primary" aria-hidden />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold uppercase tracking-wide text-faint">
              Email
            </span>
            <span className="text-lg font-bold text-ink transition-colors group-hover:text-primary">
              {contact.email}
            </span>
          </div>
        </a>

        <a
          href={telHref}
          className="group flex items-start gap-4 rounded-lg border border-border bg-surface p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
            <Phone className="h-6 w-6 text-primary" aria-hidden />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold uppercase tracking-wide text-faint">
              Phone
            </span>
            <span className="text-lg font-bold text-ink transition-colors group-hover:text-primary">
              {contact.phone}
            </span>
          </div>
        </a>

        <div className="flex items-start gap-4 rounded-lg border border-border bg-surface p-7 shadow-[var(--shadow-card)]">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
            <Building2 className="h-6 w-6 text-primary" aria-hidden />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold uppercase tracking-wide text-faint">
              Department
            </span>
            <span className="font-bold text-ink">{contact.department}</span>
            <span className="text-sm text-muted">{contact.institution}</span>
          </div>
        </div>

        <address className="flex items-start gap-4 rounded-lg border border-border bg-surface p-7 not-italic shadow-[var(--shadow-card)]">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
            <MapPin className="h-6 w-6 text-primary" aria-hidden />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold uppercase tracking-wide text-faint">
              Address
            </span>
            <span className="font-bold text-ink">{contact.institution}</span>
            <span className="text-sm text-muted">
              {contact.address.line}, {contact.address.city},{" "}
              {contact.address.state} {contact.address.postalCode},{" "}
              {contact.address.country}
            </span>
          </div>
        </address>

        <a
          href={profile.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-panel/50 p-7 transition-colors hover:bg-panel md:col-span-2"
        >
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold uppercase tracking-wide text-faint">
              Official Profile
            </span>
            <span className="font-bold text-ink">
              IIT Patna — CSE Faculty Directory
            </span>
          </div>
          <ExternalLink
            className="h-5 w-5 text-muted transition-colors group-hover:text-primary"
            aria-hidden
          />
        </a>
      </Container>
    </>
  );
}
