import { engineProofChips } from "@/data/engine-content";

export function EngineProofStrip() {
  return (
    <div className="border-y border-white/8 bg-card/30 py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {engineProofChips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent/90 tracking-wide"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
