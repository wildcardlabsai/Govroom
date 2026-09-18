import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { AutomotivePanel } from "@/components/ui/AutomotivePanel";
import { SITE } from "@/lib/content";

const TRUST_POINTS: { icon: "shield" | "clock" | "trend"; label: string }[] = [
  { icon: "shield", label: "Built for dealers" },
  { icon: "clock", label: "Saves time" },
  { icon: "trend", label: "More profitable aftersales" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-vroom-ink pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-10">
      <AutomotivePanel />
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

          <div className="relative hidden lg:block lg:h-[420px]" aria-hidden="true">
            <div className="absolute right-4 top-0 rotate-[-6deg] font-serif text-sm italic text-white/50">
              Keep Dealers Moving
            </div>
            <div className="absolute bottom-6 right-0 text-right text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35">
              Stronger dealerships
              <br />
              for a brighter tomorrow.
            </div>
          </div>
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
