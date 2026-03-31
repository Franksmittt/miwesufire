import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BreadcrumbListSchema } from "@/components/json-ld/BreadcrumbListSchema";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Terms and Conditions | Miwesu Fire Wood – Gauteng Firewood",
  description: "Terms of sale and supply for Miwesu Fire Wood. B2B/B2C, product specs, firewood delivery Gauteng, returns and online sales (ECTA).",
  keywords: ["firewood terms", "braai wood sale terms", "Miwesu terms", "Gauteng firewood"],
  openGraph: {
    title: "Terms and Conditions | Miwesu Fire Wood – Gauteng Firewood",
    description: "Terms of sale and supply for firewood and braai wood delivery Gauteng.",
    url: `${SITE_URL}/terms`,
    type: "website",
    locale: "en_ZA",
    siteName: "Miwesu Fire Wood",
  },
  twitter: { card: "summary", title: "Terms and Conditions | Miwesu Fire Wood", description: "Terms of sale and supply. Firewood Gauteng." },
  alternates: { canonical: `${SITE_URL}/terms` },
};

const TERMS_BREADCRUMBS = [{ name: "Home", url: "/" }, { name: "Policies", url: "/policies" }, { name: "Terms and Conditions", url: "/terms" }];

export default function TermsPage() {
  return (
    <>
      <BreadcrumbListSchema items={TERMS_BREADCRUMBS} />
      <SiteHeader variant="default" />
      <header className="pt-14 policy-hero">
        <h1>Terms and Conditions of Sale & Supply</h1>
        <p className="back">
          <Link href="/policies">← Back to Policies</Link>
        </p>
      </header>
      <main className="policy-body">
        <p><strong>1. Application and scope</strong></p>
        <p><strong>1.1</strong> These Terms govern all transactions between Miwesu (&quot;the Seller&quot;) and the purchasing party (&quot;the Buyer&quot;).</p>
        <p><strong>1.2 B2B exemption:</strong> Where the Buyer is a juristic person (company, close corporation, trust) with an asset value or annual turnover equal to or exceeding R2,000,000.00, the Consumer Protection Act (CPA) shall not apply. These Terms then govern exclusively.</p>
        <p><strong>1.3</strong> Where the Buyer is a consumer under the CPA, these Terms apply to the fullest extent permitted by law.</p>

        <h2>2. Product specifications and natural characteristics</h2>
        <p><strong>2.1</strong> The Buyer acknowledges that timber is a natural product. Knots, grain variance, colour variation, resin bleeding and minor surface checking are inherent and do not constitute defects.</p>
        <p><strong>2.2</strong> Wood is hygroscopic. The Seller warrants timber is supplied within standard moisture parameters for its grade. The Seller accepts no liability for warping, bowing, cupping or splitting after delivery due to environmental factors, improper storage or failure to seal.</p>
        <p><strong>2.3</strong> Only timber explicitly marked as Structural (S5/S7) complies with SANS 1783. Timber marked Industrial, Utility or XXX is sold voetstoots and is not for structural use. No liability for structural failure where non-graded timber is used.</p>

        <h2>3. Special orders</h2>
        <p><strong>3.1</strong> Goods cut-to-size, planed, machined or treated to the Buyer&apos;s requirements are &quot;Special Order Goods&quot;.</p>
        <p><strong>3.2</strong> Under CPA Section 20, Special Order Goods are non-returnable and non-refundable unless materially defective.</p>
        <p><strong>3.3</strong> Orders for Special Order Goods may not be cancelled once manufacturing or cutting has commenced.</p>

        <h2>4. Delivery policy (Gauteng)</h2>
        <p><strong>4.1</strong> Free delivery applies only to orders meeting the advertised minimum and within the advertised radius. Otherwise standard delivery rates apply.</p>
        <p><strong>4.2</strong> Delivery is curbside or driveway entrance only. Personnel may not carry goods into the residence, backyard or upstairs.</p>
        <p><strong>4.3</strong> If the Buyer requests the vehicle to enter the property, the Buyer indemnifies the Seller against damage to paving, gates, walls, vegetation or infrastructure.</p>
        <p><strong>4.4</strong> The Buyer warrants the delivery address is accessible to heavy vehicles. Failed deliveries due to inaccessibility or absence may incur a redelivery fee.</p>

        <h2>5. Returns and refunds</h2>
        <p><strong>5.1</strong> Defective goods may be returned within 6 months for repair, replacement or refund, subject to inspection. Warranty is void if the defect is from misuse, improper storage or failure to maintain.</p>
        <p><strong>5.2</strong> Voluntary returns of non-defective stock are at the Seller&apos;s discretion within 10 days, in original condition, and subject to a handling/restocking fee.</p>
        <p><strong>5.3</strong> The Buyer bears the cost of returning goods for voluntary returns.</p>

        <h2>6. Reservation of ownership</h2>
        <p>Ownership of the goods remains with the Seller until the purchase price is paid in full. The Seller may repossess unpaid goods.</p>

        <h2>7. Online sales (ECTA)</h2>
        <p>For online purchases, the Buyer has a 7-day cooling-off period. If the Buyer cancels under this right, the Buyer is liable for the direct cost of returning the goods.</p>
      </main>
      <SiteFooter variant="policy" />
    </>
  );
}
