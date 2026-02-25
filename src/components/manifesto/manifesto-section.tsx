"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const PILLARS = [
  {
    title: "Craft",
    body: "Built right, iterated until excellent. We ship when it works — not when a deadline says so.",
  },
  {
    title: "People",
    body: "Designed around humans, not funnels. Software should respect its users, not extract from them.",
  },
  {
    title: "Independence",
    body: "Bootstrapped by choice, accountable to users. No investors to please, no growth hacks to chase.",
  },
] as const;

export function ManifestoSection() {
  return (
    <SectionWrapper
      id="manifesto"
      ariaLabel="Manifesto — Why We Build"
      className="bg-canvas"
    >
      {/* Pull quote */}
      <AnimatedText className="mx-auto max-w-3xl text-center">
        <blockquote className="font-display text-xl font-semibold leading-relaxed text-zero md:text-2xl lg:text-[28px]">
          &ldquo;We did not raise a round. We do not have a growth team. We have
          a good idea, sharp tools, and zero patience for software that does not
          work.&rdquo;
        </blockquote>
      </AnimatedText>

      {/* Three pillars */}
      <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-8">
        {PILLARS.map((pillar, i) => (
          <AnimatedText key={pillar.title} delay={0.1 * (i + 1)}>
            <h3 className="font-display text-2xl font-semibold text-zero">
              {pillar.title}
            </h3>
            <p className="mt-3 font-body text-base leading-relaxed text-dusk">
              {pillar.body}
            </p>
          </AnimatedText>
        ))}
      </div>
    </SectionWrapper>
  );
}
