"use client";
import { PageHero } from "@/components/SiteLayout";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  HeartHandshake,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";
import OurJourney from "./group-companies";
import VissionAndMission from "./vision-mission";
// export const Route = createFileRoute("/about")({
//   head: () => ({
//     meta: [
//       { title: "About GCE Group — Engineering, Mining, Energy & Digital Solutions" },
//       { name: "description", content: "Learn about GCE Group, a diversified engineering and industrial group built on industry-academia collaboration, practical execution, and specialized companies across mining, environment, energy, and digital sectors." },
//       { property: "og:title", content: "About GCE Group" },
//       { property: "og:description", content: "A diversified engineering and industrial group delivering practical solutions through specialized companies, technical expertise, and execution-focused delivery." },
//     ],
//   }),
//   component: About,
// });



const philosophy = [
  {
    t: "Practical Engineering",
    d: "We focus on solutions that are technically sound, commercially realistic, and implementable in field conditions.",
  },
  {
    t: "Responsible Development",
    d: "We consider regulatory, environmental, operational, and community aspects in project planning and execution.",
  },
  {
    t: "Long-Term Value",
    d: "We aim to build lasting relationships by delivering work that supports sustainable business and industrial growth.",
  },
];


const deliveryModel = [
  {
    t: "Strategic Leadership",
    d: "Senior leadership provides direction, client coordination, project structuring, and quality oversight.",
  },
  {
    t: "Technical Experts",
    d: "Mining engineers, geologists, environmental specialists, energy engineers, survey professionals, and digital teams contribute domain-specific expertise.",
  },
  {
    t: "Field & Execution Teams",
    d: "Practical field teams support surveys, data collection, site assessment, regulatory coordination, and implementation planning.",
  },
  {
    t: "Partner & Academic Network",
    d: "Industry partners and academic specialists strengthen technical depth, review capacity, and specialized project support.",
  },
];

const orgChart = [
  {
    l: "Group Leadership",
    r: "Strategic direction, business development, partnerships, and governance",
  },
  {
    l: "Technical Advisory Panel",
    r: "Mining, geology, environment, energy, legal, and engineering experts",
  },
  {
    l: "Domain Leads",
    r: "Mining & Industrial, Environmental, Energy, Digital",
  },
  {
    l: "Project Management Team",
    r: "Client coordination, planning, documentation, reporting, and execution tracking",
  },
  {
    l: "Field & Delivery Teams",
    r: "Surveys, studies, site work, approvals support, and technical implementation",
  },
];

function AboutComponent() {
  return (
    // <SiteLayout>
    <>
      <PageHero
        eyebrow="About GCE Group"
        title="Engineering with purpose. Built through collaboration."
        subtitle="GCE Group brings together industry professionals, academicians, technical experts, and specialized companies to support industrial, mining, environmental, energy, and digital projects."
      />

      {/* About Us */}
      <section className="py-20 bg-white">
        <div className="container-gce grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              A diversified group with practical engineering roots.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                GCE Group is a diversified engineering and industrial group
                developed around practical project execution, technical
                consultancy, and specialized business capabilities. The group
                supports clients across mining, environmental engineering,
                energy systems, digital technologies, and industrial
                development.
              </p>
              <p>
                Built on strong industry-academia linkages, GCE Group combines
                field experience, technical expertise, regulatory understanding,
                and business execution capability. Through its specialized
                companies, the group provides support from concept, feasibility,
                approvals, and design to execution planning, operations, and
                business growth.
              </p>
            </div>
          </div>
          <div className="bg-surface rounded-2xl p-8 border-l-4 border-gold">
            <div className="text-5xl font-display font-bold text-gold leading-none">
              &quot;
            </div>
            <p className="text-xl text-primary font-display font-medium leading-snug -mt-4">
              We believe engineering should create practical impact, long-term
              value, and sustainable growth.
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              — GCE Group
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <VissionAndMission/>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="container-gce">
          <div className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            Our Philosophy
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Practical solutions, responsible execution, and long-term value.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {philosophy.map((p) => (
              <div
                key={p.t}
                className="p-7 rounded-xl bg-surface/60 border border-border"
              >
                <CheckCircle2 className="text-gold mb-3" size={22} />
                <h3 className="font-bold text-primary text-lg">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OurJourney />

      {/* Group Structure */}
      {/* <section className="py-20 bg-surface">
        <div className="container-gce">
          <div className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            Our Group Structure
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Specialized companies working under one coordinated platform.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
            The group structure enables GCE to support clients through a
            combination of consultancy, field services, mining and processing
            assets, energy engineering, industrial services, and digital
            solutions.
          </p>
          <div className="mt-10 overflow-x-auto rounded-xl shadow-card bg-white border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-5 py-4 font-semibold">Domain</th>
                  <th className="text-left px-5 py-4 font-semibold">
                    Companies / Capabilities
                  </th>
                </tr>
              </thead>
              <tbody>
                {groupStructure.map((g) => (
                  <tr
                    key={g.domain}
                    className="border-t border-border hover:bg-surface/60"
                  >
                    <td className="px-5 py-4 font-medium text-primary">
                      {g.domain}
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">
                      {g.companies}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

      {/* Delivery Model */}
      <section className="py-20 bg-white">
        <div className="container-gce">
          <div className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            Delivery Model
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Led by experts. Delivered through specialized teams.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
            Our delivery model combines senior leadership, technical experts,
            field teams, partner companies, and academic specialists to support
            projects from planning to execution.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {deliveryModel.map((p) => (
              <div
                key={p.t}
                className="bg-surface rounded-xl p-6 border border-border"
              >
                <h3 className="font-bold text-primary text-lg">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.d}
                </p>
              </div>
            ))}
          </div>

          {/* Org Chart */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-primary mb-6">
              Organizational structure
            </h3>
            <div className="space-y-3">
              {orgChart.map((o, i) => (
                <div
                  key={o.l}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-6 p-5 rounded-lg bg-surface border border-border"
                >
                  <div className="flex items-center gap-3 sm:w-72 shrink-0">
                    <div className="w-7 h-7 rounded-full bg-gradient-gold text-primary-deep flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                    <div className="font-semibold text-primary">{o.l}</div>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {o.r}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-hero text-white text-center">
        <div className="container-gce">
          <h2 className="text-3xl md:text-4xl font-bold">
            Want to work with us?
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Connect with GCE Group to explore engineering, industrial, energy,
            environmental, or digital solutions for your project.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-gradient-gold text-primary-deep font-semibold"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      {/* </SiteLayout> */}
    </>
  );
}
export default AboutComponent;
