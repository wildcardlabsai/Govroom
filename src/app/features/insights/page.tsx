import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Insights & Reporting | VROOM",
  description:
    "Understand your aftersales performance with useful information and reporting. VROOM helps dealers make smarter decisions.",
  alternates: { canonical: "/features/insights" },
};

const CAPABILITIES = [
  {
    title: "Aftersales overview",
    description:
      "See a clear summary of your warranty, claims and aftersales activity in one dashboard.",
  },
  {
    title: "Warranty performance",
    description:
      "Understand how your warranties are performing — active cover, expiring warranties and renewal opportunities.",
  },
  {
    title: "Claims analysis",
    description:
      "Track claim volumes, resolution times and repair costs to identify patterns and manage spend.",
  },
  {
    title: "Customer activity",
    description:
      "See how customers are engaging with your aftersales — portal usage, claim submissions and more.",
  },
  {
    title: "Trend identification",
    description:
      "Spot trends in your aftersales data that help you make better business decisions.",
  },
  {
    title: "Exportable data",
    description:
      "Export your aftersales data when you need it for reporting or analysis.",
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="INSIGHTS"
        title="Understand your aftersales performance."
        description="Useful information and reporting so you can make smarter decisions about your aftersales operation."
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="The information you need, when you need it."
            description="VROOM gives you visibility over your aftersales operation so you can identify what is working and where to improve."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 60}>
                <div className="rounded-2xl border border-vroom-grey-300/70 bg-white p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-vroom-ink text-vroom-green">
                    <Icon name="chart" className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-vroom-ink">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-vroom-grey-700">{cap.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-vroom-mist py-20 sm:py-28">
        <Container className="max-w-3xl text-center">
          <SectionHeading
            title="Make decisions based on real data."
            description="VROOM turns your aftersales activity into useful information — so you can run a tighter, smarter operation."
            align="center"
          />
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Get Started
            </Button>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to understand your aftersales?"
        description="Join dealers who are using data to improve their operation."
      />
    </>
  );
}
