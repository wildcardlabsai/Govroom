import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "VROOM was built to make life after the sale simpler for independent motor dealers. Learn about the approach behind our UK dealer aftersales software.",
  alternates: { canonical: "/about" },
};

const PRINCIPLES = [
  {
    number: "01",
    title: "SIMPLE",
    description: "No unnecessary complexity.",
  },
  {
    number: "02",
    title: "PRACTICAL",
    description: "Built around the way dealers actually work.",
  },
  {
    number: "03",
    title: "CONNECTED",
    description:
      "Your information should work together, not live in separate places.",
  },
  {
    number: "04",
    title: "USEFUL",
    description: "Technology should save time and make decisions easier.",
  },
];

const BUILT_FOR = [
  {
    title: "Independent Dealers",
    description:
      "Keep warranties, claims and customers organised without unnecessary complexity.",
  },
  {
    title: "Growing Dealerships",
    description:
      "Structure that scales with your aftersales activity without creating more admin.",
  },
  {
    title: "Dealer Groups",
    description:
      "A consistent way to manage aftersales across multiple sites.",
  },
  {
    title: "Multi-site Operations",
    description:
      "A consistent aftersales process across every location.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT VROOM"
        title="Aftersales shouldn't be complicated."
        description="VROOM was built to make life after the sale simpler for independent motor dealers. From warranties and claims to customers, documents and complaints, VROOM brings the important parts of aftersales together in one place."
      />

      {/* Our Story */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <SectionHeading title="Built from real motor trade experience." />
                <div className="mt-8 space-y-5 text-base leading-relaxed text-vroom-grey-700">
                  <p>
                    Aftersales can quickly become difficult to manage when information is
                    spread across spreadsheets, emails, documents, phone calls and separate
                    systems.
                  </p>

                  <ul className="space-y-3 pl-0">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-vroom-green" aria-hidden="true" />
                      Warranties live somewhere.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-vroom-green" aria-hidden="true" />
                      Claims live somewhere else.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-vroom-green" aria-hidden="true" />
                      Customer conversations get buried.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-vroom-green" aria-hidden="true" />
                      Important documents become difficult to find.
                    </li>
                  </ul>

                  <p>
                    And when something goes wrong, dealers need to know exactly what happened
                    and what to do next.
                  </p>
                  <p className="font-semibold text-vroom-ink">
                    VROOM brings it together.
                  </p>
                  <p>
                    One place for the information that matters after the sale.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-mobile.png"
                  alt="VROOM on mobile"
                  width={600}
                  height={600}
                  className="w-full rounded-2xl"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="bg-vroom-mist py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="The software should fit the dealer."
            description="Our principles guide everything we do."
          />
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.number} delay={i * 80}>
                <div>
                  <p className="text-2xl font-bold text-vroom-green">{p.number}</p>
                  <h3 className="mt-3 text-sm font-semibold uppercase tracking-wide text-vroom-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-vroom-grey-700">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Built for dealers */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Built for dealers who care about what happens after the sale."
            description="Whether you're selling a handful of cars each month or running a growing dealership, VROOM gives your team a clearer way to manage aftersales."
          />
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
            {BUILT_FOR.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div>
                  <h3 className="text-base font-semibold text-vroom-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-vroom-grey-700">
                    {item.description}
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
