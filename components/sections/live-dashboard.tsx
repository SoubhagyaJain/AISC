import { SectionHeading } from "@/components/sections/section-heading";

const widgets = [
  { title: "Blogs Published", value: "27 this month", detail: "Contractor-focused SEO briefs" },
  { title: "Ranking Improvements", value: "+41 keywords", detail: "Top 10 movement in target regions" },
  { title: "Leads Captured", value: "62 qualified", detail: "Forms + call tracking" },
  { title: "Landing Pages Generated", value: "18 live", detail: "Service + location combinations" },
  { title: "Reporting Score", value: "98/100", detail: "Automated weekly delivery" }
];

export function LiveDashboard() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Live Activity"
        title="Campaigns running right now"
        description="Real-time visibility into content output, rankings, and lead velocity across your markets."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {widgets.map((w) => (
          <div key={w.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-card to-background p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <p className="text-xs uppercase tracking-wide text-muted">{w.title}</p>
            <p className="mt-3 text-2xl font-semibold text-accent">{w.value}</p>
            <p className="mt-2 text-xs text-muted">{w.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
