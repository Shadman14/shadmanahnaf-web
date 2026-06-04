"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/Button";
import { BrowserMockup } from "@/components/BrowserMockup";
import { hero } from "@/lib/content";
import { IconStar } from "@/components/Icons";

const EASE = [0.22, 1, 0.36, 1] as const;
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-32 sm:pt-36 lg:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint [background-size:44px_44px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/60 to-mist"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-40 -z-10 h-[480px] w-[480px] rounded-full bg-brand-200/40 blur-[120px]"
      />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="pill">
            {hero.pill}
          </motion.span>
          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-ink text-balance sm:text-5xl lg:text-6xl"
          >
            {hero.h1Lead} <span className="gradient-text">{hero.h1Accent}</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slatey text-pretty"
          >
            {hero.subhead}
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" variant="brand" size="lg" withArrow>
              {hero.primaryCta}
            </Button>
            <Button href="#work" variant="outline" size="lg">
              {hero.secondaryCta}
            </Button>
          </motion.div>
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm"
          >
            <span className="flex items-center gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="h-4 w-4" />
              ))}
            </span>
            {hero.trust.map((t, i) => (
              <span key={t} className="flex items-center gap-3">
                {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />}
                <span className="font-medium text-ink/75">{t}</span>
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="relative"
        >
          <BrowserMockup />
        </motion.div>
      </div>
    </section>
  );
}
