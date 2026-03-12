import { engineWorkflowSteps } from "@/data/engine-content";
import { SectionHeading } from "@/components/sections/section-heading";

export function EngineWorkflow() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="How It Works"
        title="Six-stage workflow from drawing to deliverable"
        description="Each stage in the pipeline is structured, reviewable, and produces output your team can act on — not a black-box answer."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {engineWorkflowSteps.map((step) => (
          <article
            key={step.label}
            className="group relative rounded-2xl border border-white/10 bg-card/50 p-6 transition hover:border-accent/40 hover:shadow-glow"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="text-3xl font-bold text-accent/20 transition group-hover:text-accent/40">
                {step.number}
              </span>
              <div className="rounded-lg border border-white/10 bg-card p-2">
                <step.icon className="h-5 w-5 text-accent" />
              </div>
            </div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-accent/80">
              {step.label}
            </h3>
            <p className="mt-1 text-lg font-semibold text-foreground">{step.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
