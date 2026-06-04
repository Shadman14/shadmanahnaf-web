import { Button } from "@/components/Button";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[72vh] items-center justify-center px-5 pt-24">
      <div className="text-center">
        <p className="font-display text-7xl font-extrabold gradient-text sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-ink">This page wandered off.</h1>
        <p className="mx-auto mt-2 max-w-md text-slatey">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <Button href="/" variant="brand" withArrow>
            Back home
          </Button>
          <Button href="/contact" variant="outline">
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
