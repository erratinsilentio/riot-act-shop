"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ImagePanel({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="relative bg-surface-container-low min-h-[60vh] lg:min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduced ? 0 : 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
