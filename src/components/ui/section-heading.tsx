import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="font-sans text-sm font-bold uppercase tracking-[0.12em] text-primary">
          {eyebrow}
        </span>
      )}
      <Tag
        id={id}
        className={cn(
          Tag === "h1" ? "text-[length:var(--text-h1)]" : "text-[length:var(--text-h2)]",
          "scroll-mt-28",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className="max-w-[60ch] text-lg text-muted">{description}</p>
      )}
    </div>
  );
}
