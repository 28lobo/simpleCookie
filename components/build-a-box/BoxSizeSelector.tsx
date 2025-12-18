import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type BoxSizeSelectorProps = {
  boxSize: number;
  totalSelected: number;
  onSelect: (size: number) => void;
};

const OPTIONS = [
  { size: 6, label: "Half Dozen", note: "Great for gifting" },
  { size: 12, label: "One Dozen", note: "Most popular" },
  { size: 24, label: "Share Box", note: "Party-ready" },
];

export function BoxSizeSelector({ boxSize, totalSelected, onSelect }: BoxSizeSelectorProps) {
  return (
    <Card className="border-amber-100/90 bg-white/90">
      <CardHeader className="pb-0">
        <CardTitle className="text-xl text-amber-950">Choose your box size</CardTitle>
      </CardHeader>
      <CardContent className="mt-4 grid gap-3 sm:grid-cols-3">
        {OPTIONS.map((option) => {
          const disabled = totalSelected > option.size;
          const isActive = option.size === boxSize;
          return (
            <Button
              key={option.size}
              variant="outline"
              className={cn(
                "flex h-full flex-col items-start gap-1 rounded-2xl border-amber-100 bg-white px-4 py-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200",
                isActive && "border-amber-900 bg-amber-50 text-amber-950 shadow-md",
                disabled && "opacity-60"
              )}
              onClick={() => !disabled && onSelect(option.size)}
              disabled={disabled}
            >
              <span className="text-lg font-semibold">{option.size} cookies</span>
              <span className="text-sm text-muted-foreground">{option.label} • {option.note}</span>
              {disabled && (
                <span className="text-xs text-amber-700">Remove {totalSelected - option.size} to pick this size</span>
              )}
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
}
