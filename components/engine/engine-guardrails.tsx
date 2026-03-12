"use client";

import { motion, useReducedMotion } from "framer-motion";
import { engineGuardrails } from "@/data/engine-content";
import { SectionHeading } from "@/components/sections/section-heading";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const colorMap: Record<string, { border: string; bg: string; text: string; dot: string }> = {
  amber: {
    border: "border-amber-500/30",
    bg: "bg-amber-500/8",
    text: "text-amber-400",
    dot: "bg-amber-400"
  },
  red: {
    border: "border-red-500/30",
    bg: "bg-red-500/8",
    text: "text-red-400",
    dot: "bg-red-400"
  },
  blue: {
    border: "border-blue-400/30",
    bg: "bg-blue-400/8",
    text: "text-blue-400",
    dot: "bg-blue-400"
  }
};

export function EngineGuardrails() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 relative overflow-hidden">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
        <SectionHeading
          eyebrow="Smart Guardrails"
          title="Controlled, workflow-aware intelligence"
          description="This is not random AI output. Every decision point is structured, reviewable, and connected to a resolution path."
        />
      </motion.div>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-6 lg:grid-cols-3 mt-12"
      >
        {engineGuardrails.map((g) => {
          const c = colorMap[g.color];
          return (
            <motion.article
              variants={staggerItem}
              whileHover={{ y: -4 }}
              key={g.label}
              className={`group relative overflow-hidden rounded-2xl border ${c.border} ${c.bg} p-6 transition-all hover:shadow-glow z-10`}
            >
              <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 pointer-events-none bg-gradient-to-br from-white to-transparent`} />
              
              <div className="mb-4 flex items-center gap-2">
                <motion.div 
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [1, 0.4, 1] }} 
                  transition={shouldReduceMotion ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className={`h-2 w-2 rounded-full ${c.dot}`} 
                />
                <span className={`text-xs font-semibold uppercase tracking-wider ${c.text}`}>
                  {g.label}
                </span>
              </div>
              <g.icon className={`mb-4 h-6 w-6 ${c.text} transition-transform duration-300 group-hover:scale-110`} />
              <h3 className="text-base font-semibold text-foreground relative z-10">{g.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted relative z-10">{g.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
