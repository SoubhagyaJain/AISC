import { SectionHeading } from "@/components/sections/section-heading";

const widgets = [
  { title: "Blogs Published", value: "31 this month", detail: "Topics: PEMB, misc. metals, structural detailing" },
  { title: "Ranking Movement", value: "+52 keywords", detail: "Commercial steel searches now in top 10" },
  { title: "Qualified Leads", value: "74 captured", detail: "Service pages + call tracking attribution" },
  { title: "Location Pages", value: "22 live", detail: "Houston, Dallas, Austin, San Antonio, Phoenix" },
  { title: "Reporting Score", value: "99/100", detail: "Weekly reports delivered to precon + sales" }
];

export function LiveDashboard() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Live Product View"
        title="Campaign activity your team can act on weekly"
        description="Operational reporting for content output, ranking gains, and qualified lead flow across your active markets."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {widgets.map((w) => (
          <div
            key={w.title}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-card to-background p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
          >
            <p className="text-xs uppercase tracking-wide text-muted">{w.title}</p>
            <p className="mt-3 text-2xl font-semibold text-accent">{w.value}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted">{w.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
