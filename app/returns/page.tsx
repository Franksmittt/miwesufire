import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BreadcrumbListSchema } from "@/components/json-ld/BreadcrumbListSchema";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Returns & Refunds | Miwesu Fire Wood – Gauteng Firewood",
  description: "Returns and refunds policy for Miwesu Fire Wood. Defective goods, voluntary returns, restocking and redelivery. Firewood Gauteng.",
  keywords: ["firewood returns", "braai wood refunds", "Miwesu returns", "Gauteng firewood"],
  openGraph: {
    title: "Returns & Refunds | Miwesu Fire Wood – Gauteng Firewood",
    description: "Returns and refunds policy for firewood and braai wood. Gauteng.",
    url: `${SITE_URL}/returns`,
    type: "website",
    locale: "en_ZA",
    siteName: "Miwesu Fire Wood",
  },
  twitter: { card: "summary", title: "Returns & Refunds | Miwesu Fire Wood", description: "Returns and refunds policy. Firewood Gauteng." },
  alternates: { canonical: `${SITE_URL}/returns` },
};

const RETURNS_BREADCRUMBS = [{ name: "Home", url: "/" }, { name: "Policies", url: "/policies" }, { name: "Returns & Refunds", url: "/returns" }];

export default function ReturnsPage() {
  return (
    <>
      <BreadcrumbListSchema items={RETURNS_BREADCRUMBS} />
      <SiteHeader variant="default" />
      <header className="pt-14 policy-hero">
        <h1>Returns & Refunds</h1>
        <p className="back">
          <Link href="/policies">← Back to Policies</Link>
        </p>
      </header>
      <main className="policy-body">
        <p>We distinguish between defective goods (where you have legal rights) and voluntary returns (where we may allow a return on our terms).</p>

        <h2>Defective goods (your rights under the CPA)</h2>
        <p>If goods are genuinely defective (e.g. rot, delamination, or structural failure in graded structural timber), the Consumer Protection Act gives you the right to choose repair, replacement or refund within 6 months. We cannot override this.</p>
        <p>We reserve the right to <strong>inspect the goods</strong> on-site or require their return for assessment before processing a refund or replacement. If the defect is caused by misuse, improper storage, incorrect installation or failure to maintain the wood (e.g. lack of sealing), the warranty is void.</p>

        <h2>Voluntary returns (change of mind)</h2>
        <p>For in-store or direct purchases there is no legal right to return non-defective goods. We may accept returns as a courtesy, on our terms:</p>
        <ul>
          <li><strong>Restocking fee:</strong> A handling/restocking fee (e.g. 10–15%) may apply.</li>
          <li><strong>Return transport:</strong> You are responsible for the cost of returning goods to our depot. &quot;Free delivery&quot; does not mean free collection.</li>
          <li><strong>Condition:</strong> Goods must be in original, resellable condition (uncut, unpainted, original packaging where applicable).</li>
        </ul>

        <h2>Items we cannot accept for return</h2>
        <p>Except where a latent defect is found that could not have been detected before use:</p>
        <ul>
          <li><strong>Special orders:</strong> Custom-cut, planed, machined or treated-to-order timber (CPA Section 20).</li>
          <li><strong>Altered goods:</strong> Timber that has been cut, drilled, painted, varnished or installed is deemed &quot;used&quot; and cannot be returned.</li>
          <li><strong>Perishables:</strong> Opened cement or chemicals sensitive to moisture or contamination.</li>
        </ul>
      </main>
      <SiteFooter variant="policy" />
    </>
  );
}
