const claimStatus = [
  { label: "Open", value: 6, color: "#1fd693" },
  { label: "Under Review", value: 6, color: "#2fb9a8" },
  { label: "Approved", value: 5, color: "#3f6b6c" },
  { label: "Declined", value: 3, color: "#5a666a" },
  { label: "Completed", value: 8, color: "#1a2426" },
];

const barHeights = [38, 52, 46, 64, 58, 74];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export function DashboardMockup() {
  const total = claimStatus.reduce((sum, s) => sum + s.value, 0);
  const circumference = 2 * Math.PI * 42;

  const claimStatusWithOffset = claimStatus.reduce<
    { label: string; value: number; color: string; offset: number }[]
  >((acc, s) => {
    const runningTotal = acc.reduce((sum, item) => sum + item.value, 0);
    const offset = (runningTotal / total) * circumference;
    return [...acc, { ...s, offset }];
  }, []);

  return (
    <div className="rounded-2xl border border-vroom-line bg-vroom-navy p-4 sm:p-6">
      {/* window chrome */}
      <div className="mb-5 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <div className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-[11px] text-white/40">
          app.govroom.co.uk/dashboard
        </div>
      </div>

      {/* sidebar + content */}
      <div className="flex gap-4">
        <div className="hidden w-40 shrink-0 flex-col gap-1 rounded-xl border border-white/5 bg-white/[0.02] p-3 sm:flex">
          <div className="mb-3 flex items-center gap-2 px-1">
            <span className="text-sm font-bold tracking-tight text-white">VROOM</span>
          </div>
          {["Dashboard", "Warranties", "Claims", "Customers", "Vehicles", "Documents", "Insights", "AI Assistant", "Settings"].map(
            (item, i) => (
              <div
                key={item}
                className={`rounded-lg px-3 py-2 text-xs font-medium ${
                  i === 0 ? "bg-vroom-green text-vroom-ink" : "text-white/45"
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-white/40">Good morning, Matt.</p>
              <p className="text-sm font-semibold text-white">
                Here&apos;s what&apos;s happening with your aftersales today.
              </p>
            </div>
            <div className="hidden h-8 w-8 shrink-0 rounded-full bg-white/10 sm:block" />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Active Warranties", value: "132", trend: "+12%" },
              { label: "Open Claims", value: "8", trend: "+27%" },
              { label: "Claims This Month", value: "14", trend: "+15%" },
              { label: "Warranty Exposure", value: "£48,320", trend: "+5%" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <p className="text-[10px] font-medium uppercase tracking-wide text-white/40">
                  {stat.label}
                </p>
                <div className="mt-1.5 flex items-baseline gap-1.5">
                  <span className="text-lg font-bold text-white">{stat.value}</span>
                  <span className="text-[10px] font-semibold text-vroom-green">{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:col-span-3">
              <p className="mb-4 text-xs font-semibold text-white/70">Warranty Activity</p>
              <div className="flex h-28 items-end gap-3">
                {barHeights.map((h, i) => (
                  <div key={months[i]} className="flex flex-1 flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-md bg-vroom-green/80"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[10px] text-white/35">{months[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:col-span-2">
              <p className="mb-3 text-xs font-semibold text-white/70">Claims by Status</p>
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 100 100" className="h-20 w-20 shrink-0 -rotate-90">
                  {claimStatusWithOffset.map((s) => {
                    const fraction = s.value / total;
                    const dash = fraction * circumference;
                    return (
                      <circle
                        key={s.label}
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke={s.color}
                        strokeWidth="14"
                        strokeDasharray={`${dash} ${circumference - dash}`}
                        strokeDashoffset={-s.offset}
                      />
                    );
                  })}
                  <circle cx="50" cy="50" r="26" fill="#0c1315" />
                </svg>
                <div className="space-y-1.5">
                  {claimStatus.map((s) => (
                    <div key={s.label} className="flex items-center gap-1.5 text-[10px] text-white/50">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.color }} />
                      {s.label}
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-center text-[10px] text-white/30">28 Total Claims</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
