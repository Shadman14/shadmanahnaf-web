import Link from "next/link";
import { Section, SectionHeader, Pill } from "@/components/Section";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { industryIcon, IconCheck, IconChevronDown } from "@/components/Icons";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo";
import type { Industry } from "@/lib/industries";
import { site } from "@/lib/site";

export function IndustryPage({ industry }: { industry: Industry }) {
  const Icon = industryIcon[industry.icon];
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: industry.name, path: `/${industry.slug}` },
          ]),
          serviceSchema({
            name: industry.seoTitle,
            description: industry.seoDescription,
            type: industry.schemaType,
            path: `/${industry.slug}`,
          }),
          faqSchema(industry.faq),
        ]}
      />

      <section className="relative overflow-hidden bg-white pb-16 pt-32 sm:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/50 to-white"
        />
        <div className="container-x">
          <nav className="mb-6 flex items-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-ink">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-slatey">{industry.name}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <span
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${industry.accent} text-white shadow-glow`}
              >
                <Icon className="h-7 w-7" />
              </span>
              <Pill className="mt-5">{industry.heroPill}</Pill>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.07] text-ink text-balance sm:text-5xl">
                {industry.h1}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slatey text-pretty">
                {industry.heroSub}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="#contact" variant="brand" size="lg" withArrow>
                  Get a Free Quote
                </Button>
                <Button href="/pricing" variant="outline" size="lg">
                  See Pricing
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="hidden lg:block">
              <div className="card p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">What you get</p>
                <ul className="mt-4 space-y-3 text-sm">
                  {industry.included.slice(0, 5).map((f) => (
                    <li key={f} className="flex gap-2.5 text-slatey">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Section band>
        <SectionHeader pill="Why it matters" title={`Where ${industry.name} lose clients online`} />
        <StaggerContainer className="mt-10 grid gap-5 md:grid-cols-3">
          {industry.pains.map((p) => (
            <StaggerItem key={p.title} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white p-6 shadow-soft">
                <h3 className="font-display text-base font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slatey">{p.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            pill="What's included"
            title={`What's included for ${industry.name}`}
            sub="A site shaped around how your clients actually decide — built to be found and built to convert."
          />
          <Reveal className="grid gap-3 sm:grid-cols-2">
            {industry.included.map((f) => (
              <div
                key={f}
                className="flex gap-3 rounded-xl border border-slate-200/70 bg-white p-4 text-sm shadow-soft"
              >
                <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                <span className="text-slatey">{f}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section band>
        <SectionHeader pill="Example" title="A site built to do a job." center />
        <Reveal className="mx-auto mt-10 max-w-3xl rounded-3xl border border-slate-200/70 bg-white p-8 shadow-soft">
          <p className="font-display text-xl font-extrabold text-ink">{industry.example.name}</p>
          <div className="mt-5 grid gap-5 text-sm sm:grid-cols-3">
            <div>
              <p className="font-semibold text-ink">Problem</p>
              <p className="mt-1 text-slatey">{industry.example.problem}</p>
            </div>
            <div>
              <p className="font-semibold text-ink">Built</p>
              <p className="mt-1 text-slatey">{industry.example.built}</p>
            </div>
            <div>
              <p className="font-semibold text-brand-600">Result</p>
              <p className="mt-1 text-slatey">{industry.example.result}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader pill="FAQ" title="Questions, answered." />
          <Reveal className="divide-y divide-slate-200 rounded-2xl border border-slate-200/70 bg-white px-6 shadow-soft">
            {industry.faq.map((it) => (
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

      <Section id="contact" band>
        <SectionHeader
          pill="Let's talk"
          title="Get your website started."
          sub={`Tell me about your firm and I'll send a clear, no-pressure quote. I reply ${site.responseTime}.`}
          center
        />
        <Reveal className="mx-auto mt-10 max-w-2xl">
          <ContactForm defaultInquiry="Free quote" />
        </Reveal>
      </Section>
    </>
  );
}
