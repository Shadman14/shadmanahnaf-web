import type { Metadata } from "next";
import { IndustryPage } from "@/components/IndustryPage";
import { getIndustry } from "@/lib/industries";
import { pageMeta } from "@/lib/seo";

const industry = getIndustry("tax-vat-consultant-website")!;

export const metadata: Metadata = pageMeta({
  title: industry.seoTitle,
  description: industry.seoDescription,
  path: `/${industry.slug}`,
  keywords: ["tax consultant website Bangladesh", "VAT consultant website Dhaka", "accounting firm website", "income tax advisor website"],
});

export default function Page() {
  return <IndustryPage industry={industry} />;
}
