import type { Metadata } from "next";
import { site } from "@/lib/site";
import { testimonials } from "@/lib/content";
import { industries } from "@/lib/industries";

export function absUrl(path = "/"): string {
  try {
    return new URL(path, site.url).toString();
  } catch {
    return site.url;
  }
}

/** Build per-page metadata with canonical + Open Graph + Twitter. */
export function pageMeta(opts: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const { title, description, path = "/", keywords } = opts;
  const url = absUrl(path);
  const fullTitle = `${title} | ${site.name}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absUrl("/#business"),
    name: site.name,
    alternateName: "Shadman Ahnaf Web Design",
    description:
      "High-converting website design and development for firms and local businesses in Bangladesh.",
    url: site.url,
    image: absUrl("/opengraph-image"),
    email: site.email,
    telephone: site.phoneE164,
    priceRange: "৳৳",
    areaServed: { "@type": "Country", name: "Bangladesh" },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: site.location.region,
      addressCountry: site.location.countryCode,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    review: testimonials.items.map((t) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
    })),
    sameAs: Object.values(site.social).filter(Boolean),
    knowsAbout: industries.map((i) => i.name),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absUrl("/#website"),
    url: site.url,
    name: site.name,
    description: "Professional website design for firms and businesses in Bangladesh.",
    publisher: { "@id": absUrl("/#business") },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: absUrl(it.path),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  type?: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.type ?? "Website design",
    name: opts.name,
    description: opts.description,
    url: absUrl(opts.path),
    areaServed: { "@type": "Country", name: "Bangladesh" },
    provider: { "@id": absUrl("/#business") },
  };
}
