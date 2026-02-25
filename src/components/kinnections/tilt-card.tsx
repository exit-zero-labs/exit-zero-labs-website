"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function TiltCard({ children, className }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  /* Reduced motion check */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* Scroll-based parallax: 15° tilt → 0° as card scrolls into view */
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });
  const scrollTilt = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const springScrollTilt = useSpring(scrollTilt, {
    stiffness: 100,
    damping: 20,
  });

  /* Cursor-tracking tilt on hover (±5° range) */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || prefersReducedMotion) return;

      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const percentX = (e.clientX - centerX) / (rect.width / 2);
      const percentY = (e.clientY - centerY) / (rect.height / 2);

      setRotateY(percentX * 5);
      setRotateX(-percentY * 5);
    },
    [prefersReducedMotion],
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
  }, []);

  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  if (prefersReducedMotion) {
    return (
      <div
        ref={cardRef}
        className={cn("overflow-hidden rounded-lg", className)}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn("overflow-hidden rounded-lg", className)}
      style={{
        perspective: 1000,
        rotateX: isHovering ? springX : springScrollTilt,
        rotateY: isHovering ? springY : 0,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
