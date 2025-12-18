export function NewsletterSection() {
  return (
    <section className="mt-8 rounded-3xl border border-amber-100 bg-white px-6 py-8 shadow-sm sm:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-amber-950">Let’s stay in touch</h3>
          <p className="text-sm text-slate-700">Monthly drops, early access, and baker’s tips. Zero spam.</p>
        </div>
        <div className="flex flex-col gap-3 sm:w-[360px] sm:flex-row sm:items-center sm:gap-2">
          <input
            className="w-full rounded-full border border-amber-100 px-4 py-3 text-sm text-slate-900 shadow-inner shadow-amber-50 focus:border-amber-300 focus:outline-none"
            placeholder="Enter your email"
            type="email"
          />
          <button className="rounded-full bg-amber-900 px-4 py-3 text-sm font-semibold text-amber-50 transition hover:-translate-y-0.5">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
