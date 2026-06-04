import type { Metadata } from "next";
import { IndustryPage } from "@/components/IndustryPage";
import { getIndustry } from "@/lib/industries";
import { pageMeta } from "@/lib/seo";

const industry = getIndustry("coaching-center-website")!;

export const metadata: Metadata = pageMeta({
  title: industry.seoTitle,
  description: industry.seoDescription,
  path: `/${industry.slug}`,
  keywords: ["coaching center website Bangladesh", "academy website Dhaka", "admission website design", "coaching website Bangladesh"],
});

export default function Page() {
  return <IndustryPage industry={industry} />;
}
