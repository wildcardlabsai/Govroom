export function StatCard({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend?: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-[11px] font-medium uppercase tracking-wide text-white/45">{label}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-bold text-white">{value}</span>
        {trend && <span className="text-xs font-semibold text-vroom-green">{trend}</span>}
      </div>
    </div>
  );
}
