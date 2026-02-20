/** Replace with your WhatsApp business number: country code + number, no + or spaces. e.g. 27821234567 */
export const WHATSAPP_NUMBER = "27730309679"; // +27 73 030 9679
/** Display format for schema and contact (primary ordering line) */
export const WHATSAPP_DISPLAY = "+27 73 030 9679";

export const WHATSAPP_ORDER_LINK = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

/** SEO & Schema: canonical base URL (no trailing slash). Set NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL =
  typeof process.env.NEXT_PUBLIC_SITE_URL === "string" && process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
    : "https://miwesufirewood.co.za";

/** Business contact for LocalBusiness schema (primary: WhatsApp ordering) */
export const SITE_PHONE = WHATSAPP_DISPLAY;
export const SITE_NAME = "Miwesu Fire Wood";
export const SITE_DESCRIPTION =
  "Premium firewood and braai wood Gauteng. Kiln-verified sub-12% moisture. Next-day delivery. Sekelbos, Geelhaak, Braai Mix. Best hardwood for closed combustion and braai. Free delivery. Order via WhatsApp.";

/** SEO: keyword set for site-wide and page-level meta */
export const SITE_KEYWORDS = [
  "firewood Gauteng",
  "braai wood delivery",
  "firewood Johannesburg",
  "firewood Sandton",
  "buy firewood online",
  "sub-12% moisture firewood",
  "kiln-dried firewood",
  "next-day firewood delivery Gauteng",
  "best hardwood closed combustion stoves South Africa",
  "Sekelbos",
  "Geelhaak",
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
  "firewood stacking service Johannesburg",
  "firewood suppliers Gauteng",
];

/** Facebook page (used in footer and LocalBusiness schema sameAs) */
export const SITE_FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61588037947442";

/** Optional: social/profile URLs for LocalBusiness schema sameAs (e.g. Facebook, Instagram) */
export const SITE_SAME_AS: string[] = [SITE_FACEBOOK_URL];
