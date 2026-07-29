"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { OrderModal } from "@/components/OrderModal";
import { WOOD_TYPES, getProductsByWood } from "@/lib/wood-types";
import type { Product } from "@/lib/products";

function ProductCard({
  product,
  onOrder,
}: {
  product: Product;
  onOrder: (id: string) => void;
}) {
  return (
    <article className="product-tile group flex flex-col h-full">
      <Link href={`/products/${product.id}`} className="block aspect-[4/3] relative overflow-hidden bg-coal">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded bg-paper/95 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink">
          {product.tier}
        </span>
      </Link>
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold tracking-tight mb-1">
          <Link href={`/products/${product.id}`} className="text-ink no-underline hover:text-ember transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-muted mb-4">
          <span className="font-semibold text-ink">{product.priceLabel}</span>
          <span className="text-muted"> · MOQ {product.moq} bags</span>
        </p>
        <div className="mt-auto flex gap-2">
          <button
            type="button"
            onClick={() => onOrder(product.id)}
            className="flex-1 min-h-[44px] py-2.5 rounded text-sm font-semibold bg-ember text-white hover:bg-[var(--ember-deep)] transition-colors"
          >
            Order
          </button>
          <Link
            href={`/products/${product.id}`}
            className="inline-flex items-center justify-center min-h-[44px] px-3.5 rounded text-sm font-semibold border border-[var(--rim-strong)] text-ink hover:border-ink transition-colors no-underline"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ProductsPageContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [preselectedId, setPreselectedId] = useState<string | null>(null);

  const openModal = (productId: string | null) => {
    setPreselectedId(productId);
    setModalOpen(true);
  };

  return (
    <>
      <SiteHeader onAllocationClick={() => openModal(null)} />

      {/* Page hero */}
      <header className="relative pt-14 overflow-hidden bg-coal text-paper">
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/home-gallery-01.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-24">
          <nav className="flex items-baseline gap-x-2 text-[0.75rem] text-white/55 mb-6">
            <Link href="/" className="no-underline hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/85">Products</span>
          </nav>
          <p className="section-label !text-[#e8a090] mb-3">The range</p>
          <h1 className="font-display text-[clamp(2.25rem,6vw,4rem)] font-semibold tracking-tight leading-[1.05] max-w-2xl">
            Wood for the fire you actually want.
          </h1>
          <p className="mt-4 max-w-xl text-white/70 text-[0.95rem] sm:text-base leading-relaxed">
            Three lines. Three bag sizes. Verified dry under 12% moisture, free delivery across Gauteng, COD after you
            inspect the load.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {WOOD_TYPES.map((wood) => (
              <a
                key={wood.slug}
                href={`#${wood.slug}`}
                className="inline-flex items-center min-h-[40px] px-3.5 rounded border border-white/25 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors no-underline"
              >
                {wood.title}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        {WOOD_TYPES.map((wood, i) => {
          const products = getProductsByWood(wood.slug);
          if (products.length === 0) return null;
          const reverse = i % 2 === 1;
          return (
            <section
              key={wood.slug}
              id={wood.slug}
              className={`scroll-mt-20 border-t border-[var(--rim)] ${i % 2 === 0 ? "bg-paper/40" : ""}`}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-10 sm:mb-12">
                  <div
                    className={`relative h-full min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] overflow-hidden rounded bg-coal lg:col-span-5 self-stretch ${
                      reverse ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={wood.heroImage}
                      alt={`${wood.title} hardwood for braai and fireplace`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    <p className="absolute bottom-4 left-4 right-4 font-display text-2xl sm:text-3xl text-white font-semibold tracking-tight">
                      {wood.title}
                    </p>
                  </div>

                  <div
                    className={`lg:col-span-7 flex flex-col justify-between gap-6 self-stretch ${
                      reverse ? "lg:order-1" : ""
                    }`}
                  >
                    <div>
                      <span className="section-label">{String(i + 1).padStart(2, "0")}</span>
                      <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight text-ink">
                        {wood.tagline}
                      </h2>
                      <div className="mt-4 space-y-3.5 text-muted text-[0.95rem] sm:text-base leading-relaxed max-w-xl">
                        {wood.detailCopy.map((para) => (
                          <p key={para.slice(0, 48)}>{para}</p>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link href={`/products/${wood.slug}`} className="btn-primary">
                        Explore {wood.title}
                      </Link>
                      <Link
                        href={wood.slug === "braai-mix" ? "/woods" : `/woods/${wood.slug}`}
                        className="inline-flex items-center justify-center min-h-[48px] px-5 rounded text-sm font-semibold border border-[var(--rim-strong)] text-ink hover:border-ink transition-colors no-underline"
                      >
                        {wood.slug === "braai-mix" ? "Meet the woods" : `About ${wood.title}`}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                  {products.map((p) => (
                    <ProductCard key={p.id} product={p} onOrder={openModal} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Closing CTA */}
        <section className="border-t border-[var(--rim)] bg-coal text-paper">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-xl">
              <span className="section-label !text-[#e8a090]">Ready to order</span>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight">
                Tell us your suburb and bag size.
              </h2>
              <p className="mt-3 text-smoke text-[0.95rem] leading-relaxed">
                We confirm over WhatsApp, deliver free in Gauteng, and you pay COD after inspection.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => openModal(null)} className="btn-primary">
                Start an order
              </button>
              <Link
                href="/delivery-areas"
                className="inline-flex items-center justify-center min-h-[48px] px-5 rounded text-sm font-semibold border border-white/25 text-paper hover:bg-white/10 transition-colors no-underline"
              >
                Delivery areas
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter variant="default" />
      <OrderModal open={modalOpen} onClose={() => setModalOpen(false)} preselectedId={preselectedId} />
      <WhatsAppFloat />
    </>
  );
}
