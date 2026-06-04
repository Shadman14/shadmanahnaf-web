// ─────────────────────────────────────────────────────────────────
// All homepage / global copy lives here.
// English only for now, but centralized so a বাংলা (Bangla) translation can be
// added later by converting each string to { en, bn } without touching components.
// NOTE: This is a website-selling business. Automation is NOT marketed here.
// ─────────────────────────────────────────────────────────────────

export const hero = {
  pill: "Websites for firms & businesses — Bangladesh",
  h1Lead: "Websites that bring your firm",
  h1Accent: "more clients.",
  subhead:
    "High-converting, professionally designed websites for dental, law, tax, coaching and IT firms across Bangladesh — built to turn visitors into booked clients, not just to look good.",
  primaryCta: "Get a Free Quote",
  secondaryCta: "See My Work",
  trust: ["Trusted by firms in Dhaka", "20+ projects delivered", "I reply within 1 hour"],
  mockTitle: "Trusted Income Tax & VAT Advisory",
  mockBadge: "Latest project · Delivered in 3 days",
};

export const stats = [
  { value: "20+", label: "Projects delivered" },
  { value: "1 hr", label: "Average reply time" },
  { value: "2–6", label: "Days to launch" },
  { value: "100%", label: "You own it" },
];

export const problem = {
  pill: "Why it matters",
  heading: "Your next client is searching Google right now. Will they find you — or your competitor?",
  body: "A Facebook page isn't enough anymore. When someone searches “best income tax consultant in Dhaka” or “dental clinic near me,” a fast, professional, trustworthy website is what wins the click and the call. I build that website — and make sure Google can actually find it.",
  chips: ["Ranks on Google", "Builds instant trust", "Works on every phone", "Captures leads 24/7"],
};

export const whyMe = {
  pill: "Why me",
  heading: "Why firms choose to work with me directly.",
  intro:
    "No agency overhead. No middleman. You work directly with a specialist who builds for conversion — not just looks — and stays reachable from first message to launch.",
  cards: [
    {
      title: "Built to convert, not just to look pretty",
      body: "Every section is laid out to move a visitor toward contacting you. Design with a job to do.",
    },
    {
      title: "SEO built in",
      body: "Proper titles, structure, speed and mobile-first markup — so the right clients can actually find you on Google.",
    },
    {
      title: "Industry-specific design",
      body: "A dental clinic and a law firm don't win clients the same way. Your site is shaped around how your industry earns trust.",
    },
    {
      title: "Fast delivery",
      body: "Most sites go live in a few days — not the weeks an agency takes to return your first email.",
    },
    {
      title: "Direct communication",
      body: "You talk to me, the person building your site — no account managers, no hand-offs, no lost context.",
    },
    {
      title: "You own everything",
      body: "The site, the domain, the content —  100% yours. No lock-in, no hostage situations.",
    },
  ],
};

export const work = {
  pill: "Selected work",
  heading: "Websites built to bring in business.",
  sub: "Real projects, framed by the problem they solved.",
  projects: [
    {
      tag: "Legal & Tax",
      name: "Habibullah & Associates",
      problem: "Needed credibility for a tax/VAT & legal advisory firm.",
      built: "A structured, trust-first website with a clear, direct inquiry path.",
      result: "Now turns visitors into consultation requests instead of bouncing.",
      accent: "from-brand-600 to-brand-400",
    },
    {
      tag: "Coaching",
      name: "Scholars' Academy",
      problem: "Had a Facebook page, but no real way for parents to inquire.",
      built: "A clean site with a strong hero and clear admission CTAs.",
      result: "Makes it easy for parents to inquire and enroll instantly.",
      accent: "from-indigo-600 to-brand-500",
    },
    {
      tag: "Dental",
      name: "City Smile Dental",
      problem: "Patients couldn't find or book the clinic online.",
      built: "A fast, mobile-first site with one-tap call and booking inquiry.",
      result: "Turns 'dentist near me' searches into booked appointments.",
      accent: "from-sky-600 to-cyan-500",
    },
  ],
};

export const process = {
  pill: "The process",
  heading: "From idea to live in days — simple and direct.",
  steps: [
    {
      no: "01",
      title: "Share your firm's details",
      body: "Send your services, basic info and a few photos. That's all I need to start.",
    },
    {
      no: "02",
      title: "I design & build your site",
      body: "A conversion-focused, SEO-ready site tailored to your industry — with progress shared directly.",
    },
    {
      no: "03",
      title: "Launch & start getting inquiries",
      body: "Go live, get found on Google, and watch the inquiries start coming in.",
    },
  ],
};

export const pricing = {
  pill: "Pricing",
  heading: "Simple, transparent packages.",
  sub: "Pick the level that fits your firm. Prices start from the figures below — your final quote depends on your needs.",
  note: "Prices in Bangladeshi Taka (৳). No hidden fees — you get a clear quote before anything starts.",
  tiers: [
    {
      name: "Launch",
      price: "from ৳12,000",
      best: "For a small practice or new firm that needs a strong presence.",
      featured: false,
      features: [
        "5-section custom website",
        "Mobile-first, fast-loading design",
        "Basic on-page SEO",
        "WhatsApp + contact form",
        "1–2 rounds of revisions",
        "30-day support",
        "Delivery in 2–3 days",
      ],
      cta: "Get Started",
    },
    {
      name: "Growth",
      price: "from ৳28,000",
      best: "For firms that want their website to actually bring in leads.",
      featured: true,
      badge: "Most Popular",
      features: [
        "Everything in Launch",
        "Up to 8–10 pages (incl. industry/service pages)",
        "Conversion-focused copywriting",
        "On-page SEO + schema markup",
        "Google Business Profile setup",
        "Lead capture form to your inbox",
        "60-day support",
        "Delivery in 4–6 days",
      ],
      cta: "Get Started",
    },
    {
      name: "Premium",
      price: "from ৳55,000",
      best: "For firms that want a complete, lead-generating online presence.",
      featured: false,
      features: [
        "Everything in Growth",
        "Up to ~15 pages + blog / resources",
        "Full conversion copywriting",
        "Advanced on-page + technical SEO",
        "Priority 90-day support",
        "Optional care & maintenance plan",
        "Delivery in 1–2 weeks",
      ],
      cta: "Book a Call",
    },
  ],
  addOnsTitle: "Add-ons",
  addOns: [
    { name: "Extra pages", price: "from ৳2,000 / page" },
    { name: "Conversion copywriting", price: "from ৳5,000" },
    { name: "Logo & brand kit", price: "from ৳6,000" },
    { name: "Google Business + local SEO setup", price: "from ৳6,000" },
    { name: "Care & maintenance plan", price: "from ৳3,000 / mo" },
    { name: "Blog / resources setup", price: "from ৳8,000" },
  ],
};

export const comparison = {
  pill: "Why me vs an agency",
  heading: "Same goal. Smarter execution.",
  columns: ["", "Typical agency", "Working with me"],
  rows: [
    { label: "Price", agency: "High rates + overhead", me: "Smart, transparent pricing" },
    { label: "Delivery", agency: "2–3 weeks, or longer", me: "A few days" },
    { label: "Who you talk to", agency: "Account managers & hand-offs", me: "Me, directly — start to finish" },
    { label: "SEO", agency: "Often a paid add-on", me: "On-page SEO built in" },
    { label: "Focus", agency: "Looks good in a pitch", me: "Built to convert visitors into clients" },
    { label: "Ownership", agency: "Locked into their platform", me: "You own everything" },
  ],
};

export const testimonials = {
  pill: "Testimonials",
  heading: "What clients say.",
  items: [
    {
      quote: "The website quality Shadman created is amazing. I especially like the design.",
      name: "Advocate Khairul Amin",
      role: "Income Tax Consultant, Dhaka",
    },
    {
      quote:
        "Finally a developer who delivers on time and communicates directly. My website looks modern and clients find me easily now.",
      name: "Ahsan Habib",
      role: "Teacher, Dhaka",
    },
    {
      quote:
        "The process was incredibly simple. I sent my info and within 2 days I had a beautiful website. Great value.",
      name: "Tania Sultana",
      role: "Executive Coach, Dhaka",
    },
  ],
};

export const leadMagnet = {
  heading: "Not ready for a new site yet?",
  body: "Get a free 5-point review of your current website — what's quietly costing you clients, and exactly how to fix it.",
  cta: "Get My Free Audit",
};

export const faq = {
  pill: "FAQ",
  heading: "Questions firms ask before starting.",
  items: [
    {
      q: "How much does a business website cost?",
      a: "Packages start from ৳12,000. Your final price depends on the number of pages, copywriting and SEO — I'll give you a clear quote up front, no surprises.",
    },
    {
      q: "How long does it take?",
      a: "Most sites go live in a few days. Larger sites with more pages take 1–2 weeks.",
    },
    {
      q: "Do I own the website?",
      a: "Yes — 100%. You own the site, the domain and all the content. No lock-in.",
    },
    {
      q: "Do you work with firms outside Dhaka?",
      a: "Yes. I work with businesses right across Bangladesh, fully online.",
    },
    {
      q: "Will my site actually show up on Google?",
      a: "Every site is built with on-page SEO — proper titles, fast loading, mobile-first markup and structured data — so you're set up to rank for the searches your clients are already making.",
    },
    {
      q: "What do you need from me to start?",
      a: "Your services, some basic info and a few photos. I handle the design, build and the rest.",
    },
  ],
};

export const finalCta = {
  pill: "Let's talk",
  heading: "Ready to turn your website into your best salesperson?",
  sub: "Get a free quote or book a 15-minute call. I reply within 1 hour.",
};

export const footer = {
  blurb:
    "Shadman Ahnaf builds high-converting websites for firms and local businesses in Bangladesh — dental, law, tax, coaching, IT and more.",
};
