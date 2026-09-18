import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Document Management | VROOM",
  description:
    "Store and access important aftersales documents when your team needs them. VROOM keeps documents organised and connected.",
  alternates: { canonical: "/features/documents" },
};

const CAPABILITIES = [
  {
    title: "Centralised storage",
    description:
      "Keep warranty documents, claim evidence, customer correspondence and vehicle records in one place.",
  },
  {
    title: "Linked to records",
    description:
      "Documents are connected to the warranty, claim, customer or vehicle they relate to — no more searching through folders.",
  },
  {
    title: "Generate documents",
    description:
      "Produce warranty certificates and other documents directly from VROOM.",
  },
  {
    title: "Customer access",
    description:
      "Customers can view and download their documents through the VROOM customer portal.",
  },
  {
    title: "Upload from anywhere",
    description:
      "Your team and customers can upload documents directly into VROOM.",
  },
  {
    title: "Secure and organised",
    description:
      "Documents are stored securely and organised by the record they belong to.",
  },
];

export default function DocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="DOCUMENTS"
        title="Store and access documents when you need them."
        description="Keep important aftersales documents organised, connected and accessible to the people who need them."
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="No more searching for documents."
            description="VROOM keeps documents connected to the warranty, claim, customer or vehicle they belong to."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 60}>
                <div className="rounded-2xl border border-vroom-grey-300/70 bg-white p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-vroom-ink text-vroom-green">
                    <Icon name="document" className="h-5 w-5" />
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
            title="Documents where they should be."
            description="Stop digging through email attachments and shared drives. VROOM keeps your aftersales documents in one organised system."
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
        title="Ready to organise your documents?"
        description="Join dealers who are keeping important documents in one place."
      />
    </>
  );
}
