"use client";

import { motion } from "framer-motion";

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-brand-50/40 p-7 shadow-soft dark:border-gray-800 dark:from-gray-900 dark:to-gray-900/60 dark:shadow-none"
    >
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-600 text-white transition-transform duration-300 group-hover:rotate-6">
        <Icon className="text-xl" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-400 dark:text-gray-400">{description}</p>
    </motion.div>
  );
}
