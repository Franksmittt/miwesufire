import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BreadcrumbListSchema } from "@/components/json-ld/BreadcrumbListSchema";
import { ProductSection } from "@/components/ProductSection";
import { getProductsByWood } from "@/lib/wood-types";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Braai Mix | Premium Braai Wood & Firewood | Miwesu",
  description: "Hand-selected Braai Mix  - Snuifpeul, Knoppiesdoring, Geelhaak, Sekelbos. 10kg, 20kg, 30kg. Free delivery Gauteng.",
  openGraph: {
    title: "Braai Mix | Miwesu Fire Wood",
    description: "Our curated Braai Mix. Gourmet aroma, easy light, long-lasting coals. Free delivery Gauteng.",
    url: `${SITE_URL}/products/braai-mix`,
    type: "website",
  },
  alternates: { canonical: `${SITE_URL}/products/braai-mix` },
};

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "Braai Mix", url: "/products/braai-mix" },
];

export default function BraaiMixPage() {
  const products = getProductsByWood("braai-mix");

  return (
    <>
      <BreadcrumbListSchema items={BREADCRUMBS} />
      <SiteHeader variant="default" />
      <div className="pt-24 sm:pt-28 pb-12 sm:pb-20 px-4 sm:px-6 max-w-[1320px] mx-auto">
        <nav className="flex items-baseline gap-x-2 text-[0.75rem] sm:text-[0.8rem] text-[var(--titanium)] mb-6">
          <Link href="/" className="no-underline hover:text-[var(--copper)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="no-underline hover:text-[var(--copper)] transition-colors">Products</Link>
          <span>/</span>
          <span className="text-[var(--text)]">Braai Mix</span>
        </nav>
        <h1 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold tracking-tight text-white mb-4">
          Braai Mix
        </h1>
        <p className="text-gray-400 text-[1rem] sm:text-[1.05rem] leading-relaxed max-w-2xl mb-10 sm:mb-12">
          Our Braai Mix is a hand-selected combination of South Africa&apos;s finest hardwoods  - primarily Snuifpeul (Scented-pod) and 
          Knoppiesdoring (Knob-thorn), with occasional additions of Geelhaak and Sekelbos. It delivers gourmet aroma, an easy light, 
          and coals that outlast the party. The braai master&apos;s choice for flavor and performance.
        </p>
        <ProductSection
          title="Braai Mix products"
          description="Choose your bag size: 10kg, 20kg or 30kg. All prices include free delivery in Gauteng (MOQ applies)."
          products={products}
        />
        <p className="mt-8">
          <Link href="/woods" className="text-[var(--copper)] hover:underline text-sm font-medium">
            Learn about the woods in this mix →
          </Link>
        </p>
      </div>
      <SiteFooter variant="default" />
    </>
  );
}
