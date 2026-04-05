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
        aria-live="polite"
        className="text-sm uppercase tracking-widest"
        style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.2em", color: "var(--color-primary)" }}
      >
        Dzięki — jesteś w środku.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
      <label htmlFor="newsletter-email" className="sr-only">
        Adres e-mail
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        required
        autoComplete="email"
        spellCheck={false}
        placeholder="TWOJE@EMAIL.COM…"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow text-sm py-4 px-4 uppercase transition-all focus-visible:outline-none"
        style={{
          background: "var(--color-surface-container-lowest)",
          border: "none",
          borderBottom: "1px solid rgba(93,63,56,0.4)",
          color: "var(--color-on-surface)",
          fontFamily: "var(--font-space-grotesk)",
          letterSpacing: "0.1em",
        }}
        onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-primary)")}
        onBlur={(e) => (e.target.style.borderBottomColor = "rgba(93,63,56,0.4)")}
      />
      <button
        type="submit"
        className="px-12 py-4 font-bold uppercase tracking-widest transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{
          fontFamily: "var(--font-space-grotesk)",
          letterSpacing: "0.1em",
          background: "var(--color-primary)",
          color: "var(--color-on-primary)",
          outlineColor: "var(--color-primary)",
        }}
      >
        ZAPISZ SIĘ
      </button>
    </form>
  );
}
