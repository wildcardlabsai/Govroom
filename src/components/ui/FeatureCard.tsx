import { Icon } from "./Icon";
import type { IconKey } from "@/lib/content";

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: IconKey;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-vroom-grey-300/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-vroom-green/50 hover:shadow-[0_20px_40px_-24px_rgba(6,9,10,0.25)]">
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-vroom-ink text-vroom-green transition-colors duration-300 group-hover:bg-vroom-green group-hover:text-vroom-ink">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-vroom-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-vroom-grey-700">{description}</p>
    </div>
  );
}
