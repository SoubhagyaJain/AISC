"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { engineFaqs } from "@/data/engine-content";
import { SectionHeading } from "@/components/sections/section-heading";
import { fadeUp } from "@/lib/motion";

export function EngineFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions"
          description="Everything you need to know before a demo or onboarding conversation."
        />
      </motion.div>
      <div className="space-y-3 mt-12">
        {engineFaqs.map((faq, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            key={faq.question}
            className={cn(
              "rounded-2xl border transition-colors duration-300",
              openIndex === idx
                ? "border-accent/30 bg-card/80 shadow-glow"
                : "border-white/10 bg-card/40 hover:border-white/20"
            )}
          >
            <button
              id={`faq-btn-${idx}`}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-panel-${idx}`}
              className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="text-sm font-semibold text-foreground">{faq.question}</span>
              <ChevronDown
                className={cn(
                  "ml-4 h-4 w-4 shrink-0 text-muted transition-transform duration-300",
                  openIndex === idx && "rotate-180 text-accent/80"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
