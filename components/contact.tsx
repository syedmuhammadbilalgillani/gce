"use client";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, LucideIcon } from "lucide-react";
import { PageHero } from "@/components/SiteLayout";

// export const Route = createFileRoute("/contact")({
//   head: () => ({
//     meta: [
//       { title: "Contact GCE Group — Engineering & Industrial Solutions" },
//       { name: "description", content: "Contact GCE Group for mining, environmental, energy, digital, and industrial engineering solutions." },
//       { property: "og:title", content: "Contact GCE Group" },
//       { property: "og:description", content: "Reach out to discuss technical, industrial, environmental, energy, mining, or digital project requirements." },
//     ],
//   }),
//   component: Contact,
// });

function ContactComponent() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your next project."
        subtitle="Whether you need technical studies, regulatory support, operations assistance, energy engineering, or digital solutions, our team is ready to help."
      />

      <section className="py-20 bg-white">
        <div className="container-gce grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-primary mb-2">
              Send us a message
            </h2>
            <p className="text-muted-foreground mb-8">
              Share your project requirement and our team will respond.
            </p>
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
              <Field label="Company / Organization" name="company" />
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-primary mb-2">
                  Service of Interest
                </label>
                <select
                  name="service"
                  className="w-full px-4 py-3 rounded-md border border-input bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all"
                >
                  <option>Mining & Industrial Solutions</option>
                  <option>Environmental Engineering</option>
                  <option>Energy Solutions</option>
                  <option>Digital & Technology Solutions</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-primary mb-2">
                  Project Description
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all"
                  placeholder="Tell us about your project, scope, location, and required support..."
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-gradient-gold text-primary-deep font-semibold hover:shadow-elevated transition-shadow"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 size={18} /> Thank you. Our team will get
                      back to you soon.
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Details */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-hero text-white rounded-2xl p-8 shadow-elevated">
              <h3 className="text-xl font-bold mb-6">Reach us directly</h3>
              <ul className="space-y-5 text-sm">
                <Detail icon={MapPin} label="Office">
                  7-A, Main Gulberg,
                  <br />
                  Lahore, Pakistan
                </Detail>
                <Detail icon={Phone} label="Phone">
                  +92 42 35971455
                  <br />
                  +92 321 786 0 915
                </Detail>
                <Detail icon={Mail} label="Email">
                  <a
                    href="mailto:info@gceofficial.com"
                    className="hover:text-gold"
                  >
                    info@gceofficial.com
                  </a>
                  <br />
                  <a
                    href="mailto:ali.mehdi@gceofficial.com"
                    className="hover:text-gold"
                  >
                    ali.mehdi@gceofficial.com
                  </a>
                </Detail>
                <Detail icon={Globe} label="Web">
                  <a
                    href="https://gceofficial.com"
                    className="hover:text-gold"
                  >
                    www.gceofficial.com
                  </a>
                </Detail>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <iframe
          title="GCE Office Location"
          src="https://www.google.com/maps?q=Main+Gulberg,+Lahore,+Pakistan&output=embed"
          className="w-full h-[420px] border-0 grayscale"
          loading="lazy"
        />
      </section>
    </>
  );
}
export default ContactComponent;
function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-primary mb-2">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 rounded-md border border-input bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all"
      />
    </div>
  );
}

function Detail({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <div className="w-10 h-10 rounded-lg bg-white/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
        <Icon size={16} />
      </div>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-0.5">
          {label}
        </div>
        <div className="text-white/90 leading-relaxed">{children}</div>
      </div>
    </li>
  );
}
