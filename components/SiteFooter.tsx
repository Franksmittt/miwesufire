import Link from "next/link";
import { Facebook } from "lucide-react";
import { ENDPOINT_MEDIA_URL, SITE_FACEBOOK_URL } from "@/lib/site";

type SiteFooterProps = {
  variant?: "default" | "policy";
};

export function SiteFooter({ variant = "default" }: SiteFooterProps) {
  return (
    <footer className="py-14 sm:py-16 border-t border-[var(--rim)] bg-coal text-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16">
        <div>
          <div className="mb-5">
            <span className="font-display text-xl font-semibold tracking-tight text-paper">Miwesu</span>
            <span className="ml-2 text-[0.65rem] uppercase tracking-[0.14em] text-smoke">Fire Wood</span>
          </div>
          <p className="text-sm text-smoke max-w-xs leading-relaxed">
            Dry braai wood and firewood, delivered across Gauteng. Verified under 12% moisture. Pay on delivery after you inspect.
          </p>
          <p className="mt-5 text-xs text-smoke/80 max-w-xs leading-relaxed">
            © 2026 Miwesu. Designed, developed and maintained by{" "}
            <a
              href={ENDPOINT_MEDIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/70 hover:text-paper transition-colors underline underline-offset-2"
            >
              Endpoint Media
            </a>
            .
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <Link
              href="/studio/login"
              className="text-[0.7rem] text-smoke hover:text-paper transition-colors underline underline-offset-2"
            >
              Studio login
            </Link>
            <Link href="/studio" className="text-[0.7rem] text-smoke/70 hover:text-smoke transition-colors">
              Social ad studio
            </Link>
          </div>
          <a
            href={SITE_FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-smoke hover:text-paper transition-colors"
            aria-label="Follow us on Facebook"
          >
            <Facebook className="w-4 h-4" strokeWidth={1.5} />
            <span className="text-xs">Facebook</span>
          </a>
        </div>

        <div className="flex flex-wrap gap-12 md:gap-16">
          {variant === "default" && (
            <div>
              <h4 className="text-[0.7rem] font-bold text-paper uppercase tracking-[0.14em] mb-5">Shop</h4>
              <ul className="space-y-3 text-sm text-smoke">
                <li>
                  <Link href="/#products" className="hover:text-paper transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/woods" className="hover:text-paper transition-colors">
                    Meet our woods
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-paper transition-colors">
                    All bags
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <div>
            <h4 className="text-[0.7rem] font-bold text-paper uppercase tracking-[0.14em] mb-5">Support</h4>
            <ul className="space-y-3 text-sm text-smoke">
              <li>
                <Link href="/policies" className="hover:text-paper transition-colors">
                  Policies
                </Link>
              </li>
              <li>
                <Link href="/delivery-areas" className="hover:text-paper transition-colors">
                  Delivery areas
                </Link>
              </li>
              <li>
                <a href="mailto:orders@miwesufirewood.co.za" className="hover:text-paper transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/" className="hover:text-paper transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
