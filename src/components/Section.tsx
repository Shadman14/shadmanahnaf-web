import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/Reveal";

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("pill", className)}>{children}</span>;
}

export function Section({
  id,
  band,
  className,
  children,
}: {
  id?: string;
  band?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-24 lg:py-28", band && "bg-mist", className)}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeader({
  pill,
  title,
  sub,
  center = false,
  light = false,
  className,
}: {
  pill?: string;
  title: ReactNode;
  sub?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      {pill && <Pill className="mb-4">{pill}</Pill>}
      <h2
        className={cn(
          "text-3xl font-extrabold leading-[1.1] text-balance sm:text-4xl lg:text-[2.7rem]",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {sub && (
        <p className={cn("mt-4 text-lg leading-relaxed text-pretty", light ? "text-slate-300" : "text-slatey")}>
          {sub}
        </p>
      )}
    </Reveal>
  );
}
