export function AutomotivePanel({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="automotive-grid absolute inset-0 opacity-[0.35]" />
      <div className="glow-green absolute -right-24 top-1/3 h-[520px] w-[520px]" />
      <svg
        viewBox="0 0 900 500"
        className="absolute -right-16 bottom-0 h-[78%] w-auto opacity-90 sm:h-[92%]"
        fill="none"
      >
        <defs>
          <linearGradient id="carBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#26343699" />
            <stop offset="100%" stopColor="#0c1315" />
          </linearGradient>
          <linearGradient id="tailLight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1fd693" />
            <stop offset="100%" stopColor="#0c1315" stopOpacity="0" />
          </linearGradient>
        </defs>
        <ellipse cx="480" cy="430" rx="380" ry="34" fill="#000000" opacity="0.45" />
        <path
          d="M110 330c10-46 70-70 150-84 58-10 96-40 150-46 96-11 210 6 268 44 34 22 46 46 48 86 2 26-14 44-40 46-236 18-390 18-540 4-26-2-40-24-36-50Z"
          fill="url(#carBody)"
          stroke="#2c3a3c"
          strokeWidth="1.5"
        />
        <path
          d="M270 232c40-30 78-46 132-50 62-5 122 8 160 34"
          stroke="#3a4a4c"
          strokeWidth="1.5"
          fill="none"
        />
        <rect x="278" y="234" width="130" height="46" rx="10" fill="#111c1e" stroke="#324244" />
        <rect x="416" y="222" width="150" height="58" rx="12" fill="#0e1719" stroke="#324244" />
        <circle cx="270" cy="392" r="52" fill="#05080a" stroke="#3a4a4c" strokeWidth="6" />
        <circle cx="270" cy="392" r="22" fill="#1a2426" />
        <circle cx="640" cy="392" r="52" fill="#05080a" stroke="#3a4a4c" strokeWidth="6" />
        <circle cx="640" cy="392" r="22" fill="#1a2426" />
        <rect x="640" y="300" width="90" height="18" rx="6" fill="url(#tailLight)" />
        <rect x="648" y="304" width="70" height="10" rx="4" fill="#1fd693" opacity="0.85" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-vroom-ink to-transparent" />
    </div>
  );
}
