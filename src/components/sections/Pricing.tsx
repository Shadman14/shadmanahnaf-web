import { Section, SectionHeader } from "@/components/Section";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";
import { pricing } from "@/lib/content";
import { IconCheck } from "@/components/Icons";

export function Pricing() {
  return (
    <Section id="pricing" band>
      <SectionHeader pill={pricing.pill} title={pricing.heading} sub={pricing.sub} center />

      <StaggerContainer className="mx-auto mt-12 grid max-w-5xl items-stretch gap-6 lg:grid-cols-3">
        {pricing.tiers.map((t) => (
          <StaggerItem key={t.name} className="h-full">
            <div
              className={cn(
                "flex h-full flex-col rounded-3xl border bg-white p-7 shadow-soft",
                t.featured
                  ? "border-brand-500 shadow-lift ring-2 ring-brand-500/20 lg:-mt-3 lg:mb-3"
                  : "border-slate-200/70",
              )}
            >
              {t.featured && "badge" in t && t.badge ? (
                <span className="mb-4 inline-flex w-fit rounded-full bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {t.badge}
                </span>
              ) : null}
              <h3 className="font-display text-xl font-extrabold text-ink">{t.name}</h3>
              <p className="mt-1 text-sm text-slatey">{t.best}</p>
              <p className="mt-4 font-display text-2xl font-extrabold text-ink">{t.price}</p>
              <ul className="mt-5 flex-1 space-y-2.5 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-slatey">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  href="#contact"
                  variant={t.featured ? "brand" : "outline"}
                  size="md"
                  className="w-full"
                  withArrow={t.featured}
                >
                  {t.cta}
                </Button>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <Reveal className="mx-auto mt-12 max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-slatey">
          {pricing.addOnsTitle}
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pricing.addOns.map((a) => (
            <div
              key={a.name}
              className="flex items-center justify-between gap-3 rounded-xl border border-slate-200/70 bg-white px-4 py-3 text-sm shadow-soft"
            >
              <span className="font-medium text-ink">{a.name}</span>
              <span className="shrink-0 font-semibold text-brand-600">{a.price}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-400">{pricing.note}</p>
      </Reveal>
    </Section>
  );
}
