import { HomePageContent } from "@/components/HomePageContent";

export const metadata = {
  title: "Miwesu Thermal | Heat. Redefined.",
  description: "Premium firewood and braai wood. Certified dry. Free delivery in Gauteng.",
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;
  return <HomePageContent initialProductId={product ?? null} />;
}
