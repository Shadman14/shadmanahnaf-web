import type { Metadata } from "next";
import { IndustryPage } from "@/components/IndustryPage";
import { getIndustry } from "@/lib/industries";
import { pageMeta } from "@/lib/seo";

const industry = getIndustry("law-firm-website")!;

export const metadata: Metadata = pageMeta({
  title: industry.seoTitle,
  description: industry.seoDescription,
  path: `/${industry.slug}`,
  keywords: ["law firm website Bangladesh", "lawyer website Dhaka", "advocate website design", "legal website Bangladesh"],
});

export default function Page() {
  return <IndustryPage industry={industry} />;
}
