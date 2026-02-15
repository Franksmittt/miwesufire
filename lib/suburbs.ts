/**
 * Gauteng suburbs for programmatic SEO: /delivery/[suburb]
 * Target: "Firewood delivery [Suburb]", "Kameeldoring delivery [Estate]"
 */
export interface SuburbConfig {
  slug: string;
  name: string;
  /** Display name for H1/meta (e.g. "Waterfall Estate") */
  areaName: string;
  zone: "A" | "B" | "C";
  /** Short line for landing page copy */
  tagline: string;
}

export const SUBURBS: SuburbConfig[] = [
  { slug: "alberton", name: "Alberton", areaName: "Alberton", zone: "A", tagline: "Free delivery zone. Premium braai wood to your door." },
  { slug: "bedfordview", name: "Bedfordview", areaName: "Bedfordview", zone: "B", tagline: "Premium firewood delivery. Verified dry, every time." },
  { slug: "bryanston", name: "Bryanston", areaName: "Bryanston", zone: "B", tagline: "Engineered heat for Bryanston estates. Kameeldoring, Sekelbos, Geelhaak." },
  { slug: "centurion", name: "Centurion", areaName: "Centurion", zone: "B", tagline: "Braai wood delivery Centurion. High-density hardwood, guaranteed dry." },
  { slug: "dainfern", name: "Dainfern", areaName: "Dainfern Golf Estate", zone: "B", tagline: "Premium firewood delivery to Dainfern. White-glove option available." },
  { slug: "edenvale", name: "Edenvale", areaName: "Edenvale", zone: "B", tagline: "Firewood delivery Edenvale. From R25 per bag, MOQ from 20 bags." },
  { slug: "fourways", name: "Fourways", areaName: "Fourways", zone: "B", tagline: "Fourways braai wood delivery. Certified dry, free Gauteng delivery." },
  { slug: "greenside", name: "Greenside", areaName: "Greenside", zone: "B", tagline: "Premium firewood Greenside. Sekelbos, Geelhaak, Braai Mix." },
  { slug: "midrand", name: "Midrand", areaName: "Midrand", zone: "B", tagline: "Firewood Midrand. Reliable delivery, verified moisture content." },
  { slug: "midstream", name: "Midstream", areaName: "Midstream Estate", zone: "B", tagline: "Estate delivery Midstream. Firewood for braai and fireplace." },
  { slug: "parkhurst", name: "Parkhurst", areaName: "Parkhurst", zone: "B", tagline: "Parkhurst firewood delivery. Quality hardwood, Gauteng-wide." },
  { slug: "pretoria-east", name: "Pretoria East", areaName: "Pretoria East", zone: "C", tagline: "Pretoria East braai wood. Premium delivery to your estate." },
  { slug: "randburg", name: "Randburg", areaName: "Randburg", zone: "B", tagline: "Randburg firewood delivery. Kameeldoring, Sekelbos, bulk options." },
  { slug: "roodepoort", name: "Roodepoort", areaName: "Roodepoort", zone: "B", tagline: "Roodepoort firewood. Free delivery in zone. Order online." },
  { slug: "sandton", name: "Sandton", areaName: "Sandton", zone: "B", tagline: "Sandton firewood delivery. Premium braai wood for estates and homes." },
  { slug: "silver-lakes", name: "Silver Lakes", areaName: "Silver Lakes", zone: "B", tagline: "Silver Lakes firewood. Guaranteed dry, free Gauteng delivery." },
  { slug: "steyn-city", name: "Steyn City", areaName: "Steyn City", zone: "B", tagline: "Steyn City firewood delivery. High-performance thermal hardware." },
  { slug: "waterfall", name: "Waterfall", areaName: "Waterfall Estate", zone: "B", tagline: "Waterfall Estate firewood. Engineered heat, delivered." },
  { slug: "woodhill", name: "Woodhill", areaName: "Woodhill Estate", zone: "B", tagline: "Woodhill firewood delivery. Premium hardwood, verified moisture." },
  { slug: "johannesburg", name: "Johannesburg", areaName: "Johannesburg", zone: "B", tagline: "Firewood Johannesburg. Braai wood delivery across JHB." },
  { slug: "johannesburg-south", name: "Johannesburg South", areaName: "Johannesburg South", zone: "A", tagline: "JHB South firewood. Free delivery zone. Order today." },
];

export function getSuburbBySlug(slug: string): SuburbConfig | undefined {
  return SUBURBS.find((s) => s.slug === slug);
}

export function getAllSuburbSlugs(): string[] {
  return SUBURBS.map((s) => s.slug);
}
