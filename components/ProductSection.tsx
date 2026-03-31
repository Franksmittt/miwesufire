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
      <h2 className="text-[clamp(1.2rem,2.5vw,1.6rem)] font-bold tracking-tight text-white mb-2">
        {title}
      </h2>
      <p className="text-gray-400 text-[0.9rem] sm:text-[1rem] leading-relaxed max-w-2xl mb-6 sm:mb-8">
        {description}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {products.map((p) => (
          <div key={p.id} className="squircle glass-panel overflow-hidden">
            <Link href={`/products/${p.id}`} className="block aspect-square relative overflow-hidden group">
              <Image src={p.images[0]} alt={p.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 33vw" />
            </Link>
            <div className="p-4 sm:p-5 md:p-6">
              <p className="text-[0.65rem] tracking-widest-tech uppercase text-bronze mb-1.5">{p.tier}</p>
              <h3 className="text-[1.1rem] sm:text-[1.2rem] font-bold tracking-tight mb-1.5">
                <Link href={`/products/${p.id}`} className="text-white no-underline hover:text-bronze transition-colors">
                  {p.name}
                </Link>
              </h3>
              <p className="text-[0.8rem] sm:text-[0.88rem] text-gray-400 mb-3 sm:mb-4">{p.priceLabel} · MOQ {p.moq} Bags</p>
              {onOrderClick ? (
                <button
                  type="button"
                  onClick={() => onOrderClick(p.id)}
                  className="block w-full min-h-[44px] py-3 sm:py-3.5 rounded-[var(--squircle)] text-[0.75rem] sm:text-[0.8rem] font-semibold uppercase tracking-wider bg-white/10 text-white border border-white/10 cursor-pointer hover:border-bronze/50 hover:bg-bronze/10 transition-colors"
                >
                  Order Now
                </button>
              ) : (
                <Link
                  href={`/products/${p.id}`}
                  className="block w-full min-h-[44px] py-3 sm:py-3.5 rounded-[var(--squircle)] text-[0.75rem] sm:text-[0.8rem] font-semibold uppercase tracking-wider bg-white/10 text-white border border-white/10 text-center hover:border-bronze/50 hover:bg-bronze/10 transition-colors no-underline"
                >
                  Order Now
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
