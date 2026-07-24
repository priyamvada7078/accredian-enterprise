"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import CourseCard from "@/components/cards/CourseCard";
import { courseTabs } from "@/constants/courses";
import { cn } from "@/lib/cn";

export default function CourseSegmentation() {
  const [activeTab, setActiveTab] = useState(courseTabs[0].key);
  const active = courseTabs.find((tab) => tab.key === activeTab);

  return (
    <section id="courses" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Programs" title="Find the right program for where you are" />

        <div className="mx-auto flex w-fit flex-wrap gap-2 rounded-full border border-gray-100 bg-white p-1.5 shadow-soft dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">
          {courseTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                activeTab === tab.key
                  ? "bg-brand-600 text-white"
                  : "text-ink-600 hover:text-brand-600 dark:text-gray-300 dark:hover:text-brand-400"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {active.courses.map((course) => <CourseCard key={course.title} {...course} />)}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
