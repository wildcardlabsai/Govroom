import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { LaptopFrame } from "@/components/product/LaptopFrame";
import { DashboardMockup } from "@/components/product/DashboardMockup";

export const metadata: Metadata = {
  title: "How It Works | VROOM",
  description:
    "See how VROOM takes your dealership from sale to resolution with one clear aftersales platform.",
  alternates: { canonical: "/how-it-works" },
};

const STEPS = [
  {
    number: "01",
    title: "Create",
    description: "Add the customer, vehicle and warranty.",
  },
  {
    number: "02",
    title: "Manage",
    description:
      "Keep warranty information, documents and customer records together.",
  },
  {
    number: "03",
    title: "Handle",
    description: "Manage claims, repairs and complaints from one place.",
  },
  {
    number: "04",
    title: "Resolve",
    description:
      "Keep customers updated and maintain a complete record of what happened.",
  },
  {
    number: "05",
    title: "Understand",
    description: "Use insights to understand your aftersales operation.",
  },
];

const JOURNEY = [
  "Sale",
  "Warranty",
  "Customer",
  "Claim",
  "Repair",
  "Resolution",
];

const BULLETS = ["Less admin", "Faster claims", "Happier customers"];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="HOW IT WORKS"
        title="From the sale to the resolution."
        description="VROOM gives your team one clear place to manage everything that happens after a vehicle leaves the forecourt."
      />

      {/* Five Steps */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            align="center"
            title="Five steps. One platform."
            description="VROOM follows the natural flow of dealer aftersales."
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 80}>
                <div className="text-center lg:text-left">
                  <p className="text-4xl font-bold text-vroom-green">
                    {step.number}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-vroom-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-vroom-grey-700">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Visual Journey */}
      <section className="bg-vroom-ink py-20 sm:py-28">
        <Container>
          <SectionHeading
            align="center"
            tone="dark"
            title="The aftersales journey."
            description="Every step connected. Nothing falls through the cracks."
          />
          {/* Desktop: horizontal */}
          <div className="mt-14 hidden items-center justify-between lg:flex">
            {JOURNEY.map((label, i) => (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-vroom-green text-sm font-bold text-vroom-ink">
                    {i + 1}
                  </span>
                  <p className="mt-3 text-sm font-medium text-white">
                    {label}
                  </p>
                </div>
                {i < JOURNEY.length - 1 && (
                  <div className="mx-4 h-0.5 w-12 bg-vroom-green/40 xl:w-20" />
                )}
              </div>
            ))}
          </div>
          {/* Mobile: vertical */}
          <div className="mt-14 flex flex-col items-start gap-0 lg:hidden">
            {JOURNEY.map((label, i) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-vroom-green text-sm font-bold text-vroom-ink">
                    {i + 1}
                  </span>
                  {i < JOURNEY.length - 1 && (
                    <div className="h-8 w-0.5 bg-vroom-green/40" />
                  )}
                </div>
                <p className="mt-2 text-sm font-medium text-white">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading title="A clearer view of your aftersales." />
              <p className="mt-5 max-w-md text-base leading-relaxed text-vroom-grey-700">
                See the information that matters without jumping between
                different systems.
              </p>
              <ul className="mt-7 space-y-3">
                {BULLETS.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-sm text-vroom-grey-700 sm:text-base"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vroom-green text-vroom-ink">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          d="M5 12.5 9.5 17 19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Button href="/contact">Book a Demo</Button>
              </div>
            </div>
            <div>
              <LaptopFrame>
                <DashboardMockup />
              </LaptopFrame>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-vroom-mist py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-vroom-ink sm:text-4xl">
                A clear process. A better experience.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-vroom-grey-700 sm:text-lg">
                VROOM connects the journey so your team can see the complete
                picture.
              </p>
              <ul className="mt-7 inline-flex flex-col items-start gap-3">
                {BULLETS.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-3 text-sm text-vroom-grey-700 sm:text-base"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vroom-green text-vroom-ink">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          d="M5 12.5 9.5 17 19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact">Book a Demo</Button>
                <Button href="/contact" variant="secondary">
                  Get Started
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="See how simple aftersales can be."
        description="Book a demo and we'll show you around."
      />
    </>
  );
}
