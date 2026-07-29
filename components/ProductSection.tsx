"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

type ProductSectionProps = {
  title: string;
  description: string;
  products: Product[];
  onOrderClick?: (productId: string) => void;
};

export function ProductSection({ title, description, products, onOrderClick }: ProductSectionProps) {
  if (products.length === 0) return null;
  return (
    <div className="mb-14 sm:mb-16 md:mb-20 last:mb-0">
      <h2 className="font-display text-[clamp(1.35rem,2.5vw,1.75rem)] font-semibold tracking-tight text-ink mb-2">
        {title}
      </h2>
      <p className="text-muted text-[0.9rem] sm:text-[1rem] leading-relaxed max-w-2xl mb-6 sm:mb-8">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {products.map((p) => (
          <div key={p.id} className="product-tile">
            <Link href={`/products/${p.id}`} className="block aspect-[4/3] relative overflow-hidden group">
              <Image
                src={p.images[0]}
                alt={p.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </Link>
            <div className="p-4 sm:p-5">
              <p className="text-[0.65rem] tracking-[0.12em] uppercase text-muted mb-1.5">{p.tier}</p>
              <h3 className="font-display text-[1.1rem] sm:text-lg font-semibold tracking-tight mb-1.5">
                <Link href={`/products/${p.id}`} className="text-ink no-underline hover:text-ember transition-colors">
                  {p.name}
                </Link>
              </h3>
              <p className="text-sm text-muted mb-3 sm:mb-4">
                {p.priceLabel} · MOQ {p.moq} Bags
              </p>
              {onOrderClick ? (
                <button
                  type="button"
                  onClick={() => onOrderClick(p.id)}
                  className="block w-full min-h-[44px] py-3 rounded text-sm font-semibold bg-ink text-paper hover:bg-ember transition-colors"
                >
                  Order Now
                </button>
              ) : (
                <Link
                  href={`/products/${p.id}`}
                  className="block w-full min-h-[44px] py-3 rounded text-sm font-semibold bg-ink text-paper text-center hover:bg-ember transition-colors no-underline"
                >
                  View product
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
