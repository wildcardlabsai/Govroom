import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Warranty Management | VROOM",
  description:
    "Create, manage and track dealer warranties from one place. VROOM keeps everything organised so your team always knows where things stand.",
  alternates: { canonical: "/features/warranties" },
};

const CAPABILITIES = [
  {
    title: "Create warranties quickly",
    description:
      "Add a warranty in minutes — link it to the customer, vehicle and the right cover type.",
  },
  {
    title: "Track active and expired cover",
    description:
      "See at a glance which warranties are active, expired or coming up for renewal.",
  },
  {
    title: "Generate documentation",
    description:
      "Produce warranty certificates and documents that can be shared with the customer.",
  },
  {
    title: "Connect to claims",
    description:
      "When a claim comes in, the warranty is already linked — no searching or cross-referencing.",
  },
  {
    title: "Customer portal access",
    description:
      "Customers can view their warranty details through the VROOM customer portal.",
  },
  {
    title: "Multi-site support",
    description:
      "Manage warranties across multiple dealerships from one platform.",
  },
];

export default function WarrantiesPage() {
  return (
    <>
      <PageHero
        eyebrow="WARRANTIES"
        title="Keep every warranty under control."
        description="Create warranties, connect them to the right vehicle and customer, generate documentation and keep track of what is active, expired or coming up for renewal."
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Everything you need to manage warranties."
            description="VROOM makes it simple to create, track and manage warranties without spreadsheets or manual processes."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 60}>
                <div className="rounded-2xl border border-vroom-grey-300/70 bg-white p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-vroom-ink text-vroom-green">
                    <Icon name="shield" className="h-5 w-5" />
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
            title="No more spreadsheets. No more guesswork."
            description="VROOM replaces scattered warranty records with a single, organised system. Your team always knows what is covered, what has expired and what needs attention."
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
        title="Ready to simplify warranty management?"
        description="Join dealers who are managing warranties in one place."
      />
    </>
  );
}
