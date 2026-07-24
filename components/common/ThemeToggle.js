"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/cn";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative grid h-10 w-10 place-items-center overflow-hidden rounded-lg border border-gray-200 text-ink-600 transition-colors hover:border-brand-300 hover:text-brand-600",
        "dark:border-gray-700 dark:text-gray-300 dark:hover:border-brand-500 dark:hover:text-brand-400",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          className="grid place-items-center"
        >
          {isDark ? <HiOutlineSun className="text-lg" /> : <HiOutlineMoon className="text-lg" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
