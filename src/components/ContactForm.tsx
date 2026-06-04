"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/Button";
import { IconWhatsApp, IconCheck } from "@/components/Icons";

const INDUSTRIES = ["Dental", "Law", "Tax / VAT", "Coaching", "IT / Software", "Other"];
const INQUIRY_TYPES = ["Free quote", "Free audit", "Book a 15-min call"];

type FormState = {
  name: string;
  business: string;
  industry: string;
  email: string;
  phone: string;
  inquiry: string;
  message: string;
};

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-ink shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200";
const labelClass = "mb-1.5 block text-sm font-medium text-ink";

export function ContactForm({
  defaultInquiry = "Free quote",
  className,
}: {
  defaultInquiry?: string;
  className?: string;
}) {
  const [form, setForm] = useState<FormState>({
    name: "",
    business: "",
    industry: "",
    email: "",
    phone: "",
    inquiry: defaultInquiry,
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const update =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((s) => ({ ...s, [key]: e.target.value }));

  function buildMessage(): string {
    return [
      "Hi Shadman, I'd like to discuss a website.",
      `• Name: ${form.name}`,
      `• Business/Firm: ${form.business}`,
      form.industry && `• Industry: ${form.industry}`,
      `• Inquiry: ${form.inquiry}`,
      form.email && `• Email: ${form.email}`,
      form.phone && `• Phone: ${form.phone}`,
      form.message && `• Details: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(buildMessage())}`;
  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Website inquiry — ${form.business || form.name || "new project"}`,
  )}&body=${encodeURIComponent(buildMessage())}`;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.business || !form.email || !form.industry) {
      setError("Please fill in your name, business, industry and email.");
      return;
    }
    setError("");
    setSent(true);
    window.open(waHref, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className={cn("card p-6 sm:p-8", className)} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Name <span className="text-brand-600">*</span>
          </label>
          <input
            id="cf-name"
            className={inputClass}
            placeholder="Your name"
            value={form.name}
            onChange={update("name")}
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label htmlFor="cf-business" className={labelClass}>
            Business / Firm name <span className="text-brand-600">*</span>
          </label>
          <input
            id="cf-business"
            className={inputClass}
            placeholder="e.g. City Smile Dental"
            value={form.business}
            onChange={update("business")}
            autoComplete="organization"
            required
          />
        </div>
        <div>
          <label htmlFor="cf-industry" className={labelClass}>
            Industry <span className="text-brand-600">*</span>
          </label>
          <select
            id="cf-industry"
            className={cn(inputClass, !form.industry && "text-slate-400")}
            value={form.industry}
            onChange={update("industry")}
            required
          >
            <option value="" disabled>
              Select your industry
            </option>
            {INDUSTRIES.map((i) => (
              <option key={i} value={i} className="text-ink">
                {i}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-inquiry" className={labelClass}>
            What do you need?
          </label>
          <select
            id="cf-inquiry"
            className={inputClass}
            value={form.inquiry}
            onChange={update("inquiry")}
          >
            {INQUIRY_TYPES.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Email <span className="text-brand-600">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            className={inputClass}
            placeholder="you@example.com"
            value={form.email}
            onChange={update("email")}
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelClass}>
            Phone <span className="text-slate-400">(optional)</span>
          </label>
          <input
            id="cf-phone"
            className={inputClass}
            placeholder="+880 1XXX-XXXXXX"
            value={form.phone}
            onChange={update("phone")}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="cf-message" className={labelClass}>
          Tell me about your project
        </label>
        <textarea
          id="cf-message"
          className={cn(inputClass, "min-h-[120px] resize-y")}
          placeholder="What does your firm do, and what do you want the website to achieve?"
          value={form.message}
          onChange={update("message")}
        />
      </div>

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600">{error}</p>
      )}

      {sent && (
        <p className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-2.5 text-sm font-medium text-emerald-700">
          <IconCheck className="h-4 w-4" />
          Opening WhatsApp — tap send to confirm. Didn&apos;t open?{" "}
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="underline">
            Tap here
          </a>
          .
        </p>
      )}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Button type="submit" variant="brand" size="lg" className="flex-1">
          <IconWhatsApp className="h-5 w-5" />
          Send via WhatsApp
        </Button>
        <Button href={mailHref} variant="outline" size="lg" className="flex-1">
          Email instead
        </Button>
      </div>

      <p className="mt-3 text-center text-xs text-slate-400">
        Your details open in WhatsApp so you can send them in one tap. I reply {site.responseTime}.
      </p>
    </form>
  );
}
