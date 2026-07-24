"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight, HiOutlineCheckBadge } from "react-icons/hi2";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import AnimatedBlob from "@/components/common/AnimatedBlob";
import { stats } from "@/constants/stats";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid pb-20 pt-32 sm:pb-28 sm:pt-40">
      <AnimatedBlob className="left-[-10%] top-10 h-72 w-72" />
      <AnimatedBlob className="right-[-10%] top-40 h-80 w-80" color="light" />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge>
              <HiOutlineCheckBadge className="text-brand-600" /> Trusted by 120+ enterprise partners
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-tight tracking-tight text-ink-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Upskilling programs built with <span className="text-gradient-brand">universities</span>, delivered for the workplace
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg text-base text-ink-400 dark:text-gray-400 sm:text-lg"
          >
            We partner with leading institutions and hiring teams to design outcome-driven programs in Data Science, Product Management, and emerging tech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="#courses" icon={HiArrowRight}>Explore Programs</Button>
            <Button href="#contact" variant="secondary">Talk to an Advisor</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-6 dark:border-gray-800 sm:grid-cols-4"
          >
            {stats.slice(0, 2).map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-ink-900 dark:text-white">{stat.value.toLocaleString()}{stat.suffix}</p>
                <p className="text-xs text-ink-400 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ">
            <Image
              src="/images/image.webp"
              alt="Illustration of a professional working on a laptop"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -left-6 bottom-6 rounded-2xl border border-gray-100 bg-white/90 p-4 shadow-lift backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/90 sm:-left-10"
          >
            <p className="text-xl font-bold text-brand-600 dark:text-brand-400">92%</p>
            <p className="text-xs text-ink-400 dark:text-gray-400">Cohort completion rate</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -right-4 top-6 rounded-2xl border border-gray-100 bg-white/90 p-4 shadow-lift backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/90 sm:-right-8"
          >
            
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
