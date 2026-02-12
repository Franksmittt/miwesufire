import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Product & Wood Policy | Miwesu Wood & Thermal",
  description: "Nature of wood, moisture, grading and defects policy.",
};

export default function ProductPolicyPage() {
  return (
    <>
      <SiteHeader variant="policy" />
      <header className="policy-hero">
        <h1>Product & Wood Policy</h1>
        <p className="back">
          <Link href="/policies">← Back to Policies</Link>
        </p>
      </header>
      <main className="policy-body">
        <p>Wood is a natural product. This policy explains how we define the product, what we warrant, and what we do not treat as defects.</p>

        <h2>Nature of wood</h2>
        <p>Timber is a biological material. <strong>Knots</strong> (live or dead), <strong>grain variance</strong>, <strong>colour variation</strong>, <strong>resin bleeding</strong> and <strong>minor surface checking</strong> (small cracks from drying) are inherent and do not constitute defects.</p>

        <h2>Moisture and movement</h2>
        <p>Wood is <strong>hygroscopic</strong>: it exchanges moisture with the environment, which can cause expansion, contraction, cupping and warping after delivery. We warrant that timber is supplied within the standard moisture range for its grade at dispatch. We are <strong>not liable</strong> for warping, bowing, cupping or splitting that occurs after delivery due to environmental factors, improper storage or failure to seal or maintain the timber.</p>

        <h2>Grading - structural vs non-structural</h2>
        <p>Only timber explicitly marked as <strong>Structural</strong> (e.g. S5, S7) is graded to SANS 1783 and suitable for load-bearing use. Timber sold as <strong>Industrial</strong>, <strong>Utility</strong>, <strong>XXX</strong> or similar is <strong>not</strong> for structural application. We sell such timber voetstoots regarding structural integrity and accept no liability for structural failure, injury or loss where non-structural timber has been used for load-bearing purposes.</p>

        <h2>Treated timber - preservatives and safety</h2>
        <p>Treated timber (e.g. CCA, creosote) is regulated under SANS and related standards. Any long-term treatment warranty (e.g. rot resistance) is typically from the treatment plant or chemical manufacturer, not from us as the retailer. When working with treated wood, appropriate PPE must be used and offcuts must not be burned (per NRCS/safety requirements).</p>

        <h2>What we do not classify as defects</h2>
        <p>The following are <strong>inherent characteristics</strong> or <strong>environmental damage</strong>, not defects that trigger repair/replace/refund:</p>
        <ul>
          <li>Knots (live or dead), resin bleeding, colour variation (heartwood vs sapwood)</li>
          <li>Minor surface checking (cracks from drying that do not affect structural strength)</li>
          <li>Warping, bowing or splitting that occurs after delivery due to storage or environment</li>
        </ul>
        <p><strong>Defects</strong> we do treat as actionable include: rot, insect attack (where not excluded), or material failure in correctly graded structural timber when used as intended. Those are covered under our returns and refunds policy.</p>
      </main>
      <SiteFooter variant="policy" />
    </>
  );
}
