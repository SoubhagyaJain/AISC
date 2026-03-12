import { engineGuardrails } from "@/data/engine-content";
import { SectionHeading } from "@/components/sections/section-heading";

const colorMap: Record<string, { border: string; bg: string; text: string; dot: string }> = {
  amber: {
    border: "border-amber-500/30",
    bg: "bg-amber-500/8",
    text: "text-amber-400",
    dot: "bg-amber-400"
  },
  red: {
    border: "border-red-500/30",
    bg: "bg-red-500/8",
    text: "text-red-400",
    dot: "bg-red-400"
  },
  blue: {
    border: "border-blue-400/30",
    bg: "bg-blue-400/8",
    text: "text-blue-400",
    dot: "bg-blue-400"
  }
};

export function EngineGuardrails() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Smart Guardrails"
        title="Controlled, workflow-aware intelligence"
        description="This is not random AI output. Every decision point is structured, reviewable, and connected to a resolution path."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {engineGuardrails.map((g) => {
          const c = colorMap[g.color];
          return (
            <article
              key={g.label}
              className={`rounded-2xl border ${c.border} ${c.bg} p-6`}
            >
              <div className="mb-4 flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${c.dot}`} />
                <span className={`text-xs font-semibold uppercase tracking-wider ${c.text}`}>
                  {g.label}
                </span>
              </div>
              <g.icon className={`mb-4 h-6 w-6 ${c.text}`} />
              <h3 className="text-base font-semibold text-foreground">{g.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{g.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
