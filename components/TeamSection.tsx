type StaffMember = {
  name: string;
  role: string;
  note: string;
};

type TeamSectionProps = {
  staff: StaffMember[];
};

export function TeamSection({ staff }: TeamSectionProps) {
  return (
    <section className="mt-8 overflow-hidden rounded-3xl border border-amber-100 bg-gradient-to-r from-[#f3e2d0] via-[#f6e9db] to-[#fdf7f2] shadow-sm">
      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex h-full flex-col justify-center space-y-4 px-8 py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-800">Behind the bake</p>
          <h3 className="text-3xl font-semibold text-amber-950">We’re a small team of bakers obsessed with detail.</h3>
          <p className="text-sm text-slate-700">From tempering chocolate to hand-twisting each dough ball, our crew keeps every batch personal.</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {staff.map((person) => (
              <div key={person.name} className="rounded-2xl border border-amber-100 bg-white/80 p-4 shadow-sm">
                <p className="text-sm font-semibold text-amber-950">{person.name}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-amber-700">{person.role}</p>
                <p className="mt-2 text-xs text-slate-700">{person.note}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative bg-[linear-gradient(135deg,#2b1d14_0%,#3c2718_50%,#51331c_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,220,180,0.25),transparent_40%)]" />
          <div className="flex h-full items-center justify-center px-8 py-12 text-center text-white">
            <div className="max-w-md space-y-4">
              <p className="text-2xl font-semibold leading-tight">“We bake like we’re feeding our own table first.”</p>
              <p className="text-sm text-amber-100/90">– Mara Kim, founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
