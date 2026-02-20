import Link from "next/link";
import { Facebook } from "lucide-react";
import { SITE_FACEBOOK_URL } from "@/lib/site";

type SiteFooterProps = {
  variant?: "default" | "policy";
};

export function SiteFooter({ variant = "default" }: SiteFooterProps) {
  return (
    <footer className="py-16 sm:py-20 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16">
        <div className="mb-0">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-4 h-4 rounded-full bg-bronze-gradient flex-shrink-0" />
            <span className="text-sm font-bold tracking-tight text-white">MIWESU</span>
          </div>
          <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
            Premium firewood and braai wood. Precision-split, verified moisture, Gauteng delivery.
            <br /><br />
            © 2026 Miwesu. Designed in South Africa.
          </p>
          <a
            href={SITE_FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-gray-500 hover:text-[#1877F2] transition-colors"
            aria-label="Follow us on Facebook"
          >
            <Facebook className="w-5 h-5" strokeWidth={1.5} />
            <span className="text-xs">Facebook</span>
          </a>
        </div>

        <div className="flex flex-wrap gap-12 md:gap-16">
          {variant === "default" && (
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Hardware</h4>
              <ul className="space-y-3 text-xs text-gray-500">
                <li><Link href="/#products" className="hover:text-bronze transition-colors">The Lineup</Link></li>
                <li><Link href="/woods" className="hover:text-bronze transition-colors">Meet our woods</Link></li>
                <li><Link href="/#wood-finder" className="hover:text-bronze transition-colors">Find your fire</Link></li>
                <li><Link href="/#performance" className="hover:text-bronze transition-colors">Tech Specs</Link></li>
              </ul>
            </div>
          )}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-3 text-xs text-gray-500">
              <li><Link href="/policies" className="hover:text-white transition-colors">Policies</Link></li>
              <li><Link href="/delivery-areas" className="hover:text-white transition-colors">Delivery areas</Link></li>
              <li><a href="mailto:orders@miwesufirewood.co.za" className="hover:text-white transition-colors">Contact</a></li>
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
