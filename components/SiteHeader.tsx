import Link from "next/link";

type SiteHeaderProps = {
  variant?: "default" | "policy";
  onAllocationClick?: () => void;
};

export function SiteHeader({ variant = "default", onAllocationClick }: SiteHeaderProps) {
  const isPolicy = variant === "policy";
  return (
    <nav className="sticky top-0 z-[100] w-full px-4 py-3 sm:px-5 sm:py-4 md:px-6 flex items-center justify-between flex-wrap gap-3 sm:gap-4 md:gap-6 bg-[var(--glass)] backdrop-blur-[20px] border-b border-[var(--rim)]">
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
        <Link href="/" className="font-bold text-[1rem] sm:text-[1.1rem] tracking-tight text-[var(--text)] no-underline truncate">
          MIWESU
        </Link>
        <span
          className={`font-bold text-[0.75rem] sm:text-[0.9rem] uppercase tracking-[0.06em] text-[var(--copper)] whitespace-nowrap ${!isPolicy ? "burn-text" : ""}`}
          style={{
            background: isPolicy ? "none" : "linear-gradient(180deg, #fff8dc 0%, #ffd54f 18%, #f59e0b 40%, #ea580c 65%, #c2410c 100%)",
            WebkitBackgroundClip: isPolicy ? "unset" : "text",
            backgroundClip: isPolicy ? "unset" : "text",
            WebkitTextFillColor: isPolicy ? "var(--copper)" : "transparent",
          }}
        >
          Fire wood
        </span>
      </div>
      <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-7 justify-end items-center">
        {!isPolicy && (
          <>
            <Link href="/#products" className="text-[var(--titanium)] no-underline text-[0.7rem] sm:text-[0.8rem] uppercase tracking-[0.08em] sm:tracking-[0.1em] hover:text-[var(--text)] transition-colors py-2 min-h-[44px] flex items-center">
              Products
            </Link>
            <Link href="/#performance" className="text-[var(--titanium)] no-underline text-[0.7rem] sm:text-[0.8rem] uppercase tracking-[0.08em] sm:tracking-[0.1em] hover:text-[var(--text)] transition-colors py-2 min-h-[44px] flex items-center">
              Performance
            </Link>
          </>
        )}
        <Link href="/policies" className="text-[var(--titanium)] no-underline text-[0.7rem] sm:text-[0.8rem] uppercase tracking-[0.08em] sm:tracking-[0.1em] hover:text-[var(--text)] transition-colors py-2 min-h-[44px] flex items-center">
          Policies
        </Link>
        {!isPolicy && (
          <Link href="https://miwesu.com" target="_blank" rel="noopener" className="text-[var(--titanium)] no-underline text-[0.7rem] sm:text-[0.8rem] uppercase tracking-[0.08em] sm:tracking-[0.1em] hover:text-[var(--text)] transition-colors py-2 min-h-[44px] flex items-center">
            Visit Farm
          </Link>
        )}
        <a href="mailto:guardians@miwesu.com" className="text-[var(--titanium)] no-underline text-[0.7rem] sm:text-[0.8rem] uppercase tracking-[0.08em] sm:tracking-[0.1em] hover:text-[var(--text)] transition-colors py-2 min-h-[44px] flex items-center">
          Contact
        </a>
        {!isPolicy &&
          (onAllocationClick ? (
            <button
              type="button"
              onClick={onAllocationClick}
              className="inline-flex items-center justify-center min-h-[44px] py-2.5 px-4 sm:px-5 rounded-[var(--squircle)] text-[0.72rem] sm:text-[0.78rem] font-semibold uppercase tracking-[0.06em] bg-gradient-to-r from-[var(--copper)] to-[var(--copper-deep)] text-white border-0 cursor-pointer hover:opacity-90 transition-opacity"
            >
              Get Allocation
            </button>
          ) : (
            <Link
              href="/#products"
              className="inline-flex items-center justify-center min-h-[44px] py-2.5 px-4 sm:px-5 rounded-[var(--squircle)] text-[0.72rem] sm:text-[0.78rem] font-semibold uppercase tracking-[0.06em] bg-gradient-to-r from-[var(--copper)] to-[var(--copper-deep)] text-white border-0 no-underline hover:opacity-90 transition-opacity"
            >
              Get Allocation
            </Link>
          ))}
      </div>
    </nav>
  );
}
