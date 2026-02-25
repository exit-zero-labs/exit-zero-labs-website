"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { MobileMenu } from "./mobile-menu";

const NAV_LINKS = [
  { label: "Products", href: "/#products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 bg-zero/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-display text-lg font-semibold text-white transition-colors hover:text-signal"
          >
            Exit Zero Labs
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 md:flex"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-sm text-mist transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={handleClose} />
    </>
  );
}
