"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types/database";

export default function FeaturedSection({ products }: { products: Product[] }) {
  if (!products.length) return null;

  return (
    <section className="py-32 px-6 md:px-12" style={{ background: "var(--color-surface)" }}>
      <motion.div
        className="flex items-baseline justify-between mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2
          className="text-base font-bold uppercase"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            letterSpacing: "0.15em",
            color: "var(--color-on-surface-variant)",
          }}
        >
          Wybrane modele
        </h2>
        <Link
          href="/sklep"
          className="text-xs uppercase tracking-widest transition-colors hover:text-primary"
          style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.1em", color: "var(--color-on-surface-variant)" }}
        >
          Zobacz wszystko →
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
