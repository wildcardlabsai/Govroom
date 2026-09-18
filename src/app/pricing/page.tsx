import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for VROOM dealer aftersales software. Placeholder plans shown — get in touch for pricing tailored to your dealership.",
  alternates: { canonical: "/pricing" },
};

const PLANS = [
  {
    name: "Starter",
    price: "£POA",
    audience: "Independent dealers getting aftersales organised.",
    features: [
      "Warranty management",
      "Claims tracking",
      "Customer records",
      "Document storage",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "£POA",
    audience: "Growing dealerships that need more visibility.",
    features: [
      "Everything in Starter",
      "Aftersales insights & reporting",
      "Customer self-service portal",
      "AI assistance",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Group",
    price: "£POA",
    audience: "Multi-site dealer groups needing consistency.",
    features: [
      "Everything in Growth",
      "Multi-site management",
      "Group-level reporting",
      "Dedicated account manager",
      "Onboarding support",
    ],
    featured: false,
  },
];

const PRICING_FAQ = [
  {
    q: "Is this pricing final?",
    a: "The figures shown here are placeholders. VROOM pricing is confirmed based on your dealership's size and needs — get in touch and we'll put together a plan that fits.",
  },
  {
    q: "Do I need to sign a long contract?",
    a: "We aim to keep commercial terms straightforward for dealers. Full details are confirmed when you speak with the VROOM team.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. As your dealership grows, your VROOM plan can grow with it.",
  },
  {
    q: "Is support included?",
    a: "Yes, every VROOM plan includes support to help your team get the most from the platform.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Straightforward pricing for dealer aftersales."
        description="Plans built around the size of your dealership. Figures below are placeholders — get in touch for a plan tailored to your business."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl border p-8 ${
                  plan.featured
                    ? "border-vroom-green bg-vroom-ink text-white shadow-[0_30px_60px_-30px_rgba(6,9,10,0.4)] md:-translate-y-3"
                    : "border-vroom-grey-300/70 bg-white"
                }`}
              >
                {plan.featured && (
                  <span className="mb-4 inline-flex w-fit items-center rounded-full bg-vroom-green px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-vroom-ink">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-lg font-semibold ${plan.featured ? "text-white" : "text-vroom-ink"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-sm ${plan.featured ? "text-white/60" : "text-vroom-grey-500"}`}>
                  {plan.audience}
                </p>
                <p className={`mt-6 text-4xl font-bold tracking-tight ${plan.featured ? "text-white" : "text-vroom-ink"}`}>
                  {plan.price}
                  <span className={`ml-2 text-sm font-medium ${plan.featured ? "text-white/50" : "text-vroom-grey-500"}`}>
                    /month, placeholder
                  </span>
                </p>
                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-3 text-sm ${
                        plan.featured ? "text-white/80" : "text-vroom-grey-700"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.featured ? "bg-vroom-green text-vroom-ink" : "bg-vroom-mist text-vroom-ink"
                        }`}
                      >
                        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5}>
                          <path d="M5 12.5 9.5 17 19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={plan.featured ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-vroom-grey-500">
            All prices shown are placeholders for illustration only. Contact us for a real quote.
          </p>
        </Container>
      </section>

      <section className="bg-vroom-mist py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="What's Included" title="Every plan is built around real aftersales work." align="center" className="mx-auto" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { title: "No hidden admin fees", desc: "Transparent pricing with no surprise charges buried in the small print." },
              { title: "Onboarding support", desc: "The VROOM team helps get your data and team set up properly from day one." },
              { title: "Support when you need it", desc: "Real support from people who understand dealer aftersales, not just software." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-vroom-grey-300/70 bg-white p-6">
                <h3 className="text-base font-semibold text-vroom-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-vroom-grey-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Pricing questions, answered." />
          <div className="mt-10">
            <FAQAccordion items={PRICING_FAQ} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Get pricing built around your dealership."
        description="Tell us a bit about your business and we'll put together a plan that fits."
        primaryLabel="Get Started"
        secondaryLabel="Talk to Us"
      />
    </>
  );
}
