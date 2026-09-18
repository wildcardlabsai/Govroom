"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FAQ_CATEGORIES } from "@/lib/content";

export function FAQClientSection() {
  const [active, setActive] = useState<string>(FAQ_CATEGORIES[0].category);

  const activeCategory = FAQ_CATEGORIES.find((c) => c.category === active);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="max-w-3xl">
        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat.category}
              type="button"
              onClick={() => setActive(cat.category)}
              className={`rounded-full px-5 py-2 text-sm transition-colors ${
                active === cat.category
                  ? "bg-vroom-green font-semibold text-vroom-ink"
                  : "bg-vroom-grey-100 text-vroom-grey-700 hover:bg-vroom-grey-300/50"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Accordion for active category */}
        <div className="mt-10">
          {activeCategory && <FAQAccordion items={activeCategory.items} />}
        </div>
      </Container>
    </section>
  );
}
