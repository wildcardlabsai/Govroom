import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, SITE } from "@/lib/content";

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com", path: "M13 22v-8h3l1-4h-4V7.5C13 6.4 13.4 5.7 15 5.7h2V2.2C16.5 2.1 15.2 2 13.8 2 10.9 2 9 3.7 9 6.9V10H6v4h3v8h4z" },
  { label: "Instagram", href: "https://instagram.com", path: "M12 2.2c2.7 0 3 0 4.1.1 1 0 1.6.2 2 .4.5.2.9.4 1.3.8.4.4.6.8.8 1.3.2.4.3 1 .4 2 .1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.6-.4 2-.2.5-.4.9-.8 1.3-.4.4-.8.6-1.3.8-.4.2-1 .3-2 .4-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.6-.2-2-.4-.5-.2-.9-.4-1.3-.8-.4-.4-.6-.8-.8-1.3-.2-.4-.3-1-.4-2-.1-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c0-1 .2-1.6.4-2 .2-.5.4-.9.8-1.3.4-.4.8-.6 1.3-.8.4-.2 1-.3 2-.4C9 2.2 9.3 2.2 12 2.2zm0 1.8c-2.6 0-2.9 0-4 .1-.8 0-1.3.2-1.6.3-.4.1-.6.3-.9.6-.3.3-.5.5-.6.9-.1.3-.3.8-.3 1.6-.1 1.1-.1 1.4-.1 4s0 2.9.1 4c0 .8.2 1.3.3 1.6.1.4.3.6.6.9.3.3.5.5.9.6.3.1.8.3 1.6.3 1.1.1 1.4.1 4 .1s2.9 0 4-.1c.8 0 1.3-.2 1.6-.3.4-.1.6-.3.9-.6.3-.3.5-.5.6-.9.1-.3.3-.8.3-1.6.1-1.1.1-1.4.1-4s0-2.9-.1-4c0-.8-.2-1.3-.3-1.6-.1-.4-.3-.6-.6-.9-.3-.3-.5-.5-.9-.6-.3-.1-.8-.3-1.6-.3-1.1-.1-1.4-.1-4-.1zm0 3.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.8a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4zm5.7-2a1 1 0 110 2.1 1 1 0 010-2.1z" },
  { label: "LinkedIn", href: "https://linkedin.com", path: "M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.02-3.07-1.94-3.07-1.94 0-2.24 1.44-2.24 2.96V21h-4z" },
  { label: "YouTube", href: "https://youtube.com", path: "M22 12s0-3.2-.4-4.7a2.9 2.9 0 00-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 00-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 002 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 002-2C22 15.2 22 12 22 12zM10 15.3V8.7L15.8 12z" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-vroom-ink">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <Image
              src="/images/vroom-logo.png"
              alt="VROOM"
              width={150}
              height={48}
              className="h-9 w-auto"
            />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              {SITE.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-vroom-green hover:text-vroom-green"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Product" links={FOOTER_LINKS.product} />
          <FooterColumn title="Company" links={FOOTER_LINKS.company} />
          <FooterColumn title="Resources" links={FOOTER_LINKS.resources} />
          <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} VROOM. All rights reserved.</p>
          <p>Same people. A brighter road ahead.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-white/40">{title}</p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
