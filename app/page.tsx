import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "./HeroSection";
import FeaturedSection from "./FeaturedSection";
import PhilosophySection from "./PhilosophySection";
import Newsletter from "./Newsletter";
import { getProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const products = await getProducts();
  const featured = products.slice(0, 2);
  const philosophyImage = "/memo.jpeg";

  return (
    <div className="min-h-screen bg-surface">
      <Nav />
      <HeroSection />
      <FeaturedSection products={featured} />
      <PhilosophySection image={philosophyImage} />

      {/* NEWSLETTER */}
      <section className="py-32 px-6 md:px-12" style={{ background: "var(--color-surface)" }}>
        <div
          className="max-w-4xl mx-auto p-12 md:p-24 text-center"
          style={{ border: "1px solid rgba(93,63,56,0.2)", background: "var(--color-surface-container-low)" }}
        >
          <h2
            className="font-bold text-3xl md:text-5xl uppercase mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
          >
            DOŁĄCZ DO <span style={{ color: "var(--color-primary)" }}>ARCHIWUM</span>
          </h2>
          <p
            className="text-sm uppercase mb-12"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.2em", color: "var(--color-secondary)" }}
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
