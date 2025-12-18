type CookieCard = {
  title: string;
  price: string;
  flavor: string;
  badge: string;
};

type StorySectionProps = {
  cookies: CookieCard[];
};

export function StorySection({ cookies }: StorySectionProps) {
  return (
    <section className="mt-8 overflow-hidden rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-amber-100/60 shadow-sm shadow-amber-100">
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.6),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,220,180,0.35),transparent_40%)]" />
          <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#2c190d_0%,#523118_55%,#6a3d1d_100%)] p-12 text-white">
            <div className="max-w-md space-y-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">
                Tradition, refreshed
              </p>
              <h3 className="text-3xl font-semibold leading-tight">The scent of butter and spice, delivered fresh.</h3>
              <p className="text-sm text-amber-50/90">
                We hand-score every cookie, slow-bake for chew, and seal in warmth before we ship with ice and care.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6 px-8 py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-800">Our best sellers</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {cookies.slice(0, 3).map((cookie) => (
              <div key={cookie.title} className="rounded-2xl border border-amber-100 bg-white/80 p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-amber-700">{cookie.badge}</p>
                    <h4 className="text-lg font-semibold text-amber-950">{cookie.title}</h4>
                    <p className="text-sm text-slate-700">{cookie.flavor}</p>
                  </div>
                  <span className="rounded-full bg-amber-900 px-3 py-1 text-xs font-semibold text-amber-50">{cookie.price}</span>
                </div>
                <button className="mt-3 inline-flex items-center justify-center rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-900 transition hover:-translate-y-0.5">
                  Add to box
                </button>
              </div>
            ))}
          </div>
          <button className="rounded-full border border-amber-900 px-4 py-2 text-sm font-semibold text-amber-900 transition hover:-translate-y-0.5 hover:bg-amber-900 hover:text-amber-50">
            Shop the full menu
          </button>
        </div>
      </div>
    </section>
  );
}
