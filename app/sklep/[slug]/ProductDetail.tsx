"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Variant, Size } from "@/types/database";
import { formatPrice } from "@/lib/utils";

interface Props {
  productId: string;
  name: string;
  description: string;
  price: number;
  variants: Variant[];
  image?: string;
}

const SIZE_ORDER: Size[] = ["S", "M", "L", "XL"];

export default function ProductDetail({ productId, name, description, price, variants, image }: Props) {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const stockFor = (size: Size) => variants.find((v) => v.size === size)?.stock ?? 0;
  const selectedVariant = variants.find((v) => v.size === selectedSize);

  function handleAdd() {
    if (!selectedVariant) return;
    addItem({
      productId,
      variantId: selectedVariant.id,
      name,
      size: selectedSize!,
      price,
      quantity: 1,
      image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Name + price */}
      <div>
        <h1
          className="text-[2rem] font-bold uppercase leading-tight text-on-surface mb-4"
          style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
        >
          {name}
        </h1>
        <p className="text-2xl font-bold text-on-surface" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          {formatPrice(price)}
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-on-surface-variant leading-relaxed max-w-sm">{description}</p>

      {/* Size selector */}
      <div>
        <p
          className="text-xs uppercase tracking-widest text-on-surface-variant mb-3"
          style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.1em" }}
        >
          Rozmiar
        </p>
        <div className="flex gap-2">
          {SIZE_ORDER.map((size) => {
            const inStock = stockFor(size) > 0;
            const isSelected = selectedSize === size;
            return (
              <button
                key={size}
                disabled={!inStock}
                onClick={() => setSelectedSize(size)}
                className="w-12 h-12 text-xs font-bold uppercase transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  background: isSelected ? "var(--color-primary)" : "var(--color-surface-container-low)",
                  color: isSelected ? "var(--color-on-primary)" : "var(--color-on-surface)",
                }}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <button
        disabled={!selectedSize}
        onClick={handleAdd}
        className="w-full py-4 text-sm font-bold uppercase tracking-widest transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        style={{
          fontFamily: "var(--font-space-grotesk)",
          letterSpacing: "0.1em",
          background: added
            ? "var(--color-surface-container-high)"
            : selectedSize
            ? "linear-gradient(135deg, var(--color-primary), var(--color-primary-container))"
            : "var(--color-surface-container-high)",
          color: added
            ? "var(--color-primary)"
            : selectedSize
            ? "var(--color-on-primary)"
            : "var(--color-on-surface-variant)",
        }}
      >
        {added ? "Dodano do koszyka" : selectedSize ? "Dodaj do koszyka" : "Wybierz rozmiar"}
      </button>
    </div>
  );
}
