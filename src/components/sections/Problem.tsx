import { Section, Pill } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { problem } from "@/lib/content";
import { IconSearch, IconShield, IconSmartphone, IconClock } from "@/components/Icons";

const chipIcons = [IconSearch, IconShield, IconSmartphone, IconClock];

export function Problem() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Pill className="mb-4">{problem.pill}</Pill>
          <Reveal>
            <h2 className="text-3xl font-extrabold leading-[1.12] text-ink text-balance sm:text-4xl">
              {problem.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 text-lg leading-relaxed text-slatey text-pretty">{problem.body}</p>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
          {problem.chips.map((c, i) => {
            const Icon = chipIcons[i % chipIcons.length];
            return (
              <div
                key={c}
                className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-soft"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-ink">{c}</span>
              </div>
            );
          })}
        </Reveal>
      </div>
    </Section>
  );
}
