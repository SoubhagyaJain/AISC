"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-20 lg:grid-cols-2 lg:items-center lg:px-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="mb-5 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Built for AISC Fabricators + General Contractors
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Your <span className="text-accent">AI Growth Engine</span> for steel-focused inbound marketing.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Generate qualified leads with regional SEO, contractor-focused content, lead capture, and automated reporting designed for fabrication and construction teams.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg">Start Free Trial</Button>
          <Button variant="secondary" size="lg">Watch Platform Tour</Button>
        </div>
        <div className="mt-8 grid max-w-lg grid-cols-3 gap-4 text-sm text-muted">
          <p>Trusted by 220+ steel teams</p>
          <p>2.7x avg. lead lift</p>
          <p>Setup in 7 days</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative"
      >
        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-accent/20 via-accent/5 to-transparent blur-2xl" />
        <div className="relative space-y-4 rounded-3xl border border-white/15 bg-card/70 p-6 shadow-glow backdrop-blur">
          <div className="rounded-2xl border border-white/10 bg-background/70 p-4">
            <p className="text-sm text-muted">Weekly SEO Report</p>
            <p className="mt-2 text-2xl font-semibold">+18 ranking gains</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-background/60 p-4 text-sm">3 new blogs generated</div>
            <div className="rounded-2xl border border-white/10 bg-background/60 p-4 text-sm">14 leads captured</div>
            <div className="rounded-2xl border border-white/10 bg-background/60 p-4 text-sm">Local page drafted: Dallas detailing</div>
            <div className="rounded-2xl border border-white/10 bg-background/60 p-4 text-sm">Campaign insight: “PEMB retrofit” trending</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
