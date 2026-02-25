import type { Metadata } from "next";
import { LegalContent } from "@/components/legal/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy — Exit Zero Labs",
  description:
    "How Exit Zero Labs collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalContent title="Privacy Policy" lastUpdated="February 25, 2026">
      <p>
        Exit Zero Labs LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) operates the Kinnections and Geo Spot products. This
        policy explains how we collect, use, and protect your information when
        you use our services.
      </p>

      <h2>Information We Collect</h2>

      <h3>Account Information</h3>
      <p>
        When you create an account, we collect your name, email address, and
        payment information. Payment processing is handled entirely by{" "}
        <strong>Stripe</strong> — we never store your credit card details on our
        servers.
      </p>

      <h3>Usage Data</h3>
      <p>
        We collect basic analytics about how you use our products, including
        page views and feature usage. This helps us improve the experience. We
        use privacy-respecting analytics and do not sell this data.
      </p>

      <h3>Kinnections — End-to-End Encryption</h3>
      <p>
        Kinnections uses <strong>end-to-end encryption</strong> for your
        relationship data. Your maps, notes, and connections are encrypted on
        your device before being sent to our servers. We cannot read your
        content. Only you hold the decryption keys.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To provide, maintain, and improve our services</li>
        <li>To process payments and manage your subscription</li>
        <li>To send important service updates (not marketing)</li>
        <li>To respond to support requests</li>
        <li>To detect and prevent fraud or abuse</li>
      </ul>

      <h2>Third-Party Services</h2>
      <p>We use a small number of trusted third-party services:</p>
      <ul>
        <li>
          <strong>Stripe</strong> — Payment processing
        </li>
        <li>
          <strong>Vercel</strong> — Hosting and deployment
        </li>
        <li>
          <strong>Supabase</strong> — Database and authentication
        </li>
        <li>
          <strong>Formspree</strong> — Contact form submissions
        </li>
      </ul>
      <p>
        Each of these services has their own privacy policy. We only share the
        minimum data necessary for each service to function.
      </p>

      <h2>Data Retention</h2>
      <p>
        We keep your account data for as long as your account is active. If you
        delete your account, we remove your personal data within 30 days.
        Encrypted Kinnections data is deleted immediately upon account deletion
        since we cannot read it anyway.
      </p>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Export your data in a portable format</li>
        <li>Withdraw consent for optional data processing</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        We use essential cookies required for authentication and security. We do
        not use tracking cookies or third-party advertising cookies.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our services are not directed to children under 13. We do not knowingly
        collect information from children under 13. If you believe we have
        collected data from a child, please contact us immediately.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. We will notify you of
        significant changes via email or a prominent notice in our products.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Reach us at{" "}
        <a href="mailto:hello@exitzero.dev">hello@exitzero.dev</a>.
      </p>
    </LegalContent>
  );
}
