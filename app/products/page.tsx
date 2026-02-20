import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BreadcrumbListSchema } from "@/components/json-ld/BreadcrumbListSchema";
import { ProductSection } from "@/components/ProductSection";
import { WOOD_TYPES, getProductsByWood } from "@/lib/wood-types";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "All Products | Braai Wood & Firewood Delivery Gauteng | Miwesu",
  description: "Premium firewood and braai wood: Sekelbos, Geelhaak, Braai Mix. 10kg, 20kg, 30kg bags. Free delivery Gauteng. Verified dry.",
  openGraph: {
    title: "All Products | Miwesu Fire Wood",
    description: "Sekelbos, Geelhaak, Braai Mix — 10kg, 20kg, 30kg. Free delivery Gauteng.",
    url: `${SITE_URL}/products`,
    type: "website",
  },
  alternates: { canonical: `${SITE_URL}/products` },
};

const BREADCRUMBS = [{ name: "Home", url: "/" }, { name: "Products", url: "/products" }];

export default function AllProductsPage() {
  return (
    <>
      <BreadcrumbListSchema items={BREADCRUMBS} />
      <SiteHeader variant="default" />
      <div className="pt-24 sm:pt-28 pb-8 px-4 sm:px-6 max-w-[1320px] mx-auto">
        <nav className="flex items-baseline gap-x-2 text-[0.75rem] sm:text-[0.8rem] text-[var(--titanium)] mb-6">
          <Link href="/" className="no-underline hover:text-[var(--copper)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--text)]">Products</span>
        </nav>
        <h1 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold tracking-tight text-white mb-10 sm:mb-14">
          All Products
        </h1>
        {WOOD_TYPES.map((wood) => (
          <ProductSection
            key={wood.slug}
            title={wood.title}
            description={wood.description}
            products={getProductsByWood(wood.slug)}
          />
        ))}
      </div>
      <SiteFooter variant="default" />
    </>
  );
}
