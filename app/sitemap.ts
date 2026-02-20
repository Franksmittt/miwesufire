import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getAllSuburbSlugs } from "@/lib/suburbs";
import { PRODUCTS } from "@/lib/products";
import { WOODS } from "@/lib/woods";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/policies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/delivery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/delivery-areas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/returns`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/product`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/woods`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/products/sekelbos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/products/geelhaak`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/products/braai-mix`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
  ];

  const woodPages: MetadataRoute.Sitemap = WOODS.map((w) => ({
    url: `${base}/woods/${w.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${base}/products/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const deliverySuburbPages: MetadataRoute.Sitemap = getAllSuburbSlugs().map((slug) => ({
    url: `${base}/delivery/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...productPages, ...woodPages, ...deliverySuburbPages];
}
