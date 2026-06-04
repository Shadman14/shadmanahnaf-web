import { Section, SectionHeader } from "@/components/Section";
import { StaggerContainer, StaggerItem } from "@/components/Reveal";
import { testimonials } from "@/lib/content";
import { IconStar } from "@/components/Icons";

export function Testimonials() {
  return (
    <Section band>
      <SectionHeader pill={testimonials.pill} title={testimonials.heading} center />
      <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.items.map((t) => (
          <StaggerItem key={t.name} className="h-full">
            <figure className="flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white p-6 shadow-soft">
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-slate-100 pt-4">
                <p className="font-display text-sm font-bold text-ink">{t.name}</p>
                <p className="text-xs text-slatey">{t.role}</p>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
