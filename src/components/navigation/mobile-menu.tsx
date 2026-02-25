"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NAV_ITEMS = [
  { label: "Products", href: "/#products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/legal" },
] as const;

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  /* Lock body scroll & handle escape key */
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col bg-zero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Spacer for nav height */}
          <div className="h-16" />

          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * (i + 1) }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="font-display text-3xl font-semibold text-white transition-colors hover:text-signal"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Footer hint */}
          <div className="pb-12 text-center font-mono text-xs text-mist/40">
            esc to close
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
