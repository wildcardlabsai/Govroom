import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How VROOM handles data and privacy.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm leading-relaxed text-vroom-grey-700">
            This page is a placeholder for VROOM&apos;s full privacy policy, which will be published
            here ahead of launch. It will explain what data VROOM collects, how it is used, and the
            choices dealers and their customers have over their information.
          </p>
        </Container>
      </section>
    </>
  );
}
