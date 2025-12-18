"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { BoxSizeSelector } from "./BoxSizeSelector";
import { BoxStepper } from "./BoxStepper";
import { BoxSummaryPanel } from "./BoxSummaryPanel";
import { CookiesGrid } from "./CookiesGrid";
import { CuratedPresetsRail } from "./CuratedPresetsRail";
import { TeamSection } from "../TeamSection";
import { NewsletterSection } from "../NewsletterSection";

type CookieDefinition = {
  slug: string;
  name: string;
  tags: string[];
  price: number;
  flavor: string;
  accent: string;
};

type SelectedCookies = Record<string, number>;

type Preset = {
  id: string;
  name: string;
  description: string;
  pattern: string[];
};

type BoxBuilderLayoutProps = {
  fromSlug?: string;
};

const COOKIE_CATALOG: CookieDefinition[] = [
  {
    slug: "midnight-chocolate",
    name: "Midnight Chocolate",
    tags: ["Chocolate-forward", "Rich"],
    price: 4.5,
    flavor: "Cocoa-dense dough with fudge ripples and sea salt.",
    accent: "from-amber-200 via-amber-100 to-amber-50",
  },
  {
    slug: "golden-butter",
    name: "Golden Butter",
    tags: ["Classic", "Buttery"],
    price: 4,
    flavor: "Cultured butter, vanilla bean, and flaky salt finish.",
    accent: "from-amber-100 via-yellow-50 to-white",
  },
  {
    slug: "oatmeal-pecan",
    name: "Oatmeal Pecan",
    tags: ["Nutty", "Chewy"],
    price: 4,
    flavor: "Toasted pecans, molasses, and soft oats with spice.",
    accent: "from-emerald-100 via-emerald-50 to-white",
  },
  {
    slug: "caramel-crunch",
    name: "Caramel Crunch",
    tags: ["Caramel", "Textured"],
    price: 4.25,
    flavor: "Brown sugar dough with caramel shards and cocoa nibs.",
    accent: "from-orange-100 via-amber-50 to-white",
  },
  {
    slug: "espresso-almond",
    name: "Espresso Almond",
    tags: ["Bold", "Coffee"],
    price: 4.5,
    flavor: "Roasted almond, dark roast espresso, and dark chips.",
    accent: "from-stone-200 via-amber-100 to-white",
  },
];

const CURATED_PRESETS: Preset[] = [
  {
    id: "bestsellers",
    name: "Bestsellers Box",
    description: "Our most-loved four, balanced and crowd-pleasing.",
    pattern: [
      "midnight-chocolate",
      "golden-butter",
      "oatmeal-pecan",
      "caramel-crunch",
    ],
  },
  {
    id: "chocolate-lovers",
    name: "Chocolate Lovers",
    description: "Extra fudge, espresso, and salted caramel for balance.",
    pattern: [
      "midnight-chocolate",
      "espresso-almond",
      "caramel-crunch",
      "midnight-chocolate",
    ],
  },
  {
    id: "grandma",
    name: "Grandma’s Favorites",
    description: "Comfort picks with spice, nuts, and buttery edges.",
    pattern: [
      "oatmeal-pecan",
      "golden-butter",
      "caramel-crunch",
      "oatmeal-pecan",
    ],
  },
  {
    id: "seasonal",
    name: "Seasonal Picks",
    description: "Chef’s seasonal mix with a chocolate anchor.",
    pattern: [
      "midnight-chocolate",
      "caramel-crunch",
      "golden-butter",
      "espresso-almond",
    ],
  },
];

const DEFAULT_BOX_SIZE = 12;

export function BoxBuilderLayout({ fromSlug }: BoxBuilderLayoutProps) {
  const router = useRouter();

  const initialSelection: SelectedCookies = useMemo(() => {
    if (!fromSlug) return {};
    const isValid = COOKIE_CATALOG.some((cookie) => cookie.slug === fromSlug);
    if (!isValid) return {};
    return { [fromSlug]: 2 };
  }, [fromSlug]);

  const [boxSize, setBoxSize] = useState<number>(DEFAULT_BOX_SIZE);
  const [selectedCookies, setSelectedCookies] = useState<SelectedCookies>(
    initialSelection
  );

  const totalSelected = useMemo(
    () =>
      Object.values(selectedCookies).reduce((total, qty) => total + qty, 0),
    [selectedCookies]
  );

  const startedCookie = useMemo(
    () => COOKIE_CATALOG.find((cookie) => cookie.slug === fromSlug),
    [fromSlug]
  );

  const handleSetBoxSize = (size: number) => {
    if (totalSelected > size) return;
    setBoxSize(size);
  };

  const handlePresetSelect = (presetId: string) => {
    const preset = CURATED_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;

    const mix: SelectedCookies = {};
    let remaining = boxSize;
    let index = 0;

    while (remaining > 0) {
      const slug = preset.pattern[index % preset.pattern.length];
      if (!COOKIE_CATALOG.find((cookie) => cookie.slug === slug)) {
        index += 1;
        continue;
      }
      mix[slug] = (mix[slug] || 0) + 1;
      remaining -= 1;
      index += 1;
    }

    setSelectedCookies(mix);
  };

  const updateCookieQty = (slug: string, delta: number) => {
    setSelectedCookies((prev) => {
      const current = prev[slug] || 0;
      const nextQty = current + delta;
      if (nextQty < 0) return prev;

      const nextTotal =
        Object.entries(prev).reduce(
          (sum, [key, qty]) => sum + (key === slug ? 0 : qty),
          0
        ) + nextQty;

      if (nextTotal > boxSize) return prev;

      const updated = { ...prev };
      if (nextQty === 0) {
        delete updated[slug];
      } else {
        updated[slug] = nextQty;
      }
      return updated;
    });
  };

  const subtotal = useMemo(() => {
    return Object.entries(selectedCookies).reduce((sum, [slug, qty]) => {
      const cookie = COOKIE_CATALOG.find((c) => c.slug === slug);
      if (!cookie) return sum;
      return sum + cookie.price * qty;
    }, 0);
  }, [selectedCookies]);

  const onNext = () => {
    router.push("/build-a-box/gift");
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#f5f0e9,transparent_40%),radial-gradient(circle_at_80%_0%,#f4ede1,transparent_40%),linear-gradient(180deg,#fffaf5_0%,#fffdf9_50%,#fdf7ee_100%)] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:py-14">
        <BoxStepper activeStep="cookies" />

        <div className="mt-6 grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)] lg:gap-8">
          <div className="space-y-6">
            <BoxSizeSelector
              boxSize={boxSize}
              onSelect={handleSetBoxSize}
              totalSelected={totalSelected}
            />

            <CuratedPresetsRail
              presets={CURATED_PRESETS}
              onSelect={handlePresetSelect}
              boxSize={boxSize}
            />

            <CookiesGrid
              cookies={COOKIE_CATALOG}
              selectedCookies={selectedCookies}
              boxSize={boxSize}
              totalSelected={totalSelected}
              onIncrement={(slug) => updateCookieQty(slug, 1)}
              onDecrement={(slug) => updateCookieQty(slug, -1)}
              startedCookie={startedCookie}
            />
          </div>

          <BoxSummaryPanel
            cookies={COOKIE_CATALOG}
            selectedCookies={selectedCookies}
            boxSize={boxSize}
            subtotal={subtotal}
            startedCookie={startedCookie}
            onNext={onNext}
          />
        </div>

        <div className="mt-10 space-y-8 lg:hidden">
          <TeamSection
            staff={[
              { name: "Mara Kim", role: "Founder / Baker", note: "Brown butter obsessive." },
              { name: "Eli Torres", role: "Chocolate Lead", note: "Single-origin sourcing." },
              { name: "Sana Lee", role: "Packaging", note: "Gift-worthy every time." },
            ]}
          />
          <NewsletterSection />
        </div>

        <div className="lg:hidden fixed inset-x-4 bottom-5 z-20">
          <div className="flex items-center justify-between rounded-2xl border border-amber-100/90 bg-white/95 px-4 py-3 shadow-lg shadow-amber-100/70 backdrop-blur">
            <div className="flex flex-col text-sm font-semibold text-amber-950">
              <span>
                {totalSelected} / {boxSize} selected
              </span>
              <span className="text-xs text-muted-foreground">
                {totalSelected === boxSize
                  ? "Your box is full — swap to adjust"
                  : `${boxSize - totalSelected} spots left`}
              </span>
            </div>
            <button
              className="rounded-full bg-amber-900 px-4 py-2 text-sm font-semibold text-amber-50 shadow-sm transition hover:-translate-y-0.5"
              disabled={totalSelected === 0}
              onClick={onNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
