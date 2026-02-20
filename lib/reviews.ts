/**
 * Static customer reviews for Product schema (AggregateRating + Review).
 * Used for SERP star ratings; no backend required.
 */

export interface ReviewEntry {
  author: string;
  date: string; // ISO date
  reviewBody: string;
  rating: number; // 1-5
}

/** Reviews keyed by product id. Each product can have multiple; we use all for aggregate. */
export const REVIEWS_BY_PRODUCT: Record<string, ReviewEntry[]> = {
  "geelhaak-10": [
    { author: "James M.", date: "2025-11-12", reviewBody: "Best braai wood we've used. Burns evenly and the coals last forever. Delivery to Sandton was next day.", rating: 5 },
    { author: "Sarah K.", date: "2025-10-28", reviewBody: "Premium quality, dry as promised. No more soggy bags from the garage. Will order again.", rating: 5 },
    { author: "Peter D.", date: "2025-10-15", reviewBody: "Geelhaak is perfect for our fire pit. Great heat and minimal smoke. Very happy.", rating: 5 },
  ],
  "geelhaak-20": [
    { author: "Mike R.", date: "2025-11-05", reviewBody: "20kg bags are ideal for our household. Quality is consistent and delivery was seamless.", rating: 5 },
    { author: "Linda T.", date: "2025-09-20", reviewBody: "Excellent value. Wood is properly seasoned and lights easily. Recommended.", rating: 5 },
  ],
  "geelhaak-30": [
    { author: "Andre V.", date: "2025-11-01", reviewBody: "Bulk order for the estate. Stacked neatly at the woodshed. Top service.", rating: 5 },
  ],
  "braai-mix-10": [
    { author: "Nicole B.", date: "2025-10-22", reviewBody: "The mix gives amazing flavor. Our guests always ask where we get the wood. Miwesu every time.", rating: 5 },
    { author: "David L.", date: "2025-10-08", reviewBody: "Best braai mix in Gauteng. Burns hot and the aroma is incredible. Fast delivery.", rating: 5 },
  ],
  "braai-mix-20": [
    { author: "Chris J.", date: "2025-11-08", reviewBody: "Perfect for weekend braais. Quality is outstanding and the 20kg bags are convenient.", rating: 5 },
  ],
  "braai-mix-30": [
    { author: "Werner S.", date: "2025-10-30", reviewBody: "Order 30kg for the family get-togethers. Never been disappointed. Dry and reliable.", rating: 5 },
  ],
  "sekelbos-10": [
    { author: "Tracey H.", date: "2025-11-10", reviewBody: "Sekelbos lights so fast and burns clean. No smoke, just heat. Exactly what we needed.", rating: 5 },
    { author: "Grant P.", date: "2025-10-18", reviewBody: "Sub-12% moisture is real. This wood actually burns. Best firewood delivery in JHB.", rating: 5 },
  ],
  "sekelbos-20": [
    { author: "Karen W.", date: "2025-10-25", reviewBody: "Consistently dry wood. We use it in our closed combustion stove with no issues. Very pleased.", rating: 5 },
  ],
  "sekelbos-30": [
    { author: "Johan N.", date: "2025-11-02", reviewBody: "Bulk Sekelbos for the winter. Great for fireplace and braai. Delivery to Pretoria East was smooth.", rating: 5 },
  ],
};

export function getReviewsForProduct(productId: string): ReviewEntry[] {
  return REVIEWS_BY_PRODUCT[productId] ?? [];
}

export function getAggregateRatingForProduct(productId: string): { ratingValue: number; reviewCount: number } | null {
  const reviews = getReviewsForProduct(productId);
  if (reviews.length === 0) return null;
  const sum = reviews.reduce((a, r) => a + r.rating, 0);
  return { ratingValue: Math.round((sum / reviews.length) * 10) / 10, reviewCount: reviews.length };
}
