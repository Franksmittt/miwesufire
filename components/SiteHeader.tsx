"use client";

import Link from "next/link";
import { useState } from "react";

type SiteHeaderProps = {
  variant?: "default" | "policy";
  onAllocationClick?: () => void;
};

const navLinkClass =
  "text-gray-400 no-underline text-xs font-medium tracking-wide hover:text-white transition-colors duration-300 py-2 min-h-[44px] flex items-center";

export function SiteHeader({ variant = "default", onAllocationClick }: SiteHeaderProps) {
  const isPolicy = variant === "policy";
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const logo = (
    <Link href="/" className="flex items-center gap-3 no-underline shrink-0 group" onClick={closeMenu}>
      <div className="w-5 h-5 rounded-full bg-bronze-gradient shadow-[0_0_15px_rgba(191,149,63,0.4)] group-hover:shadow-[0_0_25px_rgba(191,149,63,0.6)] transition-shadow duration-300 flex-shrink-0" />
      <span className="text-lg font-bold tracking-tight text-white">
        MIWESU
      </span>
      {!isPolicy && (
        <span className="font-bold text-[0.75rem] sm:text-[0.9rem] uppercase tracking-widest-tech text-gray-400 whitespace-nowrap hidden sm:inline">
          FIRE WOOD
        </span>
      )}
    </Link>
  );

  const getAllocationButton = !isPolicy && (
    onAllocationClick ? (
      <button
        type="button"
        onClick={() => {
          closeMenu();
          onAllocationClick();
        }}
        className="inline-flex items-center justify-center min-h-[44px] py-1.5 px-4 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white text-black hover:bg-gray-200 transition-colors w-full md:w-auto"
      >
        Get Allocation
      </button>
    ) : (
      <Link
        href="/#products"
        onClick={closeMenu}
        className="inline-flex items-center justify-center min-h-[44px] py-1.5 px-4 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white text-black hover:bg-gray-200 transition-colors no-underline w-full md:w-auto"
      >
        Get Allocation
      </Link>
    )
  );

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 min-h-[56px] flex items-center justify-between">
        {logo}

        {/* Desktop: center nav */}
        <div className="hidden md:flex gap-10 text-xs font-medium tracking-wide">
          {!isPolicy && (
            <>
              <Link href="/#products" className={navLinkClass}>
                Products
              </Link>
              <Link href="/woods" className={navLinkClass}>
                Woods
              </Link>
              <Link href="/#performance" className={navLinkClass}>
                Performance
              </Link>
            </>
          )}
          <Link href="/policies" className={navLinkClass}>
            Policies
          </Link>
          {!isPolicy && (
            <Link href="https://miwesu.com" target="_blank" rel="noopener" className={navLinkClass}>
              Visit Farm
            </Link>
          )}
          <a href="mailto:guardians@miwesu.com" className={navLinkClass}>
            Contact
          </a>
        </div>

        {/* Desktop: Get Allocation */}
        <div className="hidden md:block shrink-0">{getAllocationButton}</div>

        {/* Mobile: hamburger button */}
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center items-center w-12 h-12 rounded-[var(--squircle)] text-[var(--text)] border border-[var(--rim)] bg-[var(--glass)] hover:bg-[var(--rim)]/20 transition-colors"
        >
          <span
            className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-1" : ""}`}
          />
          <span className={`block w-5 h-0.5 bg-current rounded-full my-1 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col gap-0 py-4 pb-5 px-4 border-t border-white/5 bg-black/95 backdrop-blur-xl">
          {!isPolicy && (
            <>
              <Link href="/#products" className={navLinkClass + " px-3"} onClick={closeMenu}>
                Products
              </Link>
              <Link href="/woods" className={navLinkClass + " px-3"} onClick={closeMenu}>
                Woods
              </Link>
              <Link href="/#performance" className={navLinkClass + " px-3"} onClick={closeMenu}>
                Performance
              </Link>
            </>
          )}
          <Link href="/policies" className={navLinkClass + " px-3"} onClick={closeMenu}>
            Policies
          </Link>
          {!isPolicy && (
            <Link href="https://miwesu.com" target="_blank" rel="noopener" className={navLinkClass + " px-3"} onClick={closeMenu}>
              Visit Farm
            </Link>
          )}
          <a href="mailto:guardians@miwesu.com" className={navLinkClass + " px-3"} onClick={closeMenu}>
            Contact
          </a>
          {getAllocationButton && (
            <div className="pt-4 px-3">
              {getAllocationButton}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
