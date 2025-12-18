import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Preset = {
  id: string;
  name: string;
  description: string;
  pattern: string[];
};

type CuratedPresetsRailProps = {
  presets: Preset[];
  onSelect: (presetId: string) => void;
  boxSize: number;
};

export function CuratedPresetsRail({ presets, onSelect, boxSize }: CuratedPresetsRailProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-amber-950">Or start with a curated box</h3>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">Fits {boxSize} cookies</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {presets.map((preset) => (
          <Card
            key={preset.id}
            className="group cursor-pointer border-amber-100/90 bg-white/90 transition hover:-translate-y-1 hover:border-amber-200 hover:shadow-md"
            onClick={() => onSelect(preset.id)}
          >
            <CardHeader>
              <CardTitle className="text-amber-950">{preset.name}</CardTitle>
              <CardDescription>{preset.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              Auto-fills to {boxSize} cookies • tap to customize afterward
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
