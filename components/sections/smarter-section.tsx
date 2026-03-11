export function SmarterSection() {
  const blocks = [
    "Learns which service pages bring qualified inquiries.",
    "Adjusts messaging by region, project type, and buying intent.",
    "Uses lead source data to improve campaign allocation.",
    "Finds keyword themes tied to fabrication and GC demand.",
    "Refines copy from form conversion and close-rate feedback."
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Adaptive intelligence</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Gets smarter with every campaign cycle</h2>
          <p className="mt-4 max-w-xl text-muted">
            The platform continuously analyzes rankings, lead quality, and regional engagement to prioritize what drives real pipeline.
          </p>
        </div>
        <div className="space-y-3">
          {blocks.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-card/50 p-5 text-sm text-muted">{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
