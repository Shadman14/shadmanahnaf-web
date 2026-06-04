import { waLink } from "@/lib/site";
import { IconWhatsApp } from "@/components/Icons";

export function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-200 hover:scale-105"
    >
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-70 animate-pulse-ring"
        aria-hidden="true"
      />
      <IconWhatsApp className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-[4.25rem] hidden whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
