import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-sm font-semibold leading-none",
  {
    variants: {
      variant: {
        neutral: "bg-panel text-muted",
        primary: "bg-primary/10 text-primary",
        accent: "bg-accent-soft text-ink-strong",
        outline: "border border-border text-muted",
      },
    },
    defaultVariants: { variant: "neutral" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
