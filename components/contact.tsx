"use client";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, Loader2, LucideIcon } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/SiteLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SERVICES = [
  "Mining & Industrial Solutions",
  "Environmental Engineering",
  "Energy Solutions",
  "Digital & Technology Solutions",
  "General Inquiry",
];

function ContactComponent() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [service, setService] = useState(SERVICES[0]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      fullName: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      service,
      message: String(fd.get("message") ?? ""),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast.error(data.error ?? "Failed to send. Please try again.");
        return;
      }
      toast.success("Message sent — we'll be in touch shortly.");
      setSent(true);
      form.reset();
      setService(SERVICES[0]);
      setTimeout(() => setSent(false), 6000);
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
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
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-primary mb-2">Send us a message</h2>
            <p className="text-muted-foreground mb-8">
              Share your project requirement and our team will respond.
            </p>
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" required autoComplete="name" />
              <Field label="Email" name="email" type="email" required autoComplete="email" />
              <Field label="Phone" name="phone" autoComplete="tel" />
              <Field label="Company / Organization" name="company" autoComplete="organization" />

              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="contact-service" className="text-sm font-semibold text-primary">
                  Service of Interest
                </Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger id="contact-service" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICES.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="contact-message" className="text-sm font-semibold text-primary">
                  Project Description <span className="text-gold">*</span>
                </Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your project, scope, location, and required support..."
                />
              </div>

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-7 py-6 rounded-md bg-gradient-gold text-primary-deep font-semibold hover:shadow-elevated transition-shadow h-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 className="size-4 animate-spin" /> Sending…
                    </>
                  ) : sent ? (
                    <>
                      <CheckCircle2 size={18} /> Thank you. Our team will get back to you soon.
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gradient-hero text-white rounded-2xl p-8 shadow-elevated">
              <h3 className="text-xl font-bold mb-6">Reach us directly</h3>
              <ul className="space-y-5 text-sm">
                <Detail icon={MapPin} label="Office" href="https://maps.app.goo.gl/PkPwg5NP4GhJdZrg8">
                  7-A, Main Gulberg,
                  <br />
                  Lahore, Pakistan
                </Detail>
                <Detail icon={Phone} label="Phone">
                  <a className="hover:text-gold" href="tel:+924235971455">
                    +92 42 35971455
                  </a>
                  <br />
                  <a className="hover:text-gold" href="tel:+923217860915">
                    +92 321 786 0 915
                  </a>
                </Detail>
                <Detail icon={Mail} label="Email">
                  <a href="mailto:info@gceofficial.com" className="hover:text-gold">
                    info@gceofficial.com
                  </a>
                  <br />
                  <a href="mailto:ali.mehdi@gceofficial.com" className="hover:text-gold">
                    ali.mehdi@gceofficial.com
                  </a>
                </Detail>
                <Detail icon={Globe} label="Web">
                  <a href="https://www.gceofficial.com" className="hover:text-gold">
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.706789196587!2d74.34296627642917!3d31.532212174208617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919050020b4027b%3A0xd671dbfe09a12d6a!2sGCE%20Pvt.%20Ltd.!5e0!3m2!1sen!2s!4v1778828167502!5m2!1sen!2s"
          title="GCE Office Location"
          className="w-full h-105 border-0 grayscale"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const id = `contact-${name}`;
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-semibold text-primary">
        {label}
        {required && (
          <span className="text-gold" aria-hidden="true">
            {" *"}
          </span>
        )}
      </Label>
      <Input
        id={id}
        type={type}
        name={name}
        required={required}
        aria-required={required || undefined}
        autoComplete={autoComplete}
        className="h-11 bg-white"
      />
    </div>
  );
}

function Detail({
  icon: Icon,
  label,
  children,
  href,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
  href?: string;
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
        <a
          href={typeof href === "string" ? href : undefined}
          className={"text-white/90 leading-relaxed" + (href ? " hover:text-gold transition-colors" : "")}
        >
          {children}
        </a>
      </div>
    </li>
  );
}
