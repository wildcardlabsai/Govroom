import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/lib/content";

const TRUST_POINTS: { icon: "shield" | "clock" | "trend"; label: string }[] = [
  { icon: "shield", label: "Built for dealers" },
  { icon: "clock", label: "Saves time" },
  { icon: "trend", label: "More profitable aftersales" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-vroom-ink pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-10">
      {/* Background hero images */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-mobile.png"
          alt=""
          fill
          priority
          className="object-cover object-right-top md:hidden"
          sizes="100vw"
        />
        <Image
          src="/images/hero-desktop.png"
          alt=""
          fill
          priority
          className="hidden object-cover object-right md:block"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-vroom-ink via-vroom-ink/85 to-vroom-ink/30 lg:to-transparent" />
        <div className="absolute inset-0 bg-vroom-ink/40 md:bg-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-vroom-ink to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="max-w-xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-vroom-green">
              {SITE.tagline}
            </p>
            <h1 className="text-balance text-[2.6rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Everything
              <br />
              after the sale.
              <br />
              In one place.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
              {SITE.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary">
                Get Started
              </Button>
              <Button href="/features" variant="outline-light" icon={<PlayIcon />}>
                See How It Works
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
              {TRUST_POINTS.map((point) => (
                <div key={point.label} className="flex items-center gap-2 text-sm text-white/55">
                  <Icon name={point.icon} className="h-4 w-4 text-vroom-green" />
                  {point.label}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:h-[420px]" aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
