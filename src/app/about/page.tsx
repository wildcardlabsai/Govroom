import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "VROOM was built around real dealer aftersales problems. Learn about the approach behind our UK dealer aftersales software.",
  alternates: { canonical: "/about" },
};

const APPROACH = [
  {
    title: "Built around real dealer problems",
    description:
      "VROOM didn't start as a piece of software looking for a market. It started with the everyday reality of dealer aftersales — the spreadsheets, the missed follow-ups, the customer calls that could have been avoided.",
  },
  {
    title: "Designed for the motor trade",
    description:
      "We build for how dealers actually work, not how generic software assumes they work. That means language, workflows and priorities that make sense on a forecourt, not just in a boardroom.",
  },
  {
    title: "Less admin, more control",
    description:
      "Every feature in VROOM exists to remove a task, not add one. Less time spent managing aftersales means more time spent on customers and vehicles.",
  },
  {
    title: "A better experience for customers",
    description:
      "Aftersales is where trust is won or lost. VROOM helps dealers keep customers informed and confident — long after the sale is done.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About VROOM"
        title="Built for the people behind the dealership."
        description="VROOM exists because aftersales deserved better than spreadsheets, inboxes and guesswork. Here's the thinking behind it."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Aftersales is where dealers earn trust — or lose it."
            description="Every warranty, every claim and every customer conversation after the sale shapes how a dealership is remembered. VROOM was built to help dealers get that part right, without it taking over their day."
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-vroom-grey-700">
            <p>
              Too much of dealer aftersales still runs on spreadsheets, sticky notes and someone&apos;s
              memory of which customer called last week. It works, until it doesn&apos;t — until a
              claim gets missed, a warranty lapses unnoticed, or a customer is left chasing answers.
            </p>
            <p>
              VROOM brings the important parts of aftersales — warranties, claims, customers and
              documents — into one place that&apos;s actually built for the motor trade, not
              adapted from something else.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-vroom-mist py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Our Approach" title="What we believe about aftersales software." />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {APPROACH.map((item) => (
              <div key={item.title} className="rounded-2xl border border-vroom-grey-300/70 bg-white p-7">
                <h3 className="text-lg font-semibold text-vroom-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-vroom-grey-700">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Our Story" title="The team behind VROOM." />
          <div className="mt-10 rounded-2xl border border-dashed border-vroom-grey-300 bg-vroom-mist/60 p-10 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-vroom-grey-300 bg-white text-vroom-grey-500">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <circle cx="12" cy="8" r="3.4" />
                <path d="M5 20a7 7 0 0 1 14 0" />
              </svg>
            </div>
            <p className="text-sm font-medium text-vroom-grey-700">
              Founder and team photography, and the real story behind VROOM, will be added here.
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-vroom-grey-500">
              This space is reserved for genuine details about the people building VROOM — no
              placeholder claims are made in the meantime.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Come and see VROOM for yourself."
        description="Get started, or get in touch — we're happy to talk through how VROOM could work for your dealership."
      />
    </>
  );
}
