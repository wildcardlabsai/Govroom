import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Resources | VROOM",
  description: "Useful information for modern motor dealers.",
  alternates: { canonical: "/resources" },
};

const RESOURCES = [
  {
    title: "How It Works",
    description: "See how VROOM takes your dealership from sale to resolution.",
    href: "/how-it-works",
  },
  {
    title: "FAQ",
    description: "Common questions about VROOM, answered.",
    href: "/faq",
  },
  {
    title: "Blog",
    description: "News, guides and insight for motor dealers.",
    href: "/blog",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="RESOURCES"
        title="Useful information for modern motor dealers."
        description="Practical guides and information to help dealers manage what happens after the sale."
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {RESOURCES.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group rounded-2xl overflow-hidden border border-vroom-grey-300/70 transition-all duration-300 hover:-translate-y-1 hover:border-vroom-green/50 hover:shadow-[0_20px_40px_-24px_rgba(6,9,10,0.25)]"
              >
                <div className="h-2 bg-vroom-green" />
                <div className="p-8">
                  <h3 className="text-xl font-bold text-vroom-ink">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-sm text-vroom-grey-700">
                    {resource.description}
                  </p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-vroom-green">
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Everything after the sale. In one place."
        description="See how VROOM can help your dealership."
      />
    </>
  );
}
