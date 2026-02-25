import type { Metadata } from "next";
import { FeatureGrid } from "@/components/products/feature-grid";
import { PricingCard } from "@/components/products/pricing-card";
import { ScreenshotPlaceholder } from "@/components/products/screenshot-placeholder";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Kinnections — Exit Zero Labs",
  description:
    "An end-to-end encrypted, infinite-canvas relationship mapper. Know your people.",
};

const FEATURES = [
  {
    icon: "🔐",
    title: "End-to-end encrypted",
    description:
      "Your relationship data is encrypted on your device before it ever reaches our servers. We can't read it. Only you hold the keys.",
  },
  {
    icon: "∞",
    title: "Infinite canvas",
    description:
      "Map connections without constraints. Zoom in on a single relationship or zoom out for the full picture. The canvas grows with you.",
  },
  {
    icon: "🧭",
    title: "Relationship mapping",
    description:
      "Visualize how people connect to each other and to you. Track notes, milestones, and the context that makes each relationship unique.",
  },
  {
    icon: "📱",
    title: "Cross-device sync",
    description:
      "Access your maps from any device. Changes sync seamlessly while maintaining end-to-end encryption across all your sessions.",
  },
] as const;

const PRICING_FEATURES = [
  { text: "Unlimited relationship maps" },
  { text: "End-to-end encryption" },
  { text: "Cross-device sync" },
  { text: "Data export anytime" },
  { text: "Priority support" },
] as const;

export default function KinnectionsPage() {
  return (
    <div className="min-h-screen bg-zero">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/#products" },
          { label: "Kinnections" },
        ]}
      />
      <PageHeader
        title="Know your people"
        subtitle="Kinnections is an end-to-end encrypted, infinite-canvas relationship mapper built for the people who care enough to remember."
        badge={{ text: "Now Available", color: "ember" }}
      />

      {/* Hero Screenshot */}
      <div className="mx-auto max-w-[1200px] px-6">
        <ScreenshotPlaceholder
          label="kinnections app screenshot"
          sublabel="kinnections.app"
          aspectRatio="aspect-[16/9]"
        />
      </div>

      {/* Features */}
      <section
        aria-label="Features"
        className="mx-auto max-w-[1200px] px-6 pt-20 md:pt-28"
      >
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Built different
        </h2>
        <p className="mt-3 max-w-lg font-body text-lg text-mist">
          Most relationship tools treat your data as their business model.
          Kinnections treats it as yours.
        </p>
        <FeatureGrid features={FEATURES} className="mt-10" />
      </section>

      {/* Tech differentiator */}
      <section
        aria-label="Security"
        className="mx-auto max-w-[1200px] px-6 pt-20 md:pt-28"
      >
        <div className="rounded-lg border border-ember/20 bg-ember/5 p-8 md:p-10">
          <h2 className="font-display text-2xl font-bold text-ember md:text-3xl">
            Privacy isn&apos;t a feature. It&apos;s the architecture.
          </h2>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-mist">
            Kinnections uses client-side encryption so your relationship data
            never leaves your device unencrypted. Our servers store ciphertext —
            meaningless without your keys. Even if our database were breached,
            your data stays private. That&apos;s the point.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section
        aria-label="Pricing"
        className="mx-auto max-w-[1200px] px-6 pt-20 pb-20 md:pt-28 md:pb-32"
      >
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Simple pricing
            </h2>
            <p className="mt-3 max-w-md font-body text-lg text-mist">
              One plan. Everything included. No tiers, no per-seat pricing, no
              surprises.
            </p>
            <p className="mt-6 font-body text-sm text-mist/60">
              14-day money-back guarantee. Cancel anytime from your account
              settings. See our{" "}
              <a
                href="/legal/refund"
                className="text-signal underline underline-offset-2"
              >
                refund policy
              </a>{" "}
              for details.
            </p>
          </div>
          <PricingCard
            name="Kinnections"
            price="$49"
            interval="year"
            description="Everything you need to map and understand the relationships that matter."
            features={PRICING_FEATURES}
            ctaLabel="Get started"
            ctaHref="https://kinnections.app"
          />
        </div>
      </section>
    </div>
  );
}
