import { SectionHeading } from "@/components/sections/section-heading";
import { features } from "@/data/landing-content";

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Features"
        title="Everything you need to grow steel-focused inbound"
        description="Purpose-built workflows for SEO, content, and conversion tracking across fabrication and GC services."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="group rounded-2xl border border-white/10 bg-card/50 p-6 transition hover:border-accent/40 hover:shadow-glow">
            <feature.icon className="h-6 w-6 text-accent" />
            <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
