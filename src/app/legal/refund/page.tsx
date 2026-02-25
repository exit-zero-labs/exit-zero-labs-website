import type { Metadata } from "next";
import { LegalContent } from "@/components/legal/legal-content";

export const metadata: Metadata = {
  title: "Refund Policy — Exit Zero Labs",
  description:
    "Refund and cancellation policy for Exit Zero Labs subscriptions.",
};

export default function RefundPage() {
  return (
    <LegalContent title="Refund Policy" lastUpdated="February 25, 2026">
      <p>
        We want you to be satisfied with our products. This policy covers
        refunds and cancellations for paid Exit Zero Labs subscriptions.
      </p>

      <h2>Subscription Terms</h2>
      <p>
        Kinnections is billed annually at <strong>$49 per year</strong>.
        Subscriptions automatically renew at the end of each billing period
        unless you cancel beforehand. You will receive a renewal reminder email
        at least 7 days before your renewal date.
      </p>

      <h2>How to Cancel</h2>
      <p>
        You can cancel your subscription at any time through your account
        settings. Cancellation is immediate — no need to contact support or jump
        through hoops. Once cancelled:
      </p>
      <ul>
        <li>
          You retain full access to the service until the end of your current
          billing period.
        </li>
        <li>
          Your data remains accessible for 30 days after your subscription
          expires, giving you time to export anything you need.
        </li>
        <li>After 30 days, your data is permanently deleted.</li>
      </ul>

      <h2>Refund Eligibility</h2>
      <h3>Within 14 Days of Purchase</h3>
      <p>
        If you&apos;re not happy with the product within the first 14 days of
        your subscription, contact us at{" "}
        <a href="mailto:hello@exitzero.dev">hello@exitzero.dev</a> for a full
        refund. No questions asked.
      </p>

      <h3>After 14 Days</h3>
      <p>
        After the initial 14-day window, we generally do not offer refunds for
        the current billing period. However, we review requests on a
        case-by-case basis. If you believe there are exceptional circumstances,
        reach out to us.
      </p>

      <h3>Accidental Renewals</h3>
      <p>
        If your subscription renewed and you intended to cancel, contact us
        within 7 days of the renewal. We will issue a full refund for the
        renewal charge.
      </p>

      <h2>How Refunds Work</h2>
      <ul>
        <li>
          Refunds are processed through Stripe to your original payment method.
        </li>
        <li>
          Refunds typically take 5–10 business days to appear on your statement.
        </li>
        <li>Upon refund, your access to paid features ends immediately.</li>
      </ul>

      <h2>Free Products</h2>
      <p>
        Free products and features (including Geo Spot during its beta period)
        have no associated charges and therefore no refund policy.
      </p>

      <h2>Contact</h2>
      <p>
        Refund requests or questions? Email us at{" "}
        <a href="mailto:hello@exitzero.dev">hello@exitzero.dev</a>. We aim to
        respond within 1 business day.
      </p>
    </LegalContent>
  );
}
