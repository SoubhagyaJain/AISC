"use client";

import { motion } from "framer-motion";
import { engineUseCases } from "@/data/engine-content";
import { SectionHeading } from "@/components/sections/section-heading";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

export function EngineUseCases() {
  return (
    <section id="use-cases" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
        <SectionHeading
          eyebrow="Use Cases"
          title="Built for every role in the steel workflow"
          description="Whether you run estimating, fabrication, detailing, or procurement — the engine surfaces value at your stage of the process."
        />
      </motion.div>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-12"
      >
        {engineUseCases.map((uc) => (
          <motion.article
            variants={staggerItem}
            whileHover={{ y: -4, scale: 1.01 }}
            key={uc.role}
            className="group rounded-2xl border border-white/10 bg-card/50 p-6 transition-colors hover:border-accent/30 hover:shadow-glow z-10"
          >
            <div className="mb-4 inline-flex rounded-lg border border-white/10 bg-background p-2.5 transition-colors duration-300 group-hover:bg-accent/10">
              <uc.icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">{uc.role}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{uc.value}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
