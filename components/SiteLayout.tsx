"use client";
import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/">
      <Image
        src={light ? "/gceb.svg" : "/gcey.svg"}
        className="object-contain"
        alt="GCE Group"
        width={180}
        height={35}
      />
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
