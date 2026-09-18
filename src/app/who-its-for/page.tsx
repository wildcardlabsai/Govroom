import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Who It's For | VROOM",
  description:
    "After-sales software built around the way dealers actually work.",
  alternates: { canonical: "/who-its-for" },
};

const SEGMENTS = [
  {
    id: "independent",
    heading: "Independent Dealers",
    body: "Keep warranties, claims, customers and documents organised without unnecessary complexity.",
    bullets: [
      "Log warranties and claims in one place",
      "Keep a clear record for every vehicle sold",
      "Stay on top of customer communication",
      "No spreadsheets, no loose paperwork",
    ],
    bg: "bg-white",
  },
  {
    id: "growing",
    heading: "Growing Dealerships",
    body: "As the business grows, VROOM provides the structure to manage more aftersales activity without creating more admin.",
    bullets: [
      "Bring your team onto a single system",
      "Manage increasing claim volumes with ease",
      "Standardise processes as you scale",
      "Real reporting on aftersales performance",
    ],
    bg: "bg-vroom-mist",
  },
  {
    id: "groups",
    heading: "Dealer Groups",
    body: "Give multiple sites a consistent way to manage aftersales while keeping dealer information appropriately separated.",
    bullets: [
      "Group-level visibility across every site",
      "Consistent processes wherever a customer buys",
      "Spot performance differences between locations",
      "Each site stays simple day-to-day",
    ],
    bg: "bg-white",
  },
  {
    id: "multi-site",
    heading: "Multi-Site Operations",
    body: "Create a consistent aftersales process across locations.",
    bullets: [
      "Unified view of warranties and claims",
      "Shared standards, separated data",
      "Onboard new sites quickly",
      "Central reporting with local control",
    ],
    bg: "bg-vroom-mist",
  },
];

export default function WhoItsForPage() {
  return (
    <>
      <PageHero
        eyebrow="BUILT FOR DEALERS"
        title="After-sales software built around the way dealers actually work."
        description="Whether you're an independent dealer, growing operation or multi-site group, VROOM gives your team a clearer way to manage what happens after the sale."
      />

      {SEGMENTS.map((segment, i) => (
        <section
          key={segment.id}
          id={segment.id}
          className={`${segment.bg} py-20 sm:py-28`}
        >
          <Container>
            <div
              className={`grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-vroom-ink sm:text-4xl">
                  {segment.heading}
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-vroom-grey-700">
                  {segment.body}
                </p>
                <ul className="mt-7 space-y-3">
                  {segment.bullets.map((point) => (
                    <li
                      key={point}
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
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex h-64 items-center justify-center rounded-2xl border border-vroom-grey-300/70 bg-white">
                <span className="text-sm text-vroom-grey-500">Product UI</span>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <CTASection
        title="A better way to manage what happens next."
        description="See how VROOM can fit into your dealership."
      />
    </>
  );
}
