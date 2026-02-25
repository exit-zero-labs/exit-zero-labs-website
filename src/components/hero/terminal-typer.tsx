"use client";

import { useCallback, useEffect, useState } from "react";

const LINES = [
  { text: "> building something that matters", typingSpeed: 40 },
  { text: "> exit 0 — no errors, no compromises", typingSpeed: 40 },
  { text: "> connect people, not just pixels", typingSpeed: 40 },
  { text: "> Ship clean. Build forward.", typingSpeed: 40 },
];

const RESOLVE_PAUSE = 800;

type TerminalTyperProps = {
  className?: string;
};

export function TerminalTyper({ className }: TerminalTyperProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  /* Cursor blink */
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  /* Typing logic */
  const typeCharacter = useCallback(() => {
    const line = LINES[currentLine];
    if (!line) return;

    if (line.typingSpeed === 0) {
      /* Instant resolve for the second line */
      setDisplayText(line.text);
      setIsTyping(false);
      return;
    }

    setDisplayText((prev) => {
      const nextLength = prev.length + 1;
      if (nextLength >= line.text.length) {
        /* Finished typing this line */
        setTimeout(() => {
          setCurrentLine((prev) => (prev + 1) % LINES.length);
          setDisplayText("");
        }, RESOLVE_PAUSE);
      }
      return line.text.slice(0, nextLength);
    });
  }, [currentLine]);

  useEffect(() => {
    const line = LINES[currentLine];
    if (!line) return;

    if (line.typingSpeed === 0) {
      setDisplayText(line.text);
      setIsTyping(false);
      return;
    }

    setIsTyping(true);
    const interval = setInterval(typeCharacter, line.typingSpeed);
    return () => clearInterval(interval);
  }, [currentLine, typeCharacter]);

  /* Check reduced motion preference */
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        <span className="font-mono text-signal text-sm md:text-base">
          {LINES[LINES.length - 1].text}
        </span>
      </div>
    );
  }

  return (
    <div className={className} aria-live="polite">
      <span className="font-mono text-signal text-sm md:text-base">
        {displayText}
        <span
          className="inline-block w-[0.6em] text-signal"
          style={{
            opacity: showCursor ? 1 : 0,
            animation: isTyping
              ? "none"
              : "cursor-blink 1.06s step-end infinite",
          }}
        >
          _
        </span>
      </span>
    </div>
  );
}
