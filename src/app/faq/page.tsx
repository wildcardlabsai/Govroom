import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { FAQClientSection } from "./FAQClientSection";

export const metadata: Metadata = {
  title: "FAQ | VROOM",
  description:
    "Everything you need to know about VROOM. Questions, answered.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered."
        description="Everything you need to know about VROOM."
      />

      <FAQClientSection />

      <section className="bg-vroom-mist py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-vroom-ink sm:text-3xl">
            Still have a question?
          </h2>
          <p className="mt-3 text-base text-vroom-grey-700">
            We&apos;re here to help.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
            <Button href="/contact" variant="secondary">
              Book a Demo
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
