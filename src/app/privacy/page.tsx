import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | VROOM",
  description: "How VROOM handles and protects your information.",
  alternates: { canonical: "/privacy" },
};

const SECTIONS = [
  {
    heading: "Information We Collect",
    body: "We collect information you provide when creating an account, using our platform, or contacting our team. This may include business details, contact information and usage data.",
  },
  {
    heading: "How We Use Your Information",
    body: "Your information is used to provide and improve the VROOM platform, communicate with you about your account, and ensure the security of our services.",
  },
  {
    heading: "Data Security",
    body: "We implement appropriate technical and organisational measures to protect your data against unauthorised access, alteration, disclosure or destruction.",
  },
  {
    heading: "Your Rights",
    body: "You have the right to access, correct or delete your personal data. You may also object to or restrict certain processing activities in accordance with applicable law.",
  },
  {
    heading: "Contact Us",
    body: "If you have questions about this privacy policy or how your data is handled, please contact us through the VROOM website.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL"
        title="Privacy Policy"
        description="How VROOM handles and protects your information."
      />

      <section className="bg-white py-16">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-vroom-grey-700">
            This privacy policy will be updated with full legal content. VROOM
            is committed to protecting dealer and customer data in accordance
            with UK data protection regulations.
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
