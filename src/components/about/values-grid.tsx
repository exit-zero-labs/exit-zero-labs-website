"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { cn } from "@/lib/cn";

const VALUES = [
  {
    title: "Craft",
    description:
      "Built right, iterated until excellent. We ship when it works — not when a deadline says so. Every pixel, every API response, every user flow gets the same attention.",
  },
  {
    title: "People",
    description:
      "Designed around humans, not funnels. Software should respect its users, not extract from them. No dark patterns, no engagement tricks, no selling attention.",
  },
  {
    title: "Transparency",
    description:
      "Honest pricing, clear policies, plain language. If something breaks, we say so. If we change direction, we explain why. Trust is built on candor.",
  },
  {
    title: "Independence",
    description:
      "Bootstrapped by choice, accountable to users. No investors to please, no growth hacks to chase. We build what we believe in and answer to the people who use it.",
  },
] as const;

type ValuesGridProps = {
  className?: string;
};

export function ValuesGrid({ className }: ValuesGridProps) {
  return (
    <div className={cn("grid gap-8 md:grid-cols-2", className)}>
      {VALUES.map((value, i) => (
        <AnimatedText key={value.title} delay={0.1 * (i + 1)}>
          <div className="rounded-lg border border-dusk bg-dusk/30 p-6">
            <h3 className="font-display text-xl font-semibold text-white">
              {value.title}
            </h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-mist">
              {value.description}
            </p>
          </div>
        </AnimatedText>
      ))}
    </div>
  );
}
