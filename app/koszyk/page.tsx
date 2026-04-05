"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

const SHIPPING = 1500; // 15.00 PLN in grosze

export default function KoszykPage() {
  const { items, subtotal, removeItem, updateQuantity } = useCart();

  const total = subtotal + (items.length > 0 ? SHIPPING : 0);

  return (
    <div className="min-h-screen bg-surface">
      <Nav />

      <main className="pt-32 px-16 pb-24">
        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-[3.5rem] font-bold uppercase leading-none text-on-surface"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
          >
            TWÓJ
            <br />
            KOSZYK
          </h1>
          <p
            className="mt-3 text-xs uppercase tracking-widest text-on-surface-variant"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.1em" }}
          >
            — SUMA ELEMENTÓW: {items.reduce((s, i) => s + i.quantity, 0)}
          </p>
        </div>

        {items.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-on-surface-variant text-sm mb-8">Koszyk jest pusty.</p>
            <Link
              href="/sklep"
              className="text-xs uppercase tracking-widest text-on-surface hover:text-primary transition-colors"
              style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.1em" }}
            >
              Wróć do sklepu →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_4fr] gap-16">
            {/* Items */}
            <div className="flex flex-col gap-0">
              {items.map((item) => (
                <div
                  key={item.variantId}
                  className="flex gap-6 py-6"
                  style={{ borderBottom: "1px solid var(--color-surface-container-high)" }}
                >
                  {/* Image */}
                  <div className="relative w-24 h-28 flex-shrink-0 bg-surface-container-low">
                    {item.image ? (
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px" />
                    ) : (
                      <div className="w-full h-full bg-surface-container-low" />
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3
                          className="text-sm font-bold uppercase text-on-surface"
                          style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                          {item.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => removeItem(item.variantId)}
                        className="text-on-surface-variant hover:text-on-surface transition-colors text-lg leading-none"
                        aria-label="Usuń"
                      >
                        ×
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4">
                        {/* Size chip */}
                        <span
                          className="px-3 py-1 text-xs uppercase tracking-widest"
                          style={{
                            fontFamily: "var(--font-space-grotesk)",
                            background: "var(--color-surface-variant)",
                            color: "var(--color-on-surface-variant)",
                          }}
                        >
                          {item.size}
                        </span>

                        {/* Quantity */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
                            style={{ background: "var(--color-surface-container-low)" }}
                          >
                            −
                          </button>
                          <span className="text-sm text-on-surface w-4 text-center" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
                            style={{ background: "var(--color-surface-container-low)" }}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <p className="text-sm font-bold text-on-surface" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:sticky lg:top-32 h-fit" style={{ background: "var(--color-surface-container-low)", padding: "2rem" }}>
              <h2
                className="text-xs uppercase tracking-widest text-on-surface mb-8"
                style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.1em" }}
              >
                Podsumowanie
              </h2>

              <div className="flex flex-col gap-4 mb-8">
                <div className="flex justify-between text-xs text-on-surface-variant" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  <span className="uppercase tracking-widest">Wartość produktów</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-xs text-on-surface-variant" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  <span className="uppercase tracking-widest">Dostawa</span>
                  <span>{formatPrice(SHIPPING)}</span>
                </div>
              </div>

              <div
                className="flex justify-between items-center py-4 mb-8"
                style={{ borderTop: "1px solid var(--color-surface-container-high)" }}
              >
                <span
                  className="text-xs uppercase tracking-widest text-on-surface"
                  style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.1em" }}
                >
                  Łącznie
                </span>
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--color-primary)" }}
                >
                  {formatPrice(total)}
                </span>
              </div>

              <button
                className="w-full py-4 text-sm font-bold uppercase tracking-widest mb-4 transition-opacity hover:opacity-90"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  letterSpacing: "0.1em",
                  background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-container))",
                  color: "var(--color-on-primary)",
                }}
              >
                Przejdź do płatności
              </button>

              <Link
                href="/sklep"
                className="block text-center text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
                style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.1em" }}
              >
                Kontynuuj zakupy
              </Link>
            </div>
          </div>
        )}
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
