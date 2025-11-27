"use client";

import { motion } from "framer-motion";
import { cardFade } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="flex justify-center px-4 pt-16 pb-10 md:pt-24">
      <motion.div
        variants={cardFade}
        initial="hidden"
        animate="visible"
        className="w-full max-w-content rounded-card bg-white/80 p-10 shadow-panel backdrop-blur"
      >
        <div className="grid gap-10 md:grid-cols-[1.4fr,1fr] items-center">
          <div className="space-y-6">
            <p className="text-xs tracking-[0.3em] uppercase text-[#7395a9]">
              The Wedding Company
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-brand-600 md:text-5xl">
              Effortless celebrations, crafted with intention.
            </h1>
            <p className="max-w-xl text-sm text-[#4b6b80] md:text-base">
              From intimate gatherings to grand destinations, we plan, design,
              and coordinate every detail so you can stay fully present.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="rounded-full bg-brand-500 px-8 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:bg-brand-600">
                Schedule a consultation
              </button>
              <button className="rounded-full border border-[#cddfea] px-8 py-3 text-sm font-medium text-brand-500 hover:border-brand-500">
                View real weddings
              </button>
            </div>
          </div>
          <div className="h-64 rounded-[32px] bg-linear-to-br from-[#ffe4ec] via-[#ffeef7] to-[#e3f4ff]" />
        </div>
      </motion.div>
    </section>
  );
}
