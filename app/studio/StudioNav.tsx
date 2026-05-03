"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from "./LogoutButton";

export function StudioNav() {
  const pathname = usePathname();
  const isLogin = pathname === "/studio/login";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-2">
          <Link href="/studio" className="text-sm font-bold tracking-tight text-white hover:text-bronze transition-colors">
            Miwesu Studio
          </Link>
          <span className="text-xs text-gray-700">/</span>
          <span className="text-xs text-gray-500">{isLogin ? "Login" : "Workspace"}</span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <Link href="/studio" className="text-gray-400 hover:text-white transition-colors">
            Hub
          </Link>
          <Link href="/studio/miwesu-vertical-12-ad-suite.html" className="text-gray-400 hover:text-white transition-colors">
            Vertical
          </Link>
          <Link href="/studio/miwesu-square-ad-suite.html" className="text-gray-400 hover:text-white transition-colors">
            Square
          </Link>
          <Link href="/studio/miwesu-carousel-5-card-suite.html" className="text-gray-400 hover:text-white transition-colors">
            Carousel
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            Back to site
          </Link>
          {!isLogin ? <LogoutButton className="text-gray-400 hover:text-white" /> : null}
        </div>
      </nav>
    </header>
  );
}
