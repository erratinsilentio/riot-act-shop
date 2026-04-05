import { Suspense } from "react";
import Nav from "@/components/Nav";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "./CategoryFilter";
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
        <div className="mb-12">
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
        </div>

        {/* Grid */}
        {products.length === 0 ? (
          <p className="text-on-surface-variant text-sm">Brak produktów.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <footer className="px-16 py-8 border-t border-surface-container-high">
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
