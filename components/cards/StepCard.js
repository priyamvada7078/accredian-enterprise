"use client";

import { motion } from "framer-motion";

export default function StepCard({ index, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-gray-800 dark:bg-gray-900 dark:shadow-none"
    >
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
        {index}
      </div>
      <div>
        <h3 className="text-base font-semibold text-ink-900 dark:text-white">{title}</h3>
        <p className="mt-1.5 text-sm text-ink-400 dark:text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}
