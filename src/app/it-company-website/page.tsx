import type { Metadata } from "next";
import { IndustryPage } from "@/components/IndustryPage";
import { getIndustry } from "@/lib/industries";
import { pageMeta } from "@/lib/seo";

const industry = getIndustry("it-company-website")!;

export const metadata: Metadata = pageMeta({
  title: industry.seoTitle,
  description: industry.seoDescription,
  path: `/${industry.slug}`,
  keywords: ["IT company website Bangladesh", "software company website Dhaka", "tech company website design", "IT firm website Bangladesh"],
});

export default function Page() {
  return <IndustryPage industry={industry} />;
}
