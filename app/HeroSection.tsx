"use client";

import Link from "next/link";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

export default function HeroSection() {
  const { scrollY } = useScroll();

  // Watermark drifts up slower than content
  const watermarkY = useTransform(scrollY, [0, 600], [0, -120]);
  // Background image scrolls even slower
  const bgY = useTransform(scrollY, [0, 600], [0, -60]);
  // Content fades and slides up on scroll
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const contentY = useTransform(scrollY, [0, 400], [0, -60]);

  return (
    <section className="relative h-screen flex items-center px-6 md:px-12 pt-20 overflow-hidden">
      {/* Background photo */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
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
            background: "linear-gradient(to top, #131313 0%, rgba(19,19,19,0.4) 50%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Watermark */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-[5] pointer-events-none select-none opacity-[0.12] lg:opacity-[0.25]"
        style={{ mixBlendMode: "hard-light", y: watermarkY }}
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
      </motion.div>

      {/* Content */}
      <motion.div className="relative z-10 max-w-5xl" style={{ opacity: contentOpacity, y: contentY }}>
        <motion.h1
          className="font-black text-[4rem] md:text-[10rem] leading-[0.85] uppercase text-on-surface"
          style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.03em" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          RIOT
          <br />
          <span style={{ color: "var(--color-primary)" }}>ACT_001</span>
        </motion.h1>

        <motion.p
          className="mt-8 text-sm md:text-base uppercase max-w-xl"
          style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.2em", color: "var(--color-secondary)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Worldwide Movement 1312
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
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
        </motion.div>
      </motion.div>

      {/* Vertical meta */}
      <motion.div
        className="absolute right-12 bottom-12 hidden lg:flex flex-col items-end gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {["FW_25_COLLECTION", "52.2297° N, 21.0122° E", "RIOT_ACT_ARCHIVE"].map((text) => (
          <span
            key={text}
            className="text-[10px] uppercase tracking-[0.3em] opacity-40"
            style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--color-secondary)" }}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
