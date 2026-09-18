import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { AutomotivePanel } from "@/components/ui/AutomotivePanel";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-vroom-ink pb-16 pt-16 sm:pb-20 sm:pt-20">
      <AutomotivePanel className="opacity-60" />
      <Container className="relative">
        <div className="max-w-2xl">
          <Badge tone="dark" className="mb-5">
            {eyebrow}
          </Badge>
          <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              {description}
            </p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
