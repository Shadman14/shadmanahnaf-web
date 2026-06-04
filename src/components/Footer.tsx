import Link from "next/link";
import { site, mainNav, industryRoutes, waLink } from "@/lib/site";
import { footer } from "@/lib/content";
import { Button } from "@/components/Button";
import { IconMail, IconPhone, IconMapPin } from "@/components/Icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-slate-300">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 font-display text-sm font-extrabold text-white">
                SA
              </span>
              <span className="font-display text-lg font-extrabold text-white">Shadman Ahnaf</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">{footer.blurb}</p>
            <p className="mt-4 font-display text-sm font-semibold text-white">{site.tagline}</p>
            <div className="mt-5">
              <Button href={waLink()} variant="whatsapp" size="sm" newTab>
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {mainNav.map((i) => (
                <li key={i.href}>
                  <Link className="text-slate-400 transition-colors hover:text-white" href={i.href}>
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-2" aria-label="Industries">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Industries</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {industryRoutes.map((i) => (
                <li key={i.href}>
                  <Link className="text-slate-400 transition-colors hover:text-white" href={i.href}>
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-2 text-slate-400 transition-colors hover:text-white"
                >
                  <IconMail className="mt-0.5 h-4 w-4 shrink-0" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneE164}`}
                  className="flex items-start gap-2 text-slate-400 transition-colors hover:text-white"
                >
                  <IconPhone className="mt-0.5 h-4 w-4 shrink-0" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-slate-400">
                  <IconMapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  {site.location.city}, {site.location.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
