type CookieCard = {
  title: string;
  price: string;
  flavor: string;
  badge: string;
};

type ShopSectionProps = {
  cookies: CookieCard[];
};

export function ShopSection({ cookies }: ShopSectionProps) {
  return (
    <section
      id="shop"
      className="mt-8 overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm"
    >
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="flex h-full items-center bg-[linear-gradient(180deg,#e6f0e7_0%,#d6ebd8_100%)] p-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-800">
              Fresh arrival
            </p>
            <h3 className="text-3xl font-semibold text-emerald-950">Mix & match gift boxes</h3>
            <p className="text-sm text-emerald-900/80">
              Choose any three flavors plus our chef’s surprise cookie. Ships chilled with handwritten notes on request.
            </p>
            <button className="rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold text-emerald-50 transition hover:-translate-y-0.5">
              Build a box
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-8">
          {cookies.map((cookie) => (
            <div key={`${cookie.title}-grid`} className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.1em] text-amber-700">
                {cookie.badge}
                <span className="text-amber-900">{cookie.price}</span>
              </div>
              <div className="mt-3 text-base font-semibold text-amber-950">{cookie.title}</div>
              <p className="text-sm text-slate-700">{cookie.flavor}</p>
              <button className="mt-3 w-full rounded-full bg-amber-900 px-3 py-2 text-xs font-semibold text-amber-50 transition hover:-translate-y-0.5">
                Add to box
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
