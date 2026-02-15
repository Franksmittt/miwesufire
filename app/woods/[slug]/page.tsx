import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { BreadcrumbListSchema } from "@/components/json-ld/BreadcrumbListSchema";
import { HowToWoodSchema } from "@/components/json-ld/HowToWoodSchema";
import { getWoodBySlug, getAllWoodSlugs } from "@/lib/woods";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

/** Hero image filenames in public/ – one per wood slug (user-created). */
const HERO_IMAGE_BY_SLUG: Record<string, string> = {
  geelhaak: "/Geelhaak_Hero.png",
  knoppiesdoring: "/Knoppiesdoring_hero.png",
  sekelbos: "/Sekelbos_Hero.png",
  snuifpeul: "/Snuifpeul_Hero.png",
  mopane: "/Mopanie_Hero.png",
  rooibos: "/Rooibos_Hero.png",
};

/** Image 2 – The wood (appearance & grain) – one per wood slug. */
const IMAGE2_BY_SLUG: Record<string, string> = {
  geelhaak: "/Image2_Geelhaak.png",
  knoppiesdoring: "/Image2_Knoppiesdoring.png",
  sekelbos: "/Image2_Sekelbos.png",
  snuifpeul: "/Image2_Snuifpeul.png",
  mopane: "/Image2_Mopanie.png",
  rooibos: "/Image2_Rooibos.png",
};

/** Image 3 – The look (wide) – one per wood slug. */
const IMAGE3_BY_SLUG: Record<string, string> = {
  geelhaak: "/Image3_Geelhaak.png",
  knoppiesdoring: "/Image3_Knoppiesdoring.png",
  sekelbos: "/Image3_Sekelbos.png",
  snuifpeul: "/Image3_Snuifpeul.png",
  mopane: "/Image3_Mopanie.png",
  rooibos: "/Image3_Rooibos.png",
};

/** Image 4 – The burn (how it performs) – one per wood slug. */
const IMAGE4_BY_SLUG: Record<string, string> = {
  geelhaak: "/Image4_Geelhaak.png",
  knoppiesdoring: "/Image4_Knoppiesdoring.png",
  sekelbos: "/Image4_Sekelbos.png",
  snuifpeul: "/Image4_Snuifpeul.png",
  mopane: "/Image4_Mopanie.png",
  rooibos: "/Image4_Rooibos.png",
};

/** Image 5 – Bark/heartwood close-up – one per wood slug. */
const IMAGE5_BY_SLUG: Record<string, string> = {
  geelhaak: "/Image5_Geelhaak.png",
  knoppiesdoring: "/Image5_Knoppiesdoring.png",
  sekelbos: "/Image5_Sekelbos.png",
  snuifpeul: "/Image5_Snuifpeul.png",
  mopane: "/Image5_Mopanie.png",
  rooibos: "/Image5_Rooibos.png",
};

/** Image 6 – Gallery 2 (braai wood) – one per wood slug. */
const IMAGE6_BY_SLUG: Record<string, string> = {
  geelhaak: "/Image6_Geelhaak.png",
  knoppiesdoring: "/Image6_Knoppiesdoring.png",
  sekelbos: "/Image6_Sekelbos.png",
  snuifpeul: "/Image6_Snuifpeul.png",
  mopane: "/Image6_Mopanie.png",
  rooibos: "/Image6_Rooibos.png",
};

/** Image 7 – Gallery 3 (premium firewood) – one per wood slug. */
const IMAGE7_BY_SLUG: Record<string, string> = {
  geelhaak: "/Image7_Geelhaak.png",
  knoppiesdoring: "/Image7_Knoppiesdoring.png",
  sekelbos: "/Image7_Sekelbos.png",
  snuifpeul: "/Image 7_Snuifpeul.png",
  mopane: "/Image7_Mopanie.png",
  rooibos: "/Image7_Rooibos.png",
};

export async function generateStaticParams() {
  return getAllWoodSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const wood = getWoodBySlug(slug);
  if (!wood) return { title: "Wood not found | Miwesu Fire Wood" };
  const title = `${wood.name} Braai Wood | Firewood Gauteng | Miwesu`;
  const description =
    wood.tagline + " " + wood.intro.slice(0, 90) + "… Premium braai wood & firewood delivery Gauteng.";
  const ogImagePath = HERO_IMAGE_BY_SLUG[wood.slug];
  const ogImageUrl = ogImagePath ? `${SITE_URL}${ogImagePath}` : `https://picsum.photos/seed/miwesu-${wood.slug}/1200/630`;
  return {
    title,
    description,
    keywords: [
      `${wood.name} braai wood`,
      `${wood.name} firewood`,
      "firewood Gauteng",
      "braai wood Gauteng",
      "premium firewood",
    ],
    openGraph: {
      title: `${wood.name} Braai Wood | Firewood Gauteng | Miwesu`,
      description: wood.tagline + " Premium braai wood & firewood delivery Gauteng.",
      url: `${SITE_URL}/woods/${wood.slug}`,
      type: "website",
      locale: "en_ZA",
      siteName: "Miwesu Fire Wood",
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: `${wood.name} braai wood – firewood Gauteng` }],
    },
    twitter: { card: "summary_large_image", title: `${wood.name} Braai Wood | Miwesu`, description: wood.tagline },
    alternates: { canonical: `${SITE_URL}/woods/${wood.slug}` },
  };
}

export default async function WoodSpeciesPage({ params }: Props) {
  const { slug } = await params;
  const wood = getWoodBySlug(slug);
  if (!wood) notFound();

  const heroSrc = HERO_IMAGE_BY_SLUG[wood.slug] ?? `https://picsum.photos/seed/miwesu-${wood.slug}/1320/600`;
  const image2Src = IMAGE2_BY_SLUG[wood.slug] ?? `https://picsum.photos/seed/miwesu-${wood.slug}-detail/800/600`;
  const image3Src = IMAGE3_BY_SLUG[wood.slug] ?? `https://picsum.photos/seed/miwesu-${wood.slug}-gallery/600/400`;
  const image4Src = IMAGE4_BY_SLUG[wood.slug] ?? `https://picsum.photos/seed/miwesu-${wood.slug}-burn/800/500`;
  const image5Src = IMAGE5_BY_SLUG[wood.slug] ?? `https://picsum.photos/seed/miwesu-${wood.slug}-a/400/300`;
  const image6Src = IMAGE6_BY_SLUG[wood.slug] ?? `https://picsum.photos/seed/miwesu-${wood.slug}-b/400/300`;
  const image7Src = IMAGE7_BY_SLUG[wood.slug] ?? `https://picsum.photos/seed/miwesu-${wood.slug}-c/400/300`;
  const images = [
    heroSrc,
    image2Src,
    image3Src,
    image4Src,
    image5Src,
    image6Src,
    image7Src,
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Meet our woods", url: "/woods" },
    { name: wood.name, url: `/woods/${wood.slug}` },
  ];

  return (
    <>
      <BreadcrumbListSchema items={breadcrumbs} />
      <HowToWoodSchema woodName={wood.name} slug={wood.slug} />
      <SiteHeader variant="default" />
      <div className="pt-14 px-4 sm:px-6 max-w-[1320px] mx-auto">
        <nav className="text-[0.75rem] sm:text-[0.8rem] truncate text-gray-500">
          <Link href="/" className="no-underline hover:text-bronze transition-colors">Home</Link>
          <span className="mx-1.5 sm:mx-2">/</span>
          <Link href="/woods" className="no-underline hover:text-bronze transition-colors">Meet our woods</Link>
          <span className="mx-1.5 sm:mx-2">/</span>
          <span className="text-gray-400 truncate inline-block max-w-[140px] sm:max-w-none">{wood.name}</span>
        </nav>
      </div>

      {/* Hero: cinematic with title overlay */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <section className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[300px] sm:min-h-[360px] squircle overflow-hidden border border-white/10">
        <Image
          src={images[0]}
          alt={`${wood.name} braai wood – premium firewood Gauteng`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10">
          <p className="text-bronze-gradient text-xs font-bold tracking-widest-tech uppercase mb-2">
            {wood.scientificName}
            {wood.aka.length > 0 && ` · ${wood.aka[0]}`}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tightest text-white mb-2">
            {wood.name}.
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-xl">
            {wood.tagline}
          </p>
        </div>
        </section>
      </div>

      <main className="max-w-[1320px] mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        {/* At a glance strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          <div className="squircle glass-panel p-4 sm:p-5 text-center">
            <p className="text-[10px] sm:text-xs font-bold text-ember uppercase tracking-widest-tech mb-1">Heat</p>
            <p className="text-xs sm:text-sm text-gray-300 leading-snug">{wood.burnProfile.heat.split(".")[0]}.</p>
          </div>
          <div className="squircle glass-panel p-4 sm:p-5 text-center">
            <p className="text-[10px] sm:text-xs font-bold text-cyan uppercase tracking-widest-tech mb-1">Coals</p>
            <p className="text-xs sm:text-sm text-gray-300 leading-snug">{wood.burnProfile.coals.split(".")[0]}.</p>
          </div>
          <div className="squircle glass-panel p-4 sm:p-5 text-center">
            <p className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest-tech mb-1">Smoke</p>
            <p className="text-xs sm:text-sm text-gray-300 leading-snug">{wood.burnProfile.smoke.split(".")[0]}.</p>
          </div>
          <div className="squircle glass-panel p-4 sm:p-5 text-center">
            <p className="text-[10px] sm:text-xs font-bold text-bronze uppercase tracking-widest-tech mb-1">Lighting</p>
            <p className="text-xs sm:text-sm text-gray-300 leading-snug">{wood.burnProfile.lighting.split(".")[0]}.</p>
          </div>
        </div>

        {/* The wood: intro + big image (two columns on desktop) */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 mb-16 sm:mb-20">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h2 className="text-sm font-bold text-bronze uppercase tracking-widest-tech mb-4">The wood</h2>
            <p className="text-base sm:text-lg text-gray-400 leading-[1.7]">
              {wood.intro}
            </p>
          </div>
          <div className="lg:col-span-3 squircle overflow-hidden border border-white/10 aspect-[4/3] lg:aspect-auto lg:min-h-[280px] relative">
            <Image src={images[1]} alt={`${wood.name} hardwood – appearance and grain`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
          </div>
        </section>

        {/* The look: bento-style with 2 images + appearance cards */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-sm font-bold text-bronze uppercase tracking-widest-tech mb-6">The look</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
            <div className="md:col-span-7 squircle overflow-hidden border border-white/10 aspect-[16/10] relative">
              <Image src={images[2]} alt={`${wood.name} firewood – the look`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 58vw" />
            </div>
            <div className="md:col-span-5 squircle overflow-hidden border border-white/10 aspect-[4/3] md:aspect-auto md:min-h-[200px] relative">
              <Image src={images[4]} alt={`${wood.name} – bark and heartwood`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 42vw" />
            </div>
            <div className="md:col-span-6 squircle glass-panel p-5 sm:p-6">
              <h3 className="text-xs font-bold text-white uppercase tracking-wide mb-2">Bark &amp; shape</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{wood.appearance.bark}</p>
              {wood.appearance.shape && (
                <p className="text-sm text-gray-400 leading-relaxed mt-3">{wood.appearance.shape}</p>
              )}
            </div>
            <div className="md:col-span-6 squircle glass-panel p-5 sm:p-6">
              <h3 className="text-xs font-bold text-white uppercase tracking-wide mb-2">Heartwood &amp; sapwood</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{wood.appearance.heartwood}</p>
              <p className="text-sm text-gray-400 leading-relaxed mt-3">{wood.appearance.sapwood}</p>
            </div>
            <div className="md:col-span-12">
              <p className="text-xs text-gray-500 border border-white/10 rounded-2xl px-4 py-3 inline-block">
                <span className="text-gray-400 font-semibold">Quick ID:</span> {wood.identifier}
              </p>
            </div>
          </div>
        </section>

        {/* The burn: mood image + 4 metric cards */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-sm font-bold text-bronze uppercase tracking-widest-tech mb-6">The burn</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 mb-6">
            <div className="lg:col-span-2 squircle overflow-hidden border border-white/10 aspect-[2/1] relative">
              <Image src={images[3]} alt={`${wood.name} – how it burns, braai wood`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-xs text-white/90 uppercase tracking-widest-tech">How it performs</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="squircle glass-panel p-4 sm:p-5 border-l-2 border-ember">
                <p className="text-[10px] font-bold text-ember uppercase tracking-widest-tech mb-1.5">Heat</p>
                <p className="text-sm text-gray-300 leading-snug">{wood.burnProfile.heat}</p>
              </div>
              <div className="squircle glass-panel p-4 sm:p-5 border-l-2 border-cyan">
                <p className="text-[10px] font-bold text-cyan uppercase tracking-widest-tech mb-1.5">Coals</p>
                <p className="text-sm text-gray-300 leading-snug">{wood.burnProfile.coals}</p>
              </div>
              <div className="squircle glass-panel p-4 sm:p-5 border-l-2 border-white/60">
                <p className="text-[10px] font-bold text-white uppercase tracking-widest-tech mb-1.5">Smoke</p>
                <p className="text-sm text-gray-300 leading-snug">{wood.burnProfile.smoke}</p>
              </div>
              <div className="squircle glass-panel p-4 sm:p-5 border-l-2 border-bronze">
                <p className="text-[10px] font-bold text-bronze uppercase tracking-widest-tech mb-1.5">Lighting</p>
                <p className="text-sm text-gray-300 leading-snug">{wood.burnProfile.lighting}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Best for: visual cards */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-sm font-bold text-bronze uppercase tracking-widest-tech mb-6">Best for</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {wood.bestFor.map((use, i) => (
              <div
                key={use}
                className="squircle glass-panel p-5 sm:p-6 flex items-start gap-4 group hover:border-bronze/40 transition-colors"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-bronze/20 border border-bronze/40 flex items-center justify-center text-bronze font-bold text-lg">
                  {i + 1}
                </span>
                <p className="text-sm sm:text-base text-gray-300 leading-snug pt-0.5">{use}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery strip: 3 images */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-sm font-bold text-bronze uppercase tracking-widest-tech mb-6">Gallery</h2>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <div className="squircle overflow-hidden border border-white/10 aspect-square relative">
              <Image src={images[4]} alt={`${wood.name} firewood gallery`} fill className="object-cover" sizes="33vw" />
            </div>
            <div className="squircle overflow-hidden border border-white/10 aspect-square relative">
              <Image src={images[5]} alt={`${wood.name} braai wood`} fill className="object-cover" sizes="33vw" />
            </div>
            <div className="squircle overflow-hidden border border-white/10 aspect-square relative">
              <Image src={images[6]} alt={`${wood.name} premium firewood Gauteng`} fill className="object-cover" sizes="33vw" />
            </div>
          </div>
        </section>

        {/* CTA: In our range or generic */}
        {wood.inOurRange ? (
          <section className="squircle overflow-hidden border border-bronze/30 bg-gradient-to-br from-bronze/10 to-transparent p-8 sm:p-10 md:p-12 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">Get {wood.name}</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              {wood.inOurRange}
            </p>
            <Link
              href="/#products"
              className="inline-flex items-center justify-center min-h-[52px] py-3 px-8 rounded-full text-sm font-bold tracking-wide bg-white text-black hover:bg-gray-200 transition-colors no-underline"
            >
              View products
            </Link>
          </section>
        ) : (
          <section className="squircle glass-panel p-8 sm:p-10 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">Want {wood.name}?</h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-6">
              We don’t stock pure {wood.name} right now. It may appear in blends or seasonal offerings. Get in touch if you’re looking for it.
            </p>
            <a
              href="mailto:guardians@miwesu.com"
              className="inline-flex items-center justify-center min-h-[48px] py-2.5 px-6 rounded-full text-sm font-semibold tracking-wide border border-white/20 text-white hover:bg-white/10 transition-colors no-underline"
            >
              Contact us
            </a>
          </section>
        )}

        <nav className="flex flex-wrap gap-6 pt-12 border-t border-white/10">
          <Link href="/woods" className="text-sm text-gray-400 no-underline hover:text-bronze transition-colors">
            ← All woods
          </Link>
          <Link href="/#products" className="text-sm text-gray-400 no-underline hover:text-bronze transition-colors">
            View all products
          </Link>
        </nav>
      </main>
      <SiteFooter variant="policy" />
      <WhatsAppFloat />
    </>
  );
}
