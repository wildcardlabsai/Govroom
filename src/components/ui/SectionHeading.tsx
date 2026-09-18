import { Badge } from "./Badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <Badge tone={tone === "dark" ? "dark" : "light"} className="mb-5">
          {eyebrow}
        </Badge>
      )}
      <h2
        className={`text-balance text-3xl font-bold tracking-tight sm:text-4xl ${
          tone === "dark" ? "text-white" : "text-vroom-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-white/65" : "text-vroom-grey-700"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
