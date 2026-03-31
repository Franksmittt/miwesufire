import { SITE_URL } from "@/lib/site";

type Props = { woodName: string; slug: string };

/**
 * HowTo schema for braai/firewood use. Supports voice search and "People Also Ask" snippets.
 */
export function HowToWoodSchema({ woodName, slug }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use ${woodName} for braai and fire`,
    description: `How to get the best results from ${woodName} braai wood. Premium firewood Gauteng – verified dry, long burning.`,
    totalTime: "PT30M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "ZAR",
      value: "25",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Source dry wood",
        text: `Use ${woodName} that is certified dry (verified moisture under 12%) for a clean, hot burn.`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Build your fire",
        text: `Stack ${woodName} with kindling and light. Allow flames to establish before cooking.`,
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Cook over coals",
        text: `Once ${woodName} has formed coals, spread them for even heat. Ideal for braai and grilling.`,
      },
    ],
    url: `${SITE_URL}/woods/${slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
