import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { leadMagnet } from "@/lib/content";

export function LeadMagnet() {
  return (
    <section className="py-12">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl bg-ink px-6 py-10 sm:px-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-faint opacity-[0.07] [background-size:32px_32px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-500/30 blur-[90px]"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h3 className="font-display text-2xl font-extrabold text-white">{leadMagnet.heading}</h3>
              <p className="mt-2 leading-relaxed text-slate-300">{leadMagnet.body}</p>
            </div>
            <div className="shrink-0">
              <Button href="#contact" variant="brand" size="lg" withArrow>
                {leadMagnet.cta}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
