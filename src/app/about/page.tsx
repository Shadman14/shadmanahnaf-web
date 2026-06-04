import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import { stats } from "@/lib/content";
import { IconCheck } from "@/components/Icons";

export const metadata = pageMeta({
  title: "About Shadman Ahnaf — Web Designer in Dhaka",
  description:
    "I'm Shadman Ahnaf, a web specialist in Dhaka. I build high-converting websites for firms and businesses across Bangladesh — direct, fast and focused on results.",
  path: "/about",
  keywords: ["Shadman Ahnaf", "web designer Dhaka", "freelance web developer Bangladesh"],
});

const values = [
  "Conversion over decoration",
  "Direct communication, always",
  "Fast, honest delivery",
  "You own everything",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        pill="About"
        title="Hi, I'm Shadman — I build websites that bring firms clients."
        sub="No agency, no middleman. Just a specialist who actually cares whether your website does its job."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-slatey">
            <p>
              I&apos;m a website designer and developer based in Dhaka, Bangladesh. I started building
              websites because I kept seeing good firms — dentists, lawyers, tax consultants, coaching
              centers — lose clients to weaker competitors who simply showed up better online.
            </p>
            <p>
              A website isn&apos;t a brochure. It&apos;s often the first impression a client gets, and
              the deciding factor in whether they call you or your competitor. So I don&apos;t just make
              sites that look good — I build them to load fast, rank on Google, and turn visitors into
              real inquiries.
            </p>
            <p>
              When you work with me, you work with me — the person designing and building your site. No
              account managers, no hand-offs, no jargon. Just clear communication, fast delivery, and a
              website you fully own.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-soft"
                >
                  <p className="font-display text-2xl font-extrabold text-ink">{s.value}</p>
                  <p className="mt-1 text-sm text-slatey">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">How I work</p>
              <ul className="mt-3 space-y-2.5 text-sm">
                {values.map((v) => (
                  <li key={v} className="flex gap-2.5 text-slatey">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>
      <CtaBand title="Let's build something that brings you clients." />
    </>
  );
}
