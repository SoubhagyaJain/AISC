"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const fields = [
  { label: "Name", name: "name", type: "text", required: true },
  { label: "Company", name: "company", type: "text", required: true },
  { label: "Email", name: "email", type: "email", required: true },
  { label: "Role", name: "role", type: "text", required: false }
];

export function EngineCta() {
  const shouldReduceMotion = useReducedMotion();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    data.source = "engine-demo";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Failed to submit");
      }
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="demo" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={fadeUp}
        className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-card/80 via-card/60 to-background p-8 shadow-[0_0_40px_-10px_rgba(163,255,31,0.1)] backdrop-blur md:p-12 z-10"
      >
        {/* Subtle ambient grid movement */}
        <motion.div 
          animate={shouldReduceMotion ? { backgroundPosition: "0% 0%" } : { backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={shouldReduceMotion ? undefined : { duration: 40, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute inset-0 opacity-[0.03] z-0"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
        />

        <div className="mx-auto max-w-xl text-center relative z-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Book a Demo
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            See SteelGenie Engine on your workflow
          </h2>
          <p className="mt-4 text-muted">
            We&#39;ll run the demo against your actual drawings — not canned data. You&#39;ll see the extraction, validation, and output cycle for your real project.
          </p>
        </div>

        {status === "success" ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mx-auto mt-10 max-w-sm rounded-2xl border border-accent/30 bg-accent/10 p-6 text-center relative z-10">
            <p className="text-lg font-semibold text-accent">Request received.</p>
            <p className="mt-2 text-sm text-muted">We&#39;ll reach out within one business day to schedule your session.</p>
            <Button variant="secondary" className="mt-6" onClick={() => setStatus("idle")}>
              Submit another
            </Button>
          </motion.div>
        ) : (
          <motion.form 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-10 grid max-w-2xl gap-4 md:grid-cols-2 relative z-10" 
            onSubmit={onSubmit}
          >
            {fields.map((f) => (
              <motion.label variants={staggerItem} key={f.name} className="text-sm text-muted">
                {f.label} {f.required && <span className="text-accent">*</span>}
                <input
                  name={f.name}
                  type={f.type}
                  required={f.required}
                  disabled={status === "loading"}
                  placeholder={f.label}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-background/70 px-4 py-3 text-foreground outline-none ring-accent/50 transition-all duration-300 focus:ring-2 focus:border-accent/40 focus:bg-background disabled:opacity-50"
                />
              </motion.label>
            ))}
            <motion.label variants={staggerItem} className="text-sm text-muted md:col-span-2">
              Tell us about your workflow
              <textarea
                name="message"
                rows={4}
                disabled={status === "loading"}
                placeholder="What types of drawings do you work with? What's the biggest bottleneck today?"
                className="mt-2 w-full rounded-xl border border-white/15 bg-background/70 px-4 py-3 text-foreground outline-none ring-accent/50 transition-all duration-300 focus:ring-2 focus:border-accent/40 focus:bg-background disabled:opacity-50"
              />
            </motion.label>
            {status === "error" && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-red-400 md:col-span-2">{errorMessage}</motion.p>
            )}
            <motion.div variants={staggerItem} className="flex flex-col gap-3 sm:flex-row md:col-span-2 mt-4">
              <Button size="lg" className="flex-1 transition-transform active:scale-95" disabled={status === "loading"}>
                {status === "loading" ? "Submitting..." : "Book Demo"}
              </Button>
              <Button size="lg" variant="secondary" className="flex-1 transition-transform active:scale-95 hover:bg-white/10" type="button">
                Request Workflow Review
              </Button>
            </motion.div>
          </motion.form>
        )}
      </motion.div>
    </section>
  );
}
