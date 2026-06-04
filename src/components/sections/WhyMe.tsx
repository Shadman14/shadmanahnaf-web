import { Section, SectionHeader } from "@/components/Section";
import { StaggerContainer, StaggerItem } from "@/components/Reveal";
import { whyMe } from "@/lib/content";
import {
  IconTarget,
  IconSearch,
  IconSparkle,
  IconBolt,
  IconUsers,
  IconLock,
} from "@/components/Icons";

const icons = [IconTarget, IconSearch, IconSparkle, IconBolt, IconUsers, IconLock];

export function WhyMe() {
  return (
    <Section id="why">
      <SectionHeader pill={whyMe.pill} title={whyMe.heading} sub={whyMe.intro} />
      <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyMe.cards.map((c, i) => {
          const Icon = icons[i % icons.length];
          return (
            <StaggerItem key={c.title} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slatey">{c.body}</p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
