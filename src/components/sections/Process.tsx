import { Section, SectionHeader } from "@/components/Section";
import { StaggerContainer, StaggerItem } from "@/components/Reveal";
import { process } from "@/lib/content";

export function Process() {
  return (
    <Section band>
      <SectionHeader pill={process.pill} title={process.heading} />
      <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
        {process.steps.map((s) => (
          <StaggerItem key={s.no} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white p-7 shadow-soft">
              <span className="font-display text-4xl font-extrabold text-brand-200">{s.no}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slatey">{s.body}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
