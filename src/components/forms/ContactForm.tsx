"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder submit handler — wired up to real backend later.
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
        <h3 className="text-lg font-semibold text-vroom-ink">Message sent.</h3>
        <p className="mt-2 text-sm text-vroom-grey-700">
          Thanks for reaching out — a member of the VROOM team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" required autoComplete="name" />
        <Field label="Dealership" name="dealership" type="text" autoComplete="organization" />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-vroom-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-vroom-grey-300 bg-white px-4 py-3 text-sm text-vroom-ink outline-none transition-colors focus:border-vroom-green focus:ring-2 focus:ring-vroom-green/20"
          placeholder="Tell us a bit about your dealership and what you're looking for…"
        />
      </div>
      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-vroom-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-vroom-grey-300 bg-white px-4 py-3 text-sm text-vroom-ink outline-none transition-colors focus:border-vroom-green focus:ring-2 focus:ring-vroom-green/20"
      />
    </div>
  );
}
