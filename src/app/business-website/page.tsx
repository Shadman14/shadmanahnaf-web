import type { Metadata } from "next";
import { IndustryPage } from "@/components/IndustryPage";
import { getIndustry } from "@/lib/industries";
import { pageMeta } from "@/lib/seo";

const industry = getIndustry("business-website")!;

export const metadata: Metadata = pageMeta({
  title: industry.seoTitle,
  description: industry.seoDescription,
  path: `/${industry.slug}`,
  keywords: ["business website Bangladesh", "small business website Dhaka", "local business website design", "affordable website Bangladesh"],
});

export default function Page() {
  return <IndustryPage industry={industry} />;
}
