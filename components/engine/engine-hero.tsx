"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, FileText, Cpu, Package } from "lucide-react";

export function EngineHero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-20 lg:grid-cols-2 lg:items-center lg:px-8">
      {/* Left — copy */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="mb-5 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          SteelGenie Engine — Structural Intelligence
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Turn Unstructured Steel Drawings Into{" "}
          <span className="text-accent">Production-Ready BIM</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          A structural steel intelligence engine that extracts geometry, hydrates specs, validates market availability, runs connection-aware engineering logic, optimizes production output, and generates fabrication-ready deliverables.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="#demo" className={cn(buttonVariants({ size: "lg" }))}>
            Book Demo
          </Link>
          <Link href="#how-it-works" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
            See How It Works <ArrowRight className="ml-2 inline h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid max-w-lg grid-cols-3 gap-4 text-sm text-muted">
          <p>SDS2-compatible output</p>
          <p>Revision delta tracking</p>
          <p>PDF to BIM in hours</p>
        </div>
      </motion.div>

      {/* Right — workflow visual */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-accent/15 via-accent/5 to-transparent blur-2xl" />
        <div className="relative rounded-3xl border border-white/15 bg-card/70 p-6 shadow-glow backdrop-blur">
          {/* Input */}
          <div className="mb-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-background/70 px-4 py-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-card">
              <FileText className="h-4 w-4 text-muted" />
            </div>
            <div>
              <p className="text-xs text-muted">Input</p>
              <p className="text-sm font-medium">GA drawings, schedules, specs, notes</p>
            </div>
          </div>

          {/* Engine */}
          <div className="mb-4 rounded-2xl border border-accent/30 bg-accent/5 px-4 py-4 shadow-[0_0_0_1px_rgba(163,255,31,0.15)]">
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="h-4 w-4 text-accent" />
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">SteelGenie Engine</p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs text-muted">
              {["Extract", "Hydrate", "Validate", "Engineer", "Optimize", "Query"].map((s) => (
                <div key={s} className="rounded-lg border border-white/10 bg-background/60 py-2 font-medium">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Output */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "IFC / BIM", sub: "Structured model" },
              { label: "Excel Reports", sub: "Estimating-ready" },
              { label: "RFI Package", sub: "Auto-generated" }
            ].map((o) => (
              <div key={o.label} className="rounded-xl border border-white/10 bg-background/60 p-3 text-center">
                <Package className="mx-auto mb-1 h-4 w-4 text-accent" />
                <p className="text-xs font-semibold">{o.label}</p>
                <p className="mt-0.5 text-[10px] text-muted">{o.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
