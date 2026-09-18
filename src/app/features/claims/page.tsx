import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Claims Management | VROOM",
  description:
    "Handle warranty claims quickly and keep customers informed. VROOM keeps claim information, evidence and updates together.",
  alternates: { canonical: "/features/claims" },
};

const CAPABILITIES = [
  {
    title: "Log claims clearly",
    description:
      "Record what happened, when it happened and what the customer is reporting — all in one place.",
  },
  {
    title: "Track claim status",
    description:
      "Follow each claim through clear stages so your team and your customer always know where things stand.",
  },
  {
    title: "Attach evidence",
    description:
      "Upload photos, documents and other evidence directly against the claim for a complete record.",
  },
  {
    title: "Assign repairers",
    description:
      "Allocate claims to repairers so your team knows who is handling the work.",
  },
  {
    title: "Record repair costs",
    description:
      "Track costs against each claim to understand your aftersales spend.",
  },
  {
    title: "Customer visibility",
    description:
      "Customers can submit claims and check progress through the VROOM customer portal.",
  },
];

export default function ClaimsPage() {
  return (
    <>
      <PageHero
        eyebrow="CLAIMS"
        title="Make claims easier to manage."
        description="Keep claim information, evidence, repair details and customer updates together so your team always knows what is happening."
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="A clearer way to handle claims."
            description="From the moment a claim is logged to the moment it is resolved, VROOM keeps everything in one place."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 60}>
                <div className="rounded-2xl border border-vroom-grey-300/70 bg-white p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-vroom-ink text-vroom-green">
                    <Icon name="clipboard" className="h-5 w-5" />
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
            title="Stop chasing claim updates."
            description="VROOM gives your team a single view of every claim — no more digging through emails or spreadsheets to find out what is happening."
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
        title="Ready to simplify claims management?"
        description="Join dealers who are handling claims more efficiently."
      />
    </>
  );
}
