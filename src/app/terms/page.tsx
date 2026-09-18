import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of VROOM.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm leading-relaxed text-vroom-grey-700">
            This page is a placeholder for VROOM&apos;s full terms of service, which will be
            published here ahead of launch.
          </p>
        </Container>
      </section>
    </>
  );
}
