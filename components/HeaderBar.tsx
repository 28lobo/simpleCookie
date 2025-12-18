export function HeaderBar() {
  return (
    <header className="flex items-center justify-between rounded-full border border-amber-100 bg-white/90 px-5 py-3 shadow-sm shadow-amber-100/70 backdrop-blur">
      <div className="text-lg font-semibold uppercase tracking-[0.14em] text-amber-900">
        simple cookie
      </div>
      <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 sm:flex">
        <a className="hover:text-amber-900" href="#flavors">
          Flavors
        </a>
        <a className="hover:text-amber-900" href="#story">
          Story
        </a>
        <a className="hover:text-amber-900" href="#shop">
          Shop
        </a>
        <a className="hover:text-amber-900" href="#visit">
          Visit
        </a>
      </nav>
      <button className="rounded-full bg-amber-900 px-4 py-2 text-sm font-semibold text-amber-50 shadow-sm shadow-amber-200 transition hover:-translate-y-0.5 hover:bg-amber-800">
        Start an order
      </button>
    </header>
  );
}
