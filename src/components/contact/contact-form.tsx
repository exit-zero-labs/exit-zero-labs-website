"use client";

import { type FormEvent, useState } from "react";
import { FormInput } from "@/components/ui/form-input";
import { FormSelect } from "@/components/ui/form-select";
import { FormTextarea } from "@/components/ui/form-textarea";

const CATEGORIES = [
  { label: "General Inquiry", value: "general" },
  { label: "Product Support", value: "support" },
  { label: "Sales", value: "sales" },
  { label: "Partnership", value: "partnership" },
  { label: "Bug Report", value: "bug" },
] as const;

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    if (!formspreeId) {
      /* Graceful fallback when Formspree isn't configured */
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-signal/30 bg-signal/5 p-8 text-center">
        <p className="font-mono text-sm text-signal">
          ✓ Message sent successfully
        </p>
        <p className="mt-2 font-body text-sm text-mist">
          We&apos;ll get back to you within 1–2 business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 font-mono text-xs text-mist/60 underline underline-offset-2 transition-colors hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput label="Name" name="name" required placeholder="Your name" />
        <FormInput
          label="Email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
        />
      </div>

      <FormSelect
        label="Category"
        name="category"
        required
        options={CATEGORIES}
      />

      <FormTextarea
        label="Message"
        name="message"
        required
        placeholder="How can we help?"
        rows={6}
      />

      {status === "error" && (
        <p className="font-mono text-sm text-ember">
          Something went wrong. Try again or email us directly at{" "}
          <a
            href="mailto:hello@exitzero.dev"
            className="underline underline-offset-2"
          >
            hello@exitzero.dev
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-signal px-6 py-3 font-body text-sm font-semibold text-zero transition-colors hover:bg-signal/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-zero disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
