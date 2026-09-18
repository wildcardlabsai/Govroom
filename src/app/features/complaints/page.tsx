import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Complaints Management | VROOM",
  description:
    "Manage customer complaints through a clear process. VROOM helps dealers handle complaints properly and keep a complete record.",
  alternates: { canonical: "/features/complaints" },
};

const CAPABILITIES = [
  {
    title: "Log complaints clearly",
    description:
      "Record complaints with all the relevant detail so your team can respond properly.",
  },
  {
    title: "Track through stages",
    description:
      "Follow each complaint through a clear process from receipt to resolution.",
  },
  {
    title: "Attach evidence",
    description:
      "Keep photos, documents and correspondence attached to the complaint record.",
  },
  {
    title: "Linked records",
    description:
      "Complaints are connected to the relevant customer, vehicle and warranty — so context is always available.",
  },
  {
    title: "Complete audit trail",
    description:
      "Maintain a clear record of what happened, when it happened and how it was handled.",
  },
  {
    title: "Reduce risk",
    description:
      "A structured complaints process helps protect the dealership and improves the customer experience.",
  },
];

export default function ComplaintsPage() {
  return (
    <>
      <PageHero
        eyebrow="COMPLAINTS"
        title="Manage complaints through a clear process."
        description="When customers raise complaints, VROOM helps your team respond properly, keep a complete record and resolve issues efficiently."
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Handle complaints with confidence."
            description="VROOM gives your team a structured way to manage complaints — from initial receipt through to resolution."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 60}>
                <div className="rounded-2xl border border-vroom-grey-300/70 bg-white p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-vroom-ink text-vroom-green">
                    <Icon name="complaint" className="h-5 w-5" />
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
            title="Protect your dealership with a proper process."
            description="A structured approach to complaints reduces risk, improves outcomes and gives your team confidence when handling difficult situations."
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
        title="Ready to improve how you handle complaints?"
        description="Join dealers who are managing complaints properly."
      />
    </>
  );
}
