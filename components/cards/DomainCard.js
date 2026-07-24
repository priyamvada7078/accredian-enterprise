"use client";

import { motion } from "framer-motion";

export default function DomainCard({ icon: Icon, title, description, tags = [] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-gray-800 dark:bg-gray-900 dark:shadow-none"
    >
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400">
        <Icon className="text-xl" />
      </div>
      <div>
        <h3 className="text-base font-semibold text-ink-900 dark:text-white">{title}</h3>
        <p className="mt-1.5 text-sm text-ink-400 dark:text-gray-400">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-gray-50 px-2.5 py-1 text-xs text-ink-600 dark:bg-gray-800 dark:text-gray-300">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
