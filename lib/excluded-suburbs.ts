/**
 * Township and informal settlement slugs for negative SEO.
 * These must never have delivery landing pages. Visiting /delivery/[slug]
 * for any slug in this set returns 404 to preserve crawl budget and
 * avoid indexing non-serviceable areas.
 * Source: Aggressive SEO Strategy – Geospatial exclusion matrix.
 */
export const EXCLUDED_SUBURB_SLUGS: ReadonlySet<string> = new Set([
  // Johannesburg / Soweto
  "soweto",
  "alexandra",
  "diepsloot",
  "orange-farm",
  "meadowlands",
  "diepkloof",
  "zandspruit",
  "lawley",
  "ivory-park",
  "kanana-park",
  "hillbrow",
  "yeoville",
  "berea",
  // Pretoria / Tshwane
  "mamelodi",
  "atteridgeville",
  "soshanguve",
  "ga-rankuwa",
  "mabopane",
  "hammanskraal",
  "winterveld",
  "lotus-gardens",
  "eersterust",
  "sunnyside",
  "arcadia",
  // Ekurhuleni (East Rand)
  "tembisa",
  "thembisa",
  "katlehong",
  "vosloorus",
  "thokoza",
  "daveyton",
  "tsakane",
  "duduza",
  "kwathema",
  "reiger-park",
  "langaville",
  "wattville",
  "madelakufa",
  "makause",
  // West Rand / Sedibeng
  "kagiso",
  "mohlakeng",
  "khutsong",
  "bekkersdal",
  "evaton",
  "sebokeng",
  "boipatong",
  "bophelong",
  "sharpeville",
  "toekomsrus",
]);

export function isExcludedSuburbSlug(slug: string): boolean {
  return EXCLUDED_SUBURB_SLUGS.has(slug.toLowerCase());
}
