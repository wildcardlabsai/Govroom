"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS, RESOURCES_LINKS } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setResourcesOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-vroom-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-2" aria-label="VROOM home">
          <Image
            src="/images/vroom-logo.png"
            alt="VROOM"
            width={140}
            height={44}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenus}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white"
              aria-expanded={resourcesOpen}
              onClick={() => setResourcesOpen((v) => !v)}
            >
              Resources
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {resourcesOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-white/10 bg-vroom-navy p-2 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
                  {RESOURCES_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenus}
                      className="block rounded-xl px-4 py-3 transition-colors hover:bg-white/5"
                    >
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="mt-0.5 text-xs text-white/45">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Login
          </Link>
          <Button href="/contact" variant="primary" className="px-5 py-2.5">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-vroom-ink px-5 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenus}
                className="rounded-xl px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <p className="mt-2 px-3 text-xs font-semibold uppercase tracking-wide text-white/35">
              Resources
            </p>
            {RESOURCES_LINKS.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenus}
                className="rounded-xl px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <Button href="/contact" variant="outline-light" className="w-full">
              Login
            </Button>
            <Button href="/contact" variant="primary" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
