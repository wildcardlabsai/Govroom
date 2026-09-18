import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Vehicle Management | VROOM",
  description:
    "Keep vehicle information connected to everything that happens after the sale. VROOM links vehicles to warranties, customers and claims.",
  alternates: { canonical: "/features/vehicles" },
};

const CAPABILITIES = [
  {
    title: "Vehicle records",
    description:
      "Store key vehicle information — make, model, registration, mileage — and keep it up to date.",
  },
  {
    title: "Linked to warranties",
    description:
      "Each vehicle is connected to its warranty, so cover details are always one click away.",
  },
  {
    title: "Linked to customers",
    description:
      "See who owns the vehicle and access their full aftersales profile from the vehicle record.",
  },
  {
    title: "Claim history",
    description:
      "View every claim made against a vehicle in one timeline, so you can see the full picture.",
  },
  {
    title: "Document storage",
    description:
      "Attach MOT records, service history and other documents directly to the vehicle.",
  },
  {
    title: "Multi-site visibility",
    description:
      "Vehicles are visible across your dealership group where needed.",
  },
];

export default function VehiclesPage() {
  return (
    <>
      <PageHero
        eyebrow="VEHICLES"
        title="Keep the vehicle at the centre."
        description="Connect the vehicle to the warranty, customer, claims and documents that follow it after the sale."
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Everything about the vehicle, in one place."
            description="VROOM keeps vehicle records connected to the aftersales information that matters — warranties, claims, customers and documents."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 60}>
                <div className="rounded-2xl border border-vroom-grey-300/70 bg-white p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-vroom-ink text-vroom-green">
                    <Icon name="car" className="h-5 w-5" />
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
            title="No more searching for vehicle information."
            description="VROOM links everything to the vehicle — so when a customer calls about their car, your team has the full picture in seconds."
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
        title="Ready to organise your vehicle records?"
        description="Join dealers who are keeping vehicle information connected."
      />
    </>
  );
}
