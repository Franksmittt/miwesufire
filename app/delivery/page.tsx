import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BreadcrumbListSchema } from "@/components/json-ld/BreadcrumbListSchema";
import { FAQPageSchema } from "@/components/json-ld/FAQPageSchema";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Delivery Policy | Next-Day Firewood Delivery Gauteng | Miwesu",
  description: "Next-day firewood and braai wood delivery Gauteng. Free delivery in qualifying zones. Kiln-dried, sub-12% moisture. Estate delivery Waterfall, Dainfern, Sandton. Miwesu Fire Wood.",
  keywords: ["firewood delivery policy", "free delivery Gauteng", "next-day firewood delivery", "braai wood delivery", "Gauteng delivery zones", "estate firewood delivery"],
  openGraph: {
    title: "Delivery Policy | Firewood Delivery Gauteng | Miwesu",
    description: "Firewood and braai wood delivery policy for Gauteng. Free delivery in qualifying zones.",
    url: `${SITE_URL}/delivery`,
    type: "website",
    locale: "en_ZA",
    siteName: "Miwesu Fire Wood",
  },
  twitter: { card: "summary", title: "Delivery Policy | Miwesu Fire Wood", description: "Firewood delivery Gauteng. Free delivery zones." },
  alternates: { canonical: `${SITE_URL}/delivery` },
};

const DELIVERY_BREADCRUMBS = [{ name: "Home", url: "/" }, { name: "Policies", url: "/policies" }, { name: "Delivery Policy", url: "/delivery" }];

export default function DeliveryPage() {
  return (
    <>
      <FAQPageSchema variant="delivery" />
      <BreadcrumbListSchema items={DELIVERY_BREADCRUMBS} />
      <SiteHeader variant="default" />
      <header className="pt-14 policy-hero">
        <h1>Delivery Policy</h1>
        <p>Gauteng</p>
        <p className="back">
          <Link href="/policies">← Back to Policies</Link>
        </p>
      </header>
      <main className="policy-body">
        <p>This policy applies to delivery of wood and thermal fuel within Gauteng. &quot;Free delivery&quot; is a conditional offer. By placing an order you agree to these terms.</p>

        <h2>Free delivery - when it applies</h2>
        <ul>
          <li><strong>Geographic zone:</strong> Free delivery applies only within the advertised radius (e.g. 0–20 km from our depot). Beyond that, a per-kilometre or standard delivery rate may apply.</li>
          <li><strong>Minimum order value:</strong> Orders must meet the advertised minimum to qualify. Below that, a standard delivery fee applies.</li>
          <li><strong>Product exclusions:</strong> Certain low-value, high-weight items may be excluded from free delivery unless combined with a qualifying wood order.</li>
        </ul>

        <h2>Curbside delivery only</h2>
        <p>Delivery is strictly <strong>curbside</strong> or <strong>driveway entrance</strong> at the nominated address. Our responsibility ends once goods are offloaded next to the vehicle. Delivery personnel are <strong>not</strong> permitted to carry goods into the residence, backyard or upstairs (insurance and safety). This limits property damage risk and keeps delivery efficient.</p>

        <h2>Property access - your responsibility</h2>
        <p>If you request the delivery vehicle to enter your property (beyond the kerb), you do so at your own risk. You <strong>fully indemnify</strong> Miwesu and its agents against any claim for damage to paving, asphalt, gates, walls, vegetation or drainage caused by the vehicle. We may require a signed site access indemnity before the vehicle enters.</p>

        <h2>Access and redelivery</h2>
        <p>You warrant that the delivery address is accessible to the type of vehicle we use (e.g. 8-ton truck). If delivery cannot be completed due to site inaccessibility, refusal of entry by security, or absence of an authorised recipient, the goods may be returned to the depot. A <strong>redelivery fee</strong> will apply for any subsequent attempt; the free delivery offer does not apply to the second attempt.</p>
      </main>
      <SiteFooter variant="policy" />
    </>
  );
}
