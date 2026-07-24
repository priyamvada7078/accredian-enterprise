"use client";

import { useEffect, useState } from "react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import TestimonialCard from "@/components/cards/TestimonialCard";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function loadTestimonials() {
      try {
        const res = await fetch("/api/testimonials");
        const data = await res.json();
        if (!ignore) setTestimonials(data.testimonials ?? []);
      } catch (err) {
        console.error("Failed to load testimonials", err);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadTestimonials();
    return () => { ignore = true; };
  }, []);

  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Testimonials" title="What our learners say" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-56 animate-pulse rounded-2xl bg-gray-100 dark:bg-gray-800" />
              ))
            : testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
        </div>
      </Container>
    </section>
  );
}
