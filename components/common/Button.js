"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-brand-600 text-white shadow-lift hover:bg-brand-700 focus-visible:ring-brand-300 dark:focus-visible:ring-brand-800",
  secondary:
    "bg-white text-ink-900 border border-gray-200 hover:border-brand-300 hover:text-brand-600 focus-visible:ring-brand-200 dark:bg-gray-900 dark:text-white dark:border-gray-700 dark:hover:border-brand-500 dark:hover:text-brand-400",
  ghost:
    "bg-transparent text-ink-900 hover:bg-brand-50 focus-visible:ring-brand-200 dark:text-white dark:hover:bg-gray-900",
  // For buttons sitting on a section that's always colored (e.g. the blue
  // CTA band) regardless of site-wide dark mode — deliberately has no
  // `dark:` classes so it doesn't invert into a near-black button there.
  onDark:
    "bg-white text-brand-700 hover:bg-brand-50 shadow-lift focus-visible:ring-white/50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm md:text-base",
  lg: "px-8 py-4 text-base md:text-lg",
};

/**
 * Shared CTA button. Renders a <Link> when `href` is passed, otherwise
 * a plain <button> so it can be reused for form submits too.
 */
export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  disabled = false,
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-4",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <motion.span
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={classes}
    >
      {children}
      {Icon && <Icon className="text-lg" aria-hidden="true" />}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block" aria-disabled={disabled}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="inline-block">
      {content}
    </button>
  );
}
