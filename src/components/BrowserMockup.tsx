import { hero } from "@/lib/content";

/** A self-contained, CSS-only preview of a sample firm website (no external images). */
export function BrowserMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute -left-3 -top-4 z-20 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lift sm:block">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">{hero.mockBadge}</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lift">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <div className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-xs text-slate-400 ring-1 ring-slate-200">
            trustedtaxadvisory.com
          </div>
        </div>

        <div className="bg-white">
          <div className="flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-md bg-brand-600 text-[10px] font-bold text-white">T</span>
              <span className="text-xs font-bold text-ink">Trusted Advisory</span>
            </div>
            <div className="hidden gap-3 text-[10px] text-slate-400 sm:flex">
              <span>Services</span>
              <span>About</span>
              <span>Contact</span>
            </div>
            <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold text-white">Free Consult</span>
          </div>

          <div className="bg-gradient-to-b from-brand-50/70 to-white px-5 pb-6 pt-5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-600">Income Tax &amp; VAT</p>
            <h3 className="mt-1.5 font-display text-lg font-extrabold leading-tight text-ink">{hero.mockTitle}</h3>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
              Expert tax, VAT &amp; company filing for businesses across Bangladesh. Trusted, clear and on time.
            </p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-full bg-brand-600 px-3 py-1.5 text-[10px] font-semibold text-white">Get a Free Quote</span>
              <span className="rounded-full border border-slate-200 px-3 py-1.5 text-[10px] font-semibold text-ink">Our Services</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["Income Tax", "VAT", "Company Filing"].map((s) => (
                <div key={s} className="rounded-lg border border-slate-100 bg-white p-2 shadow-sm">
                  <div className="h-1.5 w-6 rounded-full bg-brand-200" />
                  <p className="mt-1.5 text-[9px] font-semibold text-ink">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -right-3 z-20 hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lift md:flex">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-600">↑</span>
        <div>
          <p className="text-[10px] font-bold leading-none text-ink">More inquiries</p>
          <p className="text-[9px] text-slate-400">since launch</p>
        </div>
      </div>
    </div>
  );
}
