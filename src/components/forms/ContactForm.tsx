"use client";

import { useState } from "react";

const VEHICLE_OPTIONS = [
  "Less than 20",
  "20-50",
  "50-100",
  "100-200",
  "200+",
];

const TOPIC_OPTIONS = [
  "Book a demo",
  "VROOM features",
  "Pricing",
  "Warranties",
  "Claims",
  "Customer portal",
  "DisputeIQ",
  "Other",
];

const inputClassName =
  "w-full rounded-xl border border-vroom-grey-300 bg-white px-4 py-3 text-sm text-vroom-ink placeholder:text-vroom-grey-500 focus:border-vroom-green focus:outline-none";

const labelClassName = "mb-2 block text-sm font-medium text-vroom-ink";

const selectClassName =
  "w-full appearance-none rounded-xl border border-vroom-grey-300 bg-white px-4 py-3 text-sm text-vroom-ink placeholder:text-vroom-grey-500 focus:border-vroom-green focus:outline-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[right_12px_center] bg-no-repeat pr-10";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-vroom-green/30 bg-vroom-green-soft p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-vroom-green text-vroom-ink">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12.5 9.5 17 19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-vroom-ink">Thanks — we&apos;ve received your enquiry.</h3>
        <p className="mt-2 text-sm text-vroom-grey-700">
          We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClassName}>Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClassName} />
        </div>
        <div>
          <label htmlFor="dealership" className={labelClassName}>Dealership</label>
          <input id="dealership" name="dealership" type="text" autoComplete="organization" className={inputClassName} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClassName}>Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClassName} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClassName}>Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClassName} />
        </div>
      </div>
      <div>
        <label htmlFor="vehicles" className={labelClassName}>Number of vehicles sold per month</label>
        <select id="vehicles" name="vehicles" className={selectClassName} defaultValue="">
          <option value="" disabled>Select...</option>
          {VEHICLE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="topic" className={labelClassName}>What would you like to discuss?</label>
        <select id="topic" name="topic" className={selectClassName} defaultValue="">
          <option value="" disabled>Select...</option>
          {TOPIC_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className={labelClassName}>Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputClassName}
          placeholder="Tell us a bit about your dealership and what you're looking for..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-xl bg-vroom-green py-3 text-sm font-semibold text-vroom-ink transition-colors hover:bg-vroom-green-2"
      >
        Send Enquiry
      </button>
    </form>
  );
}
