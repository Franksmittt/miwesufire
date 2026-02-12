import Link from "next/link";

type SiteFooterProps = {
  variant?: "default" | "policy";
};

export function SiteFooter({ variant = "default" }: SiteFooterProps) {
  return (
    <footer className="py-6 px-4 sm:py-8 sm:px-6 md:py-12 border-t border-[var(--rim)] bg-[rgba(10,10,10,0.6)]">
      <div className="max-w-[1100px] mx-auto text-center">
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-4 md:gap-6 mb-3">
          {variant === "default" && (
            <>
              <Link href="/#products" className="text-[0.9rem] text-[var(--titanium)] no-underline hover:text-[var(--copper)] transition-colors">
                Products
              </Link>
              <Link href="/#wood-finder" className="text-[0.9rem] text-[var(--titanium)] no-underline hover:text-[var(--copper)] transition-colors">
                Find your fire
              </Link>
              <Link href="/#performance" className="text-[0.9rem] text-[var(--titanium)] no-underline hover:text-[var(--copper)] transition-colors">
                Performance
              </Link>
              <Link href="/#testimonials" className="text-[0.9rem] text-[var(--titanium)] no-underline hover:text-[var(--copper)] transition-colors">
                Reviews
              </Link>
            </>
          )}
          {variant === "policy" && (
            <Link href="/#products" className="text-[0.9rem] text-[var(--titanium)] no-underline hover:text-[var(--copper)] transition-colors">
              Products
            </Link>
          )}
          <Link href="/" className="text-[0.9rem] text-[var(--titanium)] no-underline hover:text-[var(--copper)] transition-colors">
            Home
          </Link>
          <Link href="/policies" className="text-[0.9rem] text-[var(--titanium)] no-underline hover:text-[var(--copper)] transition-colors">
            Policies
          </Link>
          <a href="mailto:guardians@miwesu.com" className="text-[0.9rem] text-[var(--titanium)] no-underline hover:text-[var(--copper)] transition-colors">
            Contact
          </a>
        </nav>
        <p className="text-[0.75rem] sm:text-[0.8rem] text-[var(--titanium)]">© 2026 Miwesu. All rights reserved.</p>
      </div>
    </footer>
  );
}
