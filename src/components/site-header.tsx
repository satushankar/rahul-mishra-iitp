"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close drawer on route change + lock scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ESC closes drawer
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2"
        >
          <Image
            src="/iitp-logo.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold text-ink">
              {profile.fullName}
            </span>
            <span className="text-xs text-muted">
              {profile.designation} · {profile.institutionShort}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-md px-3 py-2 text-[0.95rem] font-semibold transition-colors",
                  active ? "text-primary" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink hover:bg-panel"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>
    </header>

      {/* Mobile drawer (outside header — header's backdrop-filter would otherwise
          trap fixed positioning to the 72px header box) */}
      {open && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div
            className="absolute inset-0 bg-ink-strong/40"
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-1 bg-surface p-6 shadow-[var(--shadow-card)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-lg font-bold text-ink">
                Menu
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink hover:bg-panel"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-4 py-3 text-lg font-semibold transition-colors",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-ink hover:bg-panel",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
