import { cn } from "@/lib/cn";

/**
 * Consistent max-width + gutter wrapper used by every section,
 * so spacing never drifts between components.
 */
export default function Container({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className)}>
      {children}
    </Tag>
  );
}
