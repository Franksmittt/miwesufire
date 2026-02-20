/**
 * FAQPage JSON-LD for PAA / Position Zero.
 * Use on delivery and product pages for objection handling and rich results.
 */

export interface FAQItem {
  question: string;
  answer: string;
}

const DELIVERY_FAQS: FAQItem[] = [
  {
    question: "Do you deliver firewood to high-security estates in Waterfall and Dainfern?",
    answer: "Yes. Our teams are equipped to handle security protocols at elite estates across Midrand, Fourways, Waterfall, Dainfern and Steyn City. We arrange access in advance for seamless doorstep delivery.",
  },
  {
    question: "What is the guaranteed moisture content of your Sekelbos braai wood?",
    answer: "All Miwesu premium hardwoods are rigorously seasoned and kiln-verified to maintain sub-12% moisture content. This guarantees immediate ignition, minimal smoke and maximum heat. No wet bags.",
  },
  {
    question: "Do you offer next-day firewood delivery in Gauteng?",
    answer: "Yes. We aim for next-day delivery where possible. Order via WhatsApp and we will confirm your slot. Free delivery applies in qualifying zones (A, B, C) when minimum order is met.",
  },
  {
    question: "Can I order firewood for my closed combustion stove?",
    answer: "Yes. Our Geelhaak and Sekelbos are high-density hardwoods with low moisture, ideal for closed combustion stoves and fireplaces. They burn clean with minimal creosote and maximum heat output.",
  },
];

const PRODUCT_FAQS: FAQItem[] = [
  {
    question: "What is the best hardwood for closed combustion stoves in South Africa?",
    answer: "High-density, low-moisture hardwoods like Geelhaak and Sekelbos are best. Miwesu wood is verified under 12% moisture, so it burns clean, reduces creosote and is safe for enclosed stoves.",
  },
  {
    question: "Is Miwesu braai wood suitable for pizza ovens?",
    answer: "Our hardwoods burn hot and clean. For domestic pizza ovens, Sekelbos and Braai Mix give strong heat and steady coals. For commercial ovens we recommend discussing bulk options via WhatsApp.",
  },
  {
    question: "What is the minimum order for firewood delivery?",
    answer: "Minimum order depends on bag size: 50 bags for 10kg, 40 bags for 20kg, 20 bags for 30kg. Free delivery applies in qualifying Gauteng zones when MOQ is met.",
  },
];

type FAQSet = "delivery" | "product";

export function FAQPageSchema({ variant }: { variant: FAQSet }) {
  const faqs = variant === "delivery" ? DELIVERY_FAQS : PRODUCT_FAQS;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
