import { Button } from "@/components/ui/button";

const fields = [
  { label: "Name", type: "text" },
  { label: "Email", type: "email" },
  { label: "Company", type: "text" },
  { label: "Website", type: "url" },
  { label: "Target Region", type: "text" },
  { label: "Services Offered", type: "text" }
];

export function LeadForm() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-card/60 p-8 backdrop-blur md:p-10">
        <h2 className="text-3xl font-bold tracking-tight">See how this works for your business</h2>
        <p className="mt-3 text-muted">Share your market and services. We&apos;ll map your first 90-day growth plan with realistic lead targets.</p>
        <form className="mt-8 grid gap-4 md:grid-cols-2">
          {fields.map((field) => (
            <label key={field.label} className="text-sm text-muted">
              {field.label}
              <input
                type={field.type}
                className="mt-2 w-full rounded-xl border border-white/15 bg-background/70 px-4 py-3 text-foreground outline-none ring-accent/60 transition focus:ring-2"
                placeholder={field.label}
              />
            </label>
          ))}
          <label className="text-sm text-muted md:col-span-2">
            Short message
            <textarea
              rows={5}
              className="mt-2 w-full rounded-xl border border-white/15 bg-background/70 px-4 py-3 text-foreground outline-none ring-accent/60 transition focus:ring-2"
              placeholder="Tell us your goals, regions, and current marketing challenges."
            />
          </label>
          <Button size="lg" className="md:col-span-2">Get My Growth Plan</Button>
        </form>
      </div>
    </section>
  );
}
