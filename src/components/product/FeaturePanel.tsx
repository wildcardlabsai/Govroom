import { Icon } from "@/components/ui/Icon";
import type { IconKey } from "@/lib/content";

export function FeaturePanel({
  icon,
  title,
  rows,
}: {
  icon: IconKey;
  title: string;
  rows: { label: string; value: string; tone?: "green" | "neutral" }[];
}) {
  return (
    <div className="rounded-2xl border border-vroom-line bg-vroom-navy p-6 shadow-[0_30px_60px_-30px_rgba(6,9,10,0.6)] sm:p-7">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-vroom-green text-vroom-ink">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <p className="text-sm font-semibold text-white">{title}</p>
      </div>
      <div className="space-y-3">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3.5"
          >
            <span className="text-[13px] text-white/60">{row.label}</span>
            <span
              className={`text-[13px] font-semibold ${
                row.tone === "green" ? "text-vroom-green" : "text-white"
              }`}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
