"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type PricingFeature = {
  text: string;
};

type PricingCardProps = {
  name: string;
  price: string;
  interval: string;
  description: string;
  features: readonly PricingFeature[];
  ctaLabel: string;
  ctaHref: string;
  className?: string;
};

export function PricingCard({
  name,
  price,
  interval,
  description,
  features,
  ctaLabel,
  ctaHref,
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-dusk bg-dusk/30 p-8 md:p-10",
        className,
      )}
    >
      <p className="font-mono text-xs uppercase tracking-wider text-mist/60">
        {name}
      </p>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-display text-5xl font-bold text-white">
          {price}
        </span>
        <span className="font-body text-sm text-mist">/ {interval}</span>
      </div>
      <p className="mt-3 font-body text-sm text-mist">{description}</p>

      <ul className="mt-8 space-y-3">
        {features.map((feature) => (
          <li key={feature.text} className="flex items-start gap-3">
            <span className="mt-0.5 text-signal" aria-hidden="true">
              ✓
            </span>
            <span className="font-body text-sm text-white">{feature.text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button variant="solid" href={ctaHref} className="w-full">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
