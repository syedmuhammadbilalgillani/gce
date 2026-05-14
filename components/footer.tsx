import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "./SiteLayout";
import { nav } from "@/constants";

function Footer() {
  return (
    <footer className="bg-primary-deep text-white/80 mt-24">
      <div className="container-gce py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            GCE Group delivers engineering, environmental, energy, digital,
            mining, and industrial solutions through specialized companies,
            practical expertise, and execution-focused delivery.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            {nav?.length &&
              nav.map((n) => (
                <li key={n.to}>
                  <Link
                    href={n.to}
                    className="hover:text-gold transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Services
          </h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>Mining & Industrial Solutions</li>
            <li>Environmental Engineering</li>
            <li>Energy Solutions</li>
            <li>Digital & Technology Solutions</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <span>7-A, Main Gulberg, Lahore, Pakistan</span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="text-gold mt-0.5 shrink-0" />
              <span>
                +92 42 35971455
                <br />
                +92 321 786 0 915
              </span>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="text-gold mt-0.5 shrink-0" />
              <a href="mailto:info@gceofficial.com" className="hover:text-gold">
                info@gceofficial.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-gce py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/50">
          <span>© 2026 GCE (Pvt.) Ltd. All rights reserved.</span>
          <span>Engineering Solutions. We Care.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
