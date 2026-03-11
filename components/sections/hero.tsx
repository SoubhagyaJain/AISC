"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trustSignals } from "@/data/landing-content";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-16 pt-20 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:px-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="mb-6 inline-flex rounded-full border border-accent/35 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          AI Growth Platform for AISC Fabricators + General Contractors
        </p>
        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          Win more <span className="text-accent">qualified inbound leads</span> with service pages, location pages, and contractor-focused SEO.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
          AISC Growth OS helps steel-focused teams turn underperforming websites into lead engines with AI content operations, conversion tracking, and weekly reporting your leadership team can trust.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button size="lg" className="shadow-glow">Book Demo</Button>
          <Button variant="secondary" size="lg">See 90-Day Plan</Button>
        </div>
        <div className="mt-8 grid max-w-2xl gap-3 text-sm text-muted sm:grid-cols-3">
          {trustSignals.map((signal) => (
            <p key={signal} className="rounded-xl border border-white/10 bg-card/45 px-3 py-2">{signal}</p>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-accent/25 via-accent/5 to-transparent blur-2xl" />
        <div className="relative space-y-4 rounded-3xl border border-white/15 bg-card/70 p-6 shadow-glow backdrop-blur">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-background/70 p-4">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Weekly Visibility Report</p>
              <p className="mt-1 text-xl font-semibold">Houston Structural Steel</p>
            </div>
            <span className="rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs text-accent">+23 keyword gains</span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-2xl border border-white/10 bg-background/65 p-4">
              <p className="text-muted">Pages published</p>
              <p className="mt-2 font-semibold">4 service pages</p>
              <p className="text-xs text-muted">PEMB, stairs/rails, misc. metals</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-background/65 p-4">
              <p className="text-muted">Location pages live</p>
              <p className="mt-2 font-semibold">Dallas + Austin</p>
              <p className="text-xs text-muted">Steel detailing + install intent</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-background/65 p-4">
              <p className="text-muted">Leads captured</p>
              <p className="mt-2 font-semibold">17 qualified this week</p>
              <p className="text-xs text-muted">Form + call attribution synced</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-background/65 p-4">
              <p className="text-muted">Campaign insight</p>
              <p className="mt-2 font-semibold">"Industrial retrofit" rising</p>
              <p className="text-xs text-muted">Content priority auto-updated</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-muted">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-2.5 py-1"><Building2 className="h-3.5 w-3.5 text-accent" /> AISC scope library active</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-2.5 py-1"><MapPin className="h-3.5 w-3.5 text-accent" /> 8 regional markets tracked</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-2.5 py-1"><TrendingUp className="h-3.5 w-3.5 text-accent" /> Lead quality trend: +31%</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
