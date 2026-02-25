"use client";

import dynamic from "next/dynamic";
import { AnimatedText } from "@/components/ui/animated-text";
import { PillBadge } from "@/components/ui/pill-badge";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EmailCapture } from "./email-capture";

/* Lazy-load the globe — not in critical path, no SSR */
const Globe = dynamic(() => import("./globe").then((m) => m.Globe), {
  ssr: false,
  loading: () => (
    <div className="flex aspect-square w-full items-center justify-center">
      <span className="font-mono text-xs text-mist/40">loading globe...</span>
    </div>
  ),
});

export function GeoSpotSection() {
  return (
    <SectionWrapper
      id="geo-spot"
      ariaLabel="Geo Spot — geography gaming platform"
      className="bg-zero"
    >
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Globe — left on desktop, below on mobile */}
        <div className="order-2 md:order-1 max-md:mx-auto max-md:max-w-xs">
          <Globe />
        </div>

        {/* Text + form — right on desktop, first on mobile */}
        <div className="order-1 md:order-2">
          <AnimatedText>
            <PillBadge color="signal">Coming Soon</PillBadge>
          </AnimatedText>

          <AnimatedText
            as="h2"
            className="mt-6 font-display text-4xl font-bold text-white md:text-5xl"
            delay={0.1}
          >
            The world is your playing field
          </AnimatedText>

          <AnimatedText
            as="p"
            className="mt-4 max-w-md font-body text-lg text-mist"
            delay={0.2}
          >
            Geo Spot is an offline-first geography gaming platform. Explore real
            places, challenge friends, and learn the world — one spot at a time.
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <div className="mt-8">
              <EmailCapture />
            </div>
          </AnimatedText>
        </div>
      </div>
    </SectionWrapper>
  );
}
