"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { OrderModal } from "@/components/OrderModal";
import { WOOD_TYPES, getProductsByWood } from "@/lib/wood-types";

export function HomePageContent({ initialProductId }: { initialProductId: string | null }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [preselectedId, setPreselectedId] = useState<string | null>(initialProductId);

  useEffect(() => {
    if (initialProductId) {
      setPreselectedId(initialProductId);
      setModalOpen(true);
    }
  }, [initialProductId]);

  const openModal = (productId: string | null) => {
    setPreselectedId(productId);
    setModalOpen(true);
  };

  return (
    <>
      <SiteHeader onAllocationClick={() => openModal(null)} />

      {/* Hero: brand-first, full-bleed, filled composition */}
      <section className="relative min-h-[100svh] w-full flex items-center overflow-hidden bg-coal">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Sekelbos_Hero.png"
            alt="Miwesu Fire Wood: precision-split hardwood ready for braai and fireplace Gauteng"
            fill
            priority
            className="object-cover object-center motion-safe:animate-hero-zoom"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(12,10,8,0.88)_0%,rgba(12,10,8,0.55)_42%,rgba(12,10,8,0.25)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-2xl">
            <p className="font-display text-[clamp(3.25rem,12vw,7rem)] font-semibold leading-[0.88] tracking-tightest text-white animate-rise">
              Miwesu
            </p>
            <p className="mt-1 sm:mt-2 font-display text-[clamp(1.5rem,4.5vw,2.75rem)] font-medium tracking-tight text-white/80 animate-rise">
              Fire Wood
            </p>
            <h1 className="mt-6 sm:mt-8 max-w-lg text-white text-xl sm:text-2xl md:text-[1.75rem] font-medium leading-snug animate-rise-delay">
              Dry braai wood, delivered across Gauteng.
            </h1>
            <p className="mt-4 max-w-md text-white/70 text-[0.95rem] sm:text-base leading-relaxed animate-rise-delay">
              Verified under 12% moisture. Free delivery. Order on WhatsApp. Pay when you&apos;ve checked the load.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-rise-delay-2">
              <button type="button" onClick={() => openModal(null)} className="btn-primary">
                Order wood
              </button>
              <Link href="/#products" className="btn-ghost text-white border-white/45 hover:bg-white/10">
                See the range
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-[var(--rim)] bg-paper/60">
        <p className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-center text-sm sm:text-[0.95rem] text-ink-soft leading-relaxed">
          Precision-split hardwood · Moisture under 12% · Free Gauteng delivery · COD after inspection
        </p>
      </div>

      {/* How to order */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span className="section-label">Ordering</span>
          <h2 className="section-title mb-3">Three steps. No checkout fuss.</h2>
          <p className="text-muted max-w-lg mb-12 sm:mb-14 text-[0.95rem] sm:text-base">
            We confirm everything over WhatsApp: wood, quantity, suburb, and delivery day.
          </p>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 list-none">
            {[
              {
                n: "01",
                title: "Pick your wood",
                body: (
                  <>
                    Sekelbos, Geelhaak, or Braai Mix in 10, 20, or 30&nbsp;kg bags. Check{" "}
                    <Link href="/delivery-areas" className="text-ember underline underline-offset-2 hover:opacity-80">
                      delivery areas
                    </Link>{" "}
                    if you&apos;re unsure.
                  </>
                ),
              },
              {
                n: "02",
                title: "Send the order",
                body: "Fill in the short form. It opens WhatsApp with your details so we can confirm and lock in a slot.",
              },
              {
                n: "03",
                title: "We deliver",
                body: "Free delivery in Gauteng. You inspect the wood, then pay COD if you’re happy. Next-day where we can.",
              },
            ].map((step) => (
              <li key={step.n} className="relative">
                <span className="font-display text-4xl text-ember/25 font-semibold leading-none">{step.n}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm sm:text-[0.95rem] text-muted leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 sm:mt-14">
            <button type="button" onClick={() => openModal(null)} className="btn-primary">
              Start an order
            </button>
            <p className="mt-5 text-sm text-muted">
              Prefer to talk?{" "}
              <a href="tel:+27730309679" className="text-ember font-semibold hover:underline">
                +27 73 030 9679
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 sm:py-20 md:py-24 border-t border-[var(--rim)] bg-paper/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span className="section-label">The range</span>
          <h2 className="section-title mb-3">Wood that burns the way it should.</h2>
          <p className="text-muted max-w-lg mb-12 sm:mb-14 text-[0.95rem] sm:text-base">
            Three lines. Clear pricing. No wet bags from the side of the road.
          </p>

          {WOOD_TYPES.map((wood) => {
            const products = getProductsByWood(wood.slug);
            if (products.length === 0) return null;
            return (
              <div key={wood.slug} className="mb-14 sm:mb-16 last:mb-0">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
                  <div>
                    <h3 className="font-display text-2xl sm:text-[1.75rem] font-semibold text-ink tracking-tight">
                      {wood.title}
                    </h3>
                    <p className="mt-2 text-muted text-sm sm:text-[0.95rem] leading-relaxed max-w-2xl">
                      {wood.description}
                    </p>
                  </div>
                  <Link
                    href={`/products/${wood.slug}`}
                    className="text-sm font-semibold text-ember hover:underline underline-offset-2 shrink-0"
                  >
                    View {wood.title} →
                  </Link>
                </div>
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
                        <p className="text-[0.65rem] tracking-[0.12em] uppercase text-muted mb-1">{p.tier}</p>
                        <h4 className="font-display text-lg font-semibold tracking-tight mb-1">
                          <Link href={`/products/${p.id}`} className="text-ink no-underline hover:text-ember transition-colors">
                            {p.name}
                          </Link>
                        </h4>
                        <p className="text-sm text-muted mb-4">
                          {p.priceLabel} · MOQ {p.moq} bags
                        </p>
                        <button
                          type="button"
                          onClick={() => openModal(p.id)}
                          className="w-full min-h-[44px] py-2.5 rounded text-sm font-semibold bg-ink text-paper hover:bg-ember transition-colors"
                        >
                          Order
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why dry wood: text column matches image height */}
      <section id="why" className="py-16 sm:py-20 md:py-24 border-t border-[var(--rim)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-stretch">
          <div className="relative h-full min-h-[420px] sm:min-h-[520px] overflow-hidden rounded bg-coal self-stretch">
            <Image
              src="/gallery/home-gallery-03.jpg"
              alt="Dry seasoned firewood ready for the braai"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-between gap-6 self-stretch">
            <div>
              <span className="section-label">Why it matters</span>
              <h2 className="section-title mb-5">Wet wood ruins the kuier.</h2>
              <div className="space-y-4 text-muted text-[0.95rem] sm:text-base leading-relaxed">
                <p>
                  Smoke that stings. Coals that die. Glass that blacks up. That is what wet wood does to a Saturday night,
                  a built-in braai, or a closed combustion stove you paid good money for.
                </p>
                <p>
                  Garage bags and roadside loads are often green or rained on. They hiss, spit, and never settle into the
                  bed of coals a braaimaster needs. Guests wait. Meat waits. The gees dies with the fire.
                </p>
                <p>
                  We kiln-verify every batch under 12% moisture so the fire lights clean, burns hot, and lasts the night.
                  Dense bushveld hardwoods, precision-split for real braais, fire pits, indoor fireplaces, and modern
                  closed combustion units that hate wet fuel.
                </p>
                <p>
                  Sustainably sourced, including invasive species removal. Bagged in 10, 20, and 30&nbsp;kg so you can
                  stock a quiet weeknight or a long weekend without guessing. Free delivery across Gauteng. You inspect
                  the load, then pay COD if it is right.
                </p>
                <p>
                  Know the species before you order. Heat, coals, smoke, and lighting differ from Sekelbos to Geelhaak to
                  the woods in our Braai Mix. That is how you pick wood for the fire you actually want.
                </p>
              </div>
            </div>
            <div>
              <Link href="/woods" className="btn-primary">
                Meet the woods
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section id="gallery" className="py-16 sm:py-20 border-t border-[var(--rim)] bg-coal overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
          <span className="section-label !text-[#e8a090]">From the yard</span>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-paper tracking-tight">
            Stacked. Bagged. Ready.
          </h2>
        </div>
        <div className="flex gap-2 sm:gap-3 overflow-x-auto px-4 sm:px-6 pb-2 snap-x snap-mandatory scrollbar-thin">
          {[
            { src: "/gallery/home-gallery-02.jpg", alt: "Braai wood and firewood bags" },
            { src: "/gallery/home-gallery-04.jpg", alt: "Quality hardwood for braai and fireplace" },
            { src: "/gallery/home-gallery-05.png", alt: "Miwesu dry wood display" },
            { src: "/gallery/home-gallery-06.png", alt: "Firewood ready for delivery" },
            { src: "/gallery/home-gallery-07.png", alt: "Braai mix hardwood selection" },
            { src: "/gallery/home-gallery-08.png", alt: "Premium firewood Gauteng" },
          ].map((item) => (
            <div
              key={item.src}
              className="relative shrink-0 w-[70vw] sm:w-[40vw] md:w-[28vw] aspect-[4/3] snap-center overflow-hidden"
            >
              <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="40vw" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 sm:py-20 md:py-24 border-t border-[var(--rim)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span className="section-label">Word of mouth</span>
          <h2 className="section-title mb-12 sm:mb-14">What Gauteng customers say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                quote: "Wood was bone dry, exactly as promised. Delivery was on time and the driver was helpful. Will order again.",
                author: "J. M.",
                loc: "Alberton",
              },
              {
                quote: "Finally found wood that actually burns. No more wet bags from the garage. The braai mix is our go-to now.",
                author: "T. K.",
                loc: "Johannesburg",
              },
              {
                quote: "Ordered 30 bags for a big weekend. Stacked neatly, no mess. COD on delivery made it easy.",
                author: "R. S.",
                loc: "Pretoria",
              },
            ].map((t) => (
              <blockquote key={t.author} className="border-t border-[var(--rim-strong)] pt-6">
                <p className="font-display text-lg sm:text-xl text-ink leading-snug">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-5 text-sm text-muted">
                  <span className="font-semibold text-ink">{t.author}</span> · {t.loc}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 border-t border-[var(--rim)] bg-paper/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span className="section-label">Contact</span>
          <h2 className="section-title mb-3">Ask us anything</h2>
          <p className="text-muted mb-10 sm:mb-12 max-w-md text-[0.95rem]">
            Questions about wood, suburbs, or a bulk order? Send a note. We reply by email.
          </p>
          <form
            className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = (form.querySelector("#contactName") as HTMLInputElement)?.value?.trim() || "";
              const email = (form.querySelector("#contactEmail") as HTMLInputElement)?.value?.trim() || "";
              const phone = (form.querySelector("#contactPhone") as HTMLInputElement)?.value?.trim() || "";
              const message = (form.querySelector("#contactMessage") as HTMLTextAreaElement)?.value?.trim() || "";
              if (!name || !email || !message) return;
              const body =
                "Name: " + name + "\nEmail: " + email + "\nPhone: " + (phone || "-") + "\n\nMessage:\n" + message;
              window.location.href =
                "mailto:orders@miwesufirewood.co.za?subject=" +
                encodeURIComponent("Enquiry from " + name) +
                "&body=" +
                encodeURIComponent(body);
            }}
          >
            <div className="mb-5">
              <label htmlFor="contactName" className="block text-[0.7rem] tracking-[0.12em] uppercase text-muted mb-2">
                Name *
              </label>
              <input id="contactName" name="name" required type="text" className="input-line" />
            </div>
            <div className="mb-5">
              <label htmlFor="contactEmail" className="block text-[0.7rem] tracking-[0.12em] uppercase text-muted mb-2">
                Email *
              </label>
              <input id="contactEmail" name="email" required type="email" className="input-line" />
            </div>
            <div className="mb-5 md:col-span-2">
              <label htmlFor="contactPhone" className="block text-[0.7rem] tracking-[0.12em] uppercase text-muted mb-2">
                Phone
              </label>
              <input id="contactPhone" name="phone" type="tel" className="input-line" />
            </div>
            <div className="mb-5 md:col-span-2">
              <label htmlFor="contactMessage" className="block text-[0.7rem] tracking-[0.12em] uppercase text-muted mb-2">
                Message *
              </label>
              <textarea
                id="contactMessage"
                name="message"
                required
                placeholder="Your enquiry…"
                className="input-line min-h-[100px] resize-y"
              />
            </div>
            <div className="md:col-span-2 mt-4">
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>

      <SiteFooter variant="default" />
      <OrderModal open={modalOpen} onClose={() => setModalOpen(false)} preselectedId={preselectedId} />
      <WhatsAppFloat />
    </>
  );
}
