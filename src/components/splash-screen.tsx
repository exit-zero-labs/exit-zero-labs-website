"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Page-load splash: black screen, ">_" blinks once, then site fades in.
 * Only plays once per session (sessionStorage flag).
 * Respects prefers-reduced-motion — skips entirely.
 */
export function SplashScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Skip if reduced motion preferred
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Only show once per session
    const key = "e0l-splash-seen";
    if (sessionStorage.getItem(key)) return;

    setShow(true);
    sessionStorage.setItem(key, "1");

    // Dismiss after 1.2s total (blink + fade)
    const timer = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-zero"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <span className="animate-blink font-mono text-lg text-signal">
            &gt;_
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
