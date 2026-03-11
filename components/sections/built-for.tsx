import { SectionHeading } from "@/components/sections/section-heading";
import { whoItsFor } from "@/data/landing-content";

export function BuiltFor() {
  return (
    <section id="use-cases" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Built For"
        title="Designed for teams that sell steel-focused services"
        description="Purpose-built workflows for commercial fabricators, GC groups, and specialty steel operations that need measurable inbound growth."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {whoItsFor.map((item) => (
          <article key={item.title} className="rounded-2xl border border-white/10 bg-card/55 p-7 transition hover:border-accent/40 hover:shadow-glow">
            <item.icon className="h-6 w-6 text-accent" />
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
