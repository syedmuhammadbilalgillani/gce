"use client";
import {
  ArrowRight,
  CheckCircle2,
  Code,
  Leaf,
  LucideIcon,
  Mountain,
  Zap,
} from "lucide-react";
import { useState } from "react";
// import miningImg from "@/assets/mining.webp";
// import envImg from "@/assets/environment.webp";
// import energyImg from "@/assets/energy.webp";
// import digitalImg from "@/assets/digital.webp";
import { PageHero } from "@/components/SiteLayout";
import Image from "next/image";
import Link from "next/link";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";

// export const Route = createFileRoute("/services")({
//   head: () => ({
//     meta: [
//       { title: "Services — Mining, Environment, Energy & Digital Solutions | GCE Group" },
//       { name: "description", content: "Explore GCE Group services across mining and industrial solutions, environmental engineering, energy systems, and digital technology through specialized group companies." },
//       { property: "og:title", content: "GCE Group Services" },
//       { property: "og:description", content: "Practical engineering, environmental, energy, digital, mining, and industrial services delivered through specialized companies and expert teams." },
//     ],
//   }),
//   component: Services,
// });

type DivKey = "mining" | "environment" | "energy" | "digital";

type Domain = {
  label: string;
  short: string;
  icon: LucideIcon;
  img: string;
  desc: string;
  companies?: { name: string; image: string; url?: string }[];

  externalNote?: string;
  experienceNote?: string;
  services: { title: string; desc: string }[];
};

const divisions: Record<DivKey, Domain> = {
  mining: {
    label: "Mining & Industrial Solutions",
    short: "Mining & Industrial",
    icon: Mountain,
    img: "/mining.webp",
    desc: "Technical and industrial support for mineral exploration, mine planning, surveys, feasibility studies, mineral processing, regulatory approvals, mine operations assistance, and mining-linked business development.",
    companies: [
      { name: "GCE", image: "/gceb.svg", url: "https://gceofficial.com" },
      { name: "The Survey Bridge", image: "/companies/surveybridge.webp" },
      { name: "TQL Salt", image: "/companies/tql.webp" },
      { name: "Coal Pro", image: "/companies/coalpro.webp" },
      { name: "Biomass Pro", image: "/companies/biomass.webp" },
      {
        name: "Premier Salt",
        image: "/companies/premier.webp",
        url: "https://premiersalt.pk/",
      },
    ],
    experienceNote:
      "The group has experience across rock salt, coal, limestone, bauxite, laterite, silica sand, gypsum, fire clay, iron ore, industrial minerals, and mining-linked industrial facilities.",
    services: [
      {
        title: "Mineral Exploration & Resource Evaluation",
        desc: "Geological mapping, field investigations, exploration planning, sampling support, resource evaluation, and technical reporting for mineral assets.",
      },
      {
        title: "Mine Planning & Development",
        desc: "Mine planning, development schemes, mining method selection, production planning, lease support, and operational assistance.",
      },
      {
        title: "Mine Operations Assistance",
        desc: "Operational support and management services for mining projects, including production planning, site coordination, contractor/vendor management, regulatory follow-up, reporting, and day-to-day operational oversight on behalf of the client.",
      },
      {
        title: "Surveys & Field Data Collection",
        desc: "Topographic surveys, mining surveys, geological surveys, drone mapping, site verification, and field data collection through specialized survey teams.",
      },
      {
        title: "Feasibility & Technical Studies",
        desc: "Concept-level, pre-feasibility, feasibility, technical review, cost assessment, and commercial evaluation for mining and industrial projects.",
      },
      {
        title: "Mineral Processing & Industrial Plants",
        desc: "Support for mineral processing, salt processing, coal blending, crushers, beneficiation, process optimization, and industrial plant planning.",
      },
      {
        title: "Regulatory & Licensing Support",
        desc: "Support for mining applications, lease transfer, renewal, departmental coordination, approval documentation, and compliance support.",
      },
    ],
  },
  environment: {
    label: "Environmental Engineering",
    short: "Environmental",
    icon: Leaf,
    img: "/environment.webp",
    desc: "Environmental studies, approvals, compliance, monitoring, hydrology, wastewater, WASH, and sustainability-focused engineering for mining, industrial, and development projects.",
    companies: [
      {
        name: "GCE",
        image: "/gceb.svg",
        url: "https://gceofficial.com",
      },
    ],
    services: [
      {
        title: "IEE / EIA Studies",
        desc: "Preparation of Initial Environmental Examination and Environmental Impact Assessment reports for mining, industrial, cement, housing, crusher, and processing projects.",
      },
      {
        title: "Environmental Approvals & Compliance",
        desc: "Environmental approval support, compliance documentation, regulatory coordination, and follow-up with relevant departments.",
      },
      {
        title: "Environmental Monitoring",
        desc: "Baseline surveys, compliance monitoring, environmental risk identification, and reporting support.",
      },
      {
        title: "Hydrology & Water Studies",
        desc: "Hydrological assessments, drainage planning, water resource studies, and mine drainage-related inputs.",
      },
      {
        title: "Wastewater & Treatment Systems",
        desc: "Wastewater treatment planning, design review, process selection, compliance support, and optimization inputs.",
      },
      {
        title: "WASH & Community Solutions",
        desc: "Water supply, sanitation, hygiene, institutional WASH, and sustainable water-related planning.",
      },
    ],
  },
  energy: {
    label: "Energy Solutions",
    short: "Energy",
    icon: Zap,
    img: "/energy.webp",
    desc: "Power system studies, substation design, renewable energy integration, BESS, grid engineering, protection, and energy project advisory through Gridnewable.",
    companies: [
      {
        name: "Gridnewable",
        image: "/companies/gridnewable.webp",
        url: "https://gridnewable.com/",
      },
    ],
    externalNote:
      "Detailed energy capabilities, project experience, and international delivery model are available through Gridnewable's dedicated website.",
    services: [
      {
        title: "Power System Studies",
        desc: "Load flow, short circuit, stability, grid compliance, power quality, harmonic, and protection coordination studies.",
      },
      {
        title: "Substation & Grid Engineering",
        desc: "Primary and secondary design, substation layouts, single line diagrams, protection systems, control systems, and grid infrastructure engineering.",
      },
      {
        title: "Renewable Energy Integration",
        desc: "Solar PV, wind, BESS, hybrid system integration, energy yield analysis, and grid connection support.",
      },
      {
        title: "Protection, Relay & Arc Flash",
        desc: "Protection settings, relay logic files, coordination studies, arc flash hazard analysis, and electrical safety studies.",
      },
      {
        title: "Cable, Earthing & SCADA Support",
        desc: "Cable sizing, routing, earthing, lightning protection, SCADA architecture, signal lists, and related design documentation.",
      },
      {
        title: "Energy Project Advisory",
        desc: "Technical due diligence, design review, owner's engineer support, vendor evaluation, commissioning support, and execution advisory.",
      },
    ],
  },
  digital: {
    label: "Digital & Technology Solutions",
    short: "Digital",
    icon: Code,
    img: "/digital.webp",
    desc: "Software development, AI automation, business systems, web platforms, digital branding, and technology solutions through STS / Softech Sol.",
    companies: [
      {
        name: "Softech Sol",
        image: "/companies/sts.webp",
        url: "https://softechsol.com/",
      },
    ],

    externalNote:
      "Detailed digital services, software capabilities, and portfolio examples are available through Softech Sol's dedicated website.",
    services: [
      {
        title: "Business Software Development",
        desc: "Custom business software, workflow tools, ERP/CRM support, dashboards, and internal process automation.",
      },
      {
        title: "Web & Application Development",
        desc: "Corporate websites, portals, web applications, mobile applications, CMS development, hosting, and maintenance.",
      },
      {
        title: "AI Automation & Agentic Systems",
        desc: "AI workflows, chatbots, intelligent assistants, task automation, data analysis, and AI integration with business systems.",
      },
      {
        title: "Digital Marketing & Branding",
        desc: "Brand identity, social media management, SEO, paid campaigns, content creation, and digital growth strategies.",
      },
      {
        title: "Business Intelligence & Dashboards",
        desc: "Data dashboards, reporting tools, analytics, performance monitoring, and decision-support systems.",
      },
      {
        title: "Technical Support & Maintenance",
        desc: "Ongoing support, website optimization, digital presence management, and system improvement services.",
      },
    ],
  },
};

const deliverySteps = [
  {
    t: "Understand the Requirement",
    d: "We begin by understanding the project objective, site conditions, regulatory context, technical scope, and business requirement.",
  },
  {
    t: "Build the Right Team",
    d: "Relevant experts, group companies, field teams, and technical partners are aligned according to the project needs.",
  },
  {
    t: "Develop Practical Solutions",
    d: "We prepare technically sound, commercially realistic, and execution-ready solutions tailored to the client's project.",
  },
  {
    t: "Deliver & Support",
    d: "We support our clients through implementation planning, approvals, reporting, and ongoing technical assistance.",
  },
];

function ServicesComponent() {
  const [active, setActive] = useState<DivKey>("mining");
  const d = divisions[active];
  const Icon = d.icon;

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Four core domains. One coordinated platform."
        subtitle="GCE Group supports clients through practical services across mining, environmental engineering, energy systems, and digital technology, backed by specialized group companies and technical experts."
      />

      <section className="py-12 bg-white border-b border-border sticky top-20 z-30">
        <div className="container-gce flex flex-wrap gap-2">
          {(Object.keys(divisions) as DivKey[]).map((k) => {
            const isActive = k === active;
            return (
              <button
                key={k}
                onClick={() => setActive(k)}
                className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-all ${isActive ? "bg-primary text-white shadow-card" : "bg-surface text-primary hover:bg-gold/10"}`}
              >
                {divisions[k].short}
              </button>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-gce">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="aspect-4/3 rounded-xl overflow-hidden shadow-elevated">
                <Image
                  src={d.img}
                  alt={d.label}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center text-primary-deep">
                  <Icon size={22} />
                </div>
                <h2 className="text-2xl font-bold text-primary">{d.label}</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {d.desc}
              </p>
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <Table>
                  <TableBody>
                    {d?.companies?.map((company, index) => (
                      <TableRow key={index}>
                        <TableCell className="pl-5">
                          <a
                            href={company.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-20 h-20 rounded-xl   overflow-hidden"
                          >
                            <Image
                              src={company.image}
                              alt={company.name}
                              width={48}
                              height={48}
                              className="object-contain w-auto h-auto max-w-full max-h-full"
                            />
                          </a>
                        </TableCell>

                        <TableCell className="font-medium text-foreground">
                          <a
                            href={company.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {company.name}
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
              {d.services.map((s) => (
                <div
                  key={s.title}
                  className="p-6 rounded-xl border border-border hover:border-gold transition-colors bg-surface/50"
                >
                  <CheckCircle2 className="text-gold mb-3" size={22} />
                  <h3 className="font-bold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
              {d.experienceNote && (
                <div className="sm:col-span-2 p-5 rounded-xl bg-primary/5 border border-primary/10 text-sm text-primary leading-relaxed">
                  <span className="font-semibold">Experience: </span>
                  {d.experienceNote}
                </div>
              )}
              {d.externalNote && (
                <div className="sm:col-span-2 p-5 rounded-xl bg-primary/5 border border-primary/10 text-sm text-primary leading-relaxed">
                  {d.externalNote}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Approach */}
      <section className="py-20 bg-surface">
        <div className="container-gce">
          <div className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            How We Deliver
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            A practical delivery approach.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Designed around client needs, technical accuracy, and execution
            support.
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverySteps.map((s, i) => (
              <div
                key={s.t}
                className="bg-white rounded-xl p-6 border border-border shadow-card"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-gold text-primary-deep flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-bold text-primary">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidential Project Note */}
      <section className="py-16 bg-white">
        <div className="container-gce max-w-3xl text-center">
          <h3 className="text-2xl font-bold text-primary">
            Project References
          </h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Due to confidentiality requirements, detailed project references are
            shared selectively through official company profiles, proposals, or
            client-specific submissions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-hero text-white text-center">
        <div className="container-gce">
          <h2 className="text-3xl md:text-4xl font-bold">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Speak with our team to identify the right technical, environmental,
            energy, or digital solution for your requirement.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-gradient-gold text-primary-deep font-semibold"
          >
            Discuss Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
export default ServicesComponent;
