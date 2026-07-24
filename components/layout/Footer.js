import { FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import { siteConfig } from "@/constants/siteConfig";

const social = [
  { icon: FaLinkedinIn, href: siteConfig.socials.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, href: siteConfig.socials.twitter, label: "Twitter" },
  { icon: FaInstagram, href: siteConfig.socials.instagram, label: "Instagram" },
  { icon: FaYoutube, href: siteConfig.socials.youtube, label: "YouTube" },
];

const columns = [
  {
    title: "Programs",
    links: [
      { label: "Data Science & AI", href: "#courses" },
      { label: "Product Management", href: "#courses" },
      { label: "Full Stack Development", href: "#courses" },
      { label: "Business Analytics", href: "#courses" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Track Record", href: "#track-record" },
      { label: "Our Partners", href: "#partners" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQs", href: "#faq" },
      { label: "Delivery Process", href: "#delivery-process" },
      { label: "Blog", href: "#" },
      { label: "Success Stories", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="max-w-xs text-sm text-ink-400 dark:text-gray-400">{siteConfig.description}</p>
          <div className="flex gap-3 pt-2">
            {social.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-gray-200 text-ink-600 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-brand-500 dark:hover:text-brand-400"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-ink-900 dark:text-white">{col.title}</h4>
            {col.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="w-fit text-sm text-ink-400 transition-colors hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </Container>

      <div className="border-t border-gray-100 py-6 dark:border-gray-800">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-ink-400 dark:text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Privacy Policy</a>
            <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Terms of Service</a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
