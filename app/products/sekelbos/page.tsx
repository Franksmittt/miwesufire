import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BreadcrumbListSchema } from "@/components/json-ld/BreadcrumbListSchema";
import { ProductSection } from "@/components/ProductSection";
import { getProductsByWood } from "@/lib/wood-types";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Sekelbos | Premium Braai Wood & Firewood | Miwesu",
  description: "Premium Sekelbos (Sickle Bush) — low moisture, clean hot burn. 10kg, 20kg, 30kg bags. Free delivery Gauteng.",
  openGraph: {
    title: "Sekelbos | Miwesu Fire Wood",
    description: "Premium Sekelbos firewood. High heat, minimal smoke. Free delivery Gauteng.",
    url: `${SITE_URL}/products/sekelbos`,
    type: "website",
  },
  alternates: { canonical: `${SITE_URL}/products/sekelbos` },
};

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "Sekelbos", url: "/products/sekelbos" },
];

export default function SekelbosPage() {
  const products = getProductsByWood("sekelbos");
  if (products.length === 0) return null;

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
          <span className="text-[var(--text)]">Sekelbos</span>
        </nav>
        <h1 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold tracking-tight text-white mb-4">
          Sekelbos
        </h1>
        <p className="text-gray-400 text-[1rem] sm:text-[1.05rem] leading-relaxed max-w-2xl mb-10 sm:mb-12">
          Premium Sekelbos (Sickle Bush) is a staple for a classic South African braai. Distinctive for its beautiful two-tone wood, 
          it is naturally baked dry in the African sun, with incredibly low moisture content for a perfectly clean burn. 
          Rich in natural oils, it catches fire easily and burns with minimal smoke — ideal for frequent braaiers, camping, and a high-heat sear.
        </p>
        <ProductSection
          title="Sekelbos products"
          description="Choose your bag size: 10kg, 20kg or 30kg. All prices include free delivery in Gauteng (MOQ applies)."
          products={products}
        />
        <p className="mt-8">
          <Link href="/woods/sekelbos" className="text-[var(--copper)] hover:underline text-sm font-medium">
            Learn more about Sekelbos wood →
          </Link>
        </p>
      </div>
      <SiteFooter variant="default" />
    </>
  );
}
