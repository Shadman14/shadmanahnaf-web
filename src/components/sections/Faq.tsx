import { Section, SectionHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { faq } from "@/lib/content";
import { IconChevronDown } from "@/components/Icons";

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader pill={faq.pill} title={faq.heading} />
        <Reveal className="divide-y divide-slate-200 rounded-2xl border border-slate-200/70 bg-white px-6 shadow-soft">
          {faq.items.map((it) => (
            <details key={it.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {it.q}
                <IconChevronDown className="h-5 w-5 shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slatey">{it.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
