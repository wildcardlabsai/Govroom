import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with VROOM to see our dealer aftersales software in action, ask a question, or book a demo.",
  alternates: { canonical: "/contact" },
};

const CONTACT_DETAILS = [
  { label: "Email", value: "hello@govroom.co.uk", href: "mailto:hello@govroom.co.uk" },
  { label: "Phone", value: "+44 (0)20 0000 0000", href: "tel:+442000000000" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk aftersales."
        description="Have a question, want to see VROOM in action, or just want to talk through how it could fit your dealership? We'd like to hear from you."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <h2 className="text-xl font-semibold text-vroom-ink">Get in touch</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-vroom-grey-700">
                Fill in the form and a member of the VROOM team will get back to you — or reach us
                directly using the details below.
              </p>

              <div className="mt-8 space-y-4">
                {CONTACT_DETAILS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between rounded-xl border border-vroom-grey-300/70 px-5 py-4 transition-colors hover:border-vroom-green/50"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-vroom-grey-500">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-vroom-ink">{item.value}</p>
                    </div>
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-vroom-grey-400" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-vroom-grey-300/70 bg-vroom-mist p-6">
                <p className="text-sm font-semibold text-vroom-ink">Prefer to see it live?</p>
                <p className="mt-1 text-sm text-vroom-grey-700">
                  Book a short demo and we&apos;ll walk you through VROOM.
                </p>
                <Button href="/contact" variant="secondary" className="mt-4">
                  Book a Demo
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-vroom-grey-300/70 bg-white p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
