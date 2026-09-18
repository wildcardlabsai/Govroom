export function CustomerPortalMockup() {
  const items = [
    { icon: "shield", label: "Warranty Details" },
    { icon: "clipboard", label: "Claim Status" },
    { icon: "chat", label: "Messages" },
    { icon: "car", label: "Vehicle Information" },
  ];

  return (
    <div className="mx-auto w-[260px] rounded-[2.2rem] border-[6px] border-vroom-ink bg-vroom-navy p-1.5 shadow-[0_30px_60px_-25px_rgba(6,9,10,0.6)]">
      <div className="overflow-hidden rounded-[1.6rem] bg-vroom-navy">
        <div className="flex items-center justify-between px-4 pt-4 text-[10px] text-white/40">
          <span>9:41</span>
          <span>VROOM</span>
        </div>
        <div className="px-4 pb-5 pt-4">
          <p className="text-[11px] text-white/40">My Warranty</p>
          <div className="mt-2 mb-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <div className="h-10 w-14 shrink-0 rounded-md bg-white/10" />
            <div>
              <p className="text-xs font-semibold text-white">2021 Audi A3</p>
              <p className="text-[10px] text-white/40">VF21 XB2</p>
              <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-vroom-green/15 px-2 py-0.5 text-[9px] font-semibold text-vroom-green">
                Active
              </span>
            </div>
          </div>

          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5"
              >
                <span className="text-[11px] font-medium text-white/75">{item.label}</span>
                <svg viewBox="0 0 24 24" className="h-3 w-3 text-white/30" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
