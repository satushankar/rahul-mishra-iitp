import Link from "next/link";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { navItems, institutionLinks } from "@/data/navigation";
import { profile } from "@/data/profile";
import { contact } from "@/data/contact";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-panel/50">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        <div className="flex flex-col gap-3">
          <span className="font-display text-xl font-bold text-ink">
            {profile.fullName}
          </span>
          <p className="max-w-xs text-sm text-muted">
            {profile.designation}, {profile.department}, {profile.institution}.
          </p>
        </div>

        <nav aria-label="Site" className="flex flex-col gap-2">
          <h2 className="text-sm font-bold uppercase tracking-wide text-ink">
            Explore
          </h2>
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Institution" className="flex flex-col gap-2">
          <h2 className="text-sm font-bold uppercase tracking-wide text-ink">
            IIT Patna
          </h2>
          {institutionLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-primary"
            >
              {item.label}
              <ExternalLink className="h-3 w-3" aria-hidden />
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-bold uppercase tracking-wide text-ink">
            Contact
          </h2>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {contact.phone}
          </a>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-sm text-faint sm:flex-row">
          <span>
            © {year} {profile.fullName}. {profile.institutionShort}.
          </span>
          <a
            href={profile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            Official IITP Profile
          </a>
        </Container>
      </div>
    </footer>
  );
}
