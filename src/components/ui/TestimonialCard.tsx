export function TestimonialCard({
  quote,
  name,
  company,
}: {
  quote: string;
  name: string;
  company: string;
}) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-vroom-grey-300/70 bg-white p-7">
      <div>
        <div className="mb-4 flex gap-1 text-vroom-green" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L10 1.5z" />
            </svg>
          ))}
        </div>
        <p className="text-[15px] italic leading-relaxed text-vroom-grey-700">“{quote}”</p>
      </div>
      <div className="mt-6 flex items-center gap-3 border-t border-vroom-grey-100 pt-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-vroom-mist text-sm font-semibold text-vroom-grey-700">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-vroom-ink">{name}</p>
          <p className="text-xs text-vroom-grey-500">{company}</p>
        </div>
      </div>
    </div>
  );
}
