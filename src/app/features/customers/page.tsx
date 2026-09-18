import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Customer Management | VROOM",
  description:
    "Keep complete customer information and aftersales history together in one place with VROOM.",
  alternates: { canonical: "/features/customers" },
};

const CAPABILITIES = [
  {
    title: "Complete customer records",
    description:
      "See the customer's vehicle, warranty, claims, documents and aftersales history in one place.",
  },
  {
    title: "Customer portal",
    description:
      "Give customers access to view their warranty, track claims and upload documents through a self-service portal.",
  },
  {
    title: "Communication history",
    description:
      "Keep a record of interactions so your team always has context when speaking to a customer.",
  },
  {
    title: "Linked vehicles",
    description:
      "Customers are connected to their vehicles, so everything flows through naturally.",
  },
  {
    title: "Document access",
    description:
      "Customers can access their important documents through the portal without needing to call your team.",
  },
  {
    title: "Multi-vehicle support",
    description:
      "Customers who buy more than one vehicle have all their aftersales information in one profile.",
  },
];

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="CUSTOMERS"
        title="One customer record. Everything connected."
        description="See the customer's vehicle, warranty, claims, documents and aftersales history in one place."
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Know your customers better."
            description="VROOM gives your team a complete view of each customer's aftersales journey — no searching, no guessing."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 60}>
                <div className="rounded-2xl border border-vroom-grey-300/70 bg-white p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-vroom-ink text-vroom-green">
                    <Icon name="users" className="h-5 w-5" />
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
            title="Give customers the experience they expect."
            description="The VROOM customer portal lets customers view their warranty, check claim progress and access documents — without calling your team."
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
        title="Ready to improve your customer experience?"
        description="Join dealers who are giving customers a better aftersales experience."
      />
    </>
  );
}
