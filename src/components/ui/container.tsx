import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "header" | "footer" | "main" | "nav";
  size?: "default" | "prose";
}

export function Container({
  as: Tag = "div",
  size = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        size === "default" ? "max-w-[1200px]" : "max-w-[72ch]",
        className,
      )}
      {...props}
    />
  );
}
