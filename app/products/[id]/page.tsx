import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { getProductById } from "@/lib/products";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product not found | Miwesu Thermal" };
  return { title: `${product.name} | Miwesu Thermal` };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  return (
    <>
      <SiteHeader variant="default" />
      <div className="px-4 sm:px-6 pt-4 sm:pt-6 max-w-[1320px] mx-auto">
        <div className="text-[0.75rem] sm:text-[0.8rem] truncate">
          <Link href="/" className="text-[var(--titanium)] no-underline hover:text-[var(--copper)]">Home</Link>
          <span className="text-[var(--titanium)] mx-1.5 sm:mx-2">/</span>
          <Link href="/#products" className="text-[var(--titanium)] no-underline hover:text-[var(--copper)]">Products</Link>
          <span className="text-[var(--titanium)] mx-1.5 sm:mx-2">/</span>
          <span className="truncate inline-block max-w-[180px] sm:max-w-none">{product.name}</span>
        </div>
      </div>
      <main className="max-w-[1320px] mx-auto py-6 px-4 sm:py-8 sm:px-6 md:py-[32px] pb-12 sm:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-start">
          <div className="md:sticky md:top-[100px]">
            <div className="aspect-square max-w-[320px] sm:max-w-none mx-auto md:mx-0 rounded-[var(--squircle)] overflow-hidden border border-[var(--rim)] bg-gradient-to-br from-[#1a1510] to-[#0a0a0a] mb-3 sm:mb-4">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="flex gap-2 sm:gap-3 flex-wrap justify-center md:justify-start">
              {product.images.map((src, i) => (
                <div
                  key={i}
                  className="w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-xl overflow-hidden border-2 border-transparent bg-[#111] cursor-pointer hover:opacity-90 data-[active]:border-[var(--copper)] flex-shrink-0"
                  data-active={i === 0}
                >
                  <Image src={src} alt="" width={72} height={72} className="w-full h-full object-cover block" />
                </div>
              ))}
            </div>
          </div>
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
              className="text-[0.875rem] sm:text-[0.95rem] text-[var(--titanium)] leading-[1.7] mb-6 sm:mb-8 [&_.product-subhead]:text-[0.9375rem] sm:[&_.product-subhead]:text-base [&_.product-subhead]:font-bold [&_.product-subhead]:text-[var(--text)] [&_.product-subhead]:mt-4 [&_.product-subhead]:sm:mt-6 [&_.product-subhead]:mb-3 [&_ul]:my-4 [&_ul]:ml-5 [&_li]:mb-2.5 [&_p]:mb-3"
              dangerouslySetInnerHTML={{ __html: product.longDescription }}
            />
            <Link
              href={`/?product=${encodeURIComponent(product.id)}`}
              className="inline-flex items-center justify-center min-h-[48px] w-full sm:w-auto py-3.5 sm:py-4 px-8 sm:px-11 rounded-[var(--squircle)] text-[0.9rem] sm:text-[0.95rem] font-semibold uppercase tracking-[0.08em] bg-gradient-to-r from-[var(--copper)] to-[var(--copper-deep)] text-white border-0 no-underline hover:opacity-95 transition-opacity shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
            >
              Order Now
            </Link>
            <Link href="/#products" className="inline-block mt-4 sm:mt-6 text-[var(--titanium)] text-[0.85rem] sm:text-[0.9rem] no-underline hover:text-[var(--copper)]">
              ← Back to all products
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter variant="policy" />
      <WhatsAppFloat />
    </>
  );
}
