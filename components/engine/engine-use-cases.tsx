import { engineUseCases } from "@/data/engine-content";
import { SectionHeading } from "@/components/sections/section-heading";

export function EngineUseCases() {
  return (
    <section id="use-cases" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Use Cases"
        title="Built for every role in the steel workflow"
        description="Whether you run estimating, fabrication, detailing, or procurement — the engine surfaces value at your stage of the process."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {engineUseCases.map((uc) => (
          <article
            key={uc.role}
            className="group rounded-2xl border border-white/10 bg-card/50 p-6 transition hover:border-accent/30 hover:shadow-glow"
          >
            <div className="mb-4 inline-flex rounded-lg border border-white/10 bg-background p-2.5">
              <uc.icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="text-base font-semibold text-foreground">{uc.role}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{uc.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
