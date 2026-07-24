"use client";
import { useEffect, useState } from "react";

/** Used to intensify the navbar's glass/blur effect once the page scrolls. */
export function useScrolled(offset = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > offset);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return scrolled;
}
