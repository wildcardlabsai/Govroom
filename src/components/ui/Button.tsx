import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";

const variants: Record<Variant, string> = {
  primary:
    "bg-vroom-green text-vroom-ink hover:bg-vroom-green-2 shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset]",
  secondary: "bg-vroom-ink text-white hover:bg-vroom-grey-900",
  ghost: "bg-transparent text-vroom-ink hover:bg-vroom-grey-100",
  "outline-light":
    "bg-transparent text-white border border-white/30 hover:border-white/70 hover:bg-white/5",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
  type = "button",
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-colors duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
