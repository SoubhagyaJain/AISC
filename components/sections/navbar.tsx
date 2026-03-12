"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "SteelGenie Engine", href: "/engine", highlight: true },
  { label: "Contact", href: "/#contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg border border-accent/40 bg-accent/20" />
          <span className="text-lg font-semibold">AISC Growth OS</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 text-sm text-muted lg:flex">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground",
                  item.highlight && "font-semibold text-accent hover:text-accent/80",
                  pathname === item.href && !item.highlight && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right CTAs */}
        <div className="flex items-center gap-3">
          <button className="hidden text-sm text-muted transition-colors hover:text-foreground sm:block">
            Sign In
          </button>
          <Link
            href={pathname === "/engine" ? "#demo" : "/#contact"}
            className={cn(buttonVariants())}
          >
            Book Demo
          </Link>
          {/* Mobile menu toggle */}
          <button
            className="ml-2 rounded-lg border border-white/10 p-2 text-muted lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-background/95 pb-4 lg:hidden">
          <ul className="flex flex-col gap-1 px-6 pt-4">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-2.5 text-sm transition-colors hover:bg-card/60 hover:text-foreground",
                    item.highlight ? "font-semibold text-accent" : "text-muted"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
