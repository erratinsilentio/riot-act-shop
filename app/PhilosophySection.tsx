"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const lines = ["RÓŻNE MIEJSCA,", "ALE WSZYSTKIE", "ŁĄCZY TEN SAM BRÓD."];

export default function PhilosophySection({ image }: { image?: string }) {
  return (
    <section
      className="py-40 px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center"
      style={{ background: "var(--color-surface-container-lowest)" }}
    >
      <div className="w-full md:w-1/2">
        <motion.p
          className="text-sm uppercase mb-8"
          style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.4em", color: "var(--color-primary)" }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          FILOZOFIA_MARKI
        </motion.p>

        <h2
          className="font-black text-5xl md:text-7xl uppercase leading-tight mb-12"
          style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}
        >
          {lines.map((line, i) => (
            <motion.span
              key={line}
              className="block"
              style={i === 2 ? { color: "var(--color-secondary)", opacity: undefined } : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: i === 2 ? 0.5 : 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-40px" }}
            >
              {i === 2 ? <span className="italic">{line}</span> : line}
            </motion.span>
          ))}
        </h2>
      </div>

      <motion.div
        className="w-full md:w-1/2 relative aspect-video md:aspect-square overflow-hidden grayscale"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-80px" }}
      >
        {image ? (
          <Image src={image} alt="Riot Act" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        ) : (
          <div className="w-full h-full" style={{ background: "var(--color-surface-container)" }} />
        )}
      </motion.div>
    </section>
  );
}
