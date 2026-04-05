import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import Newsletter from "./Newsletter";
import { getProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const products = await getProducts();
  const featured = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-surface">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "var(--color-surface-container-low)" }}
        >
          <Image
            src="/hero.jpg"
            alt="RIOT ACT"
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(19,19,19,0.92) 0%, rgba(19,19,19,0.3) 60%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative z-10 px-16 pb-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1
              className="text-[5rem] md:text-[8rem] font-bold uppercase leading-none text-on-surface mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.03em" }}
            >
              RIOT
              <br />
              ACT
            </h1>
            <p
              className="text-sm uppercase tracking-widest mb-10"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                letterSpacing: "0.15em",
                color: "var(--color-primary)",
              }}
            >
              Worldwide Movement 1312
            </p>
            <Link
              href="/sklep"
              className="inline-block px-10 py-4 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                letterSpacing: "0.1em",
                background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-container))",
                color: "var(--color-on-primary)",
              }}
            >
              Wejdź do sklepu
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      {featured.length > 0 && (
        <section className="px-16 py-24">
          <div className="flex items-baseline justify-between mb-12">
            <h2
              className="text-[2rem] font-bold uppercase leading-none text-on-surface"
              style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
            >
              Wybrane modele
            </h2>
            <Link
              href="/sklep"
              className="text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
              style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.1em" }}
            >
              Zobacz wszystkie →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* NEWSLETTER */}
      <section
        className="px-16 py-32 grid grid-cols-1 lg:grid-cols-12"
        style={{ background: "var(--color-surface-container-lowest)" }}
      >
        <div className="lg:col-span-7 lg:col-start-3 flex flex-col gap-10">
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-6"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                letterSpacing: "0.1em",
                color: "var(--color-primary)",
              }}
            >
              Newsletter
            </p>
            <blockquote
              className="text-[1.75rem] font-bold uppercase leading-tight text-on-surface"
              style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.01em" }}
            >
              Różne miejsca,
              <br />
              ale wszystkie łączy
              <br />
              ten sam bród.
            </blockquote>
          </div>
          <Newsletter />
        </div>
      </section>

      <Footer />
    </div>
  );
}
