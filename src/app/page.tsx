import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Problem } from "@/components/sections/Problem";
import { WhyMe } from "@/components/sections/WhyMe";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Comparison } from "@/components/sections/Comparison";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { Faq } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/seo";
import { faq } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(faq.items),
          serviceSchema({
            name: "Website design for firms & businesses in Bangladesh",
            description:
              "High-converting website design and development for firms and local businesses across Bangladesh.",
            path: "/",
          }),
        ]}
      />
      <Hero />
      <Industries />
      <Problem />
      <WhyMe />
      <Work />
      <Process />
      <Pricing />
      <Comparison />
      <Testimonials />
      <LeadMagnet />
      <Faq />
      <ContactSection />
    </>
  );
}
