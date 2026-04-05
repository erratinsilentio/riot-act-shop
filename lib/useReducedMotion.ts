"use client";

import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

/**
 * Returns animation props that respect prefers-reduced-motion.
 * Pass to `transition` on any motion element.
 */
export function useReducedMotion() {
  const reduced = useFramerReducedMotion();
  return reduced;
}
