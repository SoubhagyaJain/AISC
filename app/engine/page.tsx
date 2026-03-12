import { EngineHero } from "@/components/engine/engine-hero";
import { EngineProofStrip } from "@/components/engine/engine-proof-strip";
import { EngineWorkflow } from "@/components/engine/engine-workflow";
import { EngineGuardrails } from "@/components/engine/engine-guardrails";
import { EngineDeliverables } from "@/components/engine/engine-deliverables";
import { EngineAssistant } from "@/components/engine/engine-assistant";
import { EngineTechLayer } from "@/components/engine/engine-tech-layer";
import { EngineUseCases } from "@/components/engine/engine-use-cases";
import { EngineFaq } from "@/components/engine/engine-faq";
import { EngineCta } from "@/components/engine/engine-cta";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SteelGenie Engine | Structural Steel Workflow Intelligence",
  description:
    "Turn unstructured PDF drawings into production-ready BIM, custom reports, and fabrication-ready deliverables. SDS2-compatible workflow engine for structural steel fabricators and estimators."
};

export default function EnginePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background effects matching homepage */}
      <div className="pointer-events-none absolute inset-0 bg-radialGrid [background-size:22px_22px] opacity-[0.18]" />
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[320px] w-[320px] rounded-full bg-blue-500/5 blur-[100px]" />

      <Navbar />
      <main>
        <EngineHero />
        <EngineProofStrip />
        <EngineWorkflow />
        <EngineGuardrails />
        <EngineDeliverables />
        <EngineAssistant />
        <EngineTechLayer />
        <EngineUseCases />
        <EngineFaq />
        <EngineCta />
      </main>
      <Footer />
    </div>
  );
}
