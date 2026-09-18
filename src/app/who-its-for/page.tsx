import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FeaturePanel } from "@/components/product/FeaturePanel";

export const metadata: Metadata = {
  title: "Who It's For",
  description:
    "VROOM fits independent dealers, growing motor businesses and dealer groups. See how dealer aftersales software adapts to your operation.",
  alternates: { canonical: "/who-its-for" },
};

const SEGMENTS = [
  {
    id: "independent",
    eyebrow: "Independent Dealers",
    title: "Run aftersales without a back office.",
    description:
      "Independent dealers rarely have a dedicated aftersales team. VROOM gives you a simple, organised way to manage warranties and claims — without adding headcount or admin.",
    points: [
      "Set up warranties in minutes, not hours",
      "Handle claims without chasing paperwork",
      "Keep customer trust with clear communication",
      "No need for extra software or spreadsheets",
    ],
    panel: {
      icon: "shield" as const,
      title: "Independent Dealership",
      rows: [
        { label: "Active warranties", value: "48", tone: "green" as const },
        { label: "Team size", value: "1–5 people" },
        { label: "Admin time saved", value: "Hours per week", tone: "green" as const },
      ],
    },
  },
  {
    id: "growing",
    eyebrow: "Growing Motor Businesses",
    title: "Scale without losing control of aftersales.",
    description:
      "As stock and staff grow, spreadsheets and inboxes stop working. VROOM scales with your business so warranties, claims and customer records stay organised — however fast you're growing.",
    points: [
      "Bring your whole team onto one system",
      "Keep visibility as claim volumes increase",
      "Standardise how your team handles aftersales",
      "Get real reporting on aftersales performance",
    ],
    panel: {
      icon: "trend" as const,
      title: "Growing Business",
      rows: [
        { label: "Active warranties", value: "310", tone: "green" as const },
        { label: "Claims this month", value: "22" },
        { label: "Team size", value: "6–20 people" },
      ],
    },
  },
  {
    id: "groups",
    eyebrow: "Dealer Groups",
    title: "Consistent aftersales, across every site.",
    description:
      "Dealer groups need every site working the same way. VROOM gives group leadership visibility across warranties, claims and customer records — while keeping each site's day-to-day simple.",
    points: [
      "Group-level reporting across all sites",
      "Consistent processes wherever a customer buys",
      "Spot performance differences between sites",
      "Give every site the same tools and support",
    ],
    panel: {
      icon: "users" as const,
      title: "Dealer Group",
      rows: [
        { label: "Sites connected", value: "12", tone: "green" as const },
        { label: "Active warranties", value: "2,140" },
        { label: "Group-wide claims", value: "184 this year" },
      ],
    },
  },
];

export default function WhoItsForPage() {
  return (
    <>
      <PageHero
        eyebrow="Who It's For"
        title="Built for dealers of every size."
        description="VROOM is designed to fit how you actually work — whether you're an independent dealer, a growing business, or a multi-site dealer group."
      />

      {SEGMENTS.map((segment, i) => {
        const dark = i % 2 === 1;
        return (
          <section
            key={segment.id}
            id={segment.id}
            className={`py-20 sm:py-24 ${dark ? "bg-vroom-navy-2" : "bg-white"}`}
          >
            <Container>
              <div
                className={`grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <Badge tone={dark ? "dark" : "light"} className="mb-5">
                    {segment.eyebrow}
                  </Badge>
                  <h2 className={`text-balance text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-vroom-ink"}`}>
                    {segment.title}
                  </h2>
                  <p className={`mt-5 max-w-md text-base leading-relaxed ${dark ? "text-white/65" : "text-vroom-grey-700"}`}>
                    {segment.description}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {segment.points.map((point) => (
                      <li key={point} className={`flex items-start gap-3 text-sm sm:text-base ${dark ? "text-white/75" : "text-vroom-grey-700"}`}>
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vroom-green text-vroom-ink">
                          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5}>
                            <path d="M5 12.5 9.5 17 19 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <FeaturePanel icon={segment.panel.icon} title={segment.panel.title} rows={segment.panel.rows} />
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <section className="bg-vroom-mist py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Not Sure Where You Fit?"
            title="Aftersales looks different at every dealership."
            description="Whatever size your operation, VROOM is built to adapt to it — talk to us and we'll show you how it fits yours."
            align="center"
            className="mx-auto"
          />
        </Container>
      </section>

      <CTASection
        title="Find the right fit for your dealership."
        description="Get started with VROOM, or book a demo and we'll talk through your setup."
      />
    </>
  );
}
