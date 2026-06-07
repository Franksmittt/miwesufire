import { PRODUCTS, type Product } from "./products";

/** Single product preset for the ad generator: copy + footer line (e.g. MOQ). */
export interface AdProductPreset {
  id: string;
  label: string;
  title: string;
  subheading: string;
  spec1: string;
  spec2: string;
  spec3: string;
  spec4: string;
  footerLine: string;
}

const CUSTOM_PRESET: AdProductPreset = {
  id: "",
  label: "Custom (no product)",
  title: "MIWESU",
  subheading: "PREMIUM FIRE WOOD",
  spec1: "SELECT PRODUCT",
  spec2: "CATALOG PRICE",
  spec3: "Free Delivery",
  spec4: "Gauteng Only",
  footerLine: "",
};

/** Smaller-order special: 25 × 10kg at R25/bag (250kg total, R625). */
const FIRE_SPECIAL_PRESET: AdProductPreset = {
  id: "fire-special",
  label: "Fire Special  - 25×10kg R25/bag",
  title: "MIWESU",
  subheading: "FIRE SPECIAL",
  spec1: "25 BAGS",
  spec2: "R625",
  spec3: "Free Delivery",
  spec4: "Gauteng Only",
  footerLine: "MOQ 25 Bags",
};

function formatBagPrice(product: Product): string {
  return `R${product.price}/bag`;
}

function productToPreset(product: Product): AdProductPreset {
  return {
    id: product.id,
    label: `${product.name} - ${product.tier}`,
    title: "MIWESU",
    subheading: product.name.toUpperCase(),
    spec1: `${product.moq} BAGS`,
    spec2: formatBagPrice(product),
    spec3: "Free Delivery",
    spec4: "Gauteng Only",
    footerLine: `MOQ ${product.moq} Bags`,
  };
}

/** Product ad presets are generated from the catalog so prices stay in sync. */
const PRODUCT_PRESETS: AdProductPreset[] = PRODUCTS.map(productToPreset);

const PRODUCT_PROMO_PRESET: AdProductPreset = {
  id: "product-promo",
  label: "Product Promo",
  title: "MIWESU",
  subheading: "PREMIUM FIRE WOOD",
  spec1: "SELECT PRODUCT",
  spec2: "CATALOG PRICE",
  spec3: "Free Delivery",
  spec4: "Gauteng Only",
  footerLine: "",
};

/** Ad generator dropdown: Custom, Fire Special, generic promo, then catalog products. */
export const AD_PRESETS: AdProductPreset[] = [
  CUSTOM_PRESET,
  FIRE_SPECIAL_PRESET,
  PRODUCT_PROMO_PRESET,
  ...PRODUCT_PRESETS,
];

export function getPresetById(id: string): AdProductPreset {
  if (!id) return CUSTOM_PRESET;
  return AD_PRESETS.find((p) => p.id === id) ?? CUSTOM_PRESET;
}
