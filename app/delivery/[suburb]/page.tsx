import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { getSuburbBySlug, getAllSuburbSlugs } from "@/lib/suburbs";
import { SITE_URL } from "@/lib/site";
import { BreadcrumbListSchema } from "@/components/json-ld/BreadcrumbListSchema";

type Props = { params: Promise<{ suburb: string }> };

export async function generateStaticParams() {
  return getAllSuburbSlugs().map((suburb) => ({ suburb }));
}

export async function generateMetadata({ params }: Props) {
  const { suburb } = await params;
  const config = getSuburbBySlug(suburb);
  if (!config) return { title: "Delivery | Miwesu Fire Wood" };

  const title = `Firewood Delivery ${config.areaName} | Braai Wood ${config.areaName} | Miwesu`;
  const description = `${config.tagline} Braai wood and firewood delivery to ${config.areaName} (Zone ${config.zone}). Free delivery Gauteng where applicable. Kameeldoring, Sekelbos, Geelhaak. From R25 per bag.`;

  return {
    title,
    description,
    keywords: [
      `firewood delivery ${config.areaName}`,
      `braai wood ${config.areaName}`,
      "firewood Gauteng",
      "free delivery Gauteng",
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/delivery/${config.slug}`,
      type: "website",
      siteName: "Miwesu Fire Wood",
      locale: "en_ZA",
    },
    twitter: { card: "summary", title, description: `Firewood and braai wood delivery ${config.areaName}. Free delivery Gauteng.` },
    alternates: { canonical: `${SITE_URL}/delivery/${config.slug}` },
  };
}

export default async function DeliverySuburbPage({ params }: Props) {
  const { suburb } = await params;
  const config = getSuburbBySlug(suburb);
  if (!config) notFound();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Delivery areas", url: "/delivery-areas" },
    { name: config.areaName, url: `/delivery/${config.slug}` },
  ];

  return (
    <>
      <BreadcrumbListSchema items={breadcrumbs} />
      <SiteHeader variant="default" />
      <main className="pt-20 sm:pt-24 max-w-[1320px] mx-auto py-10 sm:py-16 px-4 sm:px-6 pb-16 sm:pb-24">
        <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-center mb-4 sm:mb-5">
          Engineered Heat for {config.areaName}
        </h1>
        <p className="text-[var(--titanium)] text-center text-[0.9375rem] sm:text-[1.05rem] mb-6 sm:mb-8 px-1">
          {config.tagline}
        </p>
        <p className="text-[var(--titanium)] text-[0.9375rem] sm:text-[1rem] leading-relaxed mb-8">
          Residents of <strong className="text-[var(--text)]">{config.areaName}</strong> (Zone {config.zone}) receive
          premium firewood delivery across Gauteng. Optimize your braai with high-density Geelhaak, Sekelbos, and
          Kameeldoring: guaranteed dry, verified moisture. Free delivery in qualifying zones.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
          <Link
            href="/#products"
            className="inline-flex items-center justify-center min-h-[48px] py-3.5 px-8 rounded-[var(--squircle)] text-[0.9rem] font-semibold uppercase tracking-wider bg-gradient-to-r from-[var(--copper)] to-[var(--copper-deep)] text-white no-underline hover:opacity-95 transition-opacity"
          >
            View products
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center min-h-[48px] py-3.5 px-8 rounded-[var(--squircle)] text-[0.9rem] font-semibold uppercase tracking-wider border border-[var(--rim)] text-[var(--titanium)] no-underline hover:text-[var(--text)] hover:border-[var(--copper)] transition-colors"
          >
            Home
          </Link>
        </div>
        <p className="mt-12 text-[0.875rem] text-[var(--titanium)] text-center sm:text-left">
          <Link href="/delivery" className="text-[var(--copper)] no-underline hover:underline">
            Delivery policy
          </Link>
          {" · "}
          <Link href="/policies" className="text-[var(--copper)] no-underline hover:underline">
            Policies
          </Link>
        </p>
      </main>
      <SiteFooter variant="default" />
      <WhatsAppFloat />
    </>
  );
}
