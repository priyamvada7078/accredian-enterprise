"use client";

import { motion } from "framer-motion";
import { HiOutlineClock, HiOutlineAcademicCap } from "react-icons/hi2";

export default function CourseCard({ title, level, duration, points = [] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-gray-800 dark:bg-gray-900 dark:shadow-none"
    >
      <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 dark:bg-brand-950/60 dark:text-brand-400">{level}</span>
      <h3 className="text-lg font-semibold text-ink-900 dark:text-white">{title}</h3>
      <div className="flex items-center gap-1.5 text-xs text-ink-400 dark:text-gray-400">
        <HiOutlineClock /> {duration}
      </div>
      <ul className="flex flex-col gap-2 border-t border-gray-100 pt-3 text-sm text-ink-600 dark:border-gray-800 dark:text-gray-300">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <HiOutlineAcademicCap className="mt-0.5 shrink-0 text-brand-500 dark:text-brand-400" />
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
