// Data for the six industry landing pages. One template renders all of them.
// Each entry has its own SEO title/description/H1 and industry-specific copy.

export type IconKey = "tooth" | "scale" | "calculator" | "cap" | "code" | "store";

export type Industry = {
  slug: string;
  name: string; // card / heading label
  navLabel: string;
  icon: IconKey;
  hook: string; // one-liner on the homepage industries grid
  accent: string; // tailwind gradient classes
  schemaType: string; // schema.org @type for JSON-LD
  seoTitle: string;
  seoDescription: string;
  h1: string;
  heroPill: string;
  heroSub: string;
  pains: { title: string; body: string }[];
  included: string[];
  example: { name: string; problem: string; built: string; result: string };
  faq: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: "dental-clinic-website",
    name: "Dental Clinics",
    navLabel: "Dental Clinics",
    icon: "tooth",
    hook: "Turn searchers into booked appointments.",
    accent: "from-sky-500 to-cyan-400",
    schemaType: "Dentist",
    seoTitle: "Dental Clinic Website Design in Bangladesh",
    seoDescription:
      "Website design for dental clinics in Dhaka and across Bangladesh. Turn “dentist near me” searches into booked appointments. Free quote — reply within 1 hour.",
    h1: "Websites for dental clinics in Bangladesh that fill your appointment book.",
    heroPill: "Dental clinic websites",
    heroSub:
      "When someone searches for a dentist nearby, your clinic should be the one they find, trust and book. I build fast, mobile-first dental websites that turn searches into appointments.",
    pains: [
      {
        title: "Patients can't find you online",
        body: "If you don't show up when people search “dentist near me,” they book the clinic that does.",
      },
      {
        title: "No easy way to book",
        body: "A phone number buried in a Facebook post loses patients. People want to tap once and inquire.",
      },
      {
        title: "The clinic looks dated online",
        body: "A clean, modern site signals a clean, modern practice — before a patient ever walks in.",
      },
    ],
    included: [
      "Services pages (cleaning, braces, implants, cosmetic, etc.)",
      "One-tap call & WhatsApp booking inquiry",
      "Mobile-first design — most patients search on a phone",
      "Local SEO so you rank for “dentist near me” and your area",
      "Trust signals: photos, hours, location map, reviews",
      "Fast loading so no patient bounces",
    ],
    example: {
      name: "City Smile Dental",
      problem: "Patients couldn't find or book the clinic online.",
      built: "A fast, mobile-first site with clear services and one-tap booking inquiry.",
      result: "Turns local “dentist near me” searches into booked appointments.",
    },
    faq: [
      {
        q: "Will my clinic show up on Google Maps and search?",
        a: "Yes. I build with local SEO and help set up your Google Business Profile so you appear for nearby searches.",
      },
      {
        q: "Can patients book or inquire directly?",
        a: "Yes — one-tap call, WhatsApp and a simple inquiry form so booking is effortless on a phone.",
      },
      {
        q: "I already have a Facebook page. Isn't that enough?",
        a: "Facebook helps, but it doesn't rank on Google or build the same trust. A website is what most patients check before choosing a clinic.",
      },
    ],
  },
  {
    slug: "law-firm-website",
    name: "Law Firms",
    navLabel: "Law Firms",
    icon: "scale",
    hook: "Look established. Win trust before the first call.",
    accent: "from-brand-700 to-brand-500",
    schemaType: "LegalService",
    seoTitle: "Law Firm Website Design in Bangladesh",
    seoDescription:
      "Website design for law firms and advocates in Dhaka and across Bangladesh. Win client trust and qualified case inquiries. Free quote — reply within 1 hour.",
    h1: "Websites for law firms in Bangladesh that win client trust.",
    heroPill: "Law firm websites",
    heroSub:
      "Clients judge your firm by its website before they ever call. I build structured, credible law firm sites that establish authority and turn visitors into qualified case inquiries.",
    pains: [
      {
        title: "Clients check you out before calling",
        body: "A weak or missing website makes a serious firm look uncertain. Credibility is won online first.",
      },
      {
        title: "No clear practice areas",
        body: "Potential clients need to see you handle their exact matter — clearly, not buried in a paragraph.",
      },
      {
        title: "Inquiries go nowhere",
        body: "Without a clear, private way to reach you, qualified clients give up and call the next firm.",
      },
    ],
    included: [
      "Practice-area pages (civil, criminal, corporate, family, tax, etc.)",
      "Attorney / partner profiles that build authority",
      "Credibility signals: experience, results, affiliations",
      "Discreet contact + WhatsApp and consultation request",
      "Clean, serious design that matches your standing",
      "On-page SEO for “lawyer in Dhaka” style searches",
    ],
    example: {
      name: "Habibullah & Associates",
      problem: "Needed credibility for a tax/VAT & legal advisory firm.",
      built: "A structured, trust-first website with clear practice areas and a direct inquiry path.",
      result: "Now turns visitors into consultation requests instead of bouncing.",
    },
    faq: [
      {
        q: "Do clients really check a law firm's website?",
        a: "Yes — most search and review your site before calling. It's often the deciding factor in whether they reach out at all.",
      },
      {
        q: "Is the contact form confidential?",
        a: "Inquiries come straight to you privately. We can keep details light at first contact and move sensitive discussion to a direct channel.",
      },
      {
        q: "Can you show specific practice areas?",
        a: "Yes. Each practice area gets its own clear space so the right clients immediately see you handle their matter.",
      },
    ],
  },
  {
    slug: "tax-vat-consultant-website",
    name: "Tax & VAT Consultants",
    navLabel: "Tax & VAT Consultants",
    icon: "calculator",
    hook: "Be the firm clients trust with their money.",
    accent: "from-emerald-600 to-teal-500",
    schemaType: "AccountingService",
    seoTitle: "Tax & VAT Consultant Website Design in Bangladesh",
    seoDescription:
      "Website design for tax, VAT and accounting consultants in Bangladesh. Build authority and win consultation leads. Free quote — reply within 1 hour.",
    h1: "Websites for tax & VAT consultants in Bangladesh that win client trust.",
    heroPill: "Tax & VAT consultant websites",
    heroSub:
      "Clients hand you their finances — they need to trust you first. I build authoritative, clear websites for tax, VAT and accounting firms that turn searchers into consultation requests.",
    pains: [
      {
        title: "Trust is everything — and invisible online",
        body: "People won't hand their finances to a firm that looks unestablished on the web.",
      },
      {
        title: "Services aren't clear",
        body: "Income tax, VAT, company filing, audit — clients need to see exactly what you handle.",
      },
      {
        title: "No authority signals",
        body: "Credentials, experience and results build the confidence that earns the consultation.",
      },
    ],
    included: [
      "Clear service pages: income tax, VAT, returns, company filing, audit",
      "Authority signals: credentials, experience, client types served",
      "Consultation request form + direct WhatsApp",
      "Trust-first, professional design",
      "On-page SEO for “income tax / VAT consultant in Dhaka” searches",
      "FAQ that answers the questions clients hesitate on",
    ],
    example: {
      name: "Habibullah & Associates",
      problem: "Needed credibility for a tax/VAT & legal advisory firm.",
      built: "A structured, trust-first site with clear services and a direct consultation path.",
      result: "Now converts visitors into consultation requests.",
    },
    faq: [
      {
        q: "How does a website bring me consultation leads?",
        a: "It ranks for the searches business owners make, establishes your authority, and gives them a clear, low-friction way to request a consultation.",
      },
      {
        q: "Can you reflect different services like income tax and VAT separately?",
        a: "Yes. Each service gets its own clear section so clients immediately see you handle their exact need.",
      },
      {
        q: "Will it look credible enough for corporate clients?",
        a: "That's the goal — a clean, authoritative design that signals you're the firm serious clients can trust.",
      },
    ],
  },
  {
    slug: "coaching-center-website",
    name: "Coaching Centers",
    navLabel: "Coaching Centers",
    icon: "cap",
    hook: "Fill your next batch from Google, not just Facebook.",
    accent: "from-violet-600 to-indigo-500",
    schemaType: "EducationalOrganization",
    seoTitle: "Coaching Center & Academy Website Design in Bangladesh",
    seoDescription:
      "Website design for coaching centers and academies in Bangladesh. Fill batches with admissions inquiries from Google. Free quote — reply within 1 hour.",
    h1: "Websites for coaching centers in Bangladesh that fill your next batch.",
    heroPill: "Coaching center websites",
    heroSub:
      "Parents and students search before they enroll. I build clean, convincing academy websites that show your results and make it effortless to inquire about admission.",
    pains: [
      {
        title: "Only on Facebook",
        body: "Facebook reaches who already follows you. Google reaches parents actively searching for a center.",
      },
      {
        title: "No way to show results",
        body: "Your toppers, pass rates and courses are your strongest pitch — they need a proper home.",
      },
      {
        title: "Admission inquiries are messy",
        body: "Comments and DMs get lost. A clear admission form keeps every inquiry in one place.",
      },
    ],
    included: [
      "Course / batch / program pages with schedules and fees",
      "Results & toppers showcase to build instant trust",
      "Clear admission inquiry form + WhatsApp",
      "Faculty highlights and facilities",
      "Local SEO for your area + subject searches",
      "Mobile-first — most parents and students browse on phones",
    ],
    example: {
      name: "Scholars' Academy",
      problem: "Had a Facebook page, but no real way for parents to inquire.",
      built: "A clean site with a strong hero, results showcase and clear admission CTAs.",
      result: "Makes it easy for parents to inquire and enroll instantly.",
    },
    faq: [
      {
        q: "Can I show my courses, fees and schedules?",
        a: "Yes — each course or batch gets a clear page with everything parents and students need to decide.",
      },
      {
        q: "Will it help me get admissions from Google?",
        a: "Yes. Local SEO helps you appear when parents search for coaching in your area and subjects.",
      },
      {
        q: "Can students inquire about admission directly?",
        a: "A simple admission form plus WhatsApp keeps every inquiry organized in one place.",
      },
    ],
  },
  {
    slug: "it-company-website",
    name: "IT & Software",
    navLabel: "IT & Software",
    icon: "code",
    hook: "Look like the company bigger clients rely on.",
    accent: "from-slate-700 to-brand-600",
    schemaType: "ProfessionalService",
    seoTitle: "IT & Software Company Website Design in Bangladesh",
    seoDescription:
      "Website design for IT and software companies in Bangladesh. Look credible to bigger clients and win quality leads. Free quote — reply within 1 hour.",
    h1: "Websites for IT & software companies in Bangladesh that win bigger clients.",
    heroPill: "IT & software company websites",
    heroSub:
      "Bigger clients vet you online first. I build sharp, credible IT company websites that showcase your services and case studies — and make serious prospects reach out.",
    pains: [
      {
        title: "You look smaller than you are",
        body: "A thin website undersells real capability. Bigger clients judge you by it before a meeting.",
      },
      {
        title: "No proof of work",
        body: "Case studies, services and a clear stack are what turn a curious visitor into a lead.",
      },
      {
        title: "No clear path to contact",
        body: "Quality prospects won't dig for a way to reach you — make the next step obvious.",
      },
    ],
    included: [
      "Services pages (development, apps, cloud, support, etc.)",
      "Case studies / portfolio that prove capability",
      "Credibility signals: clients, stack, team, process",
      "Clear lead form + direct contact",
      "Sharp, modern design that signals competence",
      "On-page SEO for your service + location keywords",
    ],
    example: {
      name: "Northbyte Solutions",
      problem: "A capable team that looked small and unconvincing online.",
      built: "A sharp services + case-study site with clear proof and a strong lead path.",
      result: "Helps the team win trust with larger clients before the first call.",
    },
    faq: [
      {
        q: "Can you show our services and case studies properly?",
        a: "Yes — structured service pages and case studies that demonstrate real capability to bigger prospects.",
      },
      {
        q: "Will it look modern enough for a tech company?",
        a: "Absolutely. The design is clean and current — the kind of site that signals you know what you're doing.",
      },
      {
        q: "Can it generate leads, not just look good?",
        a: "Yes. Every page guides serious prospects toward a clear, low-friction way to contact you.",
      },
    ],
  },
  {
    slug: "business-website",
    name: "Local Businesses",
    navLabel: "Local Businesses",
    icon: "store",
    hook: "A website that actually brings in business.",
    accent: "from-amber-500 to-orange-500",
    schemaType: "LocalBusiness",
    seoTitle: "Business Website Design in Bangladesh",
    seoDescription:
      "Affordable, high-converting business website design in Dhaka and across Bangladesh. Get found on Google and bring in more clients. Free quote — reply within 1 hour.",
    h1: "Business websites in Bangladesh that actually bring in clients.",
    heroPill: "Business websites",
    heroSub:
      "Whatever you do, your customers are searching for it online. I build clean, fast, high-converting websites for local businesses across Bangladesh — built to get found and bring in business.",
    pains: [
      {
        title: "Customers can't find you",
        body: "If you're not on Google, you're invisible to everyone searching for what you offer.",
      },
      {
        title: "No credibility",
        body: "A real website tells customers you're established and worth trusting with their money.",
      },
      {
        title: "Nowhere to capture leads",
        body: "Without a clear contact path, interested visitors slip away to a competitor who has one.",
      },
    ],
    included: [
      "Custom pages for your services or products",
      "Get found on Google with on-page + local SEO",
      "Contact form + WhatsApp + one-tap call",
      "Mobile-first, fast-loading design",
      "Trust signals: photos, reviews, location, hours",
      "Built to convert visitors into inquiries",
    ],
    example: {
      name: "Local business",
      problem: "Relied on word of mouth with no online presence.",
      built: "A clean, fast website that ranks locally and makes contact effortless.",
      result: "Turns online searches into calls, messages and walk-ins.",
    },
    faq: [
      {
        q: "I'm a small business — is a website worth it?",
        a: "Yes. It's often the cheapest, hardest-working salesperson you'll ever have — working 24/7 to bring in customers.",
      },
      {
        q: "Will it help me get found on Google?",
        a: "That's built in. On-page and local SEO help you appear when people search for what you offer nearby.",
      },
      {
        q: "How affordable is it?",
        a: "Packages start from ৳12,000 with a clear quote up front. We'll match the site to your goals and budget.",
      },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export const industrySlugs = industries.map((i) => i.slug);
