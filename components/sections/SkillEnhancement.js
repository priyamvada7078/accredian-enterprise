"use client";

import { motion } from "framer-motion";
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineMap,
  HiOutlineUserGroup,
  HiOutlinePuzzlePiece,
  HiOutlineTrophy,
} from "react-icons/hi2";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/cn";

const timeline = [
  {
    icon: HiOutlineClipboardDocumentCheck,
    title: "Skill assessment",
    description: "A diagnostic to map where you're starting from, so nothing you learn afterwards is a repeat.",
    stat: "01",
  },
  {
    icon: HiOutlineMap,
    title: "Personalized learning path",
    description: "A track sequenced around your goals and gaps, not a fixed syllabus everyone follows the same way.",
    stat: "02",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Live mentorship",
    description: "Weekly sessions with an industry mentor to unblock progress and pressure-test your work.",
    stat: "03",
  },
  {
    icon: HiOutlinePuzzlePiece,
    title: "Capstone project",
    description: "A real-world project scoped like an actual deliverable, reviewed by industry evaluators.",
    stat: "04",
  },
  {
    icon: HiOutlineTrophy,
    title: "Certification",
    description: "A university co-branded credential that closes out the program and signals real capability.",
    stat: "05",
  },
];

export default function SkillEnhancement() {
  return (
    <section className="relative overflow-hidden bg-brand-50/40 py-20 dark:bg-gray-900/40 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-60"
        aria-hidden="true"
      />

      <Container className="relative flex flex-col gap-16">
        <SectionHeading
          eyebrow="Skill Enhancement"
          title="How a learner actually progresses"
          subtitle="Five stages, the same for every cohort — assessment through certification."
        />

        {/* Desktop: alternating zigzag timeline with a central animated spine */}
        <div className="relative hidden lg:block">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-200 to-transparent dark:via-brand-800">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full w-full origin-top bg-gradient-to-b from-brand-500 via-brand-600 to-brand-500"
            />
          </div>

          <div className="flex flex-col gap-4">
            {timeline.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.title} className="relative grid grid-cols-2 items-center gap-10 py-6">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={cn("flex", isEven ? "col-start-1 justify-end" : "col-start-2 justify-start")}
                  >
                    <div className="group relative w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-none">
                      <span className="pointer-events-none absolute -right-4 -top-6 text-6xl font-black text-brand-50 transition-colors duration-300 group-hover:text-brand-100 dark:text-gray-800/60 dark:group-hover:text-brand-950/60">
                        {step.stat}
                      </span>
                      <div className="relative flex items-start gap-4">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lift">
                          <step.icon className="text-xl" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-ink-900 dark:text-white">{step.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-ink-400 dark:text-gray-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="absolute left-1/2 top-1/2 z-10 grid h-4 w-4 -translate-x-1/2 -translate-y-1/2 place-items-center"
                  >
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-brand-400 opacity-40" />
                    <span className="relative h-3 w-3 rounded-full bg-brand-600 ring-4 ring-white dark:ring-gray-950" />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet: single-column left-aligned timeline */}
        <div className="relative flex flex-col gap-6 lg:hidden">
          <div className="absolute left-6 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-500 via-brand-300 to-transparent dark:via-brand-800" />
          {timeline.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="relative flex gap-5 pl-1"
            >
              <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lift">
                <step.icon className="text-xl" />
              </div>
              <div className="flex-1 rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-soft backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-none">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-ink-900 dark:text-white">{step.title}</h3>
                  <span className="text-xs font-bold text-brand-300 dark:text-brand-700">{step.stat}</span>
                </div>
                <p className="mt-1.5 text-sm text-ink-400 dark:text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
