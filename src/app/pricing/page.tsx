import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Pricing | VROOM",
  description:
    "Simple pricing. No unnecessary complexity. VROOM gives dealers the tools they need.",
  alternates: { canonical: "/pricing" },
};

const FEATURES = [
  "Warranty management",
  "Claims",
  "Customers",
  "Vehicles",
  "Documents",
  "Complaints",
  "Insights & reporting",
  "DisputeIQ",
  "Customer portal",
  "Regular updates",
  "Friendly support",
  "Grows with your business",
];

const PRICING_FAQ = [
  {
    q: "Can I cancel at any time?",
    a: "Yes. We aim to keep things straightforward for dealers.",
  },
  {
    q: "Is there a contract?",
    a: "We keep commitments simple. Full details are confirmed when you speak with the VROOM team.",
  },
  {
    q: "Can I add more users?",
    a: "Yes. VROOM can grow with your team.",
  },
  {
    q: "Can I use VROOM across multiple dealerships?",
    a: "Yes. VROOM supports multi-site operations.",
  },
  {
    q: "Can my customers access their information?",
    a: "Yes. The VROOM customer portal gives customers access to their warranty, claims and documents.",
  },
  {
    q: "Can I import existing warranty information?",
    a: "Yes. The VROOM team will help you get set up with your existing data.",
  },
  {
    q: "Does VROOM integrate with vehicle data?",
    a: "VROOM is focused on aftersales management. Integration options are discussed during setup.",
  },
  {
    q: "Is VROOM a DMS?",
    a: "No. VROOM focuses specifically on dealer aftersales rather than attempting to replace a full dealership management system.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="PRICING"
        title="Simple pricing. No unnecessary complexity."
        description="VROOM is built to provide the tools dealers need without turning aftersales into another expensive system."
      />

      {/* Main pricing card */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl rounded-2xl border border-vroom-line bg-vroom-navy p-10">
            <Image
              src="/images/vroom-logo.png"
              alt="VROOM"
              width={100}
              height={28}
              className="h-auto w-[100px] brightness-0 invert"
            />
            <p className="mt-5 text-lg font-semibold text-white">
              Everything you need to manage your aftersales.
            </p>

            <ul className="mt-8 space-y-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vroom-green text-vroom-ink">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M5 12.5 9.5 17 19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-3">
              <Button href="/contact" variant="primary" className="w-full">
                Get Started
              </Button>
              <Button href="/contact" variant="outline-light" className="w-full">
                Book a Demo
              </Button>
            </div>

            <p className="mt-6 text-center text-xs text-white/50">
              No long contracts. Built for UK dealers.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing FAQ */}
      <section className="bg-vroom-mist py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Common questions."
            description="Here are some of the questions we get asked about pricing."
          />
          <div className="mt-10">
            <FAQAccordion items={PRICING_FAQ} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Take control of your aftersales."
        description="Join modern dealers who are simplifying what happens after the sale."
      />
    </>
  );
}
