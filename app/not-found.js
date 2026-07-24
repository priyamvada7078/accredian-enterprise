import Link from "next/link";
import Button from "@/components/common/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-6xl font-bold text-brand-600">404</p>
      <h1 className="text-2xl font-bold text-ink-900 sm:text-3xl">Page not found</h1>
      <p className="max-w-md text-sm text-ink-400">The page you&apos;re looking for doesn&apos;t exist or may have moved.</p>
      <Button href="/">Back to Home</Button>
      <Link href="/#contact" className="text-sm text-ink-400 hover:text-brand-600">or get in touch</Link>
    </div>
  );
}
