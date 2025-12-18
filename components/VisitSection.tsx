export function VisitSection() {
  return (
    <section
      id="visit"
      className="mt-8 grid gap-4 rounded-3xl border border-amber-100 bg-white p-6 shadow-sm sm:grid-cols-[1.1fr_0.9fr] sm:p-8"
    >
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-800">Visit the shop</p>
        <h3 className="text-3xl font-semibold text-amber-950">Pick up warm cookies from our kitchen window.</h3>
        <p className="text-sm text-slate-700">Saturday tasting flights • Seasonal boxes • Holiday pre-orders</p>
        <div className="flex flex-wrap gap-3 text-sm font-semibold text-amber-900">
          <span className="rounded-full bg-amber-100 px-3 py-1">NYC • 11th & Hudson</span>
          <span className="rounded-full bg-emerald-100 px-3 py-1">Same-day pickup</span>
          <span className="rounded-full bg-amber-100 px-3 py-1">Open 9–6</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-full bg-amber-900 px-4 py-2 text-sm font-semibold text-amber-50 transition hover:-translate-y-0.5">
            Get directions
          </button>
          <button className="rounded-full border border-amber-900 px-4 py-2 text-sm font-semibold text-amber-900 transition hover:-translate-y-0.5 hover:bg-amber-900 hover:text-amber-50">
            Book a tasting
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-amber-100 shadow-inner shadow-amber-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,220,180,0.3),transparent_40%)]" />
        <div className="flex h-full flex-col justify-between p-6 text-amber-900">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">Flagship</p>
            <h4 className="text-2xl font-semibold">The Bakery Counter</h4>
            <p className="text-sm text-slate-700">Espresso pairings, hot chocolate flights, and warm cookies on rotation.</p>
          </div>
          <div className="grid gap-2 text-sm text-slate-800">
            <span>Monday – Saturday: 9a – 6p</span>
            <span>Sunday: 10a – 4p</span>
            <span>Call ahead: (212) 555-0118</span>
          </div>
        </div>
      </div>
    </section>
  );
}
