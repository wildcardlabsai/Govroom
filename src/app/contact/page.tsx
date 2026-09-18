import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Book a Demo | VROOM",
  description:
    "See what VROOM could do for your dealership. Book a demo or get in touch.",
  alternates: { canonical: "/contact" },
};

const CONTACT_DETAILS = [
  {
    label: "Email",
    value: "matt@govroom.co.uk",
    href: "mailto:matt@govroom.co.uk",
  },
  {
    label: "Phone",
    value: "07377 324983",
    href: "tel:+4407377324983",
  },
  {
    label: "Website",
    value: "www.govroom.co.uk",
    href: "https://www.govroom.co.uk",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="LET'S TALK"
        title="See what VROOM could do for your dealership."
        description="Want to see the platform? Have a question? Or simply want to understand whether VROOM is right for your dealership? Let's talk."
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Left column */}
            <div>
              <Image
                src="/images/vroom-logo.png"
                alt="VROOM"
                width={140}
                height={40}
                className="h-auto w-[140px]"
              />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-vroom-grey-500">
                Dealer Warranties. Simplified.
              </p>

              <div className="mt-10 space-y-5">
                {CONTACT_DETAILS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 text-sm text-vroom-ink transition-colors hover:text-vroom-green-2"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-vroom-green">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-vroom-ink" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M5 12.5 9.5 17 19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-medium">{item.value}</span>
                  </a>
                ))}
              </div>

              <p className="mt-10 text-sm text-vroom-grey-700">
                We typically respond within 1 business day.
              </p>
            </div>

            {/* Right column */}
            <div>
              <h2 className="mb-6 text-xl font-semibold text-vroom-ink">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
