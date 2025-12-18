import { cn } from "@/lib/utils";

type Step = {
  key: string;
  label: string;
};

type BoxStepperProps = {
  activeStep: "box" | "cookies" | "gift" | "checkout";
};

const STEPS: Step[] = [
  { key: "box", label: "Box" },
  { key: "cookies", label: "Cookies" },
  { key: "gift", label: "Gift" },
  { key: "checkout", label: "Checkout" },
];

export function BoxStepper({ activeStep }: BoxStepperProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-amber-100 bg-white/80 px-4 py-3 shadow-sm shadow-amber-100">
      {STEPS.map((step, index) => {
        const isActive = step.key === activeStep;
        const isCompleted = STEPS.findIndex((s) => s.key === activeStep) > index;

        return (
          <div key={step.key} className="flex items-center gap-2 text-sm font-semibold text-amber-900">
            <span
              className={cn(
                "flex size-8 items-center justify-center rounded-full border text-xs",
                isActive && "border-amber-900 bg-amber-900 text-amber-50 shadow-sm",
                isCompleted && !isActive && "border-emerald-500 bg-emerald-50 text-emerald-700",
                !isActive && !isCompleted && "border-amber-100 bg-white"
              )}
            >
              {isCompleted ? "✓" : index + 1}
            </span>
            <span className={cn(isActive ? "text-amber-900" : "text-slate-600")}>{step.label}</span>
            {index < STEPS.length - 1 && <span className="text-slate-300">/</span>}
          </div>
        );
      })}
    </div>
  );
}
