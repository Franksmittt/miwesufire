import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { BreadcrumbListSchema } from "@/components/json-ld/BreadcrumbListSchema";
import { WOODS } from "@/lib/woods";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Meet our woods | Braai Wood Species | Firewood Gauteng | Miwesu",
  description:
    "Learn about the braai wood species we use: Geelhaak, Knoppiesdoring, Sekelbos, Snuifpeul, Mopane, Rooibos, Kameeldoring. Burn profile, long burning firewood, best wood for braai. Premium firewood Gauteng.",
  keywords: [
    "braai wood species",
    "Geelhaak",
    "Sekelbos",
    "Knoppiesdoring",
    "Snuifpeul",
    "Kameeldoring",
    "firewood Gauteng",
    "long burning firewood",
    "best wood for braai",
    "premium firewood",
  ],
  openGraph: {
    title: "Meet our woods | Braai Wood Species | Firewood Gauteng | Miwesu",
    description: "Learn about each braai wood species: appearance, burn profile, and best uses. Firewood Gauteng.",
    url: `${SITE_URL}/woods`,
    type: "website",
    locale: "en_ZA",
    siteName: "Miwesu Fire Wood",
  },
  twitter: { card: "summary", title: "Meet our woods | Miwesu Fire Wood", description: "Braai wood species. Firewood Gauteng." },
  alternates: { canonical: `${SITE_URL}/woods` },
};

const WOODS_BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Meet our woods", url: "/woods" },
];

export default function WoodsIndexPage() {
  return (
    <>
      <BreadcrumbListSchema items={WOODS_BREADCRUMBS} />
      <SiteHeader variant="default" />
      <header className="pt-14 py-10 sm:py-12 md:py-16 px-4 sm:px-6 text-center border-b border-white/10">
        <span className="text-bronze-gradient text-xs font-bold tracking-widest-tech uppercase mb-4 block">
          Knowledge
        </span>
        <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight text-white mb-2">
          Meet our woods
        </h1>
        <p className="text-gray-500 text-[0.875rem] sm:text-[0.95rem] max-w-xl mx-auto">
          Know what you’re buying. Each species has a different look, burn, and best use. Here’s the lowdown.
        </p>
      </header>
      <main className="max-w-[1320px] mx-auto py-10 sm:py-12 md:py-16 px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {WOODS.map((wood) => (
            <Link
              key={wood.slug}
              href={`/woods/${wood.slug}`}
              className="block squircle glass-panel p-5 sm:p-6 no-underline text-inherit transition-colors hover:border-bronze/40"
            >
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1">
                {wood.name}
              </h2>
              <p className="text-xs text-gray-500 mb-2">
                {wood.scientificName}
                {wood.aka.length > 0 && ` · ${wood.aka.slice(0, 2).join(", ")}`}
              </p>
              <p className="text-sm text-gray-400 leading-snug">
                {wood.tagline}
              </p>
              {wood.inOurRange && (
                <p className="text-[0.7rem] tracking-widest-tech uppercase text-bronze mt-3">
                  In our range
                </p>
              )}
            </Link>
          ))}
        </div>
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/#products"
            className="inline-flex items-center justify-center min-h-[48px] py-2.5 px-6 rounded-full text-sm font-semibold tracking-wide bg-white text-black hover:bg-gray-200 transition-colors no-underline"
          >
            View products
          </Link>
        </div>
      </main>
      <SiteFooter variant="policy" />
      <WhatsAppFloat />
    </>
  );
}
