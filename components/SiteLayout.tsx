"use client";
import Link from "next/link";



export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div className="w-10 h-10 rounded-md bg-gradient-gold flex items-center justify-center font-display font-extrabold text-primary-deep text-lg shadow-card">
        G
      </div>
      <div className="leading-tight">
        <div
          className={`font-display font-bold text-base tracking-tight ${light ? "text-white" : "text-primary"}`}
        >
          GCE <span className="text-gold">Group</span>
        </div>
        <div
          className={`text-[10px] uppercase tracking-[0.18em] ${light ? "text-white/60" : "text-muted-foreground"}`}
        >
          We Care
        </div>
      </div>
    </Link>
  );
}





export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-gradient-hero pt-36 pb-20 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.7 0.13 75 / 0.4), transparent 50%)",
        }}
      />
      <div className="container-gce relative">
        {eyebrow && (
          <div className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">{title}</h1>
        {subtitle && (
          <p className="mt-5 text-lg text-white/70 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
