"use client";

import { useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import { useCart } from "@/context/CartContext";

export default function PotwierdzonePage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Nav />

      <main className="flex-1 flex flex-col justify-center px-16 pt-32 pb-24">
        <div className="max-w-lg">
          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              letterSpacing: "0.1em",
              color: "var(--color-primary)",
            }}
          >
            Płatność potwierdzona
          </p>

          <h1
            className="text-[3.5rem] font-bold uppercase leading-none text-on-surface mb-8"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
          >
            DZIĘKUJEMY
            <br />
            ZA ZAMÓWIENIE
          </h1>

          <p className="text-sm text-on-surface-variant leading-relaxed mb-12">
            Potwierdzenie zostanie wysłane na Twój adres e-mail. Zamówienie zostanie zrealizowane w ciągu 2–5 dni roboczych.
          </p>

          <Link
            href="/sklep"
            className="inline-block px-8 py-4 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-80"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              letterSpacing: "0.1em",
              background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-container))",
              color: "var(--color-on-primary)",
            }}
          >
            Wróć do sklepu
          </Link>
        </div>
      </main>

      <footer className="px-16 py-8" style={{ background: "var(--color-surface-container-lowest)" }}>
        <p
          className="text-xs uppercase tracking-widest text-on-surface-variant"
          style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.1em" }}
        >
          MONOLITH
        </p>
      </footer>
    </div>
  );
}
