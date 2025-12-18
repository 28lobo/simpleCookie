const steps = [
  {
    number: "1",
    title: "Choose your box",
    description: "Start with our signature four-pack or build a custom mix of favorites.",
  },
  {
    number: "2",
    title: "Add personal touches",
    description: "Include gifting notes, chilled shipping, and scheduling for the perfect arrival.",
  },
  {
    number: "3",
    title: "Enjoy the golden batch",
    description: "Every cookie is baked, wrapped, and sent with care—ready to share and savor.",
  },
];

export function HowItWorks() {
  return (
    <section className="mt-10 rounded-3xl border border-amber-100 bg-white px-6 py-7 shadow-sm shadow-amber-100">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">How it works</h2>
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-800">Easy as 1-2-3</span>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative overflow-hidden rounded-2xl border border-amber-100/70 bg-gradient-to-b from-amber-50 via-white to-amber-50 p-4 shadow-sm"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.8),transparent_45%)]" />
            <div className="relative flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-900 text-sm font-semibold text-amber-50 shadow-sm shadow-amber-200">
                {step.number}
              </div>
              <div className="space-y-1">
                <div className="text-base font-semibold text-amber-950">{step.title}</div>
                <p className="text-sm text-slate-700">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
