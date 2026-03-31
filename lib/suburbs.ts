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
  { slug: "bryanston", name: "Bryanston", areaName: "Bryanston", zone: "B", tagline: "Engineered heat for Bryanston estates. Sekelbos, Geelhaak, Braai Mix." },
  { slug: "centurion", name: "Centurion", areaName: "Centurion", zone: "B", tagline: "Braai wood delivery Centurion. High-density hardwood, sub-12% moisture." },
  { slug: "dainfern", name: "Dainfern", areaName: "Dainfern Golf Estate", zone: "B", tagline: "Premium firewood delivery to Dainfern. Estate access, next-day where possible." },
  { slug: "edenvale", name: "Edenvale", areaName: "Edenvale", zone: "B", tagline: "Firewood delivery Edenvale. Kiln-verified dry wood. From R25 per bag." },
  { slug: "fourways", name: "Fourways", areaName: "Fourways", zone: "B", tagline: "Fourways braai wood delivery. Certified dry, free Gauteng delivery." },
  { slug: "greenside", name: "Greenside", areaName: "Greenside", zone: "B", tagline: "Premium firewood Greenside. Sekelbos, Geelhaak, Braai Mix." },
  { slug: "midrand", name: "Midrand", areaName: "Midrand", zone: "B", tagline: "Firewood Midrand. Next-day delivery, verified moisture content." },
  { slug: "midstream", name: "Midstream", areaName: "Midstream Estate", zone: "B", tagline: "Estate delivery Midstream. Firewood for braai and closed combustion." },
  { slug: "parkhurst", name: "Parkhurst", areaName: "Parkhurst", zone: "B", tagline: "Parkhurst firewood delivery. Quality hardwood, Gauteng-wide." },
  { slug: "pretoria-east", name: "Pretoria East", areaName: "Pretoria East", zone: "C", tagline: "Pretoria East braai wood. Premium delivery to your estate." },
  { slug: "randburg", name: "Randburg", areaName: "Randburg", zone: "B", tagline: "Randburg firewood delivery. Sekelbos, Geelhaak, bulk options." },
  { slug: "roodepoort", name: "Roodepoort", areaName: "Roodepoort", zone: "B", tagline: "Roodepoort firewood. Free delivery in zone. Order via WhatsApp." },
  { slug: "sandton", name: "Sandton", areaName: "Sandton", zone: "B", tagline: "Sandton firewood delivery. Premium braai wood for estates and homes." },
  { slug: "silver-lakes", name: "Silver Lakes", areaName: "Silver Lakes", zone: "B", tagline: "Silver Lakes firewood. Sub-12% moisture, free Gauteng delivery." },
  { slug: "steyn-city", name: "Steyn City", areaName: "Steyn City", zone: "B", tagline: "Steyn City firewood delivery. High-performance thermal hardware." },
  { slug: "waterfall", name: "Waterfall", areaName: "Waterfall Estate", zone: "B", tagline: "Waterfall Estate firewood. Engineered heat, delivered." },
  { slug: "woodhill", name: "Woodhill", areaName: "Woodhill Estate", zone: "B", tagline: "Woodhill firewood delivery. Premium hardwood, verified moisture." },
  { slug: "johannesburg", name: "Johannesburg", areaName: "Johannesburg", zone: "B", tagline: "Firewood Johannesburg. Braai wood delivery across JHB." },
  { slug: "johannesburg-south", name: "Johannesburg South", areaName: "Johannesburg South", zone: "A", tagline: "JHB South firewood. Free delivery zone. Order today." },
  // Sandton & The Parks (UHNW)
  { slug: "sandhurst", name: "Sandhurst", areaName: "Sandhurst", zone: "B", tagline: "Premium firewood Sandhurst. Kiln-dried hardwood for luxury fireplaces." },
  { slug: "hyde-park", name: "Hyde Park", areaName: "Hyde Park", zone: "B", tagline: "Hyde Park firewood delivery. Best hardwood for closed combustion stoves." },
  { slug: "morningside", name: "Morningside", areaName: "Morningside", zone: "B", tagline: "Morningside braai wood. Next-day delivery, verified dry." },
  { slug: "inanda", name: "Inanda", areaName: "Inanda", zone: "B", tagline: "Inanda firewood delivery. Premium Sekelbos and Geelhaak to your door." },
  { slug: "houghton-estate", name: "Houghton Estate", areaName: "Houghton Estate", zone: "B", tagline: "Houghton Estate firewood. Sub-12% moisture, free delivery." },
  { slug: "dunkeld", name: "Dunkeld", areaName: "Dunkeld", zone: "B", tagline: "Dunkeld braai wood delivery. Premium hardwood, Gauteng." },
  { slug: "parktown", name: "Parktown", areaName: "Parktown", zone: "B", tagline: "Parktown firewood. Kiln-verified, next-day delivery." },
  { slug: "rosebank", name: "Rosebank", areaName: "Rosebank", zone: "B", tagline: "Rosebank firewood delivery. Braai wood and fireplace fuel." },
  { slug: "illovo", name: "Illovo", areaName: "Illovo", zone: "B", tagline: "Illovo firewood. Premium braai wood and closed combustion fuel." },
  { slug: "sandown", name: "Sandown", areaName: "Sandown", zone: "B", tagline: "Sandown firewood delivery. Verified dry, free Gauteng delivery." },
  { slug: "atholl", name: "Atholl", areaName: "Atholl", zone: "B", tagline: "Atholl braai wood. Sekelbos, Geelhaak, Braai Mix." },
  { slug: "rivonia", name: "Rivonia", areaName: "Rivonia", zone: "B", tagline: "Rivonia firewood delivery. Premium hardwood, next-day where possible." },
  // Pretoria East & Estates
  { slug: "waterkloof", name: "Waterkloof", areaName: "Waterkloof", zone: "C", tagline: "Waterkloof firewood. Premium delivery to Pretoria East estates." },
  { slug: "mooikloof", name: "Mooikloof", areaName: "Mooikloof", zone: "C", tagline: "Mooikloof braai wood delivery. Kiln-dried, sub-12% moisture." },
  { slug: "brooklyn", name: "Brooklyn", areaName: "Brooklyn", zone: "C", tagline: "Brooklyn firewood delivery. Premium hardwood for braai and fireplace." },
  { slug: "lynnwood", name: "Lynnwood", areaName: "Lynnwood", zone: "C", tagline: "Lynnwood firewood. Next-day delivery, verified dry." },
  { slug: "faerie-glen", name: "Faerie Glen", areaName: "Faerie Glen", zone: "C", tagline: "Faerie Glen braai wood. Free delivery in qualifying zone." },
  { slug: "menlyn", name: "Menlyn", areaName: "Menlyn", zone: "C", tagline: "Menlyn firewood delivery. Premium Sekelbos and Geelhaak." },
  { slug: "garsfontein", name: "Garsfontein", areaName: "Garsfontein", zone: "C", tagline: "Garsfontein firewood. Best hardwood for closed combustion." },
  { slug: "rietfontein", name: "Rietfontein", areaName: "Rietfontein", zone: "C", tagline: "Rietfontein braai wood delivery. Gauteng premium delivery." },
  // Midrand & Northern Corridors
  { slug: "waterfall-equestrian", name: "Waterfall Equestrian", areaName: "Waterfall Equestrian Estate", zone: "B", tagline: "Waterfall Equestrian firewood. Estate delivery, premium hardwood." },
  { slug: "blue-hills", name: "Blue Hills", areaName: "Blue Hills", zone: "B", tagline: "Blue Hills firewood delivery. Kiln-verified dry wood." },
  { slug: "kyalami", name: "Kyalami", areaName: "Kyalami", zone: "B", tagline: "Kyalami braai wood. Sekelbos, Geelhaak, next-day delivery." },
  { slug: "lonehill", name: "Lonehill", areaName: "Lonehill", zone: "B", tagline: "Lonehill firewood. Premium delivery, verified moisture." },
  // Commercial culinary nodes
  { slug: "melrose-arch", name: "Melrose Arch", areaName: "Melrose Arch", zone: "B", tagline: "Melrose Arch firewood delivery. Premium braai wood for homes and hospitality." },
  { slug: "linden", name: "Linden", areaName: "Linden", zone: "B", tagline: "Linden firewood. Premium hardwood, free Gauteng delivery." },
];

export function getSuburbBySlug(slug: string): SuburbConfig | undefined {
  return SUBURBS.find((s) => s.slug === slug);
}

export function getAllSuburbSlugs(): string[] {
  return SUBURBS.map((s) => s.slug);
}
