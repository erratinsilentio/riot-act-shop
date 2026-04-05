"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Nav() {
  const { itemCount } = useCart();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-16 py-5 flex items-center justify-between"
      style={{ background: "rgba(19,19,19,0.8)", backdropFilter: "blur(20px)" }}
    >
      <Link
        href="/"
        className="text-sm font-bold tracking-widest uppercase text-on-surface"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        RIOT ACT
      </Link>

      <nav className="flex items-center gap-10">
        <Link href="/" className="text-xs tracking-widest uppercase text-on-surface-variant hover:text-on-surface transition-colors" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          Home
        </Link>
        <Link href="/sklep" className="text-xs tracking-widest uppercase text-on-surface-variant hover:text-on-surface transition-colors" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          Produkty
        </Link>
      </nav>

      <Link href="/koszyk" aria-label="Koszyk" className="relative">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-on-surface">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
        {itemCount > 0 && (
          <span
            className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center text-[10px] font-bold"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              background: "var(--color-primary)",
              color: "var(--color-on-primary)",
            }}
          >
            {itemCount > 9 ? "9+" : itemCount}
          </span>
        )}
      </Link>
    </header>
  );
}
