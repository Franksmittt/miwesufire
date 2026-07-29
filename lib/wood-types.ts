import { PRODUCTS } from "./products";
import type { Product } from "./products";

export type WoodSlug = "sekelbos" | "geelhaak" | "braai-mix";

export interface WoodType {
  slug: WoodSlug;
  title: string;
  /** Short line for section headers / jump nav. */
  tagline: string;
  /** Brief description for homepage and category pages. */
  description: string;
  /** Longer products-page body (paragraphs) to balance hero imagery. */
  detailCopy: string[];
  /** Full-bleed / section hero image. */
  heroImage: string;
  /** Product IDs for this wood type (10kg, 20kg, 30kg). */
  productIds: string[];
}

export const WOOD_TYPES: WoodType[] = [
  {
    slug: "sekelbos",
    title: "Sekelbos",
    tagline: "High heat. Clean burn.",
    description:
      "Premium Sekelbos (Sickle Bush)  - low moisture, clean hot burn. Perfect for frequent braais, camping, and a high-heat sear. Rich in natural oils, it lights easily and burns with minimal smoke.",
    detailCopy: [
      "Premium Sekelbos (Sickle Bush) is the braaimaster's hot-sear wood. Low moisture, clean burn, and a flame that gets steaks and chops where they need to be without a cloud of smoke over the patio.",
      "Rich in natural oils, it lights easily and runs hot. That makes it ideal for frequent braais, camping fires, and any night when you want heat first and fuss last. The two-tone timber is baked dry in African sun and kiln-verified under 12% moisture before it leaves us.",
      "Use Sekelbos when you want a fast, confident fire: weekend sears, weeknight braais, or a clean burn in a fire pit. Pair it with a longer-coal wood if the kuier is going late, or run it solo when speed and heat matter most.",
      "Available in 10, 20, and 30 kg bags with free Gauteng delivery and COD after inspection. Pick your bag size below, or read more about how Sekelbos looks, lights, and burns.",
    ],
    heroImage: "/Sekelbos_Hero.png",
    productIds: ["sekelbos-10", "sekelbos-20", "sekelbos-30"],
  },
  {
    slug: "geelhaak",
    title: "Geelhaak",
    tagline: "Bright flame. Steady coals.",
    description:
      "Geelhaak (Blue Thorn) is the ultimate all-rounder: bright flames and steady coals. Dense, heavy bushveld wood for weekend braais and fire pits. Balanced burn that cooks perfectly.",
    detailCopy: [
      "Geelhaak (Blue Thorn) is the all-rounder in the yard. Bright flames for the first drinks, then a steady bed of coals that keeps cooking without constant babysitting. Dense, heavy bushveld wood with a yellowish heartwood under the bark.",
      "It bridges crackle and endurance: enough flame to look alive in a fire pit, enough coal life for a proper weekend braai. If you want one bag that covers guests, potjie, and chops without overthinking the blend, this is usually the answer.",
      "Geelhaak suits Saturday braais, estate fire pits, and closed fires that need reliable heat without wet-wood smoke. We kiln-verify every batch under 12% moisture so it lights clean and does not blacken glass or stone surrounds.",
      "Choose 10, 20, or 30 kg depending on how many fires you run. Free delivery across Gauteng. Inspect on arrival, then pay COD if the load is right.",
    ],
    heroImage: "/Geelhaak_Hero.png",
    productIds: ["geelhaak-10", "geelhaak-20", "geelhaak-30"],
  },
  {
    slug: "braai-mix",
    title: "Braai Mix",
    tagline: "Flavour that outlasts the party.",
    description:
      "Our hand-selected blend of South Africa's finest hardwoods  - Snuifpeul, Knoppiesdoring, Geelhaak and Sekelbos. Gourmet aroma, easy light, and coals that outlast the party.",
    detailCopy: [
      "The Ultimate Braai Mix takes the guesswork out of the perfect fire. We hand-select South Africa's finest hardwoods so one bag gives you aroma, easy light, and coals that hold for a long kuier.",
      "The blend leans on Snuifpeul (Scented-pod) for that sweet bushveld smoke, Knoppiesdoring for iron-hard, long-lasting coals, and touches of Geelhaak and Sekelbos for flame and heat. Gourmet flavour without building three different fires.",
      "Built for the braaimaster who wants it all: meat that tastes like the veld, a fire that starts without drama, and a coal bed that outlasts the last story. Verified under 12% moisture so the mix stays dry and predictable.",
      "Bagged in 10, 20, and 30 kg with free Gauteng delivery. Order below, or meet the individual woods that make up the mix if you want to go deeper.",
    ],
    heroImage: "/Snuifpeul_Hero.png",
    productIds: ["braai-mix-10", "braai-mix-20", "braai-mix-30"],
  },
];

export function getProductsByWood(slug: WoodSlug): Product[] {
  const wood = WOOD_TYPES.find((w) => w.slug === slug);
  if (!wood) return [];
  return wood.productIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => p != null);
}

export function getWoodBySlug(slug: string): WoodType | undefined {
  return WOOD_TYPES.find((w) => w.slug === slug);
}

export function getAllWoodTypes(): WoodType[] {
  return WOOD_TYPES;
}
