import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BreadcrumbListSchema } from "@/components/json-ld/BreadcrumbListSchema";
import { SUBURBS } from "@/lib/suburbs";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Firewood Delivery Areas | Braai Wood Delivery Gauteng | Miwesu",
  description:
    "Premium firewood and braai wood delivery across Gauteng: Sandton, Bryanston, Fourways, Centurion, Waterfall, Dainfern, Pretoria East. Free delivery in qualifying zones. Zone A, B, C.",
  keywords: [
    "firewood delivery Gauteng",
    "braai wood delivery",
    "firewood Sandton",
    "firewood Bryanston",
    "firewood Fourways",
    "firewood Centurion",
    "firewood delivery Johannesburg",
    "free delivery Gauteng",
  ],
  openGraph: {
    title: "Firewood Delivery Areas | Braai Wood Delivery Gauteng | Miwesu",
    description: "Premium firewood and braai wood delivery across Gauteng. Free delivery in qualifying zones.",
    url: `${SITE_URL}/delivery-areas`,
    type: "website",
    locale: "en_ZA",
    siteName: "Miwesu Fire Wood",
  },
  twitter: { card: "summary", title: "Firewood Delivery Areas | Miwesu", description: "Braai wood delivery Gauteng. Free delivery zones." },
  alternates: { canonical: `${SITE_URL}/delivery-areas` },
};

const DELIVERY_AREAS_BREADCRUMBS = [{ name: "Home", url: "/" }, { name: "Delivery areas", url: "/delivery-areas" }];

export default function DeliveryAreasPage() {
  return (
    <>
      <BreadcrumbListSchema items={DELIVERY_AREAS_BREADCRUMBS} />
      <SiteHeader variant="default" />
      <main className="pt-14 max-w-[1320px] mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-center mb-2">
          Firewood delivery areas
        </h1>
        <p className="text-[var(--titanium)] text-center text-[1rem] mb-10">
          Premium braai wood delivery across Gauteng. Select your suburb for details and delivery info.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {SUBURBS.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/delivery/${s.slug}`}
                className="flex items-center min-h-[44px] py-2.5 px-4 rounded-[var(--squircle)] text-[var(--titanium)] no-underline hover:text-[var(--copper)] hover:bg-[var(--rim)]/20 transition-colors text-[0.9375rem] touch-manipulation"
              >
                {s.areaName} <span className="text-[0.75rem] opacity-70">(Zone {s.zone})</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-[0.875rem] text-[var(--titanium)] text-center">
          <Link href="/delivery" className="text-[var(--copper)] no-underline hover:underline">
            Delivery policy
          </Link>
          {" · "}
          <Link href="/#products" className="text-[var(--copper)] no-underline hover:underline">
            View products
          </Link>
        </p>
      </main>
      <SiteFooter variant="default" />
    </>
  );
}
