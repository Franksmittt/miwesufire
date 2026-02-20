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

/** Short disclaimer appended to product copy: appearance may vary from images. */
const IMAGE_VARY_NOTE = '<p class="product-appearance-note">Product appearance may vary from images shown.</p>';

const GEELHAAK_DESC =
  "The Balanced Burn: Bright Flames & Steady Heat. Geelhaak (Blue Thorn) is the ultimate all-rounder—bridging crackling flame and enduring coals for a versatile, premium fire.";
const GEELHAAK_LONG = `<p>Geelhaak (Blue Thorn) is the ultimate all-rounder for any fire enthusiast. Known for its distinct yellowish hue beneath the bark, this heavy bushveld wood is expertly sourced for a premium fire experience. It bridges the gap perfectly between a crackling flame and enduring coals, making it incredibly versatile.</p>
<h3 class="product-subhead">Why Choose Geelhaak?</h3>
<ul><li><strong>Perfect Balance:</strong> Delivers a bright, cheerful flame that transitions beautifully into steady, reliable coals.</li>
<li><strong>Consistent Heat:</strong> Dense and heavy, ensuring your fire burns hotter for longer.</li>
<li><strong>Best For:</strong> Weekend braais, fire pits, and anyone who loves a visually beautiful fire that still cooks perfectly.</li></ul>${IMAGE_VARY_NOTE}`;

const BRAAI_MIX_DESC =
  "The Master Blend: Gourmet Aroma Meets Iron-Hard Coals. A hand-selected combination of South Africa's finest hardwoods for the ultimate burn profile.";
const BRAAI_MIX_LONG = `<p>Take the guesswork out of the perfect fire with our curated Braai Mix. This bag features a hand-selected combination of South Africa's finest hardwoods, primarily blending Snuifpeul (Scented-pod) and Knoppiesdoring (Knob-thorn), with occasional additions of Geelhaak and Sekelbos for the ultimate burn profile.</p>
<h3 class="product-subhead">What's in the Mix?</h3>
<ul><li><strong>Snuifpeul (Lekkerruikpeul):</strong> Infuses your meat with a distinct, sweet, and musky bushveld smoke—a true gourmet choice.</li>
<li><strong>Knoppiesdoring:</strong> An iron-hard heavyweight that produces intense, long-lasting coals with minimal smoke and ash.</li>
<li><strong>Best For:</strong> The braai master who wants it all—mouth-watering flavor, an easy light, and coals that outlast the party.</li></ul>${IMAGE_VARY_NOTE}`;

const SEKELBOS_DESC =
  "The Braai Favorite: High Heat, Zero Hassle. Premium Sekelbos (Sickle Bush) with incredibly low moisture for a perfectly clean, hot burn.";
const SEKELBOS_LONG = `<p>Premium Sekelbos (Sickle Bush) is a staple for a classic South African braai. Distinctive for its beautiful two-tone wood, it is naturally baked dry in the African sun, with incredibly low moisture content for a perfectly clean burn.</p>
<h3 class="product-subhead">Why Choose Sekelbos?</h3>
<ul><li><strong>High-Energy Burn:</strong> Rich in natural oils, it catches fire easily and burns with a beautiful, hot orange and yellow flame.</li>
<li><strong>Clean & Smokeless:</strong> Exceptionally dry wood means maximum heat with virtually no smoke.</li>
<li><strong>Best For:</strong> Frequent braaiers, camping trips, and achieving that signature high-heat sear on your steaks.</li></ul>${IMAGE_VARY_NOTE}`;

const IMAGES_GEELHAAK = [
  "/Gemini_Generated_Image_rvtbyirvtbyirvtb.jpg",
  "/WhatsApp Image 2026-02-09 at 19.57.13.jpeg",
  "/WhatsApp Image 2026-02-09 at 19.57.14.jpeg",
];
const IMAGES_BRAAI = [
  "/Gemini_Generated_Image_rvtbyirvtbyirvtb.jpg",
  "/WhatsApp Image 2026-02-09 at 19.57.15.jpeg",
  "/WhatsApp Image 2026-02-09 at 19.57.16.jpeg",
];
const IMAGES_SEKELBOS = [
  "/Gemini_Generated_Image_4s6ihm4s6ihm4s6i.jpg",
  "/WhatsApp Image 2026-02-09 at 19.57.16 (1).jpeg",
  "/WhatsApp Image 2026-02-09 at 19.57.13.jpeg",
];

export const PRODUCTS: Product[] = [
  // 10kg @ R25 each, min 50 bags — Braai Mix, Geelhaak, Sekelbos
  {
    id: "geelhaak-10",
    name: "Geelhaak Hardwood",
    tier: "10kg Bag",
    shortDescription: GEELHAAK_DESC,
    longDescription: GEELHAAK_LONG,
    images: IMAGES_GEELHAAK,
    price: 25,
    moq: 50,
    priceLabel: "R25.00 per bag",
  },
  {
    id: "braai-mix-10",
    name: "The Ultimate Braai Mix",
    tier: "10kg Bag",
    shortDescription: BRAAI_MIX_DESC,
    longDescription: BRAAI_MIX_LONG,
    images: IMAGES_BRAAI,
    price: 25,
    moq: 50,
    priceLabel: "R25.00 per bag",
  },
  {
    id: "sekelbos-10",
    name: "Premium Sekelbos",
    tier: "10kg Bag",
    shortDescription: SEKELBOS_DESC,
    longDescription: SEKELBOS_LONG,
    images: IMAGES_SEKELBOS,
    price: 25,
    moq: 50,
    priceLabel: "R25.00 per bag",
  },
  // 20kg @ R50 each, min 40 bags — Braai Mix, Geelhaak, Sekelbos
  {
    id: "geelhaak-20",
    name: "Geelhaak Hardwood",
    tier: "20kg Bag",
    shortDescription: GEELHAAK_DESC,
    longDescription: GEELHAAK_LONG,
    images: IMAGES_GEELHAAK,
    price: 50,
    moq: 40,
    priceLabel: "R50.00 per bag",
  },
  {
    id: "braai-mix-20",
    name: "The Ultimate Braai Mix",
    tier: "20kg Bag",
    shortDescription: BRAAI_MIX_DESC,
    longDescription: BRAAI_MIX_LONG,
    images: IMAGES_BRAAI,
    price: 50,
    moq: 40,
    priceLabel: "R50.00 per bag",
  },
  {
    id: "sekelbos-20",
    name: "Premium Sekelbos",
    tier: "20kg Bag",
    shortDescription: SEKELBOS_DESC,
    longDescription: SEKELBOS_LONG,
    images: IMAGES_SEKELBOS,
    price: 50,
    moq: 40,
    priceLabel: "R50.00 per bag",
  },
  // 30kg @ R70 each, min 20 bags — Braai Mix, Geelhaak, Sekelbos
  {
    id: "geelhaak-30",
    name: "Geelhaak Hardwood",
    tier: "30kg Bag",
    shortDescription: GEELHAAK_DESC,
    longDescription: GEELHAAK_LONG,
    images: IMAGES_GEELHAAK,
    price: 70,
    moq: 20,
    priceLabel: "R70.00 per bag",
  },
  {
    id: "braai-mix-30",
    name: "The Ultimate Braai Mix",
    tier: "30kg Bag",
    shortDescription: BRAAI_MIX_DESC,
    longDescription: BRAAI_MIX_LONG,
    images: IMAGES_BRAAI,
    price: 70,
    moq: 20,
    priceLabel: "R70.00 per bag",
  },
  {
    id: "sekelbos-30",
    name: "Premium Sekelbos",
    tier: "30kg Bag",
    shortDescription: SEKELBOS_DESC,
    longDescription: SEKELBOS_LONG,
    images: IMAGES_SEKELBOS,
    price: 70,
    moq: 20,
    priceLabel: "R70.00 per bag",
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
