"use client";

import { motion } from "framer-motion";
import { engineTechChips } from "@/data/engine-content";
import { SectionHeading } from "@/components/sections/section-heading";
import { fadeUp, staggerContainerFast, chipReveal } from "@/lib/motion";

export function EngineTechLayer() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
        <SectionHeading
          eyebrow="Platform Architecture"
          title="Built for production reliability, not demo-only AI"
          description="The engine operates on a structured orchestration layer — not a single prompt chain. Each stage is independently reviewable and audit-traceable."
        />
      </motion.div>
      <motion.div 
        variants={staggerContainerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12"
      >
        {engineTechChips.map((chip) => (
          <motion.div
            variants={chipReveal}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(163,255,31,0.05)", borderColor: "rgba(163,255,31,0.3)" }}
            key={chip.label}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-card/40 p-5 transition-colors"
          >
            <div className="shrink-0 rounded-xl border border-white/10 bg-background p-3 transition-colors group-hover:bg-accent/10">
              <chip.icon className="h-5 w-5 text-accent" />
            </div>
            <p className="text-sm font-medium text-foreground">{chip.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
