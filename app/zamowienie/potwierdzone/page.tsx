"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

export default function PotwierdzonePage() {
  const { clearCart } = useCart();
  const reduced = useReducedMotion();

  useEffect(() => {
    clearCart();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Nav />

      <main className="flex-1 flex flex-col justify-center px-16 pt-32 pb-24">
        <motion.div
          className="max-w-lg"
          initial={{ opacity: 0, y: reduced ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
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
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
