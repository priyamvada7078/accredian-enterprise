import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialCard({ name, role, company, quote, avatar }) {
  return (
    <div className="flex h-full flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-7 shadow-soft dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">
      <FaQuoteLeft className="text-2xl text-brand-200 dark:text-brand-800" />
      <p className="flex-1 text-sm leading-relaxed text-ink-600 dark:text-gray-300">{quote}</p>
      <div className="flex items-center gap-3 border-t border-gray-100 pt-4 dark:border-gray-800">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-brand-50 dark:bg-brand-950/60">
          <Image src={avatar} alt={name} fill className="object-cover" sizes="40px" />
        </div>
        <div>
          <p className="text-sm font-semibold text-ink-900 dark:text-white">{name}</p>
          <p className="text-xs text-ink-400 dark:text-gray-400">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
}
