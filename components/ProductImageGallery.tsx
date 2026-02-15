"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryThumb } from "@/lib/wood-gallery-images";

type Props = {
  mainImage: string;
  productName: string;
  galleryThumbs: GalleryThumb[];
  fallbackThumbs: string[];
};

export function ProductImageGallery({ mainImage, productName, galleryThumbs, fallbackThumbs }: Props) {
  const useGallery = galleryThumbs.length >= 3;
  const thumbs = useGallery
    ? galleryThumbs.map((t) => ({ src: t.src, alt: t.alt }))
    : fallbackThumbs.map((src, i) => ({ src, alt: `${productName} – view ${i + 2}` }));

  const [selectedSrc, setSelectedSrc] = useState(mainImage);
  const [selectedAlt, setSelectedAlt] = useState(`${productName} – main`);

  const selectThumb = (src: string, alt: string) => {
    setSelectedSrc(src);
    setSelectedAlt(alt);
  };

  return (
    <div className="md:sticky md:top-[100px]">
      <div className="aspect-square max-w-[320px] sm:max-w-none mx-auto md:mx-0 rounded-[var(--squircle)] overflow-hidden border border-[var(--rim)] bg-gradient-to-br from-[#1a1510] to-[#0a0a0a] mb-3 sm:mb-4">
        <Image
          src={selectedSrc}
          alt={selectedAlt}
          width={600}
          height={600}
          className="w-full h-full object-cover block"
        />
      </div>
      <div className="flex gap-2 sm:gap-3 flex-wrap justify-center md:justify-start">
        {/* First thumb: main product image */}
        <button
          type="button"
          onClick={() => {
            setSelectedSrc(mainImage);
            setSelectedAlt(`${productName} – main`);
          }}
          className={`w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-xl overflow-hidden border-2 flex-shrink-0 bg-[#111] transition-colors ${
            selectedSrc === mainImage ? "border-[var(--copper)]" : "border-transparent hover:opacity-90"
          }`}
          aria-label="Show main product image"
        >
          <Image src={mainImage} alt="" width={72} height={72} className="w-full h-full object-cover block" />
        </button>
        {/* Thumbs 2–4: gallery images (or product images if no gallery) */}
        {thumbs.map((t, i) => (
          <button
            key={t.src}
            type="button"
            onClick={() => selectThumb(t.src, t.alt)}
            className={`w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-xl overflow-hidden border-2 flex-shrink-0 bg-[#111] transition-colors ${
              selectedSrc === t.src ? "border-[var(--copper)]" : "border-transparent hover:opacity-90"
            }`}
            aria-label={t.alt}
          >
            <Image src={t.src} alt={t.alt} width={72} height={72} className="w-full h-full object-cover block" />
          </button>
        ))}
      </div>
    </div>
  );
}
