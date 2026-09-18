import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Icon } from "@/components/ui/Icon";
import type { IconKey } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, FAQs and insight for UK car dealers on warranty management, claims handling and running a stronger aftersales operation.",
  alternates: { canonical: "/resources" },
};

const RESOURCE_CARDS: { icon: IconKey; title: string; description: string; href: string }[] = [
  {
    icon: "document",
    title: "Blog",
    description: "News, opinion and practical thinking on dealer aftersales.",
    href: "/blog",
  },
  {
    icon: "shield",
    title: "Dealer Guides",
    description: "Step-by-step guides on warranties, claims and customer experience.",
    href: "/resources#guides",
  },
  {
    icon: "chart",
    title: "Aftersales Resources",
    description: "Templates, checklists and benchmarks for your aftersales operation.",
    href: "/resources#guides",
  },
  {
    icon: "clipboard",
    title: "FAQs",
    description: "Common questions about VROOM, answered clearly.",
    href: "/faq",
  },
];

const GUIDES = [
  {
    title: "A dealer's guide to warranty management",
    description: "The essentials of setting up and running warranty cover that actually protects your dealership.",
  },
  {
    title: "Handling claims without losing customer trust",
    description: "A practical framework for logging, assessing and resolving claims fairly and quickly.",
  },
  {
    title: "Moving aftersales off spreadsheets",
    description: "What to look for when your dealership outgrows manual tracking.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Practical aftersales knowledge for UK dealers."
        description="Guides, articles and answers to help you run a stronger, simpler aftersales operation."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {RESOURCE_CARDS.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-2xl border border-vroom-grey-300/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-vroom-green/50 hover:shadow-[0_20px_40px_-24px_rgba(6,9,10,0.25)]"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-vroom-ink text-vroom-green transition-colors duration-300 group-hover:bg-vroom-green group-hover:text-vroom-ink">
                  <Icon name={card.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-vroom-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-vroom-grey-700">{card.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="guides" className="bg-vroom-mist py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Dealer Guides" title="Guides worth bookmarking." />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {GUIDES.map((guide) => (
              <div key={guide.title} className="rounded-2xl border border-vroom-grey-300/70 bg-white p-7">
                <span className="mb-4 inline-flex items-center rounded-full border border-vroom-grey-300 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-vroom-grey-500">
                  Guide
                </span>
                <h3 className="text-base font-semibold leading-snug text-vroom-ink">{guide.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-vroom-grey-700">{guide.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-vroom-grey-500">
            Full guide content is coming soon — this section is structured ready for it.
          </p>
        </Container>
      </section>

      <CTASection
        title="Have a question we haven't covered?"
        description="Get in touch and the VROOM team will help directly."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View FAQs"
        secondaryHref="/faq"
      />
    </>
  );
}
