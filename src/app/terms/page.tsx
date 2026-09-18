import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service | VROOM",
  description: "Terms and conditions for using VROOM.",
  alternates: { canonical: "/terms" },
};

const SECTIONS = [
  {
    heading: "Agreement to Terms",
    body: "By accessing or using the VROOM platform, you agree to be bound by these terms of service and all applicable laws and regulations.",
  },
  {
    heading: "Use of Service",
    body: "VROOM is provided for use by motor dealers to manage aftersales activity. You agree to use the service only for its intended purpose and in compliance with applicable law.",
  },
  {
    heading: "Accounts",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.",
  },
  {
    heading: "Intellectual Property",
    body: "All content, features and functionality of the VROOM platform are owned by VROOM and are protected by applicable intellectual property laws.",
  },
  {
    heading: "Limitation of Liability",
    body: "VROOM shall not be liable for any indirect, incidental, special or consequential damages arising out of or in connection with your use of the service.",
  },
  {
    heading: "Changes to Terms",
    body: "We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the updated terms.",
  },
  {
    heading: "Contact",
    body: "If you have questions about these terms of service, please contact us through the VROOM website.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL"
        title="Terms of Service"
        description="Terms and conditions for using VROOM."
      />

      <section className="bg-white py-16">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-vroom-grey-700">
            These terms of service will be updated with full legal content. VROOM
            is committed to clear and fair terms for all users of the platform.
          </p>

          <div className="mt-12 space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-bold text-vroom-ink">
                  {section.heading}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-vroom-grey-700">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
