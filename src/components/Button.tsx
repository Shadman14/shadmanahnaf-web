"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { IconArrowRight } from "@/components/Icons";

type Variant = "primary" | "brand" | "outline" | "ghost" | "white" | "whatsapp";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variantClasses: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink/90 shadow-soft hover:shadow-lift hover:-translate-y-0.5",
  brand: "bg-brand-600 text-white hover:bg-brand-700 shadow-glow hover:-translate-y-0.5",
  outline: "border border-slate-300 bg-white text-ink hover:border-ink/30 hover:bg-slate-50",
  ghost: "text-ink hover:bg-slate-100",
  white: "bg-white text-ink shadow-soft hover:bg-slate-100",
  whatsapp: "bg-[#25D366] text-white shadow-soft hover:brightness-95",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-[52px] px-7 text-base",
};

type Props = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  href?: string;
  newTab?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow = false,
  href,
  newTab,
  onClick,
  type = "button",
  ariaLabel,
}: Props) {
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);
  const inner = (
    <>
      {children}
      {withArrow && (
        <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    const external = /^(https?:|mailto:|tel:)/.test(href);
    if (external) {
      return (
        <a
          href={href}
          onClick={onClick}
          className={classes}
          aria-label={ariaLabel}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={classes} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
