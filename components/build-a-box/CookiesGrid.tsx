import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CookieDefinition = {
  slug: string;
  name: string;
  tags: string[];
  price: number;
  flavor: string;
  accent: string;
};

type CookiesGridProps = {
  cookies: CookieDefinition[];
  selectedCookies: Record<string, number>;
  boxSize: number;
  totalSelected: number;
  onIncrement: (slug: string) => void;
  onDecrement: (slug: string) => void;
  startedCookie?: CookieDefinition;
};

export function CookiesGrid({
  cookies,
  selectedCookies,
  boxSize,
  totalSelected,
  onIncrement,
  onDecrement,
  startedCookie,
}: CookiesGridProps) {
  const spotsLeft = boxSize - totalSelected;
  const isFull = spotsLeft === 0;

  return (
    <Card className="border-amber-100/90 bg-white/95">
      <CardHeader className="gap-1 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl text-amber-950">Choose your cookies</CardTitle>
            <p className="text-sm text-muted-foreground">
              You’ve chosen {totalSelected} of {boxSize} cookies • {isFull ? "Your box is full — swap to adjust." : `${spotsLeft} spots left in this box.`}
            </p>
          </div>
          {startedCookie && (
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Started with {startedCookie.name}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {cookies.map((cookie) => {
            const qty = selectedCookies[cookie.slug] || 0;
            const disableAdd = isFull && qty === 0;
            return (
              <div
                key={cookie.slug}
                className="relative overflow-hidden rounded-2xl border border-amber-100/80 bg-white p-4 shadow-sm"
              >
                <div className={cn("absolute inset-0 -z-10 bg-gradient-to-br opacity-70", cookie.accent)} />
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-700">{cookie.tags.join(" • ")}</p>
                      <h3 className="text-lg font-semibold text-amber-950">{cookie.name}</h3>
                      <p className="text-sm text-slate-700">{cookie.flavor}</p>
                    </div>
                    <span className="rounded-full bg-amber-900 px-3 py-1 text-xs font-semibold text-amber-50">
                      ${cookie.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2 text-xs font-semibold text-amber-800">
                      {cookie.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-amber-50 px-2 py-1 border border-amber-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon-sm"
                        variant="outline"
                        className="rounded-full border-amber-200"
                        onClick={() => onDecrement(cookie.slug)}
                        disabled={qty === 0}
                        aria-label={`Remove ${cookie.name}`}
                      >
                        –
                      </Button>
                      <span className="w-8 text-center text-sm font-semibold">{qty}</span>
                      <Button
                        size="icon-sm"
                        variant="outline"
                        className="rounded-full border-amber-200"
                        onClick={() => onIncrement(cookie.slug)}
                        disabled={disableAdd}
                        aria-label={`Add ${cookie.name}`}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
