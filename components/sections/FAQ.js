"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi2";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { faqs } from "@/constants/faqs";
import { cn } from "@/lib/cn";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container className="mx-auto flex max-w-3xl flex-col gap-12">
        <SectionHeading eyebrow="FAQs" title="Questions we get asked the most" />

        <div className="flex flex-col divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white shadow-soft dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-medium text-ink-900 dark:text-white sm:text-base">{faq.question}</span>
                  <HiChevronDown
                    className={cn(
                      "shrink-0 text-ink-400 transition-transform duration-300 dark:text-gray-500",
                      isOpen && "rotate-180 text-brand-600 dark:text-brand-400"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden px-6"
                    >
                      <p className="pb-5 text-sm text-ink-400 dark:text-gray-400">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
