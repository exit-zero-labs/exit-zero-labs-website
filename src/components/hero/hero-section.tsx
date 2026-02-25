"use client";

import { Button } from "@/components/ui/button";
import { TerminalTyper } from "./terminal-typer";

export function HeroSection() {
  return (
    <header className="relative flex min-h-screen items-center overflow-hidden bg-zero px-6">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Giant "exit 0" watermark */}
      <div
        className="pointer-events-none absolute bottom-8 right-8 select-none font-mono text-[clamp(6rem,20vw,16rem)] font-normal leading-none text-white/[0.04]"
        aria-hidden="true"
      >
        exit 0
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="max-w-2xl max-md:mx-auto max-md:text-center">
          <TerminalTyper className="mb-6" />

          <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl">
            Ship clean.
            <br />
            Build forward.
          </h1>

          <p className="mt-6 font-display text-lg text-mist md:text-xl">
            Indie software, made with care
          </p>

          <div className="mt-10 flex flex-wrap gap-4 max-md:justify-center">
            <Button variant="solid" href="#products">
              See our products
            </Button>
            <Button variant="ghost" href="/about">
              Our story
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
