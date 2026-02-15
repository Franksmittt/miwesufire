import { SITE_URL } from "@/lib/site";
import type { Product } from "@/lib/products";

type Props = { product: Product };

export function ProductSchema({ product }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name} - ${product.tier}`,
    description: product.shortDescription.replace(/<[^>]+>/g, "").slice(0, 500),
    image: product.images.map((src) => (src.startsWith("http") ? src : `${SITE_URL}${src}`)),
    brand: { "@type": "Brand", name: "Miwesu" },
    sku: product.id,
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/products/${product.id}`,
      priceCurrency: "ZAR",
      price: product.price.toFixed(2),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Minimum order", value: `${product.moq} bags` },
      { "@type": "PropertyValue", name: "Delivery", value: "Free delivery Gauteng" },
      { "@type": "PropertyValue", name: "Moisture content", value: "Verified under 12%" },
      { "@type": "PropertyValue", name: "Verified moisture", value: "<12%" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
