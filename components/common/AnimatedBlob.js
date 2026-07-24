"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Soft floating gradient blob used behind the Hero and CTA sections.
 * Kept as its own component so we don't repeat the same blur/animate
 * JSX in two different sections.
 */
export default function AnimatedBlob({ className = "", color = "brand" }) {
  const colorMap = {
    brand: "from-brand-500/25 to-blue-300/10",
    // Translucent white instead of solid white->brand-100 — the old
    // version showed up as a hard white smudge on the blue CTA section
    // and on dark backgrounds. This blends into whatever's behind it.
    light: "from-white/20 to-brand-100/10 dark:from-white/10 dark:to-brand-400/10",
  };

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "absolute rounded-full blur-3xl bg-gradient-to-br",
        colorMap[color],
        className
      )}
      animate={{
        scale: [1, 1.08, 1],
        opacity: [0.35, 0.55, 0.35],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
