import { Footer } from "@/components/sections/footer";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { LeadForm } from "@/components/sections/lead-form";
import { LiveDashboard } from "@/components/sections/live-dashboard";
import { Navbar } from "@/components/sections/navbar";
import { Pricing } from "@/components/sections/pricing";
import { SmarterSection } from "@/components/sections/smarter-section";
import { StatsBar } from "@/components/sections/stats-bar";
import { EngineSpotlight } from "@/components/sections/engine-spotlight";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radialGrid [background-size:22px_22px] opacity-[0.18]" />
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[110px]" />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <HowItWorks />
        <SmarterSection />
        <EngineSpotlight />
        <LiveDashboard />
        <Pricing />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}

