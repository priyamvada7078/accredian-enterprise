"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Every section on the page uses this so the eyebrow → heading → subtext
 * rhythm stays identical from Track Record all the way to the CTA.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("flex flex-col gap-4 max-w-2xl", alignment, className)}
    >
      {eyebrow && (
        <span className="inline-flex w-fit items-center rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-600 dark:bg-brand-950/50 dark:text-brand-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="text-base text-ink-400 dark:text-gray-400 sm:text-lg">{subtitle}</p>}
    </motion.div>
  );
}
