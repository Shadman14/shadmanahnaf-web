import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact — Get a Free Website Quote",
  description:
    "Get a free quote or a free website audit. Tell me about your firm and I'll reply within 1 hour. Websites for businesses across Bangladesh.",
  path: "/contact",
  keywords: ["contact web designer Bangladesh", "free website quote Dhaka"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        pill="Contact"
        title="Let's build your website."
        sub="Get a free quote or a free 5-point audit of your current site. I reply within 1 hour."
      />
      <ContactSection />
    </>
  );
}
