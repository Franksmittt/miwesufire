import Link from "next/link";
import { Facebook } from "lucide-react";
import { ENDPOINT_MEDIA_URL, SITE_FACEBOOK_URL, WHATSAPP_DISPLAY } from "@/lib/site";

type SiteFooterProps = {
  variant?: "default" | "policy";
};

const linkClass = "text-smoke hover:text-paper transition-colors";

export function SiteFooter({ variant = "default" }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 bg-coal text-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-9">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-4">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-display text-lg font-semibold tracking-tight text-paper">Miwesu</span>
              <span className="text-[0.6rem] uppercase tracking-[0.14em] text-smoke">Fire Wood</span>
            </div>
            <p className="text-[0.8rem] text-smoke leading-snug max-w-sm">
              Dry braai wood delivered across Gauteng. Under 12% moisture. COD after inspection.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.8rem]">
              <a href={`tel:${WHATSAPP_DISPLAY.replace(/\s/g, "")}`} className={linkClass}>
                {WHATSAPP_DISPLAY}
              </a>
              <a href="mailto:orders@miwesufirewood.co.za" className={linkClass}>
                orders@miwesufirewood.co.za
              </a>
            </div>
          </div>

          {variant === "default" && (
            <div className="lg:col-span-2">
              <h4 className="text-[0.65rem] font-bold text-paper uppercase tracking-[0.14em] mb-2.5">Shop</h4>
              <ul className="space-y-1.5 text-[0.8rem]">
                <li>
                  <Link href="/#products" className={linkClass}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/products" className={linkClass}>
                    All bags
                  </Link>
                </li>
                <li>
                  <Link href="/woods" className={linkClass}>
                    Meet our woods
                  </Link>
                </li>
                <li>
                  <Link href="/products/braai-mix" className={linkClass}>
                    Braai Mix
                  </Link>
                </li>
                <li>
                  <Link href="/products/sekelbos" className={linkClass}>
                    Sekelbos
                  </Link>
                </li>
                <li>
                  <Link href="/products/geelhaak" className={linkClass}>
                    Geelhaak
                  </Link>
                </li>
              </ul>
            </div>
          )}

          <div className={variant === "default" ? "lg:col-span-2" : "lg:col-span-3"}>
            <h4 className="text-[0.65rem] font-bold text-paper uppercase tracking-[0.14em] mb-2.5">Support</h4>
            <ul className="space-y-1.5 text-[0.8rem]">
              <li>
                <Link href="/delivery-areas" className={linkClass}>
                  Delivery areas
                </Link>
              </li>
              <li>
                <Link href="/delivery" className={linkClass}>
                  Delivery policy
                </Link>
              </li>
              <li>
                <Link href="/policies" className={linkClass}>
                  Policies
                </Link>
              </li>
              <li>
                <Link href="/terms" className={linkClass}>
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/returns" className={linkClass}>
                  Returns
                </Link>
              </li>
              <li>
                <a href="mailto:orders@miwesufirewood.co.za" className={linkClass}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className={variant === "default" ? "col-span-2 sm:col-span-1 lg:col-span-4" : "col-span-2 sm:col-span-2 lg:col-span-5"}>
            <h4 className="text-[0.65rem] font-bold text-paper uppercase tracking-[0.14em] mb-2.5">Order</h4>
            <p className="text-[0.8rem] text-smoke leading-snug mb-3 max-w-xs">
              WhatsApp us with your suburb and bag size — we confirm and deliver.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/#products"
                className="inline-flex items-center justify-center min-h-[36px] px-3.5 rounded text-[0.75rem] font-semibold bg-ember text-white hover:bg-[var(--ember-deep)] transition-colors no-underline"
              >
                Order wood
              </Link>
              <a
                href={SITE_FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 min-h-[36px] px-3 rounded text-[0.75rem] text-smoke border border-white/15 hover:text-paper hover:border-white/30 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-3.5 h-3.5" strokeWidth={1.5} />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[0.7rem] text-smoke/80">
          <p>
            © 2026 Miwesu. Built by{" "}
            <a
              href={ENDPOINT_MEDIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-smoke hover:text-paper transition-colors underline underline-offset-2"
            >
              Endpoint Media
            </a>
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/studio/login" className="hover:text-paper transition-colors">
              Studio login
            </Link>
            <Link href="/studio" className="hover:text-paper transition-colors">
              Ad studio
            </Link>
            <Link href="/" className="hover:text-paper transition-colors">
              Home
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
