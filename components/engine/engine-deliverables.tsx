import { engineDeliverables } from "@/data/engine-content";
import { SectionHeading } from "@/components/sections/section-heading";

export function EngineDeliverables() {
  return (
    <section id="deliverables" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Deliverables"
        title="Outputs your team can actually use"
        description="Every deliverable is structured, named, and formatted for direct use by estimating, procurement, detailing, and engineering teams."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {engineDeliverables.map((d) => (
          <article
            key={d.title}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-card to-background p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition hover:border-accent/30 hover:shadow-glow"
          >
            <div className="mb-5 inline-flex rounded-xl border border-accent/20 bg-accent/10 p-3">
              <d.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{d.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{d.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
