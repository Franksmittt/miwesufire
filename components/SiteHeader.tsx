"use client";

import Link from "next/link";
import { useState } from "react";
import { WOOD_TYPES } from "@/lib/wood-types";

type SiteHeaderProps = {
  variant?: "default" | "policy";
  onAllocationClick?: () => void;
  /** Transparent over hero on homepage */
  overHero?: boolean;
};

export function SiteHeader({ variant = "default", onAllocationClick, overHero = false }: SiteHeaderProps) {
  const isPolicy = variant === "policy";
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const heroMode = overHero && !menuOpen;

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  const navLinkClass = heroMode
    ? "text-white/75 no-underline text-[0.8rem] font-medium tracking-wide hover:text-white transition-colors duration-200 py-2 min-h-[44px] flex items-center"
    : "text-ink/70 no-underline text-[0.8rem] font-medium tracking-wide hover:text-ink transition-colors duration-200 py-2 min-h-[44px] flex items-center";

  const logo = (
    <Link href="/" className="flex items-baseline gap-2 no-underline shrink-0 group" onClick={closeMenu}>
      <span
        className={`font-display text-[1.35rem] sm:text-xl font-semibold tracking-tight transition-colors ${
          heroMode ? "text-white group-hover:text-white/90" : "text-ink group-hover:text-ember"
        }`}
      >
        Miwesu
      </span>
      {!isPolicy && (
        <span
          className={`text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.14em] whitespace-nowrap hidden sm:inline ${
            heroMode ? "text-white/60" : "text-muted"
          }`}
        >
          Fire Wood
        </span>
      )}
    </Link>
  );

  const orderButton = !isPolicy && (
    onAllocationClick ? (
      <button
        type="button"
        onClick={() => {
          closeMenu();
          onAllocationClick();
        }}
        className="inline-flex items-center justify-center min-h-[42px] py-2 px-4 rounded text-[0.8rem] font-semibold bg-ember text-white hover:bg-[var(--ember-deep)] transition-colors w-full md:w-auto"
      >
        Order wood
      </button>
    ) : (
      <Link
        href="/#products"
        onClick={closeMenu}
        className="inline-flex items-center justify-center min-h-[42px] py-2 px-4 rounded text-[0.8rem] font-semibold bg-ember text-white hover:bg-[var(--ember-deep)] transition-colors no-underline w-full md:w-auto"
      >
        Order wood
      </Link>
    )
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b overflow-visible transition-colors ${
        heroMode
          ? "border-transparent bg-gradient-to-b from-black/50 to-transparent"
          : "border-[var(--rim)] bg-[rgba(246,244,238,0.92)] backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 min-h-[56px] flex items-center justify-between">
        {logo}

        <div className="hidden md:flex gap-8 text-[0.8rem] font-medium tracking-wide">
          {!isPolicy && (
            <>
              <div className="relative group">
                <Link href="/products" className={`${navLinkClass} flex items-center gap-1`}>
                  Products
                  <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="rounded border border-[var(--rim)] bg-paper py-2 min-w-[180px] shadow-sm">
                    <Link href="/products" className="block px-4 py-2.5 text-ink/70 hover:text-ink hover:bg-ground text-[0.8rem] font-medium transition-colors">
                      All Products
                    </Link>
                    {WOOD_TYPES.map((w) => (
                      <Link key={w.slug} href={`/products/${w.slug}`} className="block px-4 py-2.5 text-ink/70 hover:text-ink hover:bg-ground text-[0.8rem] font-medium transition-colors">
                        {w.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/woods" className={navLinkClass}>
                Woods
              </Link>
              <Link href="/delivery-areas" className={navLinkClass}>
                Delivery
              </Link>
            </>
          )}
          <Link href="/policies" className={navLinkClass}>
            Policies
          </Link>
          {!isPolicy && (
            <Link href="https://www.miwesu.co.za" target="_blank" rel="noopener" className={navLinkClass}>
              Visit Farm
            </Link>
          )}
          <a href="mailto:orders@miwesufirewood.co.za" className={navLinkClass}>
            Contact
          </a>
        </div>

        <div className="hidden md:block shrink-0">{orderButton}</div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
          className={`md:hidden flex flex-col justify-center items-center w-11 h-11 rounded border transition-colors ${
            heroMode
              ? "text-white border-white/30 bg-white/10 hover:bg-white/15"
              : "text-ink border-[var(--rim)] bg-paper/80 hover:bg-paper"
          }`}
        >
          <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current my-1 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col gap-0 py-4 pb-5 px-4 border-t border-[var(--rim)] bg-paper">
          {!isPolicy && (
            <>
              <div className="border-b border-[var(--rim)]">
                <button
                  type="button"
                  onClick={() => setProductsOpen((o) => !o)}
                  className={navLinkClass + " px-3 w-full justify-between"}
                  aria-expanded={productsOpen}
                >
                  Products
                  <svg className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {productsOpen && (
                  <div className="pb-2 pl-3 flex flex-col gap-0">
                    <Link href="/products" className="py-2 text-muted hover:text-ink text-[0.8rem] font-medium no-underline" onClick={closeMenu}>
                      All Products
                    </Link>
                    {WOOD_TYPES.map((w) => (
                      <Link key={w.slug} href={`/products/${w.slug}`} className="py-2 text-muted hover:text-ink text-[0.8rem] font-medium no-underline" onClick={closeMenu}>
                        {w.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/woods" className={navLinkClass + " px-3"} onClick={closeMenu}>
                Woods
              </Link>
              <Link href="/delivery-areas" className={navLinkClass + " px-3"} onClick={closeMenu}>
                Delivery
              </Link>
            </>
          )}
          <Link href="/policies" className={navLinkClass + " px-3"} onClick={closeMenu}>
            Policies
          </Link>
          {!isPolicy && (
            <Link href="https://www.miwesu.co.za" target="_blank" rel="noopener" className={navLinkClass + " px-3"} onClick={closeMenu}>
              Visit Farm
            </Link>
          )}
          <a href="mailto:orders@miwesufirewood.co.za" className={navLinkClass + " px-3"} onClick={closeMenu}>
            Contact
          </a>
          {orderButton && <div className="pt-4 px-3">{orderButton}</div>}
        </div>
      </div>
    </nav>
  );
}
