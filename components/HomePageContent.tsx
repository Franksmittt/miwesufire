"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { OrderModal } from "@/components/OrderModal";
import { PRODUCTS } from "@/lib/products";
import { BenchmarkBars } from "@/components/BenchmarkBars";

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

  const heroImage = "/Gemini_Generated_Image_eax31qeax31qeax3 (2).png";

  const braaiMix = PRODUCTS.find((p) => p.id === "braai-mix-12");
  const sekelbos = PRODUCTS.find((p) => p.id === "sekelbos-30");
  const geelhaak = PRODUCTS.find((p) => p.id === "geelhak-12");
  const braaiMix30 = PRODUCTS.find((p) => p.id === "braai-mix-30");

  return (
    <>
      <div className="min-h-screen flex flex-col overflow-y-auto pt-14">
        <SiteHeader variant="default" onAllocationClick={() => openModal(null)} />

        {/* Hero: full-viewport "Engineered Heat" */}
        <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden bg-void">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-night-gradient opacity-80 relative">
              <Image src={heroImage} alt="Premium firewood and braai wood delivery Gauteng – certified dry, free delivery" fill className="object-cover opacity-50" sizes="100vw" />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]" />
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent" />
          </div>
          <div className="relative z-10 text-center max-w-5xl px-4 mt-16">
            <h2 className="text-bronze-gradient text-xs md:text-sm font-bold tracking-widest-tech uppercase mb-6 inline-block border border-white/10 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm">
              Premium Fire Wood
            </h2>
            <h1 className="text-6xl sm:text-7xl md:text-[8rem] font-semibold tracking-tightest leading-[0.9] mb-8">
              <span className="block text-white opacity-90">Engineered</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">Heat.</span>
            </h1>
            <p className="text-gray-400 text-base md:text-xl font-light max-w-xl mx-auto leading-relaxed tracking-wide">
              High-performance thermal hardware.
              <br />
              <span className="text-white font-normal">Precision-split. Braai wood & firewood delivery Gauteng.</span>
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                type="button"
                onClick={() => openModal(null)}
                className="px-8 py-3.5 bg-white text-black rounded-full font-semibold text-sm tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                View Pricing
              </button>
              <Link
                href="/#products"
                className="px-8 py-3.5 text-sm text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors backdrop-blur-md inline-flex items-center gap-2"
              >
                The Lineup <span className="text-bronze">→</span>
              </Link>
            </div>
          </div>
        </section>

        <div className="flex-shrink-0 overflow-hidden py-3 sm:py-4 border-y border-white/5 bg-black/30">
          <div className="flex w-max animate-marquee">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="px-4 sm:px-6 md:px-8 text-[0.7rem] sm:text-[0.85rem] font-semibold tracking-widest-tech uppercase text-bronze whitespace-nowrap">
                FREE DELIVERY IN GAUTENG
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Below the fold: glass-style feature strip */}
      <div className="py-8 px-4 sm:py-10 sm:px-6 max-w-[1320px] mx-auto border-b border-white/5">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 items-start">
            {[
              { icon: "◇", title: "Moisture guarantee", desc: "Verified < 12% moisture. Dry wood, every time." },
              { icon: "♻", title: "Eco-positive", desc: "Sustainably sourced. Invasive species removal." },
              { icon: "🚚", title: "Free Gauteng delivery", desc: "We deliver. You inspect. COD on arrival." },
              { icon: "✓", title: "No surprises", desc: "Clear MOQ, clear pricing. No hidden fees." },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-3 w-full sm:w-auto sm:max-w-[220px]">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-lg text-bronze">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[0.75rem] font-bold tracking-widest-tech uppercase text-bronze mb-0.5">{item.title}</div>
                  <div className="text-[0.85rem] text-gray-400 leading-snug" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bento: The Lineup */}
        <section id="products" className="py-20 md:py-32 bg-void relative">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-glow-radial pointer-events-none opacity-50" />
          <div className="max-w-[1400px] mx-auto px-6 relative">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">The Lineup.</h2>
                <p className="text-lg text-gray-500">Choose your calibration.</p>
              </div>
              <div className="text-right hidden md:block mt-4 md:mt-0">
                <p className="text-xs text-gray-600 uppercase tracking-widest-tech">Gauteng delivery</p>
                <p className="text-xs text-gray-600 uppercase tracking-widest-tech">Precision split</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 h-auto md:h-[800px]">
              {/* Hero: Braai Mix (2x2) */}
              {braaiMix && (
                <Link
                  href={`/products/${braaiMix.id}`}
                  className="col-span-1 md:col-span-2 row-span-2 squircle glass-panel relative overflow-hidden group block"
                >
                  <div className="absolute inset-0 z-0 transform transition-transform duration-1000 group-hover:scale-105">
                    <Image src={braaiMix.images[0]} alt={braaiMix.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                  </div>
                  <div className="absolute top-8 left-8 z-10">
                    <h3 className="text-3xl font-bold text-white">{braaiMix.name.replace("The Ultimate ", "").replace(" (Bulk)", "")}.</h3>
                    <p className="text-sm text-gray-400 mt-1">The Master Blend.</p>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 z-10 flex gap-4 items-center flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/5 text-[10px] uppercase font-bold text-white">
                      {braaiMix.priceLabel}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/5 text-[10px] uppercase font-bold text-white">
                      MOQ {braaiMix.moq} Bags
                    </span>
                  </div>
                </Link>
              )}

              {/* Tall: Sekelbos (1x2) */}
              {sekelbos && (
                <Link
                  href={`/products/${sekelbos.id}`}
                  className="col-span-1 row-span-2 squircle glass-panel relative overflow-hidden group flex flex-col block"
                >
                  <div className="absolute inset-0 z-0 transform transition-transform duration-1000 group-hover:scale-105">
                    <Image src={sekelbos.images[0]} alt={sekelbos.name} fill className="object-cover" sizes="25vw" />
                  </div>
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between bg-gradient-to-b from-black/60 to-transparent">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{sekelbos.name.replace("Premium ", "").replace(" (Sickle Bush)", "")}.</h3>
                      <p className="text-xs text-cyan mt-1 font-bold uppercase tracking-wide">High Velocity</p>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {sekelbos.shortDescription.slice(0, 120)}…
                    </p>
                  </div>
                </Link>
              )}

              {/* Square: Geelhaak */}
              {geelhaak && (
                <Link
                  href={`/products/${geelhaak.id}`}
                  className="col-span-1 squircle glass-panel relative overflow-hidden group block"
                >
                  <div className="absolute inset-0 z-0 transform transition-transform duration-1000 group-hover:scale-105">
                    <Image src={geelhaak.images[0]} alt={geelhaak.name} fill className="object-cover" sizes="25vw" />
                  </div>
                  <div className="absolute bottom-6 left-6 z-10">
                    <h3 className="text-xl font-bold text-white">{geelhaak.name.replace(" Hardwood", "")}.</h3>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">Balanced Burn</p>
                  </div>
                </Link>
              )}

              {/* Square: Tactical Delivery */}
              <Link
                href="/delivery-areas"
                className="col-span-1 squircle bg-white text-black relative overflow-hidden group p-6 flex flex-col justify-between block"
              >
                <div className="absolute right-[-20px] top-[-20px] w-32 h-32 bg-gray-100 rounded-full blur-2xl opacity-50" />
                <div>
                  <h3 className="text-xl font-bold leading-tight">Tactical<br />Delivery.</h3>
                </div>
                <div className="w-full aspect-square bg-gray-100 rounded-xl my-2 flex items-center justify-center border border-gray-200">
                  <span className="text-[10px] text-gray-400 font-medium">Next day · Gauteng</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase">Delivery areas</span>
                  <span className="text-sm">→</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Full product grid */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-[1320px] mx-auto border-t border-white/5">
          <h2 className="text-[clamp(1.35rem,3.5vw,2rem)] font-bold tracking-tight text-center mb-8 sm:mb-10">
            All products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PRODUCTS.map((p) => (
              <div
                key={p.id}
                className="squircle glass-panel overflow-hidden"
              >
                <Link href={`/products/${p.id}`} className="block aspect-square relative overflow-hidden group">
                  <Image src={p.images[0]} alt={p.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                </Link>
                <div className="p-4 sm:p-6 md:p-7">
                  <p className="text-[0.65rem] tracking-widest-tech uppercase text-bronze mb-2">{p.tier}</p>
                  <h3 className="text-[1.2rem] sm:text-[1.35rem] font-bold tracking-tight mb-1.5">
                    <Link href={`/products/${p.id}`} className="text-white no-underline hover:text-bronze transition-colors">
                      {p.name}
                    </Link>
                  </h3>
                  <p className="text-[0.75rem] sm:text-[0.8rem] text-gray-400 leading-snug mb-2">
                    <span className="text-[0.65rem] sm:text-[0.7rem] tracking-widest-tech uppercase text-bronze block mb-0.5">Best for</span>
                    {p.shortDescription.slice(0, 100)}…
                  </p>
                  <p className="text-[0.8rem] sm:text-[0.88rem] text-gray-400 mb-4 sm:mb-6">{p.priceLabel} · MOQ {p.moq} Bags</p>
                  <button
                    type="button"
                    onClick={() => openModal(p.id)}
                    className="block w-full min-h-[44px] py-3 sm:py-3.5 rounded-[var(--squircle)] text-[0.75rem] sm:text-[0.8rem] font-semibold uppercase tracking-wider bg-white/10 text-white border border-white/10 cursor-pointer hover:border-bronze/50 hover:bg-bronze/10 transition-colors"
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
              className="block p-5 sm:p-7 squircle glass-panel no-underline text-inherit"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] bg-white/10 border border-white/10 flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 text-bronze">🔥</div>
              <h3 className="text-[1.1rem] sm:text-[1.2rem] font-bold tracking-tight mb-2 text-white">Braai & flavor</h3>
              <p className="text-[0.85rem] sm:text-[0.9rem] text-gray-400 leading-snug mb-3 sm:mb-4">You want great flavor, easy light, and coals that last. Our Braai Mix and Geelhaak deliver.</p>
              <span className="text-[0.75rem] sm:text-[0.8rem] font-semibold uppercase tracking-widest-tech text-bronze">View braai wood →</span>
            </Link>
            <Link
              href="/products/sekelbos-30"
              className="block p-5 sm:p-7 squircle glass-panel no-underline text-inherit"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] bg-white/10 border border-white/10 flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 text-cyan">⚡</div>
              <h3 className="text-[1.1rem] sm:text-[1.2rem] font-bold tracking-tight mb-2 text-white">High heat, clean burn</h3>
              <p className="text-[0.85rem] sm:text-[0.9rem] text-gray-400 leading-snug mb-3 sm:mb-4">Steaks, camping, or a hot fire with minimal smoke. Premium Sekelbos is built for it.</p>
              <span className="text-[0.75rem] sm:text-[0.8rem] font-semibold uppercase tracking-widest-tech text-cyan">View Sekelbos →</span>
            </Link>
            <Link
              href="/products/braai-mix-30"
              className="block p-5 sm:p-7 squircle glass-panel no-underline text-inherit"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] bg-white/10 border border-white/10 flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 text-bronze">📦</div>
              <h3 className="text-[1.1rem] sm:text-[1.2rem] font-bold tracking-tight mb-2 text-white">Bulk & value</h3>
              <p className="text-[0.85rem] sm:text-[0.9rem] text-gray-400 leading-snug mb-3 sm:mb-4">Long weekends, big gatherings, or stocking up. Our 30kg bulk bags give you maximum value.</p>
              <span className="text-[0.75rem] sm:text-[0.8rem] font-semibold uppercase tracking-widest-tech text-bronze">View bulk options →</span>
            </Link>
          </div>
        </section>

        <section id="performance" className="py-20 md:py-32 bg-void border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-bronze-gradient text-xs font-bold tracking-widest-tech uppercase mb-4 block">Performance Benchmarks</span>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Physics. Not Fiction.</h2>
              <p className="text-gray-500 max-w-lg mx-auto">We treat wood as a fuel cell. Here is how our hardware performs under controlled thermal conditions.</p>
            </div>
            <BenchmarkBars />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-16">
              <div className="glass-panel squircle py-6 px-4 sm:py-8 sm:px-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">&lt; 12%</div>
                <div className="text-[0.7rem] sm:text-[0.75rem] tracking-widest-tech uppercase text-gray-400">Moisture (Verified)</div>
              </div>
              <div className="glass-panel squircle py-6 px-4 sm:py-8 sm:px-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">100%</div>
                <div className="text-[0.7rem] sm:text-[0.75rem] tracking-widest-tech uppercase text-gray-400">Eco-Positive Sourcing</div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-[1320px] mx-auto">
          <h2 className="text-[clamp(1.35rem,3.5vw,2rem)] font-bold tracking-tight text-center mb-2 sm:mb-3">What our customers say</h2>
          <p className="text-center text-gray-500 text-[0.875rem] sm:text-[0.95rem] mb-6 sm:mb-10">Real feedback from Gauteng braai and firewood customers.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { quote: "Wood was bone dry, exactly as promised. Delivery was on time and the driver was helpful. Will order again.", author: "J. M.", loc: "Alberton" },
              { quote: "Finally found wood that actually burns. No more wet bags from the garage. The braai mix is our go-to now.", author: "T. K.", loc: "Johannesburg" },
              { quote: "Ordered 30 bags for a big weekend. Stacked neatly, no mess. COD on delivery made it easy. Very happy.", author: "R. S.", loc: "Pretoria" },
            ].map((t) => (
              <div key={t.author} className="squircle glass-panel p-5 sm:p-7">
                <p className="text-[0.875rem] sm:text-[0.95rem] text-gray-400 leading-relaxed mb-3 sm:mb-4 italic">&quot;{t.quote}&quot;</p>
                <p className="text-[0.75rem] sm:text-[0.8rem] font-semibold tracking-wide text-white">{t.author} <span className="text-gray-500 font-normal">· {t.loc}</span></p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-[1320px] mx-auto">
          <div className="grid grid-cols-3 grid-rows-3 gap-2 sm:gap-3">
            {[
              { src: "/WhatsApp Image 2026-02-09 at 19.57.16 (1).jpeg", alt: "Braai wood stack – premium hardwood" },
              { src: "/WhatsApp Image 2026-02-09 at 19.57.16.jpeg", alt: "Firewood bags ready for delivery" },
              { src: "/WhatsApp Image 2026-02-09 at 19.57.13.jpeg", alt: "Sekelbos and Geelhaak firewood" },
              { src: "/WhatsApp Image 2026-02-09 at 19.57.14.jpeg", alt: "Dry braai wood – Gauteng" },
              { src: "/WhatsApp Image 2026-02-09 at 19.57.15.jpeg", alt: "Miwesu firewood quality" },
            ].map((item, i) => (
              <div key={i} className="aspect-square squircle overflow-hidden border border-white/10 bg-tungsten relative">
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
            {[0, 1, 2, 3].map((i) => (
              <div key={`p-${i}`} className="aspect-square squircle bg-tungsten border border-white/10" />
            ))}
          </div>
        </section>

        <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-[1320px] mx-auto">
          <h2 className="text-[clamp(1.35rem,3.5vw,2rem)] font-bold tracking-tight text-center mb-2 sm:mb-3">Contact us</h2>
          <p className="text-center text-gray-500 text-[0.875rem] sm:text-[0.95rem] mb-6 sm:mb-10">Have a question or enquiry? Send us a message — we&apos;ll get back to you.</p>
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
              <label htmlFor="contactName" className="block text-[0.7rem] tracking-widest-tech uppercase text-gray-500 mb-2">Name *</label>
              <input id="contactName" name="name" required type="text" className="w-full min-h-[48px] py-3 sm:py-3.5 bg-transparent border-0 border-b border-white/20 text-white text-base outline-none focus:border-b-bronze transition-colors" />
            </div>
            <div className="mb-4 sm:mb-6">
              <label htmlFor="contactEmail" className="block text-[0.7rem] tracking-widest-tech uppercase text-gray-500 mb-2">Email *</label>
              <input id="contactEmail" name="email" required type="email" className="w-full min-h-[48px] py-3 sm:py-3.5 bg-transparent border-0 border-b border-white/20 text-white text-base outline-none focus:border-b-bronze transition-colors" />
            </div>
            <div className="mb-4 sm:mb-6">
              <label htmlFor="contactPhone" className="block text-[0.7rem] tracking-widest-tech uppercase text-gray-500 mb-2">Phone</label>
              <input id="contactPhone" name="phone" type="tel" className="w-full min-h-[48px] py-3 sm:py-3.5 bg-transparent border-0 border-b border-white/20 text-white text-base outline-none focus:border-b-bronze transition-colors" />
            </div>
            <div className="md:col-span-3 mb-4 sm:mb-6">
              <label htmlFor="contactMessage" className="block text-[0.7rem] tracking-widest-tech uppercase text-gray-500 mb-2">Message *</label>
              <textarea id="contactMessage" name="message" required placeholder="Your enquiry or message…" className="w-full min-h-[100px] py-3 sm:py-3.5 bg-transparent border-0 border-b border-white/20 text-white text-base outline-none focus:border-b-bronze resize-y transition-colors" />
            </div>
            <div className="md:col-span-3 mt-6 sm:mt-8">
              <button type="submit" className="w-full min-h-[48px] py-3.5 sm:py-4 rounded-full text-sm font-semibold tracking-wide bg-white text-black border-0 cursor-pointer hover:bg-gray-200 transition-colors">
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
