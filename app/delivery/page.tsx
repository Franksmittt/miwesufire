import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Delivery Policy | Miwesu Wood & Thermal",
  description: "Gauteng delivery policy.",
};

export default function DeliveryPage() {
  return (
    <>
      <SiteHeader variant="policy" />
      <header className="policy-hero">
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
