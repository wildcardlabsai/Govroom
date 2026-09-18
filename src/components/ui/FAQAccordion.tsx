"use client";

import { useState } from "react";

export function FAQAccordion({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-vroom-grey-300/70 border-t border-b border-vroom-grey-300/70">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="text-base font-semibold text-vroom-ink">{item.q}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-vroom-grey-300 text-vroom-ink transition-transform duration-300 ${
                  isOpen ? "rotate-45 border-vroom-green bg-vroom-green text-vroom-ink" : ""
                }`}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <p className="max-w-2xl text-sm leading-relaxed text-vroom-grey-700">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
