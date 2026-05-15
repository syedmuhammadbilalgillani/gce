"use client";
import { ArrowUp, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./SiteLayout";
import { nav } from "@/constants";
import { usePathname } from "next/navigation";

export function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-primary text-white shadow-elevated hover:bg-gold transition-colors flex items-center justify-center"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // useEffect(() => {
  //   const onScroll = () => setScrolled(window.scrollY > 20);
  //   onScroll();
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur shadow-card ${pathname === "/leads" ? "hidden" : ""} `}
    >
      <div className="container-gce flex items-center justify-between h-20">
        <Logo light={true} />
        <nav className="hidden lg:flex items-center gap-1">
          {nav?.length &&
            nav.map((n) => (
              <Link
                key={n.to}
                href={n.to}
                className={`px-4 py-2 text-base font-medium rounded-md transition-colors text-foreground hover:text-gold ${pathname === n.to ? "text-gold" : ""}`}
                // activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
          <Link
            href="/contact"
            className="ml-3 inline-flex items-center px-5 py-2.5 rounded-md bg-gradient-gold text-primary-deep text-base font-semibold hover:shadow-elevated transition-shadow"
          >
            Get In Touch
          </Link>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-md text-white}`}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="container-gce py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                href={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface rounded-md"
                // activeProps={{ className: "text-gold bg-surface" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center px-5 py-2.5 rounded-md bg-gradient-gold text-primary-deep text-sm font-semibold"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
export default Header;
