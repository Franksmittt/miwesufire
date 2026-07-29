import { ProductsPageContent } from "@/components/ProductsPageContent";
import { BreadcrumbListSchema } from "@/components/json-ld/BreadcrumbListSchema";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "All Products | Braai Wood & Firewood Delivery Gauteng | Miwesu",
  description:
    "Premium firewood and braai wood: Sekelbos, Geelhaak, Braai Mix. 10kg, 20kg, 30kg bags. Free delivery Gauteng. Verified dry.",
  openGraph: {
    title: "All Products | Miwesu Fire Wood",
    description: "Sekelbos, Geelhaak, Braai Mix. 10kg, 20kg, 30kg. Free delivery Gauteng.",
    url: `${SITE_URL}/products`,
    type: "website",
  },
  alternates: { canonical: `${SITE_URL}/products` },
};

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
];

export default function AllProductsPage() {
  return (
    <>
      <BreadcrumbListSchema items={BREADCRUMBS} />
      <ProductsPageContent />
    </>
  );
}
