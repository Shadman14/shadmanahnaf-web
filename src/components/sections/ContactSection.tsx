import { Section, SectionHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { finalCta } from "@/lib/content";
import { site, waLink } from "@/lib/site";
import { IconWhatsApp, IconMail, IconClock } from "@/components/Icons";

export function ContactSection() {
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeader pill={finalCta.pill} title={finalCta.heading} sub={finalCta.sub} />
          <div className="mt-8 space-y-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-soft transition-shadow hover:shadow-lift"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-100 text-emerald-600">
                <IconWhatsApp className="h-6 w-6" />
              </span>
              <div>
                <p className="font-semibold text-ink">WhatsApp</p>
                <p className="text-sm text-slatey">{site.phoneDisplay} · fastest reply</p>
              </div>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-soft transition-shadow hover:shadow-lift"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <IconMail className="h-6 w-6" />
              </span>
              <div>
                <p className="font-semibold text-ink">Email</p>
                <p className="break-all text-sm text-slatey">{site.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-soft">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-500">
                <IconClock className="h-6 w-6" />
              </span>
              <div>
                <p className="font-semibold text-ink">Response time</p>
                <p className="text-sm text-slatey">I reply {site.responseTime}</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1.5 text-sm font-medium text-emerald-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              {site.availability}
            </div>
          </div>
        </div>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
