import { Section, SectionHeader } from "@/components/Section";
import { StaggerContainer, StaggerItem } from "@/components/Reveal";
import { work } from "@/lib/content";

export function Work() {
  return (
    <Section id="work">
      <SectionHeader pill={work.pill} title={work.heading} sub={work.sub} />
      <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
        {work.projects.map((p) => (
          <StaggerItem key={p.name} className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift">
              <div className={`relative h-36 bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 bg-grid-faint opacity-20 [background-size:22px_22px]" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
                  {p.tag}
                </span>
                <span className="absolute bottom-4 left-4 font-display text-lg font-extrabold text-white drop-shadow">
                  {p.name}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6 text-sm">
                <div>
                  <p className="font-semibold text-ink">Problem</p>
                  <p className="mt-0.5 text-slatey">{p.problem}</p>
                </div>
                <div>
                  <p className="font-semibold text-ink">Built</p>
                  <p className="mt-0.5 text-slatey">{p.built}</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-600">Result</p>
                  <p className="mt-0.5 text-slatey">{p.result}</p>
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
