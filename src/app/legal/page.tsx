import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal — Exit Zero Labs",
  description:
    "Legal documents for Exit Zero Labs including privacy policy, terms of service, and refund policy.",
};

const LEGAL_DOCS = [
  {
    title: "Privacy Policy",
    href: "/legal/privacy",
    description:
      "How we collect, use, and protect your data across our products.",
  },
  {
    title: "Terms of Service",
    href: "/legal/terms",
    description:
      "The agreement between you and Exit Zero Labs when you use our products.",
  },
  {
    title: "Refund Policy",
    href: "/legal/refund",
    description:
      "How subscriptions, cancellations, and refunds work for our paid products.",
  },
] as const;

export default function LegalPage() {
  return (
    <div className="flex-1">
      <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
        Legal
      </h1>
      <p className="mt-3 max-w-xl font-body text-base text-mist">
        Transparency matters to us. Here you&apos;ll find the legal documents
        that govern how Exit Zero Labs operates and how we handle your data.
      </p>

      <div className="mt-10 grid gap-4">
        {LEGAL_DOCS.map((doc) => (
          <Link
            key={doc.href}
            href={doc.href}
            className="group rounded-lg border border-dusk bg-dusk/30 p-6 transition-colors hover:border-signal/40 hover:bg-dusk/50"
          >
            <h2 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-signal">
              {doc.title}
            </h2>
            <p className="mt-1 font-body text-sm text-mist">
              {doc.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
