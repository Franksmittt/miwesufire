import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ProductImageGallery } from "@/components/ProductImageGallery";
import { ProductSchema } from "@/components/json-ld/ProductSchema";
import { FAQPageSchema } from "@/components/json-ld/FAQPageSchema";
import { BreadcrumbListSchema } from "@/components/json-ld/BreadcrumbListSchema";
import { getProductById } from "@/lib/products";
import { getProductGalleryImages } from "@/lib/wood-gallery-images";
import { SITE_URL } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product not found | Miwesu Fire Wood" };
  const title = `${product.name} | Braai Wood & Firewood Delivery Gauteng | Miwesu`;
  const description =
    product.shortDescription.replace(/<[^>]+>/g, "").slice(0, 140) +
    " Sub-12% moisture, kiln-verified. Free delivery Gauteng. Buy firewood online.";
  const imageUrl = product.images[0]?.startsWith("http") ? product.images[0] : `${SITE_URL}${product.images[0]}`;
  return {
    title,
    description,
    keywords: [
      product.name,
      "braai wood",
      "firewood Gauteng",
      "firewood delivery",
      "buy firewood online",
      "sub-12% moisture firewood",
      "closed combustion firewood",
      product.tier,
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/products/${product.id}`,
      images: [{ url: imageUrl, width: 1200, height: 1200, alt: `${product.name} – premium braai wood Gauteng` }],
    },
    alternates: { canonical: `${SITE_URL}/products/${product.id}` },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: product.name, url: `/products/${product.id}` },
  ];

  return (
    <>
      <ProductSchema product={product} />
      <FAQPageSchema variant="product" />
      <BreadcrumbListSchema items={breadcrumbs} />
      <SiteHeader variant="default" />
      <div className="pt-24 sm:pt-28 pb-4 sm:pb-5 px-4 sm:px-6 max-w-[1320px] mx-auto">
        <nav className="flex flex-wrap items-baseline gap-x-0 text-[0.75rem] sm:text-[0.8rem] text-[var(--titanium)] min-w-0">
          <Link href="/" className="no-underline hover:text-[var(--copper)] transition-colors shrink-0">Home</Link>
          <span className="mx-1.5 sm:mx-2 shrink-0">/</span>
          <Link href="/#products" className="no-underline hover:text-[var(--copper)] transition-colors shrink-0">Products</Link>
          <span className="mx-1.5 sm:mx-2 shrink-0">/</span>
          <span className="truncate min-w-0 max-w-[180px] sm:max-w-none text-[var(--text)]">{product.name}</span>
        </nav>
      </div>
      <main className="max-w-[1320px] mx-auto py-6 px-4 sm:py-8 sm:px-6 md:py-10 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-start">
          <ProductImageGallery
            mainImage={product.images[0]}
            productName={product.name}
            galleryThumbs={getProductGalleryImages(product.id)}
            fallbackThumbs={product.images.slice(1, 4)}
          />
          <div className="min-w-0">
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--copper)] mb-2">{product.tier}</p>
            <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold tracking-tight mb-2 sm:mb-3 leading-tight">{product.name}</h1>
            <p className="text-[0.9375rem] sm:text-[1.05rem] text-[var(--titanium)] leading-relaxed mb-4 sm:mb-6">{product.shortDescription}</p>
            <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-[var(--rim)]">
              <div className="text-[1.5rem] sm:text-[1.75rem] font-bold text-[var(--copper)]">{product.priceLabel}</div>
              <div className="text-[0.85rem] sm:text-[0.9rem] text-[var(--titanium)] mt-1.5">
                Minimum order: {product.moq} bags. Free delivery in Gauteng.
              </div>
            </div>
            <div
              className="text-[0.875rem] sm:text-[0.95rem] text-[var(--titanium)] leading-[1.7] [&_.product-subhead]:text-[0.9375rem] sm:[&_.product-subhead]:text-base [&_.product-subhead]:font-bold [&_.product-subhead]:text-[var(--text)] [&_.product-subhead]:mt-4 [&_.product-subhead]:sm:mt-6 [&_.product-subhead]:mb-3 [&_ul]:my-4 [&_ul]:ml-5 [&_li]:mb-2.5 [&_p]:mb-3 [&_.product-appearance-note]:text-[0.8rem] [&_.product-appearance-note]:text-[var(--titanium)] [&_.product-appearance-note]:mt-4 [&_.product-appearance-note]:opacity-90"
              dangerouslySetInnerHTML={{ __html: product.longDescription }}
            />

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[var(--rim)] flex flex-col gap-4">
              {(product.id.startsWith("geelhaak-") || product.id.startsWith("sekelbos-")) && (
                <Link
                  href={product.id.startsWith("geelhaak-") ? "/woods/geelhaak" : "/woods/sekelbos"}
                  className="text-[0.8rem] sm:text-[0.85rem] text-[var(--titanium)] no-underline hover:text-[var(--copper)] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Learn about {product.id.startsWith("geelhaak-") ? "Geelhaak" : "Sekelbos"}</span>
                  <span aria-hidden>→</span>
                </Link>
              )}
              {product.id.startsWith("braai-mix-") && (
                <Link
                  href="/woods"
                  className="text-[0.8rem] sm:text-[0.85rem] text-[var(--titanium)] no-underline hover:text-[var(--copper)] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Learn about the woods in this mix</span>
                  <span aria-hidden>→</span>
                </Link>
              )}
              <Link
                href={`/?product=${encodeURIComponent(product.id)}`}
                className="inline-flex items-center justify-center min-h-[48px] w-full sm:w-auto py-3.5 sm:py-4 px-8 sm:px-11 rounded-[var(--squircle)] text-[0.9rem] sm:text-[0.95rem] font-semibold uppercase tracking-[0.08em] bg-gradient-to-r from-[var(--copper)] to-[var(--copper-deep)] text-white border-0 no-underline hover:opacity-95 transition-opacity shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
              >
                Order Now
              </Link>
              <Link
                href="/#products"
                className="text-[0.8rem] sm:text-[0.85rem] text-[var(--titanium)] no-underline hover:text-[var(--copper)] transition-colors inline-flex items-center gap-1.5 mt-1"
              >
                <span aria-hidden>←</span>
                <span>Back to all products</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter variant="policy" />
      <WhatsAppFloat />
    </>
  );
}
