import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Brand mark: a gradient "A" monogram paired with a stacked wordmark —
 * "Accredian" on top, "Enterprise" beneath it in small tracked-out caps.
 * Kept as one component since the navbar and footer both need the
 * identical lockup.
 */
export default function Logo({ className = "", size = "md" }) {
  const dims = size === "sm" ? 32 : 38;

  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <svg
        width={dims}
        height={dims}
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
        <rect width="38" height="38" rx="11" fill="url(#logoGradient)" />
        <path
          d="M19 8.5L29 29.5H24.4L22.05 24.3H15.95L13.6 29.5H9L19 8.5ZM19 15.3L16.55 20.7H21.45L19 15.3Z"
          fill="white"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-ink-900 dark:text-white">
          Accredian
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400">
          Enterprise
        </span>
      </span>
    </Link>
  );
}
