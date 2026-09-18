export function LaptopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="rounded-t-2xl border border-b-0 border-vroom-line bg-[#05080a] p-2 shadow-[0_40px_80px_-30px_rgba(6,9,10,0.55)] sm:p-3">
        {children}
      </div>
      <div className="relative mx-auto h-4 w-full rounded-b-2xl bg-gradient-to-b from-[#1b2426] to-[#05080a] sm:h-5">
        <div className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 rounded-b-md bg-[#05080a]" />
      </div>
      <div className="mx-auto h-2 w-[92%] rounded-b-xl bg-[#0a1012]" />
    </div>
  );
}
