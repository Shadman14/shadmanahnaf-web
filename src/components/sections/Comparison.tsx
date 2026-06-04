import { Section, SectionHeader } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { comparison } from "@/lib/content";

export function Comparison() {
  return (
    <Section>
      <SectionHeader pill={comparison.pill} title={comparison.heading} center />
      <Reveal className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-slate-200/70 shadow-soft">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-mist">
              <th className="p-4 font-semibold text-ink" scope="col">
                <span className="sr-only">Comparison</span>
              </th>
              <th className="p-4 text-center font-semibold text-slatey" scope="col">
                {comparison.columns[1]}
              </th>
              <th className="bg-brand-50 p-4 text-center font-bold text-brand-700" scope="col">
                {comparison.columns[2]}
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((r, i) => (
              <tr key={r.label} className={i % 2 ? "bg-white" : "bg-slate-50/50"}>
                <th scope="row" className="p-4 text-left font-semibold text-ink">
                  {r.label}
                </th>
                <td className="p-4 text-center text-slatey">{r.agency}</td>
                <td className="bg-brand-50/40 p-4 text-center font-medium text-ink">{r.me}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}
