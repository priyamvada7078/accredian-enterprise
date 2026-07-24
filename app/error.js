"use client";

import Button from "@/components/common/Button";

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Something broke</p>
      <h1 className="text-2xl font-bold text-ink-900 sm:text-3xl">We hit an unexpected error</h1>
      <p className="max-w-md text-sm text-ink-400">{error?.message || "Please try again in a moment."}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
