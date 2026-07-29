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
      <header className="pt-20 sm:pt-24 py-10 sm:py-12 md:py-16 px-4 sm:px-6 text-center border-b border-[var(--rim)]">
        <span className="section-label">Knowledge</span>
        <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight text-ink mb-2">
          Meet our woods
        </h1>
        <p className="text-muted text-[0.875rem] sm:text-[0.95rem] max-w-xl mx-auto">
          Know what you’re buying. Each species has a different look, burn, and best use.
        </p>
      </header>
      <main className="max-w-6xl mx-auto py-10 sm:py-12 md:py-16 px-4 sm:px-6 pb-20 sm:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {WOODS.map((wood) => (
            <Link
              key={wood.slug}
              href={`/woods/${wood.slug}`}
              className="block product-tile p-5 sm:p-6 no-underline text-inherit"
            >
              <h2 className="font-display text-lg sm:text-xl font-semibold tracking-tight text-ink mb-1">
                {wood.name}
              </h2>
              <p className="text-xs text-muted mb-2">
                {wood.scientificName}
                {wood.aka.length > 0 && ` · ${wood.aka.slice(0, 2).join(", ")}`}
              </p>
              <p className="text-sm text-muted leading-snug">
                {wood.tagline}
              </p>
              {wood.inOurRange && (
                <p className="text-[0.7rem] tracking-[0.12em] uppercase text-ember mt-3">
                  In our range
                </p>
              )}
            </Link>
          ))}
        </div>
        <div className="mt-12 sm:mt-16 text-center">
          <Link href="/#products" className="btn-primary">
            View products
          </Link>
        </div>
      </main>
      <SiteFooter variant="policy" />
      <WhatsAppFloat />
    </>
  );
}
