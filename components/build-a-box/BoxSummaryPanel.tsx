import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CookieDefinition = {
  slug: string;
  name: string;
  price: number;
};

type BoxSummaryPanelProps = {
  cookies: CookieDefinition[];
  selectedCookies: Record<string, number>;
  boxSize: number;
  subtotal: number;
  onNext: () => void;
  startedCookie?: CookieDefinition;
};

export function BoxSummaryPanel({
  cookies,
  selectedCookies,
  boxSize,
  subtotal,
  onNext,
  startedCookie,
}: BoxSummaryPanelProps) {
  const totalSelected = Object.values(selectedCookies).reduce(
    (total, qty) => total + qty,
    0
  );

  const summaryList = Object.entries(selectedCookies)
    .map(([slug, qty]) => {
      const cookie = cookies.find((c) => c.slug === slug);
      return cookie ? { ...cookie, qty } : null;
    })
    .filter(Boolean) as Array<{ slug: string; name: string; price: number; qty: number }>;

  return (
    <Card className="sticky top-6 border-amber-100/90 bg-white/95 shadow-md">
      <CardHeader>
        <CardTitle className="text-xl text-amber-950">Your Grahamies Box</CardTitle>
        <p className="text-sm text-muted-foreground">
          {totalSelected} / {boxSize} cookies selected
        </p>
        {startedCookie && (
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            Started with {startedCookie.name}
          </span>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {summaryList.length === 0 ? (
          <div className="rounded-xl border border-dashed border-amber-200 bg-amber-50/60 px-4 py-6 text-sm text-amber-900">
            Add cookies from the grid to see them here.
          </div>
        ) : (
          <ul className="space-y-3">
            {summaryList.map((item) => (
              <li key={item.slug} className="flex items-center justify-between text-sm font-semibold text-amber-950">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800">
                    {item.qty}x
                  </span>
                  <span>{item.name}</span>
                </div>
                <span className="text-amber-900">${(item.price * item.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center justify-between text-sm font-semibold text-amber-950">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <p className="text-xs text-muted-foreground">
          You’ll personalize your box and add gift details on the next step.
        </p>
        <Button
          className="w-full rounded-full bg-amber-900 text-amber-50 hover:bg-amber-800"
          size="lg"
          onClick={onNext}
          disabled={totalSelected === 0}
        >
          Next: Gift details
        </Button>
      </CardContent>
    </Card>
  );
}
