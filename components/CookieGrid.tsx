type CookieCard = {
  title: string;
  price: string;
  flavor: string;
  badge: string;
  accent: string;
};

type CookieGridProps = {
  cookies: CookieCard[];
};

export function CookieGrid({ cookies }: CookieGridProps) {
  return (
    <section
      id="flavors"
      className="mt-8 rounded-3xl border border-amber-100 bg-white px-6 py-7 shadow-sm shadow-amber-100"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">Shop the cookies</h2>
        <a className="text-sm font-semibold text-amber-800 hover:text-amber-900" href="#shop">
          View menu →
        </a>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {cookies.map((cookie) => (
          <div
            key={cookie.title}
            className={`${cookie.accent} relative overflow-hidden rounded-2xl border border-amber-100/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-amber-200/70`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.7),transparent_50%)]" />
            <div className="relative flex flex-col gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-800">
                {cookie.badge}
              </span>
              <h3 className="text-lg font-semibold text-amber-950">{cookie.title}</h3>
              <p className="text-sm text-slate-700">{cookie.flavor}</p>
              <div className="mt-2 flex items-center justify-between text-sm font-semibold text-amber-900">
                <span>{cookie.price}</span>
                <button className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-amber-900 shadow-sm shadow-amber-100 transition hover:-translate-y-0.5">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
