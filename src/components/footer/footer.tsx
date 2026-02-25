"use client";

import { useState } from "react";

export function Footer() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <footer className="bg-zero px-6 py-12 md:py-16">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        {/* Left — copyright with easter egg */}
        <div className="text-center md:text-left">
          <p className="font-body text-sm text-mist">
            &copy; 2026 Exit{" "}
            <button
              type="button"
              className="relative cursor-default border-none bg-transparent p-0 font-body text-sm text-mist"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onFocus={() => setShowTooltip(true)}
              onBlur={() => setShowTooltip(false)}
            >
              Zero
              {showTooltip && (
                <span
                  className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-dusk px-3 py-1.5 font-mono text-xs text-signal shadow-lg"
                  role="tooltip"
                >
                  exit 0 ✓ process exited successfully
                </span>
              )}
            </button>{" "}
            Labs
          </p>
        </div>

        {/* Right — links */}
        <nav aria-label="Footer navigation" className="flex gap-6">
          <a
            href="https://kinnections.app"
            className="font-body text-sm text-mist transition-colors hover:text-white"
          >
            Kinnections
          </a>
          <a
            href="#geo-spot"
            className="font-body text-sm text-mist transition-colors hover:text-white"
          >
            Geo Spot
          </a>
          <a
            href="mailto:hello@exitzero.dev"
            className="font-body text-sm text-mist transition-colors hover:text-white"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
