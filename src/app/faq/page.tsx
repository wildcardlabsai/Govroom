import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FAQ_CATEGORIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about VROOM dealer aftersales software — warranties, claims, customers, pricing and getting started.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered clearly."
        description="Everything you need to know about VROOM. Can't find what you're looking for? Get in touch and we'll help directly."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <div className="space-y-14">
            {FAQ_CATEGORIES.map((category) => (
              <div key={category.category}>
                <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-vroom-green-2">
                  {category.category}
                </h2>
                <FAQAccordion items={category.items} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Still have a question?"
        description="The VROOM team is happy to talk through anything not covered here."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Book a Demo"
        secondaryHref="/contact"
      />
    </>
  );
}
