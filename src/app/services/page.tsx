import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { StaggerContainer, StaggerItem } from "@/components/Reveal";
import { WhyMe } from "@/components/sections/WhyMe";
import { Process } from "@/components/sections/Process";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import {
  IconGlobe,
  IconSparkle,
  IconTrendingUp,
  IconSearch,
  IconBolt,
  IconShield,
} from "@/components/Icons";

export const metadata = pageMeta({
  title: "Website Design Services in Bangladesh",
  description:
    "Professional website design and development for firms and businesses in Bangladesh — business sites, industry pages, redesigns and on-page SEO. Free quote, reply within 1 hour.",
  path: "/services",
  keywords: ["website design services Bangladesh", "web development Dhaka", "website redesign Bangladesh"],
});

const services = [
  { icon: IconGlobe, title: "Business websites", body: "Clean, fast, mobile-first sites that turn visitors into inquiries." },
  { icon: IconSparkle, title: "Industry-specific sites", body: "Built around how your industry — dental, law, tax, coaching, IT — actually wins clients." },
  { icon: IconTrendingUp, title: "Conversion-focused design", body: "Every page laid out to move people toward contacting you, not just to look nice." },
  { icon: IconSearch, title: "On-page SEO", body: "Titles, structure, speed and schema so the right clients find you on Google." },
  { icon: IconBolt, title: "Website redesigns", body: "Turn a dated or slow site into one that builds trust and brings in business." },
  { icon: IconShield, title: "Care & maintenance", body: "Optional ongoing updates, edits and backups so your site stays sharp over time." },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          serviceSchema({
            name: "Website design services",
            description:
              "Professional website design and development for firms and businesses in Bangladesh.",
            path: "/services",
          }),
        ]}
      />
      <PageHero
        pill="Services"
        title="Websites that do a job — bring you clients."
        sub="I design and build professional, high-converting websites for firms and local businesses across Bangladesh, with SEO built in from day one."
      />
      <Section band>
        <SectionHeader pill="What I build" title="Everything you need to get found and get hired." center />
        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.title} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slatey">{s.body}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>
      <WhyMe />
      <Process />
      <CtaBand />
    </>
  );
}
