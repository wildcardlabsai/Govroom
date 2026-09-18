export function Badge({
  children,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark" | "green";
  className?: string;
}) {
  const tones = {
    light: "text-vroom-grey-700 border-vroom-grey-300",
    dark: "text-white/70 border-white/20",
    green: "text-vroom-green-2 border-vroom-green/40 bg-vroom-green-soft",
  } as const;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${tones[tone]} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-vroom-green" aria-hidden="true" />
      {children}
    </span>
  );
}
