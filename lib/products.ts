export interface Product {
  id: string;
  name: string;
  tier: string;
  shortDescription: string;
  longDescription: string;
  images: string[];
  price: number;
  moq: number;
  priceLabel: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "geelhak-12",
    name: "Geelhaak Hardwood",
    tier: "12kg Bag",
    shortDescription:
      "The Balanced Burn: Bright Flames & Steady Heat. Geelhaak (Blue Thorn) is the ultimate all-rounder-bridging crackling flame and enduring coals for a versatile, premium fire.",
    longDescription: `<p>Geelhaak (Blue Thorn) is the ultimate all-rounder for any fire enthusiast. Known for its distinct yellowish hue beneath the bark, this heavy bushveld wood is expertly sourced for a premium fire experience. It bridges the gap perfectly between a crackling flame and enduring coals, making it incredibly versatile.</p>
<h3 class="product-subhead">Why Choose Geelhaak?</h3>
<ul><li><strong>Perfect Balance:</strong> Delivers a bright, cheerful flame that transitions beautifully into steady, reliable coals.</li>
<li><strong>Consistent Heat:</strong> Dense and heavy, ensuring your fire burns hotter for longer.</li>
<li><strong>Best For:</strong> Weekend braais, fire pits, and anyone who loves a visually beautiful fire that still cooks perfectly.</li></ul>`,
    images: [
      "/Gemini_Generated_Image_rvtbyirvtbyirvtb.jpg",
      "/WhatsApp Image 2026-02-09 at 19.57.13.jpeg",
      "/WhatsApp Image 2026-02-09 at 19.57.14.jpeg",
    ],
    price: 30,
    moq: 50,
    priceLabel: "R30.00 per bag",
  },
  {
    id: "braai-mix-12",
    name: "The Ultimate Braai Mix",
    tier: "12kg Bag",
    shortDescription:
      "The Master Blend: Gourmet Aroma Meets Iron-Hard Coals. A hand-selected combination of South Africa's finest hardwoods for the ultimate burn profile.",
    longDescription: `<p>Take the guesswork out of the perfect fire with our curated Braai Mix. This bag features a hand-selected combination of South Africa's finest hardwoods, primarily blending Snuifpeul (Scented-pod) and Knoppiesdoring (Knob-thorn), with occasional additions of Geelhaak and Sekelbos for the ultimate burn profile.</p>
<h3 class="product-subhead">What's in the Mix?</h3>
<ul><li><strong>Snuifpeul (Lekkerruikpeul):</strong> Infuses your meat with a distinct, sweet, and musky bushveld smoke-a true gourmet choice.</li>
<li><strong>Knoppiesdoring:</strong> An iron-hard heavyweight that produces intense, long-lasting coals with minimal smoke and ash.</li>
<li><strong>Best For:</strong> The braai master who wants it all-mouth-watering flavor, an easy light, and coals that outlast the party.</li></ul>`,
    images: [
      "/Gemini_Generated_Image_rvtbyirvtbyirvtb.jpg",
      "/WhatsApp Image 2026-02-09 at 19.57.15.jpeg",
      "/WhatsApp Image 2026-02-09 at 19.57.16.jpeg",
    ],
    price: 30,
    moq: 50,
    priceLabel: "R30.00 per bag",
  },
  {
    id: "sekelbos-30",
    name: "Premium Sekelbos",
    tier: "30kg Bulk Bag",
    shortDescription:
      "The Braai Favorite: High Heat, Zero Hassle. Premium Sekelbos (Sickle Bush) with incredibly low moisture for a perfectly clean, hot burn.",
    longDescription: `<p>Stock up with our 30kg bulk bag of premium Sekelbos (Sickle Bush). Distinctive for its beautiful two-tone wood, Sekelbos is a staple for a classic South African braai. Because it is naturally baked dry in the African sun, it has incredibly low moisture content, resulting in a perfectly clean burn.</p>
<h3 class="product-subhead">Why Choose Sekelbos?</h3>
<ul><li><strong>High-Energy Burn:</strong> Rich in natural oils, it catches fire easily and burns with a beautiful, hot orange and yellow flame.</li>
<li><strong>Clean & Smokeless:</strong> Exceptionally dry wood means maximum heat with virtually no smoke.</li>
<li><strong>Best For:</strong> Frequent braaiers, camping trips, and achieving that signature high-heat sear on your steaks.</li></ul>`,
    images: [
      "/Gemini_Generated_Image_4s6ihm4s6ihm4s6i.jpg",
      "/WhatsApp Image 2026-02-09 at 19.57.16 (1).jpeg",
      "/WhatsApp Image 2026-02-09 at 19.57.13.jpeg",
    ],
    price: 70,
    moq: 20,
    priceLabel: "R70.00 per bag",
  },
  {
    id: "braai-mix-30",
    name: "The Ultimate Braai Mix (Bulk)",
    tier: "30kg Bulk Bag",
    shortDescription:
      "The Master Blend: Maximum Value & Long-Lasting Fires. Our signature curated blend in a 30kg bulk bag for the serious entertainer.",
    longDescription: `<p>Our signature curated blend, now in a 30kg bulk bag for the serious entertainer. This is a premium combination of Snuifpeul (for that sweet, gourmet aroma) and Knoppiesdoring (for intense, long-lasting heat), perfectly balanced to give you the ultimate braai experience from the first spark to the final coal.</p>
<h3 class="product-subhead">Why Buy in Bulk?</h3>
<ul><li><strong>Unbeatable Value:</strong> Ensure you never run out of top-tier wood mid-braai.</li>
<li><strong>The Perfect Coals:</strong> Knoppiesdoring guarantees heat that lasts for hours, while Snuifpeul provides that unmatched, mouth-watering smoke flavor.</li>
<li><strong>Best For:</strong> Long weekends, large gatherings, open fireplaces, and stocking up for the season.</li></ul>`,
    images: [
      "/Gemini_Generated_Image_4s6ihm4s6ihm4s6i.jpg",
      "/WhatsApp Image 2026-02-09 at 19.57.14.jpeg",
      "/WhatsApp Image 2026-02-09 at 19.57.15.jpeg",
    ],
    price: 70,
    moq: 20,
    priceLabel: "R70.00 per bag",
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
