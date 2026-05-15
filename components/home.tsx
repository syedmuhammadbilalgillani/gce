"use client";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Code,
  GraduationCap,
  Layers,
  Leaf,
  Mountain,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import OurJourney from "./group-companies";
import VissionAndMission from "./vision-mission";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "GCE Group — Integrated Engineering Solutions | We Care" },
//       { name: "description", content: "GCE Group delivers engineering, environmental, energy, digital, mining, and industrial solutions through specialized companies, practical expertise, and execution-focused delivery." },
//       { property: "og:title", content: "GCE Group — Engineering Solutions. We Care." },
//       { property: "og:description", content: "A diversified engineering and industrial group supporting mining, environment, energy, digital, and industrial development sectors." },
//     ],
//   }),
//   component: Index,
// });

const domains = [
  {
    key: "mining",
    icon: Mountain,
    title: "Mining & Industrial Solutions",
    desc: "Mining consultancy, surveys, mine planning, mineral processing, salt mining, coal mining, biomass, and industrial production capabilities.",
    img: "/mining.webp",
  },
  {
    key: "environment",
    icon: Leaf,
    title: "Environmental Engineering",
    desc: "Environmental studies, IEE/EIA, compliance, hydrology, wastewater, WASH, approvals, and sustainability-focused engineering.",
    img: "/environment.webp",
  },
  {
    key: "energy",
    icon: Zap,
    title: "Energy Solutions",
    desc: "Power systems, substations, renewable energy, grid integration, and energy engineering solutions through Gridnewable and related group capabilities.",
    img: "/energy.webp",
  },
  {
    key: "digital",
    icon: Code,
    title: "Digital & Technology Solutions",
    desc: "Business software, web development, AI automation, digital transformation, branding, and technology solutions through STS / Softech Sol.",
    img: "/digital.webp",
  },
];

const stats = [
  { value: 10, suffix: "+", label: "Years of Industry Expertise" },
  { value: 4, suffix: "", label: "Core Domains" },
  { value: 800, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Senior Experts & Leaders" },
];

const whyGce = [
  {
    icon: GraduationCap,
    t: "Industry & Academia Integration",
    d: "Strong linkage between industry professionals, academicians, and technical experts for practical and technically sound solutions.",
  },
  {
    icon: Layers,
    t: "End-to-End Project Support",
    d: "Support from concept, feasibility, approvals, and design to execution planning and operational assistance.",
  },
  {
    icon: ShieldCheck,
    t: "Regulatory & Technical Understanding",
    d: "Practical understanding of mining, environmental, industrial, and government approval processes.",
  },
  {
    icon: Building2,
    t: "Group-Based Delivery Strength",
    d: "Specialized companies supporting consulting, mining, processing, energy, and digital requirements under one coordinated platform.",
  },
];

const sectors = [
  {
    t: "Mining & Mineral Development",
    d: "Exploration support, mine planning, feasibility studies, development schemes, resource evaluation, and regulatory facilitation.",
  },
  {
    t: "Environmental Approvals & Compliance",
    d: "IEE/EIA studies, environmental monitoring, compliance documentation, and approval support for mining and industrial projects.",
  },
  {
    t: "Cement & Heavy Industry",
    d: "Technical, regulatory, environmental, and project support for cement, minerals, and industrial plant developments.",
  },
  {
    t: "Industrial Processing & Manufacturing",
    d: "Support for mineral processing, salt processing, soda ash, crushers, and industrial production facilities.",
  },
  {
    t: "Energy & Power Systems Engineering",
    d: "Power systems, renewable energy, substations, grid studies, BESS, and energy engineering support through Gridnewable.",
  },
  {
    t: "Public Sector & Strategic Projects",
    d: "Technical support and advisory services for public sector, strategic, and institutional projects.",
  },
  {
    t: "Digital Transformation",
    d: "Business software, web platforms, automation, AI-enabled workflows, and digital presence development.",
  },
  {
    t: "Business & Industrial Growth",
    d: "Support for new ventures, feasibility assessment, JV facilitation, project structuring, and operational improvement.",
  },
];

const clients = [
  "/companies/1.webp",
  "/companies/2.webp",
  "/companies/3.webp",
  "/companies/4.webp",
  "/companies/5.webp",
  "/companies/6.webp",
  "/companies/7.webp",
  "/companies/8.webp",
  "/companies/9.webp",
  "/companies/10.webp",
  "/companies/11.webp",
  "/companies/12.webp",
  "/companies/13.webp",
  "/companies/14.webp",
  "/companies/15.webp",
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const dur = 1400;
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            setN(Math.floor(p * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return (
    <div
      ref={ref}
      className="text-4xl md:text-5xl font-display font-bold text-white"
    >
      {n}
      <span className="text-gold">{suffix}</span>
    </div>
  );
}

function HomePageComponent() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % clients.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <Image
          src="/hero.webp"
          alt="GCE Group engineering operations across mining, environment, energy and industrial sectors"
          width={1920}
          height={1080}
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-linear-to-br from-primary-deep/70 via-primary/60 to-primary-deep/50" />
        <div className="container-gce relative py-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-white/5 backdrop-blur text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />{" "}
            We Care
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl">
            Engineering Expertise.
            <br />
            <span className="text-gold">Practical Solutions.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            GCE Group supports industrial growth through practical engineering,
            environmental, energy, digital, mining, and industrial capabilities.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-gradient-gold text-primary-deep font-semibold hover:shadow-elevated transition-shadow"
            >
              Explore Our Services <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-primary-deep/80 backdrop-blur border-t border-white/10">
          <div className="container-gce grid grid-cols-2 lg:grid-cols-4 gap-6 py-8">
            {stats.map((s) => (
              <div key={s.label}>
                <Counter to={s.value} suffix={s.suffix} />
                <div className="mt-2 text-xs md:text-sm text-white/60 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <VissionAndMission />

      {/* CORE DOMAINS */}
      <section className="py-24 bg-surface">
        <div className="container-gce">
          <div className="max-w-2xl">
            <div className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3">
              Our Core Domains
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Specialized expertise.{" "}
              <span className="text-gold">One trusted platform.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Four focused domains supported by specialized group companies,
              technical expertise, and practical execution capability.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {domains.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.key}
                  href="/services"
                  className="group relative overflow-hidden rounded-xl bg-white shadow-card hover:shadow-elevated transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      width={1280}
                      height={800}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={70}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-lg bg-gradient-gold flex items-center justify-center text-primary-deep">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-primary">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold group-hover:gap-3 transition-all">
                      Learn more <ArrowRight size={16} aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY GCE */}
      <section className="py-24 bg-surface">
        <div className="container-gce grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3">
              Why GCE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Built on industry experience and academic strength.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Combining practical field experience, technical expertise, and
              academic collaboration to support complex mining, environmental,
              energy, and industrial projects.
            </p>
            <div className="mt-8 space-y-4">
              {whyGce.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.t} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white border border-gold/30 flex items-center justify-center text-gold shrink-0">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{item.t}</div>
                      <div className="text-sm text-muted-foreground mt-0.5">
                        {item.d}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-gold opacity-10 rounded-2xl blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <Image
                src="/mining.webp"
                alt="Mining operations and mineral processing"
                loading="lazy"
                width={600}
                height={400}
                sizes="(max-width: 1024px) 50vw, 320px"
                quality={70}
                className="rounded-xl shadow-card aspect-4/5 object-cover translate-y-6"
              />
              <Image
                src="/energy.webp"
                alt="Energy systems and renewable power engineering"
                loading="lazy"
                width={600}
                height={400}
                sizes="(max-width: 1024px) 50vw, 320px"
                quality={70}
                className="rounded-xl shadow-card aspect-4/5 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-16 bg-white border-y border-border overflow-hidden">
        <div className="container-gce">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              Trusted by leading organizations
            </h3>

            <p className="mt-3 text-muted-foreground text-sm">
              Our group has supported public, private, industrial, mining,
              energy, and strategic sector clients across multiple domains.
            </p>
          </div>

          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${index * 220}px)`,
              }}
            >
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="min-w-55 h-24 flex items-center justify-center px-6"
                >
                  <Image
                    src={client}
                    alt={`Client logo ${(i % clients.length) + 1}`}
                    width={180}
                    height={80}
                    sizes="220px"
                    loading="lazy"
                    quality={70}
                    className={`object-contain w-auto h-auto max-h-full transition duration-300 `}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE ACROSS SECTORS */}
      <section className="py-24 bg-surface">
        <div className="container-gce">
          <div className="max-w-2xl">
            <div className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3">
              Experience Across Sectors
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              A broad project base.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Across feasibility studies, mine development, environmental
              approvals, industrial facilities, energy, and business technology.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {sectors.map((s) => (
              <div
                key={s.t}
                className="p-6 rounded-xl bg-white border border-border"
              >
                <CheckCircle2
                  className="text-gold mb-3"
                  size={22}
                  aria-hidden="true"
                />
                <h3 className="font-bold text-primary text-base">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT EXPERIENCE */}
      <section className="py-20 bg-white">
        <div className="container-gce text-center max-w-2xl mx-auto">
          <div className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            Project Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Selected projects, shared on request.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Due to client confidentiality, selected project details are shared
            through our official company profile upon request.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-primary-deep transition-colors"
          >
            Request Company Profile
          </Link>
        </div>
      </section>

      {/* JOURNEY */}
      <OurJourney />

      {/* CTA */}
      <section className="py-24 bg-gradient-hero text-white text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, oklch(0.7 0.13 75 / 0.5), transparent 50%)",
          }}
        />
        <div className="container-gce relative">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to discuss your{" "}
            <span className="text-gold">next project?</span>
          </h2>
          <p className="mt-5 text-white/70 text-lg max-w-xl mx-auto">
            Let&apos;s build practical solutions for your next engineering or
            industrial challenge.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-md bg-gradient-gold text-primary-deep font-semibold hover:shadow-elevated transition-shadow"
          >
            Contact Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomePageComponent;
