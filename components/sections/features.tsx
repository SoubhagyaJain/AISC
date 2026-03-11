import { SectionHeading } from "@/components/sections/section-heading";
import { features } from "@/data/landing-content";

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Platform Capabilities"
        title="A complete SEO and lead pipeline system for steel-focused teams"
        description="From service-page creation to conversion reporting, every workflow is designed around how AISC fabricators and GCs actually win work."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group rounded-2xl border border-white/10 bg-card/55 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-glow"
          >
            <feature.icon className="h-6 w-6 text-accent" />
            <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
