import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import type { IconKey } from "@/lib/content";

export const metadata: Metadata = {
  title: "Customers | VROOM",
  description:
    "See how VROOM helps dealerships bring their aftersales operation together.",
  alternates: { canonical: "/customers" },
};

const CASE_STUDIES = [
  { id: 1, name: "Dealership Name" },
  { id: 2, name: "Dealership Name" },
  { id: 3, name: "Dealership Name" },
];

const BENEFITS: { icon: IconKey; title: string; description: string }[] = [
  {
    icon: "shield",
    title: "Warranty management",
    description:
      "Create, track and manage warranties from one organised place.",
  },
  {
    icon: "clipboard",
    title: "Claims handling",
    description:
      "Log, progress and resolve claims without the back-and-forth.",
  },
  {
    icon: "users",
    title: "Customer portal",
    description:
      "Give customers visibility of their warranty and claims status.",
  },
  {
    icon: "document",
    title: "Document storage",
    description:
      "Keep every document stored against the right customer, vehicle or claim.",
  },
  {
    icon: "chart",
    title: "Insights and reporting",
    description:
      "See how your aftersales operation is performing with real data.",
  },
  {
    icon: "disputeiq",
    title: "DisputeIQ guidance",
    description:
      "Get structured guidance when handling complaints and disputes.",
  },
];

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="CUSTOMERS"
        title="Built for dealers. Built around real aftersales."
        description="See how VROOM helps dealerships bring their aftersales operation together."
      />

      {/* Case Studies */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Case Studies"
            title="Real dealerships. Real aftersales."
            description="Genuine case studies will be published here as they become available."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((study) => (
              <Reveal key={study.id}>
                <div className="rounded-2xl border border-vroom-grey-300/70 p-8">
                  <p className="text-xs font-semibold uppercase tracking-wide text-vroom-green">
                    Case Study
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-vroom-ink">
                    {study.name}
                  </h3>

                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-vroom-ink">
                        Challenge
                      </p>
                      <p className="mt-1 text-sm italic leading-relaxed text-vroom-grey-700">
                        Genuine case study content will be added when available.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-vroom-ink">
                        Before VROOM
                      </p>
                      <p className="mt-1 text-sm italic leading-relaxed text-vroom-grey-700">
                        Genuine case study content will be added when available.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-vroom-ink">
                        How VROOM Helped
                      </p>
                      <p className="mt-1 text-sm italic leading-relaxed text-vroom-grey-700">
                        Genuine case study content will be added when available.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-vroom-ink">
                        Results
                      </p>
                      <p className="mt-1 text-sm italic leading-relaxed text-vroom-grey-700">
                        Genuine case study content will be added when available.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What dealers get */}
      <section className="bg-vroom-mist py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="THE VROOM DIFFERENCE"
            title="What every dealer gets."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 60}>
                <div className="rounded-2xl border border-vroom-grey-300/70 bg-white p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-vroom-green/10 text-vroom-green">
                    <Icon name={benefit.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-vroom-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-vroom-grey-700">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="A better way to manage what happens next."
        description="See how VROOM can fit into your dealership."
      />
    </>
  );
}
