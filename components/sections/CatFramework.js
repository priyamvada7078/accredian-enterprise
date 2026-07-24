"use client";

import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const pillars = [
  { letter: "C", title: "Concept", description: "Structured foundations taught by academic and industry faculty." },
  { letter: "A", title: "Application", description: "Applied labs and live projects that mirror real work." },
  { letter: "T", title: "Transformation", description: "Mentorship and placement support that convert skill into outcome." },
];

export default function CatFramework() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="The CAT Framework"
          title="Concept. Application. Transformation."
          subtitle="Our pedagogy model behind every program, from foundational to executive."
        />

        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.letter}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative flex flex-col items-center gap-4 rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-soft dark:border-gray-800 dark:bg-gray-900 dark:shadow-none"
            >
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-600 text-2xl font-bold text-white">
                {pillar.letter}
              </span>
              <h3 className="text-lg font-semibold text-ink-900 dark:text-white">{pillar.title}</h3>
              <p className="text-sm text-ink-400 dark:text-gray-400">{pillar.description}</p>

              {index < pillars.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="absolute -right-6 top-1/2 hidden h-px w-12 origin-left bg-brand-200 dark:bg-brand-800 sm:block"
                />
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
