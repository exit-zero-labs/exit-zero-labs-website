"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Faint Signal-green cursor trail.
 * Desktop only — hidden when `pointer: coarse` (touch devices).
 * Respects `prefers-reduced-motion`.
 */
export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<{ x: number; y: number; age: number }[]>([]);
  const rafRef = useRef<number>(0);
  const activeRef = useRef(true);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    pointsRef.current.push({ x: e.clientX, y: e.clientY, age: 0 });
    // Keep buffer bounded
    if (pointsRef.current.length > 50) {
      pointsRef.current.shift();
    }
  }, []);

  useEffect(() => {
    // Skip on touch devices or when user prefers reduced motion
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isCoarse || prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    const FADE_MS = 300;

    function draw() {
      if (!ctx || !canvas || !activeRef.current) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const points = pointsRef.current;

      // Age each point ~16ms per frame
      for (let i = points.length - 1; i >= 0; i--) {
        points[i].age += 16;
        if (points[i].age > FADE_MS) {
          points.splice(i, 1);
        }
      }

      // Draw remaining points
      for (const pt of points) {
        const alpha = Math.max(0, 1 - pt.age / FADE_MS) * 0.4;
        const radius = 3 * (1 - pt.age / FADE_MS);
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 217, 126, ${alpha})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      activeRef.current = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
