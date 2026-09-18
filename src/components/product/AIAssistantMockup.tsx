export function AIAssistantMockup() {
  return (
    <div className="rounded-2xl border border-vroom-line bg-vroom-navy p-5 shadow-[0_30px_60px_-30px_rgba(6,9,10,0.6)] sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-vroom-green text-vroom-ink">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path d="M12 2v4M12 18v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M2 12h4M18 12h4M4.2 19.8 7 17M17 7l2.8-2.8" strokeLinecap="round" />
          </svg>
        </span>
        <p className="text-sm font-semibold text-white">VROOM AI Assistant</p>
      </div>

      <div className="space-y-3">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-white/10 px-4 py-3 text-[13px] leading-relaxed text-white/85">
          A customer is complaining about an engine issue 3 months after purchase. What&apos;s the best way to handle this?
        </div>
        <div className="mr-auto max-w-[90%] rounded-2xl rounded-tl-sm border border-vroom-green/20 bg-vroom-green/[0.07] px-4 py-3 text-[13px] leading-relaxed text-white/85">
          <p className="mb-2 text-white/60">Based on UK consumer law and your warranty terms, here&apos;s how you could approach this:</p>
          <ol className="list-decimal space-y-1 pl-4 text-white/85">
            <li>Review the warranty cover and vehicle history</li>
            <li>Assess whether the issue is likely a manufacturing fault</li>
            <li>Communicate clearly with the customer</li>
            <li>Offer an inspection and next steps</li>
            <li>Keep a record of the conversation</li>
          </ol>
          <p className="mt-2 text-white/60">Would you like me to draft a response for the customer?</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="text-[13px] text-white/35">Ask a question…</span>
        <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-vroom-green text-vroom-ink">
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
            <path d="M3 11l18-8-8 18-2-8-8-2z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
