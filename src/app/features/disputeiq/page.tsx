import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "DisputeIQ | VROOM",
  description:
    "AI-assisted guidance for difficult aftersales situations. DisputeIQ helps dealers organise facts, understand the situation and prepare a clearer response.",
  alternates: { canonical: "/features/disputeiq" },
};

const CAPABILITIES = [
  {
    title: "Organise the facts",
    description:
      "DisputeIQ helps you pull together the key information from the warranty, claim and customer record into a clear summary.",
  },
  {
    title: "Understand the situation",
    description:
      "Get AI-assisted guidance to help you understand the context and identify what matters most.",
  },
  {
    title: "Prepare a response",
    description:
      "DisputeIQ helps you structure a clearer, more considered response when things get complicated.",
  },
  {
    title: "Connected to your data",
    description:
      "DisputeIQ works with the information already in VROOM — warranties, claims, customer history and documents.",
  },
  {
    title: "Built for dealers",
    description:
      "Designed specifically for the kinds of aftersales situations that UK car dealers deal with.",
  },
  {
    title: "Guidance, not decisions",
    description:
      "DisputeIQ provides guidance to help dealers organise information and understand their position. All decisions remain with the dealer.",
  },
];

export default function DisputeIQPage() {
  return (
    <>
      <PageHero
        eyebrow="DISPUTEIQ"
        title="When things get complicated, know what to do next."
        description="DisputeIQ provides AI-assisted guidance to help dealers organise the facts, understand the situation and prepare a clearer response."
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="AI-assisted guidance for difficult situations."
            description="When aftersales situations become complicated, DisputeIQ helps you think clearly and respond properly."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 60}>
                <div className="rounded-2xl border border-vroom-grey-300/70 bg-white p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-vroom-ink text-vroom-green">
                    <Icon name="disputeiq" className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-vroom-ink">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-vroom-grey-700">{cap.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-vroom-ink py-20 sm:py-28">
        <Container className="max-w-3xl text-center">
          <SectionHeading
            title="Guidance when you need it most."
            description="DisputeIQ does not replace professional advice. It helps dealers organise information, understand their position and respond with more clarity and confidence."
            align="center"
            tone="dark"
          />
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Get Started
            </Button>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to handle disputes with more confidence?"
        description="Join dealers who are using AI-assisted guidance for difficult situations."
      />
    </>
  );
}
