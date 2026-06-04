import { PageHero } from "@/components/PageHero";
import { Pricing } from "@/components/sections/Pricing";
import { Comparison } from "@/components/sections/Comparison";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { faq } from "@/lib/content";

export const metadata = pageMeta({
  title: "Pricing — Website Packages in Bangladesh",
  description:
    "Transparent website design pricing for firms and businesses in Bangladesh. Packages from ৳12,000 with a clear quote up front. No hidden fees.",
  path: "/pricing",
  keywords: ["website design price Bangladesh", "website cost Dhaka", "business website packages"],
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
          faqSchema(faq.items),
        ]}
      />
      <PageHero
        pill="Pricing"
        title="Honest pricing. No surprises."
        sub="Pick the level that fits your firm. Prices start from the figures below — your final quote always comes up front, in writing."
      />
      <Pricing />
      <Comparison />
      <Faq />
      <CtaBand />
    </>
  );
}
