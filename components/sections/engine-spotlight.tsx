import Link from "next/link";
import { ArrowRight, FileText, Package, Cpu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function EngineSpotlight() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-card/80 via-card/50 to-background p-8 md:p-12">
        {/* Glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/10 blur-[80px]" />

        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left — copy */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
              <Cpu className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                SteelGenie Engine
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              From drawings to{" "}
              <span className="text-accent">fabrication-ready outputs</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted">
              SteelGenie Engine transforms unstructured PDF drawings into structured, reviewable, production-ready deliverables. Extraction, spec hydration, market validation, engineering logic, nesting optimization, and a project assistant — in a single workflow.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/engine" className={cn(buttonVariants())}>
                Explore Engine <ArrowRight className="ml-2 inline h-4 w-4" />
              </Link>
              <Link href="/engine#demo" className={cn(buttonVariants({ variant: "secondary" }))}>
                Book Demo
              </Link>
            </div>
          </div>

          {/* Right — mini workflow visual */}
          <div className="relative">
            <div className="rounded-2xl border border-white/15 bg-card/60 p-5 backdrop-blur">
              <div className="mb-4 flex items-center gap-3 rounded-xl border border-white/10 bg-background/70 px-4 py-3">
                <FileText className="h-4 w-4 text-muted" />
                <div>
                  <p className="text-xs text-muted">Input</p>
                  <p className="text-sm font-medium">PDF drawings + specs</p>
                </div>
              </div>
              <div className="mb-4 grid grid-cols-3 gap-2">
                {["Extract", "Engineer", "Optimize"].map((s) => (
                  <div
                    key={s}
                    className="rounded-lg border border-accent/20 bg-accent/8 py-2 text-center text-xs font-semibold text-accent"
                  >
                    {s}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "IFC / BIM", icon: Package },
                  { label: "Excel Reports", icon: Package },
                  { label: "RFI Package", icon: Package }
                ].map((o) => (
                  <div
                    key={o.label}
                    className="rounded-xl border border-white/10 bg-background/60 p-3 text-center"
                  >
                    <p className="text-xs font-medium">{o.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
