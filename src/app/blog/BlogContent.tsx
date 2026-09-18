"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { BLOG_POSTS } from "@/lib/content";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const CATEGORIES = [
  "All",
  ...Array.from(new Set(BLOG_POSTS.map((p) => p.category))),
];

export function BlogContent() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === active);

  const [featured, ...rest] = filtered;

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        {/* Category filter pills */}
        <div className="mb-12 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-vroom-green text-vroom-ink"
                  : "bg-vroom-grey-100 text-vroom-grey-700 hover:bg-vroom-grey-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {featured && (
          <article className="grid grid-cols-1 overflow-hidden rounded-2xl border border-vroom-grey-300/70 lg:grid-cols-2">
            <div className="flex min-h-[220px] items-center justify-center bg-vroom-ink p-10 lg:min-h-full">
              <span className="font-serif text-lg italic text-white/30">
                VROOM Journal
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="mb-4 inline-flex w-fit items-center rounded-full border border-vroom-grey-300 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-vroom-grey-500">
                Featured &middot; {featured.category}
              </span>
              <h2 className="text-balance text-2xl font-bold tracking-tight text-vroom-ink sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-vroom-grey-700">
                {featured.excerpt}
              </p>
              <p className="mt-6 text-xs font-medium text-vroom-grey-500">
                {formatDate(featured.date)} &middot; {featured.readTime}
              </p>
            </div>
          </article>
        )}

        {rest.length > 0 && (
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="flex h-full flex-col rounded-2xl border border-vroom-grey-300/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-vroom-green/50 hover:shadow-[0_20px_40px_-24px_rgba(6,9,10,0.25)]"
              >
                <span className="mb-4 inline-flex w-fit items-center rounded-full border border-vroom-grey-300 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-vroom-grey-500">
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold leading-snug text-vroom-ink">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-vroom-grey-700">
                  {post.excerpt}
                </p>
                <p className="mt-6 text-xs font-medium text-vroom-grey-500">
                  {formatDate(post.date)} &middot; {post.readTime}
                </p>
              </article>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-sm text-vroom-grey-500">
            No posts in this category yet.
          </p>
        )}
      </Container>
    </section>
  );
}
