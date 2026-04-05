import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default async function HomePage() {

  return (
    <div className="min-h-screen bg-surface">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background image — replace src with your hero photo */}
        <div className="absolute inset-0" style={{ background: "var(--color-surface-container-low)" }}>
          {/* TO DO: wrzuć zdjęcie hero do public/hero.jpg i odkomentuj poniżej */}
          {/* <Image src="/hero.jpg" alt="RIOT ACT" fill className="object-cover object-center" priority /> */}

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(19,19,19,0.92) 0%, rgba(19,19,19,0.3) 60%, transparent 100%)" }}
          />
        </div>

        {/* Hero content */}
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

      {/* EDITORIAL */}
      <section
        className="px-16 py-32 grid grid-cols-1 lg:grid-cols-12"
        style={{ background: "var(--color-surface-container-lowest)" }}
      >
        <div className="lg:col-span-7 lg:col-start-3">
          <p
            className="text-xs uppercase tracking-widest mb-8"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              letterSpacing: "0.1em",
              color: "var(--color-primary)",
            }}
          >
            O nas
          </p>
          <blockquote
            className="text-[1.75rem] font-bold uppercase leading-tight text-on-surface"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.01em" }}
          >
            Różne miejsca, ale wszystkie łączy ten sam bród.
          </blockquote>
        </div>
      </section>

      <Footer />
    </div>
  );
}
