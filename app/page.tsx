import { HomePageContent } from "@/components/HomePageContent";
import { SITE_URL } from "@/lib/site";

const HOME_TITLE = "Heat. Redefined. | Premium Firewood & Braai Wood Delivery Gauteng";
const HOME_DESCRIPTION =
  "Premium firewood and braai wood in Gauteng. Buy firewood online. Certified dry, verified moisture under 12%. Free delivery. Sekelbos, Geelhaak, Braai Mix. From R25 per bag. Thermal hardware for braai and fireplace.";
const HOME_IMAGE = `${SITE_URL}/Gemini_Generated_Image_eax31qeax31qeax3%20(2).png`;

export const metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  keywords: [
    "firewood Gauteng",
    "braai wood delivery",
    "buy firewood online",
    "premium firewood",
    "dry firewood",
    "firewood Johannesburg",
    "firewood Sandton",
    "Sekelbos",
    "Geelhaak",
    "free delivery Gauteng",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: SITE_URL,
    siteName: "Miwesu Fire Wood",
    locale: "en_ZA",
    type: "website",
    images: [{ url: HOME_IMAGE, width: 1200, height: 630, alt: "Miwesu Fire Wood – premium braai wood and firewood delivery Gauteng" }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [HOME_IMAGE],
  },
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;
  return <HomePageContent initialProductId={product ?? null} />;
}
