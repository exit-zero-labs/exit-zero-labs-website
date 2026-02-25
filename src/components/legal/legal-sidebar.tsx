"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const LEGAL_LINKS = [
  { label: "Overview", href: "/legal" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Refund Policy", href: "/legal/refund" },
] as const;

export function LegalSidebar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Legal navigation"
      className="sticky top-24 flex flex-row gap-2 overflow-x-auto pb-4 md:flex-col md:gap-1 md:overflow-x-visible md:pb-0"
    >
      {LEGAL_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "whitespace-nowrap rounded px-3 py-2 font-mono text-sm transition-colors",
              isActive
                ? "bg-dusk text-signal"
                : "text-mist hover:bg-dusk/50 hover:text-white",
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
