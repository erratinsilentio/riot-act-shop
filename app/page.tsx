import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Newsletter from "./Newsletter";
import { getProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const products = await getProducts();
  const featured = products.slice(0, 2);

  return (
    <div className="min-h-screen bg-surface">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center px-6 md:px-12 pt-20 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="RIOT ACT"
            fill
            className="object-cover grayscale opacity-25"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #131313 0%, rgba(19,19,19,0.4) 50%, transparent 100%)",
            }}
          />
        </div>

        {/* Watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center z-[5] pointer-events-none select-none opacity-[0.12] lg:opacity-[0.25]"
          style={{ mixBlendMode: "hard-light" }}
        >
          <span
            className="font-black uppercase text-on-surface whitespace-nowrap"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(8rem, 22vw, 22rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            RIOT ACT
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl">
          <h1
            className="font-black text-[4rem] md:text-[10rem] leading-[0.85] uppercase text-on-surface"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              letterSpacing: "-0.03em",
            }}
          >
            RIOT
            <br />
            <span style={{ color: "var(--color-primary)" }}>ACT_001</span>
          </h1>
          <p
            className="mt-8 text-sm md:text-base uppercase max-w-xl"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              letterSpacing: "0.2em",
              color: "var(--color-secondary)",
            }}
          >
            Worldwide Movement 1312
          </p>
          <div className="mt-12">
            <Link
              href="/sklep"
              className="inline-block px-12 py-5 font-black text-lg uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                background: "var(--color-primary)",
                color: "var(--color-on-primary)",
              }}
            >
              SKLEP
            </Link>
          </div>
        </div>

        {/* Vertical meta */}
        <div className="absolute right-12 bottom-12 hidden lg:flex flex-col items-end gap-2">
          <span
            className="text-[10px] uppercase tracking-[0.3em] opacity-40"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "var(--color-secondary)",
            }}
          >
            FW_25_COLLECTION
          </span>
          <span
            className="text-[10px] uppercase tracking-[0.3em] opacity-40"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "var(--color-secondary)",
            }}
          >
            52.2297° N, 21.0122° E
          </span>
          <span
            className="text-[10px] uppercase tracking-[0.3em] opacity-40"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "var(--color-secondary)",
            }}
          >
            RIOT_ACT_ARCHIVE
          </span>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      {featured.length > 0 && (
        <section
          className="py-32 px-6 md:px-12"
          style={{ background: "var(--color-surface)" }}
        >
          <div className="flex items-baseline justify-between mb-12">
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
              style={{
                fontFamily: "var(--font-space-grotesk)",
                letterSpacing: "0.1em",
                color: "var(--color-on-surface-variant)",
              }}
            >
              Zobacz wszystko →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {featured.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── BRAND PHILOSOPHY ── */}
      <section
        className="py-40 px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center"
        style={{ background: "var(--color-surface-container-lowest)" }}
      >
        <div className="w-full md:w-1/2">
          <p
            className="text-sm uppercase mb-8"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              letterSpacing: "0.4em",
              color: "var(--color-primary)",
            }}
          >
            FILOZOFIA_MARKI
          </p>
          <h2
            className="font-black text-5xl md:text-7xl uppercase leading-tight mb-12"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              letterSpacing: "-0.02em",
            }}
          >
            RÓŻNE MIEJSCA,
            <br />
            ALE WSZYSTKIE
            <br />
            <span
              className="italic opacity-50"
              style={{ color: "var(--color-secondary)" }}
            >
              ŁĄCZY TEN SAM BRÓD.
            </span>
          </h2>
        </div>
        <div className="w-full md:w-1/2 relative aspect-video md:aspect-square overflow-hidden grayscale">
          <Image
            src={"/memo.jpeg"}
            alt="Riot Act"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section
        className="py-32 px-6 md:px-12"
        style={{ background: "var(--color-surface)" }}
      >
        <div
          className="max-w-4xl mx-auto p-12 md:p-24 text-center"
          style={{
            border: "1px solid rgba(93,63,56,0.2)",
            background: "var(--color-surface-container-low)",
          }}
        >
          <h2
            className="font-bold text-3xl md:text-5xl uppercase mb-6"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              letterSpacing: "-0.02em",
            }}
          >
            DOŁĄCZ DO{" "}
            <span style={{ color: "var(--color-primary)" }}>ARCHIWUM</span>
          </h2>
          <p
            className="text-sm uppercase mb-12"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              letterSpacing: "0.2em",
              color: "var(--color-secondary)",
            }}
          >
            Otrzymuj informacje o limitowanych dropach i wydarzeniach.
          </p>
          <Newsletter />
        </div>
      </section>

      <Footer />
    </div>
  );
}
