export function SmarterSection() {
  const blocks = [
    "Learns which service pages create qualified calls, not just traffic.",
    "Adapts content by metro area, service focus, and project type.",
    "Uses lead-source and CRM outcomes to tune campaign priorities.",
    "Surfaces high-performing regional keyword clusters each week.",
    "Refines page messaging based on close rates and sales feedback."
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Adaptive learning engine</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Gets sharper with every report cycle</h2>
          <p className="mt-4 max-w-xl text-muted">
            Instead of static campaigns, AISC Growth OS continuously learns from ranking movement, lead quality, and regional demand to improve your next month of output.
          </p>
        </div>
        <div className="space-y-3">
          {blocks.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-card/55 p-5 text-sm text-muted">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
