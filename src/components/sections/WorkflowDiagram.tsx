import { WORKFLOW_STEPS } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import type { IconKey } from "@/lib/content";

const STEP_ICONS: IconKey[] = ["car", "shield", "clipboard", "users", "check"];

export function WorkflowDiagram() {
  return (
    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-0">
      {WORKFLOW_STEPS.map((step, i) => (
        <div key={step.label} className="flex flex-1 items-center">
          <div className="flex flex-1 flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 text-center sm:rounded-none sm:border-none sm:bg-transparent sm:p-0">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-vroom-green/40 bg-vroom-green/10 text-vroom-green">
              <Icon name={STEP_ICONS[i]} className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-white">{step.label}</p>
              <p className="mt-1 text-xs text-white/45">{step.detail}</p>
            </div>
          </div>
          {i < WORKFLOW_STEPS.length - 1 && (
            <div className="hidden shrink-0 px-2 text-vroom-green/50 sm:block" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
