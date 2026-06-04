import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Shadman Ahnaf handles the information you share through this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero pill="Legal" title="Privacy Policy" sub="Plain and simple — here's how your information is handled." />
      <Section>
        <div className="max-w-3xl space-y-5 text-slatey">
          <p>
            This website is operated by {site.name} ({site.location.city}, {site.location.country}). I
            respect your privacy and keep things straightforward.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">What I collect</h2>
          <p>
            When you submit the contact form or message me on WhatsApp, I receive the details you choose
            to share — typically your name, business name, email, phone and your message. I only use this
            information to respond to your inquiry and discuss your project.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">How it&apos;s used</h2>
          <p>
            Your details are used solely to reply to you and provide a quote or service. I do not sell or
            rent your information to anyone.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
          <p>
            Want your information removed, or have a question? Email me at{" "}
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
