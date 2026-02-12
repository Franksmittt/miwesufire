"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { OrderModal } from "@/components/OrderModal";
import { PRODUCTS } from "@/lib/products";

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

  const heroImage = "/Gemini_Generated_Image_rvtbyirvtbyirvtb.jpg";

  return (
    <>
      {/* Above the fold: exactly one viewport — header, hero, marquee only */}
      <div className="h-screen flex flex-col overflow-hidden">
        <SiteHeader variant="default" onAllocationClick={() => openModal(null)} />
        <section className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center pt-14 sm:pt-20 md:pt-[80px] pb-4 sm:pb-6 px-4 sm:px-6 md:px-12 max-w-[1200px] mx-auto w-full">
          <div className="text-left md:text-left order-2 md:order-1">
            <h1 className="text-[clamp(1.85rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-tight mb-4 sm:mb-6">
              Heat.
              <br />
              <span className="bg-gradient-to-br from-[var(--copper)] to-[#c2410c] bg-clip-text text-transparent">
                Redefined.
              </span>
            </h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-6 text-[0.85rem] sm:text-[0.95rem] text-[var(--titanium)] mb-6 sm:mb-10">
              <span>From R25 per bag</span>
              <span className="text-[var(--rim)]">|</span>
              <span>MOQ from 20 bags</span>
              <span className="text-[var(--rim)]">|</span>
              <span>Gauteng delivery</span>
            </div>
            <button
              type="button"
              onClick={() => openModal(null)}
              className="inline-flex items-center justify-center min-h-[48px] w-full sm:w-auto py-3.5 sm:py-4 px-8 sm:px-11 rounded-[var(--squircle)] text-[0.85rem] sm:text-[0.9rem] font-semibold uppercase tracking-wider bg-gradient-to-r from-[var(--copper)] to-[var(--copper-deep)] text-white border-0 cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] hover:opacity-95 active:scale-[0.98] transition-transform"
            >
              Order Now
            </button>
          </div>
          <div className="rounded-[var(--squircle)] overflow-hidden border border-[var(--rim)] order-1 md:order-2 max-w-[70%] sm:max-w-[75%] md:max-w-[55%] mx-auto md:mx-0 w-full">
            <Image src={heroImage} alt="Quality braai wood" width={600} height={400} className="w-full h-auto object-cover block" />
          </div>
        </section>
        <div className="flex-shrink-0 overflow-hidden py-3 sm:py-4 border-y border-[var(--rim)] bg-black/30">
          <div className="flex w-max animate-marquee">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="px-4 sm:px-6 md:px-8 text-[0.7rem] sm:text-[0.85rem] font-semibold tracking-[0.2em] sm:tracking-[0.35em] uppercase text-[var(--copper)] whitespace-nowrap">
                FREE DELIVERY IN GAUTENG
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Below the fold: only visible after scrolling */}
      <div className="py-6 px-4 sm:py-8 sm:px-6 max-w-[1320px] mx-auto border-b border-[var(--rim)] bg-[rgba(10,10,10,0.4)]">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 items-start">
            {[
              { icon: "◇", title: "Moisture guarantee", desc: "Verified < 12% moisture. Dry wood, every time." },
              { icon: "♻", title: "Eco-positive", desc: "Sustainably sourced. Invasive species removal." },
              { icon: "🚚", title: "Free Gauteng delivery", desc: "We deliver. You inspect. COD on arrival." },
              { icon: "✓", title: "No surprises", desc: "Clear MOQ, clear pricing. No hidden fees." },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-3 w-full sm:w-auto sm:max-w-[220px]">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-[rgba(184,115,51,0.15)] border border-[rgba(184,115,51,0.3)] flex items-center justify-center text-lg">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[0.75rem] font-bold tracking-wider uppercase text-[var(--copper)] mb-0.5">{item.title}</div>
                  <div className="text-[0.85rem] text-[var(--titanium)] leading-snug" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <section id="products" className="py-12 sm:py-16 md:py-[100px] px-4 sm:px-6 max-w-[1320px] mx-auto">
          <h2 className="text-[clamp(1.5rem,4vw,2.2rem)] font-bold tracking-tight text-center mb-8 sm:mb-10 md:mb-14">
            These are the products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PRODUCTS.map((p) => (
              <div
                key={p.id}
                className="bg-[#0a0a0a] border border-[var(--rim)] rounded-[var(--squircle)] overflow-hidden transition-[border-color,box-shadow] hover:border-white/15 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.4)]"
              >
                <Link href={`/products/${p.id}`} className="block aspect-square bg-gradient-to-b from-[#111] to-[#0a0a0a] relative">
                  <Image src={p.images[0]} alt={p.name} fill className="object-cover" />
                </Link>
                <div className="p-4 sm:p-6 md:p-7">
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--copper)] mb-2">{p.tier}</p>
                  <h3 className="text-[1.2rem] sm:text-[1.35rem] font-bold tracking-tight mb-1.5">
                    <Link href={`/products/${p.id}`} className="text-[var(--text)] no-underline hover:text-[var(--copper)] transition-colors">
                      {p.name}
                    </Link>
                  </h3>
                  <p className="text-[0.75rem] sm:text-[0.8rem] text-[var(--titanium)] leading-snug mb-2">
                    <span className="text-[0.65rem] sm:text-[0.7rem] tracking-wider uppercase text-[var(--copper)] block mb-0.5">Best for</span>
                    {p.shortDescription.slice(0, 100)}...
                  </p>
                  <p className="text-[0.8rem] sm:text-[0.88rem] text-[var(--titanium)] mb-4 sm:mb-6">{p.priceLabel} · MOQ {p.moq} Bags</p>
                  <button
                    type="button"
                    onClick={() => openModal(p.id)}
                    className="block w-full min-h-[44px] py-3 sm:py-3.5 rounded-[var(--squircle)] text-[0.75rem] sm:text-[0.8rem] font-semibold uppercase tracking-wider bg-[var(--glass)] text-[var(--text)] border border-[var(--rim)] cursor-pointer hover:border-[var(--copper)] hover:bg-[rgba(184,115,51,0.08)] transition-colors"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="wood-finder" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-[1320px] mx-auto">
          <h2 className="text-[clamp(1.4rem,3.5vw,2rem)] font-bold tracking-tight text-center mb-2 sm:mb-3">Find your fire</h2>
          <p className="text-center text-[var(--titanium)] text-[0.875rem] sm:text-[0.95rem] mb-6 sm:mb-10 px-2">What are you after? Pick your use and we&apos;ll point you to the right wood.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Link
              href="/products/braai-mix-12"
              className="block p-5 sm:p-7 bg-[#0a0a0a] border border-[var(--rim)] rounded-[var(--squircle)] no-underline text-inherit transition-[border-color,background] hover:border-[var(--copper)] hover:bg-[rgba(184,115,51,0.06)]"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] bg-[rgba(184,115,51,0.12)] border border-[rgba(184,115,51,0.25)] flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4">🔥</div>
              <h3 className="text-[1.1rem] sm:text-[1.2rem] font-bold tracking-tight mb-2 text-[var(--text)]">Braai & flavor</h3>
              <p className="text-[0.85rem] sm:text-[0.9rem] text-[var(--titanium)] leading-snug mb-3 sm:mb-4">You want great flavor, easy light, and coals that last. Our Braai Mix and Geelhaak deliver.</p>
              <span className="text-[0.75rem] sm:text-[0.8rem] font-semibold uppercase tracking-wider text-[var(--copper)]">View braai wood →</span>
            </Link>
            <Link
              href="/products/sekelbos-30"
              className="block p-5 sm:p-7 bg-[#0a0a0a] border border-[var(--rim)] rounded-[var(--squircle)] no-underline text-inherit transition-[border-color,background] hover:border-[var(--copper)] hover:bg-[rgba(184,115,51,0.06)]"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] bg-[rgba(184,115,51,0.12)] border border-[rgba(184,115,51,0.25)] flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4">⚡</div>
              <h3 className="text-[1.1rem] sm:text-[1.2rem] font-bold tracking-tight mb-2 text-[var(--text)]">High heat, clean burn</h3>
              <p className="text-[0.85rem] sm:text-[0.9rem] text-[var(--titanium)] leading-snug mb-3 sm:mb-4">Steaks, camping, or a hot fire with minimal smoke. Premium Sekelbos is built for it.</p>
              <span className="text-[0.75rem] sm:text-[0.8rem] font-semibold uppercase tracking-wider text-[var(--copper)]">View Sekelbos →</span>
            </Link>
            <Link
              href="/products/braai-mix-30"
              className="block p-5 sm:p-7 bg-[#0a0a0a] border border-[var(--rim)] rounded-[var(--squircle)] no-underline text-inherit transition-[border-color,background] hover:border-[var(--copper)] hover:bg-[rgba(184,115,51,0.06)]"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] bg-[rgba(184,115,51,0.12)] border border-[rgba(184,115,51,0.25)] flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4">📦</div>
              <h3 className="text-[1.1rem] sm:text-[1.2rem] font-bold tracking-tight mb-2 text-[var(--text)]">Bulk & value</h3>
              <p className="text-[0.85rem] sm:text-[0.9rem] text-[var(--titanium)] leading-snug mb-3 sm:mb-4">Long weekends, big gatherings, or stocking up. Our 30kg bulk bags give you maximum value.</p>
              <span className="text-[0.75rem] sm:text-[0.8rem] font-semibold uppercase tracking-wider text-[var(--copper)]">View bulk options →</span>
            </Link>
          </div>
        </section>

        <section id="performance" className="py-12 sm:py-16 md:py-[100px] px-4 sm:px-6 max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-[clamp(1.35rem,3.5vw,2rem)] font-bold tracking-tight leading-tight mb-3 sm:mb-4">
              Engineered for the 2026 Culinary Standard.
            </h2>
            <p className="text-[var(--titanium)] text-[0.9375rem] sm:text-base">Precision-seasoned thermal architecture. Verified metrics. Eco-positive sourcing.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-[var(--glass)] backdrop-blur-[20px] border border-[var(--rim)] rounded-[var(--squircle)] py-6 px-4 sm:py-8 sm:px-6 text-center">
              <div className="text-[2rem] sm:text-[2.5rem] font-bold tracking-tight text-[var(--text)] mb-1">&lt; 12%</div>
              <div className="text-[0.7rem] sm:text-[0.75rem] tracking-wider uppercase text-[var(--titanium)]">Moisture (Verified)</div>
            </div>
            <div className="bg-[var(--glass)] backdrop-blur-[20px] border border-[var(--rim)] rounded-[var(--squircle)] py-6 px-4 sm:py-8 sm:px-6 text-center">
              <div className="text-[2rem] sm:text-[2.5rem] font-bold tracking-tight text-[var(--text)] mb-1">100%</div>
              <div className="text-[0.7rem] sm:text-[0.75rem] tracking-wider uppercase text-[var(--titanium)]">Invasive Species (Eco-Positive)</div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-[1320px] mx-auto">
          <h2 className="text-[clamp(1.35rem,3.5vw,2rem)] font-bold tracking-tight text-center mb-2 sm:mb-3">What our customers say</h2>
          <p className="text-center text-[var(--titanium)] text-[0.875rem] sm:text-[0.95rem] mb-6 sm:mb-10">Real feedback from Gauteng braai and firewood customers.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { quote: "Wood was bone dry, exactly as promised. Delivery was on time and the driver was helpful. Will order again.", author: "J. M.", loc: "Alberton" },
              { quote: "Finally found wood that actually burns. No more wet bags from the garage. The braai mix is our go-to now.", author: "T. K.", loc: "Johannesburg" },
              { quote: "Ordered 30 bags for a big weekend. Stacked neatly, no mess. COD on delivery made it easy. Very happy.", author: "R. S.", loc: "Pretoria" },
            ].map((t) => (
              <div key={t.author} className="bg-[#0a0a0a] border border-[var(--rim)] rounded-[var(--squircle)] p-5 sm:p-7">
                <p className="text-[0.875rem] sm:text-[0.95rem] text-[var(--titanium)] leading-relaxed mb-3 sm:mb-4 italic">&quot;{t.quote}&quot;</p>
                <p className="text-[0.75rem] sm:text-[0.8rem] font-semibold tracking-wide text-[var(--text)]">{t.author} <span className="text-[var(--titanium)] font-normal">· {t.loc}</span></p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-[1320px] mx-auto">
          <div className="grid grid-cols-3 grid-rows-3 gap-2 sm:gap-3">
            {["/WhatsApp Image 2026-02-09 at 19.57.16 (1).jpeg", "/WhatsApp Image 2026-02-09 at 19.57.16.jpeg", "/WhatsApp Image 2026-02-09 at 19.57.13.jpeg", "/WhatsApp Image 2026-02-09 at 19.57.14.jpeg", "/WhatsApp Image 2026-02-09 at 19.57.15.jpeg"].map((src, i) => (
              <div key={i} className="aspect-square rounded-[var(--squircle)] overflow-hidden border border-[var(--rim)] bg-gradient-to-br from-[#1a1510] to-[#0a0a0a] relative">
                <Image src={src} alt="Miwesu wood and braai" fill className="object-cover" />
              </div>
            ))}
            {[0, 1, 2, 3].map((i) => (
              <div key={`p-${i}`} className="aspect-square rounded-[var(--squircle)] bg-gradient-to-br from-[#1a1510] to-[#0a0a0a] border border-[var(--rim)]" />
            ))}
          </div>
        </section>

        <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-[1320px] mx-auto">
          <h2 className="text-[clamp(1.35rem,3.5vw,2rem)] font-bold tracking-tight text-center mb-2 sm:mb-3">Contact us</h2>
          <p className="text-center text-[var(--titanium)] text-[0.875rem] sm:text-[0.95rem] mb-6 sm:mb-10">Have a question or enquiry? Send us a message - we&apos;ll get back to you.</p>
          <form
            className="max-w-full grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-7"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = (form.querySelector("#contactName") as HTMLInputElement)?.value?.trim() || "";
              const email = (form.querySelector("#contactEmail") as HTMLInputElement)?.value?.trim() || "";
              const phone = (form.querySelector("#contactPhone") as HTMLInputElement)?.value?.trim() || "";
              const message = (form.querySelector("#contactMessage") as HTMLTextAreaElement)?.value?.trim() || "";
              if (!name || !email || !message) return;
              const body = "Name: " + name + "\nEmail: " + email + "\nPhone: " + (phone || "-") + "\n\nMessage:\n" + message;
              window.location.href = "mailto:guardians@miwesu.com?subject=" + encodeURIComponent("Enquiry from " + name) + "&body=" + encodeURIComponent(body);
            }}
          >
            <div className="mb-4 sm:mb-6">
              <label htmlFor="contactName" className="block text-[0.7rem] tracking-widest uppercase text-[var(--titanium)] mb-2">Name *</label>
              <input id="contactName" name="name" required type="text" className="w-full min-h-[48px] py-3 sm:py-3.5 bg-transparent border-0 border-b border-[var(--rim)] text-[var(--text)] text-base outline-none focus:border-b-[var(--copper)]" />
            </div>
            <div className="mb-4 sm:mb-6">
              <label htmlFor="contactEmail" className="block text-[0.7rem] tracking-widest uppercase text-[var(--titanium)] mb-2">Email *</label>
              <input id="contactEmail" name="email" required type="email" className="w-full min-h-[48px] py-3 sm:py-3.5 bg-transparent border-0 border-b border-[var(--rim)] text-[var(--text)] text-base outline-none focus:border-b-[var(--copper)]" />
            </div>
            <div className="mb-4 sm:mb-6">
              <label htmlFor="contactPhone" className="block text-[0.7rem] tracking-widest uppercase text-[var(--titanium)] mb-2">Phone</label>
              <input id="contactPhone" name="phone" type="tel" className="w-full min-h-[48px] py-3 sm:py-3.5 bg-transparent border-0 border-b border-[var(--rim)] text-[var(--text)] text-base outline-none focus:border-b-[var(--copper)]" />
            </div>
            <div className="md:col-span-3 mb-4 sm:mb-6">
              <label htmlFor="contactMessage" className="block text-[0.7rem] tracking-widest uppercase text-[var(--titanium)] mb-2">Message *</label>
              <textarea id="contactMessage" name="message" required placeholder="Your enquiry or message…" className="w-full min-h-[100px] py-3 sm:py-3.5 bg-transparent border-0 border-b border-[var(--rim)] text-[var(--text)] text-base outline-none focus:border-b-[var(--copper)] resize-y" />
            </div>
            <div className="md:col-span-3 mt-6 sm:mt-8">
              <button type="submit" className="w-full min-h-[48px] py-3.5 sm:py-4 rounded-[var(--squircle)] text-[0.9rem] sm:text-[0.95rem] font-semibold uppercase tracking-wider bg-gradient-to-r from-[var(--copper)] to-[var(--copper-deep)] text-white border-0 cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] hover:opacity-95">
                Send message
              </button>
            </div>
          </form>
        </section>

        <SiteFooter variant="default" />

      <OrderModal open={modalOpen} onClose={() => setModalOpen(false)} preselectedId={preselectedId} />
      <WhatsAppFloat />
    </>
  );
}
