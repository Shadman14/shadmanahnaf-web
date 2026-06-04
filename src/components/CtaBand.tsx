import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { waLink } from "@/lib/site";

export function CtaBand({
  title = "Ready to turn your website into your best salesperson?",
  sub = "Get a free quote or book a 15-minute call. I reply within 1 hour.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="py-16">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 text-center sm:px-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-faint opacity-[0.07] [background-size:32px_32px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-500/30 blur-[90px]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold text-white text-balance">{title}</h2>
            <p className="mt-3 text-slate-300">{sub}</p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="brand" size="lg" withArrow>
                Get a Free Quote
              </Button>
              <Button href={waLink()} variant="whatsapp" size="lg" newTab>
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
