"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimatedTextProps = {
  children: React.ReactNode;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "span" | "div";
  className?: string;
  delay?: number;
};

export function AnimatedText({
  children,
  as = "div",
  className,
  delay = 0,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const Component = motion.create(as);

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay,
      }}
    >
      {children}
    </Component>
  );
}
