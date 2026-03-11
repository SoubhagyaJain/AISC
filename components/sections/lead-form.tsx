import { Button } from "@/components/ui/button";

const fields = [
  { label: "Full Name", type: "text", placeholder: "Jordan Smith" },
  { label: "Work Email", type: "email", placeholder: "jordan@company.com" },
  { label: "Company Name", type: "text", placeholder: "IronSpan Fabrication" },
  { label: "Website URL", type: "url", placeholder: "https://" },
  { label: "Primary Target Region", type: "text", placeholder: "Texas Gulf Coast" },
  { label: "Core Services", type: "text", placeholder: "Structural steel, detailing, PEMB" }
];

export function LeadForm() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-card/60 p-8 backdrop-blur md:p-10">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Get your AI growth plan for steel-focused inbound</h2>
        <p className="mt-3 max-w-3xl text-muted">
          Request a working demo and receive a tailored 90-day roadmap covering service pages, location pages, contractor content topics, and projected qualified lead volume.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted">
          <span className="rounded-full border border-white/15 px-2.5 py-1">No obligation consult</span>
          <span className="rounded-full border border-white/15 px-2.5 py-1">Custom to your regions</span>
          <span className="rounded-full border border-white/15 px-2.5 py-1">Delivered within 2 business days</span>
        </div>
        <form className="mt-8 grid gap-4 md:grid-cols-2">
          {fields.map((field) => (
            <label key={field.label} className="text-sm text-muted">
              {field.label}
              <input
                required
                type={field.type}
                className="mt-2 w-full rounded-xl border border-white/15 bg-background/70 px-4 py-3 text-foreground outline-none ring-accent/60 transition focus:ring-2"
                placeholder={field.placeholder}
              />
            </label>
          ))}
          <label className="text-sm text-muted md:col-span-2">
            Monthly marketing goal
            <textarea
              required
              rows={5}
              className="mt-2 w-full rounded-xl border border-white/15 bg-background/70 px-4 py-3 text-foreground outline-none ring-accent/60 transition focus:ring-2"
              placeholder="Share your monthly lead target, current SEO performance, and priority services."
            />
          </label>
          <Button size="lg" className="md:col-span-2">Request My Demo + Plan</Button>
        </form>
      </div>
    </section>
  );
}
