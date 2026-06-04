import Link from "next/link";
import { Section, SectionHeader } from "@/components/Section";
import { StaggerContainer, StaggerItem } from "@/components/Reveal";
import { industries } from "@/lib/industries";
import { industryIcon, IconArrowRight } from "@/components/Icons";

export function Industries() {
  return (
    <Section id="industries" band>
      <SectionHeader
        pill="Who it's for"
        title="Built for the way your industry wins clients."
        sub="Every industry earns trust differently. Pick yours — each gets a site shaped around how its clients actually decide."
      />
      <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind) => {
          const Icon = industryIcon[ind.icon];
          return (
            <StaggerItem key={ind.slug} className="h-full">
              <Link
                href={`/${ind.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${ind.accent} text-white shadow-sm`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{ind.name}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slatey">{ind.hook}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Explore
                  <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
