import { Suspense } from "react";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kolekcja",
  description: "Urban tactical gear — przeglądaj wszystkie modele. Limitowane kolekcje, minimalistyczny design.",
  openGraph: {
    title: "Kolekcja | RIOT ACT",
    description: "Urban tactical gear — przeglądaj wszystkie modele. Limitowane kolekcje, minimalistyczny design.",
  },
};

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CategoryFilter from "./CategoryFilter";
import ProductGrid from "./ProductGrid";
import FadeIn from "@/components/FadeIn";
import { getProducts } from "@/lib/products";

interface Props {
  searchParams: Promise<{ kategoria?: string }>;
}

export default async function SklepPage({ searchParams }: Props) {
  const { kategoria } = await searchParams;
  const products = await getProducts(kategoria);

  return (
    <div className="min-h-screen bg-surface">
      <Nav />

      <main className="pt-32 px-16 pb-24">
        {/* Header */}
        <FadeIn className="mb-12">
          <h1
            className="text-[3.5rem] font-bold uppercase leading-none tracking-tight text-on-surface mb-3"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
          >
            KOLEKCJA
          </h1>
          <p
            className="text-xs uppercase tracking-widest text-on-surface-variant mb-8"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.1em" }}
          >
            URBAN TACTICAL GEAR / SERIES 01
          </p>

          <Suspense>
            <CategoryFilter />
          </Suspense>
        </FadeIn>

        {/* Grid */}
        {products.length === 0 ? (
          <p className="text-on-surface-variant text-sm">Brak produktów.</p>
        ) : (
          <ProductGrid products={products} />
        )}
      </main>

      <Footer />
    </div>
  );
}
