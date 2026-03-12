import { engineTechChips } from "@/data/engine-content";
import { SectionHeading } from "@/components/sections/section-heading";

export function EngineTechLayer() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Platform Architecture"
        title="Built for production reliability, not demo-only AI"
        description="The engine operates on a structured orchestration layer — not a single prompt chain. Each stage is independently reviewable and audit-traceable."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {engineTechChips.map((chip) => (
          <div
            key={chip.label}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-card/40 p-5 transition hover:border-white/20"
          >
            <div className="shrink-0 rounded-xl border border-white/10 bg-background p-3">
              <chip.icon className="h-5 w-5 text-accent" />
            </div>
            <p className="text-sm font-medium text-foreground">{chip.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
