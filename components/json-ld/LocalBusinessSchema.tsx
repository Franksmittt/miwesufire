import { SITE_URL, SITE_NAME, SITE_PHONE, SITE_SAME_AS, WHATSAPP_NUMBER } from "@/lib/site";
import { SUBURBS } from "@/lib/suburbs";

export function LocalBusinessSchema() {
  const areaServed = SUBURBS.map((s) => ({
    "@type": "City" as const,
    name: s.areaName,
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  }));

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    name: SITE_NAME,
    description: "Premium firewood and braai wood delivery in Gauteng. Kiln-verified sub-12% moisture. Sekelbos, Geelhaak, Braai Mix. Free delivery to qualifying zones. Order via WhatsApp.",
    url: SITE_URL,
    telephone: SITE_PHONE,
    image: `${SITE_URL}/Gemini_Generated_Image_eax31qeax31qeax3%20(2).png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alberton",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    areaServed,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_PHONE,
      contactType: "customer service",
      areaServed: "ZA",
      availableLanguage: "English",
      url: `https://wa.me/${WHATSAPP_NUMBER}`,
      option: "WhatsApp ordering",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.26,
      longitude: 28.12,
    },
    priceRange: "R",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
    ],
  };
  if (SITE_SAME_AS.length > 0) schema.sameAs = SITE_SAME_AS;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
