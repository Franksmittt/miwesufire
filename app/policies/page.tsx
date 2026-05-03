import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BreadcrumbListSchema } from "@/components/json-ld/BreadcrumbListSchema";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Policies | Firewood & Braai Wood Delivery Gauteng | Miwesu",
  description: "Terms, delivery, returns and product policy for firewood and braai wood. Miwesu Fire Wood – Gauteng firewood delivery.",
  keywords: ["firewood delivery policy", "braai wood Gauteng", "Miwesu policies", "firewood terms"],
  openGraph: {
    title: "Policies | Firewood & Braai Wood Delivery Gauteng | Miwesu",
    description: "Terms, delivery, returns and product policy for firewood and braai wood. Gauteng.",
    url: `${SITE_URL}/policies`,
    type: "website",
    locale: "en_ZA",
    siteName: "Miwesu Fire Wood",
  },
  twitter: { card: "summary", title: "Policies | Miwesu Fire Wood", description: "Terms, delivery, returns and product policy. Firewood Gauteng." },
  alternates: { canonical: `${SITE_URL}/policies` },
};

const POLICY_BREADCRUMBS = [{ name: "Home", url: "/" }, { name: "Policies", url: "/policies" }];

export default function PoliciesPage() {
  return (
    <>
      <BreadcrumbListSchema items={POLICY_BREADCRUMBS} />
      <SiteHeader variant="default" />
      <header className="pt-20 sm:pt-24 py-10 sm:py-12 md:py-16 px-4 sm:px-6 text-center border-b border-[var(--rim)]">
        <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold mb-2">Policies</h1>
        <p className="text-[var(--titanium)] text-[0.875rem] sm:text-[0.95rem]">
          Terms, delivery, returns and product policy for wood and thermal fuel.
        </p>
      </header>
      <div className="max-w-[720px] mx-auto py-8 px-4 sm:py-12 sm:px-6 md:py-[48px] pb-12 sm:pb-20">
        <Link
          href="/terms"
          className="block min-h-[44px] py-4 px-4 sm:py-6 sm:px-5 mb-2 sm:mb-3 border border-[var(--rim)] rounded-[var(--squircle)] text-[var(--text)] no-underline transition-[border-color,background] hover:border-[var(--copper)] hover:bg-[rgba(184,115,51,0.06)] touch-manipulation"
        >
          <h2 className="text-[1.05rem] sm:text-[1.15rem] mb-1.5">Terms and Conditions</h2>
          <p className="text-[var(--titanium)] text-[0.85rem] sm:text-[0.9rem] leading-snug">
            Terms of sale and supply: application, B2B/B2C, product specifications, special orders, delivery, returns, ownership and online sales.
          </p>
        </Link>
        <Link
          href="/delivery"
          className="block min-h-[44px] py-4 px-4 sm:py-6 sm:px-5 mb-2 sm:mb-3 border border-[var(--rim)] rounded-[var(--squircle)] text-[var(--text)] no-underline transition-[border-color,background] hover:border-[var(--copper)] hover:bg-[rgba(184,115,51,0.06)] touch-manipulation"
        >
          <h2 className="text-[1.05rem] sm:text-[1.15rem] mb-1.5">Delivery Policy</h2>
          <p className="text-[var(--titanium)] text-[0.85rem] sm:text-[0.9rem] leading-snug">
            Free delivery in Gauteng: zones, minimum order, curbside delivery, property access indemnity, and redelivery.
          </p>
        </Link>
        <Link
          href="/returns"
          className="block min-h-[44px] py-4 px-4 sm:py-6 sm:px-5 mb-2 sm:mb-3 border border-[var(--rim)] rounded-[var(--squircle)] text-[var(--text)] no-underline transition-[border-color,background] hover:border-[var(--copper)] hover:bg-[rgba(184,115,51,0.06)] touch-manipulation"
        >
          <h2 className="text-[1.05rem] sm:text-[1.15rem] mb-1.5">Returns & Refunds</h2>
          <p className="text-[var(--titanium)] text-[0.85rem] sm:text-[0.9rem] leading-snug">
            Defective goods, voluntary returns, restocking fees, return transport, and non-returnable items.
          </p>
        </Link>
        <Link
          href="/product"
          className="block min-h-[44px] py-4 px-4 sm:py-6 sm:px-5 mb-2 sm:mb-3 border border-[var(--rim)] rounded-[var(--squircle)] text-[var(--text)] no-underline transition-[border-color,background] hover:border-[var(--copper)] hover:bg-[rgba(184,115,51,0.06)] touch-manipulation"
        >
          <h2 className="text-[1.05rem] sm:text-[1.15rem] mb-1.5">Product & Wood Policy</h2>
          <p className="text-[var(--titanium)] text-[0.85rem] sm:text-[0.9rem] leading-snug">
            Nature of wood, moisture and movement, grading, preservative treatment, and what we do not classify as defects.
          </p>
        </Link>
      </div>
      <SiteFooter variant="policy" />
    </>
  );
}
