"use client";

import { motion } from "framer-motion";
import { engineDeliverables } from "@/data/engine-content";
import { SectionHeading } from "@/components/sections/section-heading";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

export function EngineDeliverables() {
  return (
    <section id="deliverables" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 overflow-hidden relative">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
        <SectionHeading
          eyebrow="Deliverables"
          title="Outputs your team can actually use"
          description="Every deliverable is structured, named, and formatted for direct use by estimating, procurement, detailing, and engineering teams."
        />
      </motion.div>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-6 md:grid-cols-3 mt-12"
      >
        {engineDeliverables.map((d) => (
          <motion.article
            variants={staggerItem}
            key={d.title}
            whileHover={{ y: -4, scale: 1.01 }}
            className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-card to-background p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition-all hover:border-accent/30 hover:shadow-glow overflow-hidden"
          >
            {/* Top edge gleam effect on hover */}
            <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out group-hover:opacity-100" />

            <div className="mb-5 inline-flex rounded-xl border border-accent/20 bg-accent/10 p-3 transition-colors duration-300 group-hover:bg-accent/20">
              <d.icon className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="text-lg font-semibold text-foreground relative z-10">{d.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted relative z-10">{d.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
