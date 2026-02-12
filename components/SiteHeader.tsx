"use client";

import Link from "next/link";
import { useState } from "react";

type SiteHeaderProps = {
  variant?: "default" | "policy";
  onAllocationClick?: () => void;
};

const navLinkClass =
  "text-[var(--titanium)] no-underline text-[0.7rem] sm:text-[0.8rem] uppercase tracking-[0.08em] sm:tracking-[0.1em] hover:text-[var(--text)] transition-colors py-2 min-h-[44px] flex items-center";

export function SiteHeader({ variant = "default", onAllocationClick }: SiteHeaderProps) {
  const isPolicy = variant === "policy";
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const logo = (
    <Link href="/" className="flex items-center gap-2 sm:gap-3 no-underline shrink-0" onClick={closeMenu}>
      <span className="font-bold text-[1.1rem] sm:text-[1.35rem] md:text-[1.5rem] tracking-tight text-[var(--text)]">
        MIWESU
      </span>
      <span
        className={`font-bold text-[0.75rem] sm:text-[0.9rem] md:text-[1rem] uppercase tracking-[0.06em] whitespace-nowrap ${!isPolicy ? "burn-text" : ""}`}
        style={{
          background: isPolicy ? "none" : "linear-gradient(180deg, #fff8dc 0%, #ffd54f 18%, #f59e0b 40%, #ea580c 65%, #c2410c 100%)",
          WebkitBackgroundClip: isPolicy ? "unset" : "text",
          backgroundClip: isPolicy ? "unset" : "text",
          WebkitTextFillColor: isPolicy ? "var(--copper)" : "transparent",
        }}
      >
        FIRE WOOD
      </span>
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
        className="inline-flex items-center justify-center min-h-[44px] py-2.5 px-4 sm:px-5 rounded-[var(--squircle)] text-[0.72rem] sm:text-[0.78rem] font-semibold uppercase tracking-[0.06em] bg-gradient-to-r from-[var(--copper)] to-[var(--copper-deep)] text-white border-0 cursor-pointer hover:opacity-90 transition-opacity w-full md:w-auto"
      >
        Get Allocation
      </button>
    ) : (
      <Link
        href="/#products"
        onClick={closeMenu}
        className="inline-flex items-center justify-center min-h-[44px] py-2.5 px-4 sm:px-5 rounded-[var(--squircle)] text-[0.72rem] sm:text-[0.78rem] font-semibold uppercase tracking-[0.06em] bg-gradient-to-r from-[var(--copper)] to-[var(--copper-deep)] text-white border-0 no-underline hover:opacity-90 transition-opacity w-full md:w-auto"
      >
        Get Allocation
      </Link>
    )
  );

  return (
    <nav className="sticky top-0 z-[100] w-full px-4 py-3 sm:px-5 sm:py-4 md:px-6 bg-[var(--glass)] backdrop-blur-[20px] border-b border-[var(--rim)] overflow-visible">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-2 sm:gap-4 md:flex-wrap">
        {logo}

        {/* Desktop: center nav */}
        <div className="hidden md:flex flex-1 flex-wrap gap-2 sm:gap-3 md:gap-6 justify-center items-center min-w-0 px-2">
          {!isPolicy && (
            <>
              <Link href="/#products" className={navLinkClass}>
                Products
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
        <div className="flex flex-col gap-1 py-3 border-t border-[var(--rim)] bg-[var(--glass)]">
          {!isPolicy && (
            <>
              <Link href="/#products" className={navLinkClass + " px-2"} onClick={closeMenu}>
                Products
              </Link>
              <Link href="/#performance" className={navLinkClass + " px-2"} onClick={closeMenu}>
                Performance
              </Link>
            </>
          )}
          <Link href="/policies" className={navLinkClass + " px-2"} onClick={closeMenu}>
            Policies
          </Link>
          {!isPolicy && (
            <Link href="https://miwesu.com" target="_blank" rel="noopener" className={navLinkClass + " px-2"} onClick={closeMenu}>
              Visit Farm
            </Link>
          )}
          <a href="mailto:guardians@miwesu.com" className={navLinkClass + " px-2"} onClick={closeMenu}>
            Contact
          </a>
          {getAllocationButton && (
            <div className="pt-2 px-2">
              {getAllocationButton}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
