"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  const [message, setMessage] = useState("");

  return (
    <section className="flex min-h-screen items-center justify-center bg-vroom-ink px-4 py-20">
      <div className="w-full max-w-md rounded-2xl border border-vroom-line bg-vroom-navy p-8">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/vroom-logo.png"
            alt="VROOM"
            width={140}
            height={44}
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="mb-2 text-center text-2xl font-bold text-white">
          Get started with VROOM.
        </h1>
        <p className="mb-8 text-center text-sm text-white/60">
          Set up your dealership and start simplifying your aftersales operation.
        </p>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setMessage("Account creation will be available soon.");
          }}
          className="space-y-5"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/70">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your full name"
              className="w-full rounded-xl border border-vroom-line bg-vroom-ink px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-vroom-green focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="dealership" className="mb-2 block text-sm font-medium text-white/70">
              Dealership
            </label>
            <input
              id="dealership"
              type="text"
              placeholder="Your dealership name"
              className="w-full rounded-xl border border-vroom-line bg-vroom-ink px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-vroom-green focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/70">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@dealership.co.uk"
              className="w-full rounded-xl border border-vroom-line bg-vroom-ink px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-vroom-green focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/70">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+44 7000 000000"
              className="w-full rounded-xl border border-vroom-line bg-vroom-ink px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-vroom-green focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-white/70">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full rounded-xl border border-vroom-line bg-vroom-ink px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-vroom-green focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-vroom-green py-3 text-center font-semibold text-vroom-ink transition-opacity hover:opacity-90"
          >
            Create Account
          </button>

          {message && (
            <p className="text-center text-sm text-white/60">{message}</p>
          )}
        </form>

        {/* Divider */}
        <div className="my-6 border-t border-vroom-line" />

        {/* Login link */}
        <p className="text-center text-sm text-white/60">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-vroom-green hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}
