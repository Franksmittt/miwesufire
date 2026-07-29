"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type HeroSlide = {
  id: string;
  image: string;
  imageAlt: string;
  brand: string;
  brandLine?: string;
  headline: string;
  support: string;
  primaryLabel: string;
  secondaryLabel: string;
  secondaryHref: string;
  productId?: string | null;
};

const SLIDES: HeroSlide[] = [
  {
    id: "brand",
    image: "/Sekelbos_Hero.png",
    imageAlt: "Miwesu Fire Wood: precision-split hardwood for braai and fireplace Gauteng",
    brand: "Miwesu",
    brandLine: "Fire Wood",
    headline: "Dry braai wood, delivered across Gauteng.",
    support:
      "Verified under 12% moisture. Free delivery. Order on WhatsApp. Pay when you've checked the load.",
    primaryLabel: "Order wood",
    secondaryLabel: "See the range",
    secondaryHref: "/#products",
    productId: null,
  },
  {
    id: "braai-mix",
    image: "/Geelhaak_Hero.png",
    imageAlt: "Ultimate Braai Mix hardwood ready for a long Gauteng braai",
    brand: "Braai Mix",
    brandLine: "The master blend",
    headline: "Flavour, easy light, coals that last.",
    support:
      "Snuifpeul, Knoppiesdoring, Geelhaak and Sekelbos in one bag. Built for the long kuier.",
    primaryLabel: "Order Braai Mix",
    secondaryLabel: "View Braai Mix",
    secondaryHref: "/products/braai-mix",
    productId: "braai-mix-20",
  },
  {
    id: "sekelbos",
    image: "/gallery/home-gallery-04.jpg",
    imageAlt: "Premium Sekelbos hardwood for a clean hot braai",
    brand: "Sekelbos",
    brandLine: "High heat. Clean burn.",
    headline: "Hot sear. Minimal smoke. Bone dry.",
    support:
      "Sickle bush packed with natural oils. Lights fast, burns hot, stays clean for steaks and camping fires.",
    primaryLabel: "Order Sekelbos",
    secondaryLabel: "Meet Sekelbos",
    secondaryHref: "/woods/sekelbos",
    productId: "sekelbos-20",
  },
];

const INTERVAL_MS = 6500;

type HeroSlideshowProps = {
  onOrder: (productId: string | null) => void;
};

export function HeroSlideshow({ onOrder }: HeroSlideshowProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-coal"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Miwesu Fire Wood highlights"
    >
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-out ${
            i === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={s.image}
            alt={s.imageAlt}
            fill
            priority={i === 0}
            className={`object-cover object-center transition-transform duration-[6500ms] ease-out ${
              i === index ? "scale-105" : "scale-100"
            }`}
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 z-[1] bg-[linear-gradient(105deg,rgba(12,10,8,0.9)_0%,rgba(12,10,8,0.58)_45%,rgba(12,10,8,0.28)_100%)]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/75 via-transparent to-black/30" />

      {/* Fixed copy frame: all slides overlay the same box so height never shifts */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24 sm:pt-24 sm:pb-28">
          <div className="relative max-w-2xl min-h-[22rem] sm:min-h-[24rem] md:min-h-[26rem]" aria-live="polite">
            {SLIDES.map((slide, i) => {
              const active = i === index;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-700 ease-out ${
                    active ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  aria-hidden={!active}
                >
                  <p className="font-display text-[clamp(2.75rem,9vw,5.75rem)] font-semibold leading-[0.9] tracking-tightest text-white">
                    {slide.brand}
                  </p>
                  {slide.brandLine ? (
                    <p className="mt-1 sm:mt-2 font-display text-[clamp(1.25rem,3.5vw,2.25rem)] font-medium tracking-tight text-white/80 min-h-[1.2em]">
                      {slide.brandLine}
                    </p>
                  ) : (
                    <p className="mt-1 sm:mt-2 min-h-[1.2em]" aria-hidden />
                  )}
                  <h1 className="mt-5 sm:mt-6 max-w-lg text-white text-lg sm:text-xl md:text-2xl font-medium leading-snug min-h-[2.6em]">
                    {slide.headline}
                  </h1>
                  <p className="mt-3 max-w-md text-white/70 text-[0.95rem] sm:text-base leading-relaxed min-h-[4.5em]">
                    {slide.support}
                  </p>
                  <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                      type="button"
                      tabIndex={active ? 0 : -1}
                      onClick={() => onOrder(slide.productId ?? null)}
                      className="btn-primary"
                    >
                      {slide.primaryLabel}
                    </button>
                    <Link
                      href={slide.secondaryHref}
                      tabIndex={active ? 0 : -1}
                      className="inline-flex items-center justify-center min-h-[48px] px-6 rounded text-[0.9rem] font-semibold tracking-[0.02em] bg-white text-ink border border-white hover:bg-white/90 transition-colors no-underline"
                    >
                      {slide.secondaryLabel}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 inset-x-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2" role="tablist" aria-label="Hero slides">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1}: ${s.brand}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-10 bg-white" : "w-5 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
          <p className="hidden sm:block text-[0.7rem] tracking-[0.14em] uppercase text-white/50">
            {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => goTo(index - 1)}
              className="w-10 h-10 rounded border border-white/30 text-white/90 hover:bg-white/10 transition-colors text-lg leading-none"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => goTo(index + 1)}
              className="w-10 h-10 rounded border border-white/30 text-white/90 hover:bg-white/10 transition-colors text-lg leading-none"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
