import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { BLOG_POSTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insight and practical thinking on dealer aftersales, warranty management and claims handling for UK car dealers.",
  alternates: { canonical: "/blog" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Aftersales, from people who understand the motor trade."
        description="Practical thinking on warranties, claims and building a stronger dealership after the sale."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <article className="grid grid-cols-1 overflow-hidden rounded-2xl border border-vroom-grey-300/70 lg:grid-cols-2">
            <div className="flex min-h-[220px] items-center justify-center bg-vroom-ink p-10 lg:min-h-full">
              <span className="font-serif text-lg italic text-white/30">VROOM Journal</span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="mb-4 inline-flex w-fit items-center rounded-full border border-vroom-grey-300 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-vroom-grey-500">
                Featured &middot; {featured.category}
              </span>
              <h2 className="text-balance text-2xl font-bold tracking-tight text-vroom-ink sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-vroom-grey-700">{featured.excerpt}</p>
              <p className="mt-6 text-xs font-medium text-vroom-grey-500">
                {formatDate(featured.date)} &middot; {featured.readTime}
              </p>
            </div>
          </article>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="flex h-full flex-col rounded-2xl border border-vroom-grey-300/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-vroom-green/50 hover:shadow-[0_20px_40px_-24px_rgba(6,9,10,0.25)]"
              >
                <span className="mb-4 inline-flex w-fit items-center rounded-full border border-vroom-grey-300 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-vroom-grey-500">
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold leading-snug text-vroom-ink">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-vroom-grey-700">{post.excerpt}</p>
                <p className="mt-6 text-xs font-medium text-vroom-grey-500">
                  {formatDate(post.date)} &middot; {post.readTime}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

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
