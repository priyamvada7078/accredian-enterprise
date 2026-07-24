"use client";
import { useState } from "react";

/**
 * Reads the theme the inline script in layout.js already applied to <html>,
 * so there's no flash-of-wrong-theme on first paint and no need to sync
 * state via an effect — the initial value is computed lazily instead.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof document === "undefined") return "light";
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  });

  function toggleTheme() {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("theme", next);
      return next;
    });
  }

  return { theme, toggleTheme };
}
