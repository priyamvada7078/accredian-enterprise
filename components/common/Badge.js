import { cn } from "@/lib/cn";

export default function Badge({ children, className = "" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-medium text-ink-600 backdrop-blur-sm",
        "dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-300",
        className
      )}
    >
      {children}
    </span>
  );
}
