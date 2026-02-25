import type { Metadata } from "next";
import { EmailCapture } from "@/components/geo-spot/email-capture";
import { GlobeLoader } from "@/components/geo-spot/globe-loader";
import { FeatureGrid } from "@/components/products/feature-grid";
import { StatusBanner } from "@/components/products/status-banner";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Geo Spot — Geography & Culture Quiz App",
  description:
    "Geo Spot is a mobile quiz platform for geography, culture, sports, and news. Play Pin Point free — or unlock all game modes with Passport. iOS & Android.",
  openGraph: {
    title: "Geo Spot — Geography & Culture Quiz App",
    description:
      "A mobile quiz platform for geography, culture, sports, and news. Play Pin Point free. iOS & Android.",
    url: "https://exitzerolabs.com/products/geo-spot",
    type: "website",
  },
  twitter: {
    title: "Geo Spot — Geography & Culture Quiz App",
    description:
      "A mobile quiz platform for geography, culture, sports, and news. Play Pin Point free. iOS & Android.",
  },
  alternates: {
    canonical: "https://exitzerolabs.com/products/geo-spot",
  },
};

const FEATURES = [
  {
    icon: "📡",
    title: "Offline-first",
    description:
      "Download map packs and play anywhere — no internet required. Perfect for planes, road trips, or anywhere the signal drops.",
  },
  {
    icon: "🌍",
    title: "Real geography",
    description:
      "Every challenge uses real-world locations and data. Learn actual geography, not trivia. The world is more interesting than any quiz.",
  },
  {
    icon: "⚔️",
    title: "Challenge friends",
    description:
      "Compete head-to-head or async. See who really knows their way around the world. Leaderboards track your progress over time.",
  },
  {
    icon: "🧩",
    title: "Multiple game modes",
    description:
      "Pin drops, region identification, distance estimation, and more. Each mode tests a different geographic skill.",
  },
] as const;

export default function GeoSpotPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Geo Spot",
    applicationCategory: "GameApplication",
    applicationSubCategory: "EducationalGame",
    operatingSystem: "iOS, Android",
    description:
      "A mobile quiz platform for geography, culture, sports, and news. Play Pin Point free — or unlock all game modes with Passport.",
    offers: [
      {
        "@type": "Offer",
        name: "Pin Point",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        description: "Place-a-pin-on-map game mode — free forever",
      },
      {
        "@type": "Offer",
        name: "Passport",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        description:
          "Unlocks all current and future game modes plus exclusive features",
      },
    ],
    featureList: [
      "Offline-first gameplay",
      "5 game modes",
      "Geography, culture, sports, and news content",
      "Curated content Packs",
      "Challenge friends",
    ],
    publisher: {
      "@type": "Organization",
      name: "Exit Zero Labs",
      url: "https://exitzerolabs.com",
    },
  };

  return (
    <div className="min-h-screen bg-zero">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data is static, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/#products" },
          { label: "Geo Spot" },
        ]}
      />
      <PageHeader
        title="The world is your playing field"
        subtitle="Geo Spot is an offline-first geography gaming platform. Explore real places, challenge friends, and learn the world — one spot at a time."
        badge={{ text: "Coming Soon", color: "signal" }}
      />

      {/* Globe */}
      <div className="mx-auto max-w-xs px-6">
        <GlobeLoader />
      </div>

      {/* Features */}
      <section
        aria-label="Features"
        className="mx-auto max-w-[1200px] px-6 pt-20 md:pt-28"
      >
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          What we&apos;re building
        </h2>
        <p className="mt-3 max-w-lg font-body text-lg text-mist">
          Geography is fascinating. Most geo games treat it like homework. We
          think it should feel like exploration.
        </p>
        <FeatureGrid features={FEATURES} className="mt-10" />
      </section>

      {/* Status */}
      <section
        aria-label="Development status"
        className="mx-auto max-w-[1200px] px-6 pt-20 md:pt-28"
      >
        <StatusBanner
          badge="In Development"
          badgeColor="signal"
          title="Building in the open"
          description="Geo Spot is actively being developed. We're building the core gameplay engine, offline map system, and multiplayer infrastructure. The beta will be free — no payment required to try it."
        />
      </section>

      {/* Vision */}
      <section
        aria-label="Vision"
        className="mx-auto max-w-[1200px] px-6 pt-20 md:pt-28"
      >
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Why we&apos;re building this
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-mist">
            Most geography games require constant internet, bombard you with
            ads, and gate content behind paywalls. We wanted something different
            — a game that works offline, respects your attention, and actually
            teaches you about the world.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-mist">
            Geo Spot is built on a SvelteKit frontend with a Node/Express
            backend, designed as an offline-first experience from day one. The
            tech choices serve the gameplay, not the other way around.
          </p>
        </div>
      </section>

      {/* Email capture */}
      <section
        aria-label="Get notified"
        className="mx-auto max-w-[1200px] px-6 pt-20 pb-20 md:pt-28 md:pb-32"
      >
        <div className="rounded-lg border border-signal/20 bg-signal/5 p-8 md:p-10">
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            Get notified when we launch
          </h2>
          <p className="mt-3 max-w-md font-body text-sm text-mist">
            Drop your email and we&apos;ll let you know when the beta is ready.
            No spam, just one email when it&apos;s time.
          </p>
          <div className="mt-6">
            <EmailCapture />
          </div>
        </div>
      </section>
    </div>
  );
}
