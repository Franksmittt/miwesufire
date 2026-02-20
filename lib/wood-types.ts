import { PRODUCTS } from "./products";
import type { Product } from "./products";

export type WoodSlug = "sekelbos" | "geelhaak" | "braai-mix";

export interface WoodType {
  slug: WoodSlug;
  title: string;
  /** Brief description for homepage and category pages. */
  description: string;
  /** Product IDs for this wood type (10kg, 20kg, 30kg). */
  productIds: string[];
}

export const WOOD_TYPES: WoodType[] = [
  {
    slug: "sekelbos",
    title: "Sekelbos",
    description:
      "Premium Sekelbos (Sickle Bush) — low moisture, clean hot burn. Perfect for frequent braais, camping, and a high-heat sear. Rich in natural oils, it lights easily and burns with minimal smoke.",
    productIds: ["sekelbos-10", "sekelbos-20", "sekelbos-30"],
  },
  {
    slug: "geelhaak",
    title: "Geelhaak",
    description:
      "Geelhaak (Blue Thorn) is the ultimate all-rounder: bright flames and steady coals. Dense, heavy bushveld wood for weekend braais and fire pits. Balanced burn that cooks perfectly.",
    productIds: ["geelhaak-10", "geelhaak-20", "geelhaak-30"],
  },
  {
    slug: "braai-mix",
    title: "Braai Mix",
    description:
      "Our hand-selected blend of South Africa's finest hardwoods — Snuifpeul, Knoppiesdoring, Geelhaak and Sekelbos. Gourmet aroma, easy light, and coals that outlast the party.",
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
