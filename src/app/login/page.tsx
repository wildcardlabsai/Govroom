"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
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
          Welcome back.
        </h1>
        <p className="mb-8 text-center text-sm text-white/60">
          Sign in to your VROOM account.
        </p>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setMessage("Authentication will be available soon.");
          }}
          className="space-y-5"
        >
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
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-white/70">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Your password"
              className="w-full rounded-xl border border-vroom-line bg-vroom-ink px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-vroom-green focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-vroom-green py-3 text-center font-semibold text-vroom-ink transition-opacity hover:opacity-90"
          >
            Log in
          </button>

          {message && (
            <p className="text-center text-sm text-white/60">{message}</p>
          )}
        </form>

        {/* Forgot password */}
        <div className="mt-4 text-center">
          <button
            type="button"
            className="text-sm text-vroom-green hover:underline"
            onClick={() => setMessage("Password reset will be available soon.")}
          >
            Forgot password?
          </button>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-vroom-line" />

        {/* Sign up link */}
        <p className="text-center text-sm text-white/60">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-vroom-green hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}
