export function EngineAssistant() {
  const chips = [
    "What changed in revision 3?",
    "Show me the W-section count for grid B",
    "Which items are locked in RFI?",
    "What is the total tonnage delta?",
    "Are there any lead-time flags?"
  ];

  const responses = [
    {
      q: "What changed in revision 3?",
      a: "Revision 3 added 14 W12×53 members on grid C4–C8 (+4.2T), removed 3 HSS6×4 columns (-0.6T), and updated connection detail D-07 to match AISC 360-22. Net scope change: +3.6T, +$8,400 est."
    },
    {
      q: "Are there lead-time flags?",
      a: "2 items flagged. WT5×16.5 (qty: 8) — 18-week lead time from primary supplier. Alternative: WT5×19.5 available in 3 weeks, same capacity. Review required before PO."
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Copy */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent/90">
            Localized Project Assistant
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ask the project,{" "}
            <span className="text-accent">not the team</span>
          </h2>
          <p className="mt-4 max-w-lg text-muted">
            Every project gets a scoped assistant with access only to its own drawings, outputs, and revision history. Query revision differences, connection logic, bolt counts, lead-time flags, and failed outputs — all answered from the project&#39;s actual data.
          </p>
          <div className="mt-6 space-y-2">
            {[
              "Revision differences and scope deltas",
              "Connection issues and flagged items",
              "Material quantities and lead-time risk",
              "Locked RFI items and resolution status",
              "Project-specific standards and notes"
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/8 px-4 py-2 text-xs text-accent/80">
            <div className="h-2 w-2 rounded-full bg-accent" />
            Project-scoped · Secure · No cross-project access
          </div>
        </div>

        {/* Assistant mockup */}
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-accent/5 blur-2xl" />
          <div className="relative rounded-3xl border border-white/15 bg-card/70 p-6 backdrop-blur">
            {/* Query chips */}
            <p className="mb-3 text-xs text-muted">Common queries</p>
            <div className="mb-5 flex flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c}
                  className="cursor-default rounded-full border border-white/10 bg-background/60 px-3 py-1 text-xs text-muted transition hover:border-accent/30 hover:text-foreground"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Conversation cards */}
            <div className="space-y-4">
              {responses.map((r) => (
                <div key={r.q} className="space-y-2">
                  <div className="flex justify-end">
                    <div className="max-w-xs rounded-2xl rounded-tr-sm border border-white/10 bg-card px-4 py-2.5 text-xs text-muted">
                      {r.q}
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-sm rounded-2xl rounded-tl-sm border border-accent/20 bg-accent/8 px-4 py-2.5 text-xs leading-relaxed text-foreground">
                      {r.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
