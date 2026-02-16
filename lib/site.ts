/** Replace with your WhatsApp business number: country code + number, no + or spaces. e.g. 27821234567 */
export const WHATSAPP_NUMBER = "27730309679"; // +27 73 030 9679

export const WHATSAPP_ORDER_LINK = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

/** SEO & Schema: canonical base URL (no trailing slash). Set NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL =
  typeof process.env.NEXT_PUBLIC_SITE_URL === "string" && process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
    : "https://miwesu.co.za";

/** Business contact for LocalBusiness schema */
export const SITE_PHONE = "+27 82 000 0000";
export const SITE_NAME = "Miwesu Fire Wood";
export const SITE_DESCRIPTION =
  "Premium firewood and braai wood in Gauteng. Certified dry, verified moisture. Free delivery. Kameeldoring, Sekelbos, Geelhaak. Buy firewood online. Thermal hardware for braai and fireplace.";

/** SEO: keyword set for site-wide and page-level meta */
export const SITE_KEYWORDS = [
  "firewood Gauteng",
  "braai wood delivery",
  "firewood Johannesburg",
  "firewood Sandton",
  "buy firewood online",
  "dry firewood",
  "Kameeldoring",
  "Sekelbos",
  "Geelhaak",
  "Knoppiesdoring",
  "Snuifpeul",
  "premium firewood Gauteng",
  "firewood for sale",
  "braai wood for sale",
  "bulk firewood",
  "firewood delivery Gauteng",
  "verified moisture firewood",
  "free delivery Gauteng",
  "firewood Pretoria",
  "firewood Fourways",
  "firewood Bryanston",
  "firewood Centurion",
  "long burning firewood",
  "best braai wood South Africa",
  "thermal hardware",
  "firewood suppliers Gauteng",
];

/** Optional: social/profile URLs for LocalBusiness schema sameAs (e.g. Facebook, Instagram) */
export const SITE_SAME_AS: string[] = [];
