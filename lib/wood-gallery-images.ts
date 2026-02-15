/**
 * Gallery image paths per wood slug (slots 5, 6, 7 from woods page).
 * Used on product pages to show wood gallery thumbnails below the main product image.
 */

const IMAGE5_BY_SLUG: Record<string, string> = {
  geelhaak: "/Image5_Geelhaak.png",
  knoppiesdoring: "/Image5_Knoppiesdoring.png",
  sekelbos: "/Image5_Sekelbos.png",
  snuifpeul: "/Image5_Snuifpeul.png",
  mopane: "/Image5_Mopanie.png",
  rooibos: "/Image5_Rooibos.png",
};

const IMAGE6_BY_SLUG: Record<string, string> = {
  geelhaak: "/Image6_Geelhaak.png",
  knoppiesdoring: "/Image6_Knoppiesdoring.png",
  sekelbos: "/Image6_Sekelbos.png",
  snuifpeul: "/Image6_Snuifpeul.png",
  mopane: "/Image6_Mopanie.png",
  rooibos: "/Image6_Rooibos.png",
};

const IMAGE7_BY_SLUG: Record<string, string> = {
  geelhaak: "/Image7_Geelhaak.png",
  knoppiesdoring: "/Image7_Knoppiesdoring.png",
  sekelbos: "/Image7_Sekelbos.png",
  snuifpeul: "/Image 7_Snuifpeul.png",
  mopane: "/Image7_Mopanie.png",
  rooibos: "/Image7_Rooibos.png",
};

export type GalleryThumb = { src: string; alt: string };

/** Returns 3 gallery images for a product: from the wood(s) that product contains. */
export function getProductGalleryImages(productId: string): GalleryThumb[] {
  // Single-wood products: use that wood's gallery (5, 6, 7)
  if (productId === "geelhak-12") {
    const slug = "geelhaak";
    return [
      { src: IMAGE5_BY_SLUG[slug], alt: "Geelhaak – bark and heartwood" },
      { src: IMAGE6_BY_SLUG[slug], alt: "Geelhaak braai wood" },
      { src: IMAGE7_BY_SLUG[slug], alt: "Geelhaak premium firewood Gauteng" },
    ];
  }
  if (productId === "sekelbos-30") {
    const slug = "sekelbos";
    return [
      { src: IMAGE5_BY_SLUG[slug], alt: "Sekelbos – bark and heartwood" },
      { src: IMAGE6_BY_SLUG[slug], alt: "Sekelbos braai wood" },
      { src: IMAGE7_BY_SLUG[slug], alt: "Sekelbos premium firewood Gauteng" },
    ];
  }
  // Braai Mix: one gallery image from each of 3 woods in the mix (Snuifpeul, Knoppiesdoring, Geelhaak)
  if (productId === "braai-mix-12" || productId === "braai-mix-30") {
    return [
      { src: IMAGE6_BY_SLUG.snuifpeul, alt: "Snuifpeul braai wood – in this mix" },
      { src: IMAGE6_BY_SLUG.knoppiesdoring, alt: "Knoppiesdoring braai wood – in this mix" },
      { src: IMAGE6_BY_SLUG.geelhaak, alt: "Geelhaak braai wood – in this mix" },
    ];
  }
  return [];
}
