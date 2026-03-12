"use client";

import { motion, useReducedMotion } from "framer-motion";
import { engineWorkflowSteps } from "@/data/engine-content";
import { SectionHeading } from "@/components/sections/section-heading";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

export function EngineWorkflow() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 overflow-hidden relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <SectionHeading
          eyebrow="How It Works"
          title="Six-stage workflow from drawing to deliverable"
          description="Each stage in the pipeline is structured, reviewable, and produces output your team can act on — not a black-box answer."
        />
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 z-10"
      >
        {/* Animated background line system (Desktop/Tablet mostly) */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 z-0 hidden lg:block opacity-30">
          <motion.div 
            className="h-full bg-accent"
            initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0, transformOrigin: "left" }}
            whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
            viewport={shouldReduceMotion ? undefined : { once: true }}
            transition={shouldReduceMotion ? undefined : { duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        {engineWorkflowSteps.map((step) => (
          <motion.article
            variants={staggerItem}
            key={step.label}
            whileHover={{ y: -4, scale: 1.01 }}
            className="group relative rounded-2xl border border-white/10 bg-card/70 p-6 backdrop-blur-sm transition-colors hover:border-accent/40 hover:shadow-glow z-10"
          >
            <div className="mb-4 flex items-center gap-3 relative">
              <span className="text-3xl font-bold text-accent/20 transition duration-300 group-hover:text-accent/50 group-hover:drop-shadow-[0_0_8px_rgba(163,255,31,0.5)]">
                {step.number}
              </span>
              <div className="rounded-lg border border-white/10 bg-card p-2 transition duration-300 group-hover:border-accent/30 group-hover:bg-accent/10">
                <step.icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-accent/80 transition group-hover:text-accent">
              {step.label}
            </h3>
            <p className="mt-1 text-lg font-semibold text-foreground">{step.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
