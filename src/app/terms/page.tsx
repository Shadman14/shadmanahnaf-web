import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Terms",
  description: "The simple terms for using this website and working together.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero pill="Legal" title="Terms" sub="The simple terms for using this site and working together." />
      <Section>
        <div className="max-w-3xl space-y-5 text-slatey">
          <p>
            This website is provided for information about the website design services offered by{" "}
            {site.name}. Content here is for general guidance; specific project details, deliverables,
            timelines and pricing are confirmed in writing before any work begins.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Quotes &amp; pricing</h2>
          <p>
            Prices shown are starting points. Your final quote depends on your scope and is agreed before
            the project starts — no hidden fees.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Ownership</h2>
          <p>
            On full payment, you own your website, its content and your domain. There is no platform
            lock-in.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a className="text-brand-600 underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
