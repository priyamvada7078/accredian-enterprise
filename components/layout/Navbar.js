"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import ThemeToggle from "@/components/common/ThemeToggle";
import { navLinks } from "@/constants/navLinks";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(20);
  const activeId = useActiveSection(sectionIds);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/70 shadow-soft backdrop-blur-xl dark:bg-gray-950/70 dark:shadow-none dark:border-b dark:border-gray-800"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between py-3">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:text-brand-600",
                  "dark:text-gray-300 dark:hover:text-brand-400",
                  isActive && "text-brand-600 dark:text-brand-400"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-600 dark:bg-brand-400"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="#contact" size="sm">Talk to Us</Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            className="grid h-10 w-10 place-items-center rounded-lg text-ink-900 dark:text-white"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/95 lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-600 hover:bg-brand-50 hover:text-brand-600 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-brand-400"
                >
                  {link.label}
                </a>
              ))}
              <Button href="#contact" className="mt-2 w-full justify-center" onClick={() => setOpen(false)}>
                Talk to Us
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
