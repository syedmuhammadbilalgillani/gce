const journey = [
  {
    y: "2013",
    t: "KAN Engineering",
    d: "Early engineering and industrial services foundation established.",
  },
  {
    y: "2017",
    t: "Premier Salt",
    d: "Expansion into salt processing, mineral-based production, and industrial manufacturing.",
  },
  {
    y: "2023",
    t: "Biomass Pro",
    d: "Entry into biomass, renewable-focused, and sustainable industrial business initiatives.",
  },
  {
    y: "2024",
    t: "GCE (Pvt.) Ltd.",
    d: "Establishment of the core multidisciplinary engineering consultancy focused on mining, environmental, industrial, and project advisory services.",
  },
  {
    y: "2025",
    t: "STS / Softech Sol",
    d: "Expansion into software, digital transformation, AI automation, and business technology solutions.",
  },
  {
    y: "2026",
    t: "Gridnewable",
    d: "International expansion into power systems, renewable energy, substation, and grid engineering solutions.",
  },
];

const OurJourney = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container-gce">
        <div className="max-w-2xl">
          <div className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            Our Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            From engineering roots to a diversified group.
          </h2>
        </div>
        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-8">
            {journey.map((j, i) => (
              <div
                key={j.y}
                className={`relative flex flex-col md:flex-row gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="bg-white rounded-xl p-6 border border-border shadow-card">
                    <div className="text-gold font-display font-bold text-2xl">
                      {j.y}
                    </div>
                    <div className="font-bold text-primary mt-1">{j.t}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {j.d}
                    </p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold ring-4 ring-surface mt-7" />
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
