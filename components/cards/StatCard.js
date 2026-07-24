"use client";

import CountUp from "react-countup";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

export default function StatCard({ icon: Icon, value, suffix = "", label }) {
  const [ref, isInView] = useInView({ threshold: 0.4 });

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300",
        "hover:-translate-y-1.5 hover:shadow-lift",
        "dark:border-gray-800 dark:bg-gray-900 dark:shadow-none"
      )}
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-50 blur-2xl transition-opacity duration-300 group-hover:opacity-80 dark:bg-brand-900/30" />
      <div className="relative flex flex-col gap-3">
        {Icon && (
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400">
            <Icon className="text-xl" />
          </div>
        )}
        <p className="text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
          {isInView ? <CountUp end={value} duration={2} separator="," /> : 0}
          {suffix}
        </p>
        <p className="text-sm text-ink-400 dark:text-gray-400">{label}</p>
      </div>
    </div>
  );
}
