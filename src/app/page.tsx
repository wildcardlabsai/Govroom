import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { WorkflowDiagram } from "@/components/sections/WorkflowDiagram";
import { LaptopFrame } from "@/components/product/LaptopFrame";
import { DashboardMockup } from "@/components/product/DashboardMockup";
import { AIAssistantMockup } from "@/components/product/AIAssistantMockup";
import { CustomerPortalMockup } from "@/components/product/CustomerPortalMockup";
import { CORE_FEATURES, BENEFITS, TESTIMONIALS, WHO_ITS_FOR } from "@/lib/content";

export const metadata: Metadata = {
  title: "VROOM | Dealer Aftersales Software, Simplified",
  description:
    "VROOM helps UK car dealers manage warranties, claims, customers and everything in between — so you can save time, reduce risk and keep customers on the road.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* FEATURES INTRO */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Features"
                title="Everything you need for a stronger aftersales operation."
              />
              <div className="max-w-sm">
                <p className="text-base leading-relaxed text-vroom-grey-700">
                  VROOM brings your warranties, claims, customers and documents together in one
                  simple, powerful platform — built by people who understand the motor trade.
                </p>
                <Link
                  href="/features"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-vroom-ink hover:text-vroom-green-2"
                >
                  Explore all features
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 60}>
                <FeatureCard {...feature} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="bg-vroom-mist py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="The Platform"
                title="A clearer view of your aftersales."
                description="VROOM gives you complete visibility across your dealership's aftersales operation. From warranties and claims to customers and key insights — everything you need, right where you need it."
              />
              <div className="mt-8 flex items-center gap-6">
                <Button href="/contact">Get Started</Button>
                <Link href="/features" className="flex items-center gap-2 text-sm font-semibold text-vroom-ink">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-vroom-grey-300">
                    <PlayGlyph />
                  </span>
                  Watch a quick overview
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <LaptopFrame>
                <DashboardMockup />
              </LaptopFrame>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Built for Modern Dealers"
                title="Less admin. More time for what matters."
                description="VROOM is designed to make aftersales simpler, so you can focus on selling vehicles, looking after your customers and growing your business."
              />
            </Reveal>
            <Reveal delay={120}>
              <ul className="space-y-4">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 rounded-xl border border-vroom-grey-100 bg-vroom-mist/60 px-5 py-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vroom-green text-vroom-ink">
                      <CheckGlyph />
                    </span>
                    <span className="text-sm font-medium text-vroom-ink sm:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* WORKFLOW */}
      <section className="relative overflow-hidden bg-vroom-ink py-20 sm:py-28">
        <div className="automotive-grid pointer-events-none absolute inset-0 opacity-[0.25]" aria-hidden="true" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="Everything Connected"
              title="From sale to resolution. All in one flow."
              description="VROOM connects the key parts of aftersales, so nothing falls through the cracks. A simpler, smarter way to keep your customers on the road."
              tone="dark"
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <Reveal delay={120} className="mt-16">
            <WorkflowDiagram />
          </Reveal>
          <p className="mx-auto mt-14 max-w-xs text-center font-serif text-sm italic text-white/40">
            A Smoother Road Ahead
          </p>
        </Container>
      </section>

      {/* AI / INTELLIGENCE */}
      <section className="bg-vroom-navy-2 py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Smarter Aftersales"
                title="Know what to do next."
                description="From understanding a customer complaint to preparing a response, VROOM gives dealers useful guidance when they need it."
                tone="dark"
              />
              <ul className="mt-8 space-y-3">
                {["Get clarity on customer issues", "Understand your position", "Generate response guidance", "Save time and reduce risk"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/75">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vroom-green text-vroom-ink">
                        <CheckGlyph small />
                      </span>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <AIAssistantMockup />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CUSTOMER EXPERIENCE */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <CustomerPortalMockup />
            </Reveal>
            <Reveal delay={120} className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="Customer Experience"
                title="Keep customers informed without the back-and-forth."
                description="Give your customers a simple place to view their aftersales information, check their warranty cover, track claims and access important documents."
              />
              <ul className="mt-8 space-y-3">
                {["Self-service customer portal", "Real-time claim updates", "Access to documents", "Reduced inbound enquiries"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-vroom-grey-700 sm:text-base">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vroom-green text-vroom-ink">
                        <CheckGlyph small />
                      </span>
                      {item}
                    </li>
                  )
                )}
              </ul>
              <Link
                href="/features"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-vroom-ink hover:text-vroom-green-2"
              >
                See the customer experience
                <ArrowIcon />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-vroom-mist py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Trusted by Dealers"
              title="Real dealers. Real results."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <TestimonialCard {...t} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-16 border-t border-vroom-grey-300/60 pt-12">
            <LogoStrip />
          </Reveal>
        </Container>
      </section>

      {/* WHO IT'S FOR TEASER */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Who It's For"
              title="Built for dealers of all sizes."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {WHO_ITS_FOR.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-vroom-grey-300/70 p-7">
                  <h3 className="text-lg font-semibold text-vroom-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-vroom-grey-700">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/who-its-for" variant="secondary">
              See who VROOM is for
            </Button>
          </div>
        </Container>
      </section>

      <CTASection
        title="Take control of your aftersales with VROOM."
        description="Join modern dealers who are simplifying aftersales and building stronger businesses."
      />
    </>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function CheckGlyph({ small = false }: { small?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={small ? "h-3 w-3" : "h-3.5 w-3.5"} fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path d="M5 12.5 9.5 17 19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
