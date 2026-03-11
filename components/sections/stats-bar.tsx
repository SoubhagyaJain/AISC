import { stats } from "@/data/landing-content";

export function StatsBar() {
  return (
    <section className="mx-auto grid max-w-7xl gap-4 px-6 pb-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-white/10 bg-card/55 p-5 backdrop-blur">
          <p className="text-2xl font-bold text-accent">{stat.value}</p>
          <p className="mt-2 text-sm text-muted">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
