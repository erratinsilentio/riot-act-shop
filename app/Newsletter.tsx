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
          letterSpacing: "0.2em",
          color: "var(--color-primary)",
        }}
      >
        Dzięki — jesteś w środku.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
      <input
        type="email"
        required
        placeholder="TWOJE@EMAIL.COM"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow text-sm py-4 px-0 outline-none uppercase transition-all"
        style={{
          background: "var(--color-surface-container-lowest)",
          border: "none",
          borderBottom: "1px solid rgba(93,63,56,0.4)",
          color: "var(--color-on-surface)",
          fontFamily: "var(--font-space-grotesk)",
          letterSpacing: "0.1em",
        }}
      />
      <button
        type="submit"
        className="px-12 py-4 font-bold uppercase tracking-widest transition-opacity hover:opacity-90"
        style={{
          fontFamily: "var(--font-space-grotesk)",
          letterSpacing: "0.1em",
          background: "var(--color-primary)",
          color: "var(--color-on-primary)",
        }}
      >
        ZAPISZ SIĘ
      </button>
    </form>
  );
}
