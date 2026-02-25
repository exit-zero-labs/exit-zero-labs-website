"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ScrollHook() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className="flex items-center justify-center bg-zero px-6 py-[--spacing-3xl]"
      aria-hidden="true"
    >
      <motion.span
        className="font-mono text-sm text-mist md:text-base py-10"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        &gt; loading products...
      </motion.span>
    </div>
  );
}
