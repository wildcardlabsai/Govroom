import { DEALER_LOGOS } from "@/lib/content";

export function LogoStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70 grayscale">
      {DEALER_LOGOS.map((logo) => (
        <span
          key={logo}
          className="text-lg font-bold tracking-tight text-vroom-grey-700"
          aria-label={`${logo} (placeholder logo)`}
        >
          {logo}
        </span>
      ))}
    </div>
  );
}
