/**
 * Small classnames merge helper — avoids pulling in clsx + tailwind-merge
 * for a project this size. Falsy values are dropped, everything else joined.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
