"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const fields = [
  { label: "Name", name: "name", type: "text", required: true },
  { label: "Email", name: "email", type: "email", required: true },
  { label: "Company", name: "company", type: "text", required: true },
  { label: "Website", name: "website", type: "url", required: false },
  { label: "Target Region", name: "targetRegion", type: "text", required: false },
  { label: "Services Offered", name: "servicesOffered", type: "text", required: false }
];

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Failed to submit");
      }

      setStatus("success");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-card/60 p-8 backdrop-blur md:p-10">
        <h2 className="text-3xl font-bold tracking-tight">See how this works for your business</h2>
        <p className="mt-3 text-muted">Share your market and services. We&apos;ll map your first 90-day growth plan with realistic lead targets.</p>

        {status === "success" ? (
          <div className="mt-8 rounded-xl border border-accent/30 bg-accent/10 p-6 text-center text-accent">
            <h3 className="text-xl font-semibold">Message Received</h3>
            <p className="mt-2 text-sm text-foreground">We&apos;ll be in touch shortly to discuss your growth plan.</p>
            <Button className="mt-6 text-black" variant="secondary" onClick={() => setStatus("idle")}>
              Submit another
            </Button>
          </div>
        ) : (
          <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
            {fields.map((field) => (
              <label key={field.label} className="text-sm text-muted">
                {field.label} {field.required && <span className="text-accent">*</span>}
                <input
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  disabled={status === "loading"}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-background/70 px-4 py-3 text-foreground outline-none ring-accent/60 transition focus:ring-2 disabled:opacity-50"
                  placeholder={field.label}
                />
              </label>
            ))}
            <label className="text-sm text-muted md:col-span-2">
              Short message
              <textarea
                name="message"
                rows={5}
                disabled={status === "loading"}
                className="mt-2 w-full rounded-xl border border-white/15 bg-background/70 px-4 py-3 text-foreground outline-none ring-accent/60 transition focus:ring-2 disabled:opacity-50"
                placeholder="Tell us your goals, regions, and current marketing challenges."
              />
            </label>

            {status === "error" && (
              <div className="text-red-500 text-sm md:col-span-2">{errorMessage}</div>
            )}

            <Button size="lg" className="md:col-span-2" disabled={status === "loading"}>
              {status === "loading" ? "Submitting..." : "Get My Growth Plan"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
