import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { LaptopFrame } from "@/components/product/LaptopFrame";
import { DashboardMockup } from "@/components/product/DashboardMockup";
import { AIAssistantMockup } from "@/components/product/AIAssistantMockup";
import { CORE_FEATURES } from "@/lib/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description:
    "See how VROOM brings warranties, claims, customers, vehicles, documents and aftersales insights together in one dealer aftersales platform.",
  alternates: { canonical: "/features" },
};

const DETAIL_SECTIONS: {
  id: string;
  heading: string;
  copy: string;
  bg: string;
  tone: "light" | "dark";
  visual: "dashboard" | "ai" | "placeholder";
}[] = [
  {
    id: "warranties",
    heading: "Keep every warranty under control.",
    copy: "Create warranties, connect them to the right vehicle and customer, generate documentation and keep track of what is active, expired or coming up for renewal.",
    bg: "bg-white",
    tone: "light",
    visual: "dashboard",
  },
  {
    id: "claims",
    heading: "Make claims easier to manage.",
    copy: "Keep claim information, evidence, repair details and customer updates together so your team always knows what is happening.",
    bg: "bg-vroom-mist",
    tone: "light",
    visual: "placeholder",
  },
  {
    id: "customers",
    heading: "One customer record. Everything connected.",
    copy: "See the customer’s vehicle, warranty, claims, documents and aftersales history in one place.",
    bg: "bg-white",
    tone: "light",
    visual: "placeholder",
  },
  {
    id: "vehicles",
    heading: "Keep the vehicle at the centre.",
    copy: "Connect the vehicle to the warranty, customer, claims and documents that follow it after the sale.",
    bg: "bg-vroom-mist",
    tone: "light",
    visual: "placeholder",
  },
  {
    id: "disputeiq",
    heading: "When things get complicated, know what to do next.",
    copy: "DisputeIQ provides AI-assisted guidance to help dealers organise the facts, understand the situation and prepare a clearer response.",
    bg: "bg-vroom-ink",
    tone: "dark",
    visual: "ai",
  },
];

function PlaceholderPanel({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`flex h-72 items-center justify-center rounded-2xl border ${
        dark
          ? "border-vroom-line bg-white/5"
          : "border-vroom-grey-300/70 bg-vroom-mist/50"
      }`}
    >
      <span
        className={`text-sm font-medium ${
          dark ? "text-white/20" : "text-vroom-grey-500"
        }`}
      >
        Product UI
      </span>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="THE PLATFORM"
        title="Everything you need for a stronger aftersales operation."
        description="VROOM brings the key parts of your aftersales operation together so your team can spend less time chasing information and more time looking after customers."
      />

      {/* Feature grid */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Built around what matters after the sale."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 60}>
                <div className="group rounded-2xl border border-vroom-grey-300/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-vroom-green/50 hover:shadow-[0_20px_40px_-24px_rgba(6,9,10,0.25)]">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-vroom-ink text-vroom-green transition-colors duration-300 group-hover:bg-vroom-green group-hover:text-vroom-ink">
                    <Icon name={feature.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-vroom-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-vroom-grey-700">
                    {feature.description}
                  </p>
                  <Link
                    href={`/features/${feature.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-vroom-ink hover:text-vroom-green-2 transition-colors"
                  >
                    Learn More
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Feature detail sections */}
      {DETAIL_SECTIONS.map((section, i) => {
        const dark = section.tone === "dark";
        const imageFirst = i % 2 === 1;
        return (
          <section
            key={section.id}
            id={section.id}
            className={`py-20 sm:py-28 ${section.bg}`}
          >
            <Container>
              <div
                className={`grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 ${
                  imageFirst ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal>
                  <div>
                    <h2
                      className={`text-balance text-3xl font-bold tracking-tight sm:text-4xl ${
                        dark ? "text-white" : "text-vroom-ink"
                      }`}
                    >
                      {section.heading}
                    </h2>
                    <p
                      className={`mt-5 max-w-md text-base leading-relaxed ${
                        dark ? "text-white/65" : "text-vroom-grey-700"
                      }`}
                    >
                      {section.copy}
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={120}>
                  <div>
                    {section.visual === "dashboard" && (
                      <LaptopFrame>
                        <DashboardMockup />
                      </LaptopFrame>
                    )}
                    {section.visual === "ai" && <AIAssistantMockup />}
                    {section.visual === "placeholder" && (
                      <PlaceholderPanel dark={dark} />
                    )}
                  </div>
                </Reveal>
              </div>
            </Container>
          </section>
        );
      })}

      <CTASection
        title="Everything after the sale. In one place."
        description="Join modern dealers who are simplifying aftersales."
      />
    </>
  );
}
