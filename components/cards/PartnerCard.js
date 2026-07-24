import Image from "next/image";

/**
 * Real partner logos come in wildly inconsistent native sizes/aspect ratios
 * (a near-square 917x917 PNG next to a 184x82 wordmark, for example), which
 * used to make them look mismatched even with object-contain. Giving every
 * logo an identical fixed-size white "plate" — regardless of card theme —
 * normalizes both the visual size and guarantees contrast in dark mode,
 * since logos assume a light background.
 */
export default function PartnerCard({ name, logo }) {
  return (
    <div className="group flex h-28 items-center justify-center rounded-xl border border-gray-100 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-white p-3">
        <div className="relative h-full w-full transition-all duration-300 group-hover:scale-105">
          <Image src={logo} alt={name} fill className="object-contain" sizes="180px" />
        </div>
      </div>
    </div>
  );
}
