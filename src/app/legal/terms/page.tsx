import type { Metadata } from "next";
import { LegalContent } from "@/components/legal/legal-content";

export const metadata: Metadata = {
  title: "Terms of Service — Exit Zero Labs",
  description:
    "Terms and conditions for using Exit Zero Labs products and services.",
};

export default function TermsPage() {
  return (
    <LegalContent title="Terms of Service" lastUpdated="February 25, 2026">
      <p>
        These terms govern your use of products and services provided by Exit
        Zero Labs LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;). By using our services, you agree to these terms.
      </p>

      <h2>Account Terms</h2>
      <ul>
        <li>You must be 13 years or older to use our services.</li>
        <li>
          You are responsible for maintaining the security of your account and
          password.
        </li>
        <li>
          You are responsible for all activity that occurs under your account.
        </li>
        <li>
          One person or legal entity may not maintain more than one free
          account.
        </li>
        <li>
          You must provide a valid email address to complete the sign-up
          process.
        </li>
      </ul>

      <h2>Payment and Billing</h2>
      <h3>Kinnections</h3>
      <p>
        Kinnections is available as an annual subscription at{" "}
        <strong>$49 per year</strong>. Payment is processed securely through
        Stripe. Your subscription automatically renews each year unless you
        cancel before the renewal date.
      </p>

      <h3>Free Tiers and Trials</h3>
      <p>
        Some products or features may be offered for free or with a trial
        period. We reserve the right to modify or discontinue free tiers at any
        time with 30 days notice.
      </p>

      <h2>Cancellation</h2>
      <p>
        You can cancel your subscription at any time from your account settings.
        Cancellation takes effect at the end of your current billing period —
        you keep access until then. We do not offer partial refunds for unused
        time unless otherwise stated in our{" "}
        <a href="/legal/refund">Refund Policy</a>.
      </p>

      <h2>Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use our services for any illegal purpose</li>
        <li>Attempt to gain unauthorized access to our systems</li>
        <li>Interfere with or disrupt the integrity of our services</li>
        <li>
          Upload malicious code or content that violates others&apos; rights
        </li>
        <li>Resell or redistribute our services without permission</li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>
        The service and all associated materials (code, design, branding) are
        owned by Exit Zero Labs LLC. Your data remains yours. We claim no
        intellectual property rights over the content you create or store using
        our services.
      </p>

      <h2>Service Availability</h2>
      <p>
        We strive for high availability but do not guarantee uninterrupted
        service. We may occasionally need to perform maintenance that
        temporarily affects availability. We will provide reasonable notice when
        possible.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Exit Zero Labs shall not be
        liable for any indirect, incidental, special, consequential, or punitive
        damages resulting from your use of our services. Our total liability
        shall not exceed the amount you paid us in the 12 months preceding the
        claim.
      </p>

      <h2>Termination</h2>
      <p>
        We may suspend or terminate your access to our services if you violate
        these terms. Upon termination, your right to use the service ceases
        immediately. We will make reasonable efforts to notify you and allow you
        to export your data.
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms are governed by the laws of the state in which Exit Zero
        Labs LLC is registered. Any disputes will be resolved through binding
        arbitration.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these terms from time to time. Continued use of our
        services after changes constitutes acceptance of the new terms. We will
        notify you of significant changes via email.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Reach us at{" "}
        <a href="mailto:hello@exitzero.dev">hello@exitzero.dev</a>.
      </p>
    </LegalContent>
  );
}
