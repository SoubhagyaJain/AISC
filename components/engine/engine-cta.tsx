"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const fields = [
  { label: "Name", name: "name", type: "text", required: true },
  { label: "Company", name: "company", type: "text", required: true },
  { label: "Email", name: "email", type: "email", required: true },
  { label: "Role", name: "role", type: "text", required: false }
];

export function EngineCta() {
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
      <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-card/80 via-card/60 to-background p-8 shadow-glow backdrop-blur md:p-12">
        <div className="mx-auto max-w-xl text-center">
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
          <div className="mx-auto mt-10 max-w-sm rounded-2xl border border-accent/30 bg-accent/10 p-6 text-center">
            <p className="text-lg font-semibold text-accent">Request received.</p>
            <p className="mt-2 text-sm text-muted">We&#39;ll reach out within one business day to schedule your session.</p>
            <Button variant="secondary" className="mt-6" onClick={() => setStatus("idle")}>
              Submit another
            </Button>
          </div>
        ) : (
          <form className="mx-auto mt-10 grid max-w-2xl gap-4 md:grid-cols-2" onSubmit={onSubmit}>
            {fields.map((f) => (
              <label key={f.name} className="text-sm text-muted">
                {f.label} {f.required && <span className="text-accent">*</span>}
                <input
                  name={f.name}
                  type={f.type}
                  required={f.required}
                  disabled={status === "loading"}
                  placeholder={f.label}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-background/70 px-4 py-3 text-foreground outline-none ring-accent/50 transition focus:ring-2 disabled:opacity-50"
                />
              </label>
            ))}
            <label className="text-sm text-muted md:col-span-2">
              Tell us about your workflow
              <textarea
                name="message"
                rows={4}
                disabled={status === "loading"}
                placeholder="What types of drawings do you work with? What's the biggest bottleneck today?"
                className="mt-2 w-full rounded-xl border border-white/15 bg-background/70 px-4 py-3 text-foreground outline-none ring-accent/50 transition focus:ring-2 disabled:opacity-50"
              />
            </label>
            {status === "error" && (
              <p className="text-sm text-red-400 md:col-span-2">{errorMessage}</p>
            )}
            <div className="flex flex-col gap-3 sm:flex-row md:col-span-2">
              <Button size="lg" className="flex-1" disabled={status === "loading"}>
                {status === "loading" ? "Submitting..." : "Book Demo"}
              </Button>
              <Button size="lg" variant="secondary" className="flex-1" type="button">
                Request Workflow Review
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
