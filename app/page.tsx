import { CookieGrid } from "../components/CookieGrid";
import { HeaderBar } from "../components/HeaderBar";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { NewsletterSection } from "../components/NewsletterSection";
import { ShopSection } from "../components/ShopSection";
import { StorySection } from "../components/StorySection";
import { TeamSection } from "../components/TeamSection";
import { VisitSection } from "../components/VisitSection";

const cookieCards = [
  {
    title: "Chocolate Chip Walnut",
    price: "$24",
    flavor: "Caramelized dough, toasted walnuts, molten chips",
    badge: "Bestseller",
    accent: "bg-gradient-to-b from-amber-200 via-amber-100 to-amber-50",
  },
  {
    title: "Oatmeal Raisin",
    price: "$22",
    flavor: "Chewy oats, plump raisins, cinnamon finish",
    badge: "Cozy pick",
    accent: "bg-gradient-to-b from-emerald-200 via-emerald-100 to-emerald-50",
  },
  {
    title: "Butter Cookie",
    price: "$20",
    flavor: "Cultured butter, flaky salt, golden edges",
    badge: "Café classic",
    accent: "bg-gradient-to-b from-amber-100 via-yellow-50 to-amber-50",
  },
  {
    title: "Chocolate Fudge",
    price: "$26",
    flavor: "Midnight cocoa, fudge ripples, sea salt",
    badge: "For chocolate lovers",
    accent: "bg-gradient-to-b from-amber-300 via-orange-100 to-amber-50",
  },
];

const staff = [
  { name: "Mara Kim", role: "Founder / Baker", note: "Brown butter obsessive." },
  { name: "Eli Torres", role: "Chocolate Lead", note: "Single-origin sourcing." },
  { name: "Sana Lee", role: "Packaging", note: "Gift-worthy every time." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdf7f2] text-slate-900">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-6 sm:px-8 lg:px-10">
        <HeaderBar />
        <Hero />
        <HowItWorks />
        <CookieGrid cookies={cookieCards} />
        <StorySection cookies={cookieCards} />
        <ShopSection cookies={cookieCards} />
        <TeamSection staff={staff} />
        <VisitSection />
        <NewsletterSection />
      </div>
    </div>
  );
}
