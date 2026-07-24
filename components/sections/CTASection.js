"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import AnimatedBlob from "@/components/common/AnimatedBlob";

export default function CTASection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 py-20 sm:py-28"
    >
      <AnimatedBlob className="left-[-5%] top-[-10%] h-72 w-72" color="light" />
      <AnimatedBlob className="bottom-[-10%] right-[-5%] h-80 w-80" color="light" />

      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5 text-white"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Bring this program to your team</h2>
          <p className="max-w-md text-brand-50">
            Tell us about your team&apos;s goals and we&apos;ll get back with a program built around them.
          </p>
          <Button href="#courses" variant="onDark" icon={HiArrowRight} className="w-fit">
            View All Programs
          </Button>
        </motion.div>

        {/* Glass panel instead of a solid white/black card — stays consistent
            whether the site is in light or dark mode, since this section is
            always on a colored background. */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
        >
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full name"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50 transition-colors focus:border-white/60 focus:bg-white/15"
          />
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Work email"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50 transition-colors focus:border-white/60 focus:bg-white/15"
          />
          <textarea
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What are you looking to solve for?"
            rows={3}
            className="resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/50 transition-colors focus:border-white/60 focus:bg-white/15"
          />
          <Button type="submit" variant="onDark" disabled={status === "loading"} className="w-full justify-center">
            {status === "loading" ? "Sending..." : "Get in Touch"}
          </Button>
          {status === "success" && (
            <p className="text-sm font-medium text-emerald-300">Thanks — we&apos;ll be in touch shortly.</p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-300">Something went wrong. Please try again.</p>
          )}
        </motion.form>
      </Container>
    </section>
  );
}
