import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Contact — Exit Zero Labs",
  description:
    "Get in touch with Exit Zero Labs for support, sales, partnerships, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zero">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <PageHeader
        title="Get in touch"
        subtitle="Have a question, want to report a bug, or just want to say hi? We'd love to hear from you."
      />

      <div className="mx-auto max-w-[1200px] px-6 pb-20 md:pb-32">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          {/* Form — takes up 3 columns */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>

          {/* Sidebar info — takes up 2 columns */}
          <aside className="space-y-8 md:col-span-2">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-mist/60">
                Email
              </h3>
              <a
                href="mailto:hello@exitzero.dev"
                className="mt-1 block font-body text-sm text-signal underline underline-offset-2 transition-colors hover:text-white"
              >
                hello@exitzero.dev
              </a>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-mist/60">
                Response time
              </h3>
              <p className="mt-1 font-body text-sm text-mist">
                We typically respond within 1–2 business days.
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-mist/60">
                Products
              </h3>
              <ul className="mt-1 space-y-1">
                <li>
                  <a
                    href="https://kinnections.app"
                    className="font-body text-sm text-mist transition-colors hover:text-white"
                  >
                    Kinnections →
                  </a>
                </li>
                <li>
                  <span className="font-body text-sm text-mist/60">
                    Geo Spot — coming soon
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-dusk bg-dusk/30 p-4">
              <p className="font-mono text-xs text-mist/60">Prefer email?</p>
              <p className="mt-1 font-body text-sm text-mist">
                You can always reach us directly at{" "}
                <a
                  href="mailto:hello@exitzero.dev"
                  className="text-signal underline underline-offset-2"
                >
                  hello@exitzero.dev
                </a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
