import type { ReactNode } from "react";
import { Pill } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function PageHero({
  pill,
  title,
  sub,
  children,
}: {
  pill?: string;
  title: ReactNode;
  sub?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-white pb-12 pt-32 sm:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/50 to-white"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-32 -z-10 h-80 w-80 rounded-full bg-brand-200/40 blur-[110px]"
      />
      <div className="container-x">
        <Reveal className="max-w-3xl">
          {pill && <Pill className="mb-4">{pill}</Pill>}
          <h1 className="font-display text-4xl font-extrabold leading-[1.07] text-ink text-balance sm:text-5xl">
            {title}
          </h1>
          {sub && <p className="mt-5 text-lg leading-relaxed text-slatey text-pretty">{sub}</p>}
          {children && <div className="mt-7">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
