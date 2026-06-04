# Shadman Ahnaf — Website

High-converting, SEO-optimized marketing website for **Shadman Ahnaf**, a web specialist in Dhaka, Bangladesh who builds professional websites for firms and local businesses (dental, law, tax/VAT, coaching, IT and more).

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## Deploy (recommended: Vercel — free)

1. Push this repo to GitHub (already done).
2. Go to [vercel.com](https://vercel.com) → **New Project** → import this repo.
3. Framework preset auto-detects **Next.js**. Click **Deploy**.
4. Add your domain `shadmanahnaf.xyz` under **Project → Settings → Domains**.

No environment variables are required.

## Where to edit your details

Everything you'll want to change lives in a couple of files:

- `src/lib/site.ts` — name, email, phone, WhatsApp number, address, social links. **Single source of truth** (also used by SEO/JSON-LD and the footer).
- `src/lib/content.ts` — all visible homepage copy (headlines, sections, testimonials, FAQ, pricing). Structured so a Bangla (বাংলা) translation can be dropped in later.
- `src/lib/industries.ts` — copy for the six industry landing pages.

> ⚠️ Confirm your contact email in `src/lib/site.ts`. It is currently set to `shadman80865@gmail.com` (from your live site). Change if needed.

## Adding a Bangla toggle later

Copy is centralized in `content.ts`/`industries.ts`. To add বাংলা: convert each string to `{ en, bn }`, add a small language context + header toggle, and read the active language in components. The structure is already there.

## SEO included

- Per-page `<title>`, meta description and canonical via the App Router Metadata API.
- JSON-LD: `ProfessionalService`, `Service`, `FAQPage`, `AggregateRating`/`Review`, `BreadcrumbList`.
- `sitemap.xml` and `robots.txt` generated automatically (`src/app/sitemap.ts`, `src/app/robots.ts`).
- Open Graph + Twitter cards, a dynamically generated OG image (`src/app/opengraph-image.tsx`), SVG favicon.
- Six dedicated industry landing pages targeting industry + location keywords.

## Project structure

```
src/
  app/                 # routes (home, services, work, pricing, about, contact, 6 industry pages)
  components/          # layout + UI + homepage sections
    sections/          # homepage section components
  lib/                 # site config, copy, industry data, SEO helpers
```
