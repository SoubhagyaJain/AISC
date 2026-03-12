"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { engineFaqs } from "@/data/engine-content";
import { SectionHeading } from "@/components/sections/section-heading";

export function EngineFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="FAQ"
        title="Common questions"
        description="Everything you need to know before a demo or onboarding conversation."
      />
      <div className="space-y-3">
        {engineFaqs.map((faq, idx) => (
          <div
            key={faq.question}
            className={cn(
              "rounded-2xl border transition",
              openIndex === idx
                ? "border-accent/30 bg-card/80"
                : "border-white/10 bg-card/40 hover:border-white/20"
            )}
          >
            <button
              id={`faq-btn-${idx}`}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-panel-${idx}`}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="text-sm font-semibold text-foreground">{faq.question}</span>
              <ChevronDown
                className={cn(
                  "ml-4 h-4 w-4 shrink-0 text-muted transition-transform duration-200",
                  openIndex === idx && "rotate-180 text-accent"
                )}
              />
            </button>
            {openIndex === idx && (
              <div
                id={`faq-panel-${idx}`}
                role="region"
                aria-labelledby={`faq-btn-${idx}`}
                className="px-6 pb-5 text-sm leading-relaxed text-muted"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
