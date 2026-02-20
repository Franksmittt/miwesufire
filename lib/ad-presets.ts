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
  spec1: "50 BAGS",
  spec2: "R25/bag",
  spec3: "Free Delivery",
  spec4: "Gauteng Only",
  footerLine: "",
};

/** Smaller-order special: 25 × 10kg at R25/bag (250kg total, R625). */
const FIRE_SPECIAL_PRESET: AdProductPreset = {
  id: "fire-special",
  label: "Fire Special — 25×10kg R25/bag",
  title: "MIWESU",
  subheading: "FIRE SPECIAL",
  spec1: "25 BAGS",
  spec2: "R625",
  spec3: "Free Delivery",
  spec4: "Gauteng Only",
  footerLine: "MOQ 25 Bags",
};

/** 10kg bags: MOQ 50. Wood type (Geelhaak, Braai Mix, Sekelbos) goes on the image. */
const TIER_10KG: AdProductPreset = {
  id: "10kg",
  label: "10kg Bags",
  title: "MIWESU",
  subheading: "PREMIUM FIRE WOOD",
  spec1: "50 BAGS",
  spec2: "R25/bag",
  spec3: "Free Delivery",
  spec4: "Gauteng Only",
  footerLine: "MOQ 50 Bags",
};

/** 20kg bags: MOQ 40. */
const TIER_20KG: AdProductPreset = {
  id: "20kg",
  label: "20kg Bags",
  title: "MIWESU",
  subheading: "PREMIUM FIRE WOOD",
  spec1: "40 BAGS",
  spec2: "R50/bag",
  spec3: "Free Delivery",
  spec4: "Gauteng Only",
  footerLine: "MOQ 40 Bags",
};

/** 30kg bags: MOQ 20. */
const TIER_30KG: AdProductPreset = {
  id: "30kg",
  label: "30kg Bags",
  title: "MIWESU",
  subheading: "PREMIUM FIRE WOOD",
  spec1: "20 BAGS",
  spec2: "R70/bag",
  spec3: "Free Delivery",
  spec4: "Gauteng Only",
  footerLine: "MOQ 20 Bags",
};

/** Ad generator dropdown: Custom, Fire Special, then 10kg / 20kg / 30kg only. */
export const AD_PRESETS: AdProductPreset[] = [
  CUSTOM_PRESET,
  FIRE_SPECIAL_PRESET,
  TIER_10KG,
  TIER_20KG,
  TIER_30KG,
];

export function getPresetById(id: string): AdProductPreset {
  if (!id) return CUSTOM_PRESET;
  return AD_PRESETS.find((p) => p.id === id) ?? CUSTOM_PRESET;
}
