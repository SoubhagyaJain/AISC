import { Check } from "lucide-react";
import { pricingPlans } from "@/data/landing-content";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Pricing"
        title="Plans aligned to steel market growth goals"
        description="Choose the level of SEO production, campaign automation, and reporting depth your team needs right now."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-2xl border p-7 ${plan.popular ? "border-accent/50 bg-card shadow-glow" : "border-white/10 bg-card/55"}`}
          >
            {plan.popular && (
              <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-black">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="mt-2 text-3xl font-bold text-accent">{plan.price}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{plan.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full">{plan.cta}</Button>
          </article>
        ))}
      </div>
    </section>
  );
}
