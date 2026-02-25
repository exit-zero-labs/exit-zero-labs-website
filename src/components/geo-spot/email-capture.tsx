"use client";

import { type FormEvent, useState } from "react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    /* TODO: Wire up to actual email list API */
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="font-mono text-sm text-signal">
        ✓ You&apos;re on the list. We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-sm">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Get notified"
        className="flex-1 rounded-l-md border border-dusk bg-transparent px-4 py-3 font-body text-sm text-white placeholder:text-mist/60 focus:border-signal focus:outline-none"
        aria-label="Email address for Geo Spot launch notification"
      />
      <button
        type="submit"
        className="flex items-center justify-center rounded-r-md bg-signal px-4 py-3 text-zero transition-colors hover:bg-signal/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-zero"
        aria-label="Submit email"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 10h12m0 0l-4-4m4 4l-4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}
