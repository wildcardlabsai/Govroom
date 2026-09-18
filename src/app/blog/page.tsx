import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { BlogContent } from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog | VROOM",
  description: "News, guides and insight for motor dealers.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="BLOG"
        title="News, guides and insight."
        description="Practical information to help dealers manage what happens after the sale."
      />

      <BlogContent />

      <CTASection
        title="Aftersales insight, straight from the trade."
        description="More articles are on the way. Get in touch if there's a topic you'd like us to cover."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Browse Resources"
        secondaryHref="/resources"
      />
    </>
  );
}
