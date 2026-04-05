"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: podpiąć backend (Mailchimp, Resend, itp.)
    setSent(true);
  }

  if (sent) {
    return (
      <p
        className="text-sm uppercase tracking-widest"
        style={{
          fontFamily: "var(--font-space-grotesk)",
          letterSpacing: "0.1em",
          color: "var(--color-primary)",
        }}
      >
        Dzięki — jesteś w środku.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
      <input
        type="email"
        required
        placeholder="twoj@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-5 py-4 text-sm text-on-surface placeholder:text-on-surface-variant outline-none"
        style={{
          background: "var(--color-surface-container)",
          borderBottom: "1px solid rgba(68,68,68,0.4)",
          fontFamily: "var(--font-inter)",
        }}
      />
      <button
        type="submit"
        className="px-8 py-4 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-80 whitespace-nowrap"
        style={{
          fontFamily: "var(--font-space-grotesk)",
          letterSpacing: "0.1em",
          background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-container))",
          color: "var(--color-on-primary)",
        }}
      >
        Dołącz
      </button>
    </form>
  );
}
