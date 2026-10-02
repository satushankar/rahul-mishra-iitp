import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-sans font-semibold transition-all focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-md",
        secondary:
          "border border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "text-ink hover:bg-panel",
        accent: "bg-accent text-ink-strong hover:brightness-105",
      },
      size: {
        md: "h-11 px-6 text-[1.0625rem]",
        sm: "h-9 px-4 text-base",
        lg: "h-13 px-8 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.ComponentProps<typeof Link>, "className"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { className, variant, size } = props;
  const classes = cn(buttonVariants({ variant, size }), className);

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, ...rest } = props;
    void _v; void _s; void _c;
    return <Link href={href} className={classes} {...rest} />;
  }

  const { variant: _v, size: _s, className: _c, href: _h, ...rest } = props;
  void _v; void _s; void _c; void _h;
  return <button className={classes} {...rest} />;
}

export { buttonVariants };
