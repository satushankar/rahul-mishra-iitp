import { Container } from "@/components/ui/container";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-panel/40">
      <Container className="flex flex-col gap-4 py-14 md:py-20">
        {eyebrow && (
          <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="text-[length:var(--text-h1)] text-ink">{title}</h1>
        {description && (
          <p className="max-w-2xl text-lead text-muted">{description}</p>
        )}
        {children}
      </Container>
    </section>
  );
}
