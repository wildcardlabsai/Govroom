import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AutomotivePanel } from "@/components/ui/AutomotivePanel";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection({
  title,
  description,
  primaryLabel = "Get Started",
  primaryHref = "/contact",
  secondaryLabel = "Book a Demo",
  secondaryHref = "/contact",
}: {
  title: React.ReactNode;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-vroom-ink py-24 sm:py-28">
      <AutomotivePanel className="opacity-70" />
      <Container className="relative">
        <Reveal className="max-w-xl">
          <p className="mb-4 font-serif text-sm italic text-vroom-green/80">Keep Dealers Moving</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/65">{description}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={primaryHref} variant="primary">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="outline-light">
              {secondaryLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
