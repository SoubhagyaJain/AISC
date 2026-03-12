"use client";

import { motion } from "framer-motion";
import { engineProofChips } from "@/data/engine-content";
import { staggerContainerFast, chipReveal } from "@/lib/motion";

export function EngineProofStrip() {
  return (
    <div className="border-y border-white/8 bg-card/30 py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {engineProofChips.map((chip) => (
            <motion.span
              variants={chipReveal}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: "rgba(163,255,31,0.15)",
                borderColor: "rgba(163,255,31,0.4)"
              }}
              key={chip}
              className="rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent/90 tracking-wide transition-colors cursor-default"
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
