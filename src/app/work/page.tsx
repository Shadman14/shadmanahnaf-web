import { PageHero } from "@/components/PageHero";
import { Work } from "@/components/sections/Work";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Work & Results",
  description:
    "Selected website projects for firms and businesses in Bangladesh — framed by the problem they solved and the results they drive.",
  path: "/work",
  keywords: ["web design portfolio Bangladesh", "website examples Dhaka"],
});

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />
      <PageHero
        pill="Selected work"
        title="Recent work, real results."
        sub="A look at recent projects — and the thinking behind them. Every site is built to do one job: turn visitors into clients."
      />
      <Work />
      <Testimonials />
      <CtaBand />
    </>
  );
}
