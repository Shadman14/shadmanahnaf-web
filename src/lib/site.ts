// ─────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for your contact details and brand.
// Change anything here and it updates across the whole site + SEO/JSON-LD.
// ⚠️ Confirm the email below — it's taken from your live site.
// ─────────────────────────────────────────────────────────────────

export const site = {
  name: "Shadman Ahnaf",
  brandMark: "SA",
  role: "Website Designer & Developer",
  tagline: "Built to convert. Priced smart. Delivered fast.",

  // Domain (used for canonical URLs, sitemap, Open Graph)
  url: "https://shadmanahnaf.xyz",

  // Contact — confirm these before launch
  email: "shadman80865@gmail.com",
  phoneDisplay: "+880 1934-542908",
  phoneE164: "+8801934542908",
  whatsapp: "8801934542908", // digits only, for wa.me links
  whatsappPrefill: "Hi Shadman, I'd like a website for my business.",

  // Location (NAP — keep consistent everywhere)
  location: {
    city: "Dhaka",
    region: "Dhaka",
    country: "Bangladesh",
    countryCode: "BD",
  },

  // Trust signals
  responseTime: "within 1 hour",
  projectsDelivered: "20+",
  rating: { value: 5.0, count: 23 },
  availability: "Currently accepting projects",

  // Optional social links (leave blank to hide)
  social: {
    facebook: "",
    linkedin: "",
    instagram: "",
  },
} as const;

export type Site = typeof site;

/** Build a WhatsApp chat link with an optional prefilled message. */
export function waLink(message?: string): string {
  const text = encodeURIComponent(message ?? site.whatsappPrefill);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

/** Build a mailto link. */
export function mailto(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const qs = params.toString();
  return `mailto:${site.email}${qs ? `?${qs}` : ""}`;
}

// Primary navigation (homepage uses anchors; sub-pages use routes)
export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const industryRoutes = [
  { label: "Dental Clinics", href: "/dental-clinic-website" },
  { label: "Law Firms", href: "/law-firm-website" },
  { label: "Tax & VAT Consultants", href: "/tax-vat-consultant-website" },
  { label: "Coaching Centers", href: "/coaching-center-website" },
  { label: "IT & Software", href: "/it-company-website" },
  { label: "Local Businesses", href: "/business-website" },
] as const;
