import { Compass, HeartHandshake, Target, Users } from "lucide-react";
const visionMission = [
  {
    icon: Compass,
    t: "Vision",
    d: "To establish GCE Group as a trusted engineering and industrial platform delivering practical, sustainable, and value-driven solutions across key sectors.",
  },
  {
    icon: Target,
    t: "Mission",
    d: "To support clients through reliable technical expertise, specialized group companies, and execution-focused solutions from concept to implementation.",
  },
  {
    icon: HeartHandshake,
    t: "We Care",
    d: "To maintain professional integrity, responsible engineering practices, and long-term relationships with clients, partners, and communities.",
  },
  {
    icon: Users,
    t: "Collaboration",
    d: "To connect industry professionals, academicians, technical experts, and strategic partners for stronger project outcomes.",
  },
];
const VissionAndMission = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container-gce">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            Vision & Mission
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            What drives us forward.
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionMission.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.t}
                className="bg-white rounded-xl p-6 border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center text-primary-deep mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-primary mb-2">{v.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.d}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VissionAndMission;
