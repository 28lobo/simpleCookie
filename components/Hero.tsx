export function Hero() {
  return (
    <section className="mt-6 overflow-hidden rounded-3xl border border-amber-100 bg-gradient-to-br from-[#ba1c28] via-[#c94a52] to-[#e5887b] px-8 py-10 shadow-2xl shadow-amber-100/70">
      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em]">
            Crafted to delight
            <span className="h-2 w-2 rounded-full bg-amber-200" />
          </div>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Cookies made to give and share.
          </h1>
          <p className="max-w-xl text-base text-white/90 sm:text-lg">
            A curated box of four signature cookies with luxe packaging, chilled shipping, and a handwritten note on request.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-amber-50">
            <button className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-amber-900 shadow-sm shadow-amber-200 transition hover:-translate-y-0.5">
              Shop the box
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/60 px-4 py-2.5 text-white transition hover:-translate-y-0.5 hover:border-white">
              Explore flavors →
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative grid grid-cols-2 gap-4 rounded-3xl bg-white/10 p-4 shadow-lg shadow-black/20 backdrop-blur">
            {["Chocolate", "Oatmeal", "Butter", "Fudge"].map((label, idx) => (
              <div
                key={label}
                className="relative overflow-hidden rounded-2xl border border-white/30 bg-white/10 p-4 text-white shadow-inner shadow-black/20"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.22),transparent_40%)]" />
                <div className="flex h-full flex-col justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/80">
                    {idx % 2 === 0 ? "Holiday" : "Everyday"}
                  </span>
                  <div className="text-lg font-semibold">{label}</div>
                  <span className="text-xs text-white/80">Hand scored • Slow baked</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
