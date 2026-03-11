import { SectionHeading } from "@/components/sections/section-heading";
import { steps } from "@/data/landing-content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="How It Works"
        title="From setup to measurable growth in four steps"
        description="A simple operating model designed for lean teams that need outcomes, not marketing overhead."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, idx) => (
          <article key={step} className="rounded-2xl border border-white/10 bg-card/50 p-6">
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 text-accent">{idx + 1}</div>
            <p className="text-sm text-muted">{step}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
