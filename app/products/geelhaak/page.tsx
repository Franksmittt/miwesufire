import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BreadcrumbListSchema } from "@/components/json-ld/BreadcrumbListSchema";
import { ProductSection } from "@/components/ProductSection";
import { getProductsByWood } from "@/lib/wood-types";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Geelhaak | Premium Braai Wood & Firewood | Miwesu",
  description: "Geelhaak (Blue Thorn) — bright flames, steady coals. 10kg, 20kg, 30kg bags. Free delivery Gauteng.",
  openGraph: {
    title: "Geelhaak | Miwesu Fire Wood",
    description: "Geelhaak hardwood firewood. Balanced burn for braais and fire pits. Free delivery Gauteng.",
    url: `${SITE_URL}/products/geelhaak`,
    type: "website",
  },
  alternates: { canonical: `${SITE_URL}/products/geelhaak` },
};

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "Geelhaak", url: "/products/geelhaak" },
];

export default function GeelhaakPage() {
  const products = getProductsByWood("geelhaak");

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
          <span className="text-[var(--text)]">Geelhaak</span>
        </nav>
        <h1 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold tracking-tight text-white mb-4">
          Geelhaak
        </h1>
        <p className="text-gray-400 text-[1rem] sm:text-[1.05rem] leading-relaxed max-w-2xl mb-10 sm:mb-12">
          Geelhaak (Blue Thorn) is the ultimate all-rounder for any fire enthusiast. Known for its distinct yellowish hue beneath the bark, 
          this heavy bushveld wood is expertly sourced for a premium fire experience. It bridges the gap perfectly between a crackling flame 
          and enduring coals — ideal for weekend braais, fire pits, and anyone who loves a visually beautiful fire that still cooks perfectly.
        </p>
        <ProductSection
          title="Geelhaak products"
          description="Choose your bag size: 10kg, 20kg or 30kg. All prices include free delivery in Gauteng (MOQ applies)."
          products={products}
        />
        <p className="mt-8">
          <Link href="/woods/geelhaak" className="text-[var(--copper)] hover:underline text-sm font-medium">
            Learn more about Geelhaak wood →
          </Link>
        </p>
      </div>
      <SiteFooter variant="default" />
    </>
  );
}
