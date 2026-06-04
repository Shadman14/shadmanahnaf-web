import type { Metadata } from "next";
import { IndustryPage } from "@/components/IndustryPage";
import { getIndustry } from "@/lib/industries";
import { pageMeta } from "@/lib/seo";

const industry = getIndustry("dental-clinic-website")!;

export const metadata: Metadata = pageMeta({
  title: industry.seoTitle,
  description: industry.seoDescription,
  path: `/${industry.slug}`,
  keywords: ["dental clinic website Bangladesh", "dentist website Dhaka", "dental website design", "dentist near me website"],
});

export default function Page() {
  return <IndustryPage industry={industry} />;
}
