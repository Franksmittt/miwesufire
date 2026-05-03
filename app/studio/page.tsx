import Link from "next/link";
import { LogoutButton } from "./LogoutButton";

export default function StudioPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 sm:py-24">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-bronze">Miwesu</p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">Social media ad studio</h1>
      <p className="mt-4 text-sm text-gray-400 leading-relaxed">
        Create story/reel (9:16) and feed (1:1) banners with the 12-in-1 suites. Upload your own wood imagery and
        export JPEGs.
      </p>

      <ul className="mt-10 space-y-4">
        <li>
          <Link
            href="/studio/miwesu-vertical-12-ad-suite.html"
            className="block rounded-lg border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-semibold text-white hover:border-bronze/40 hover:bg-white/[0.06] transition-colors"
          >
            Vertical 12-in-1 ad suite (540×960 → export)
            <span className="mt-1 block text-xs font-normal text-gray-500">Opens the full-page generator in a new tab.</span>
          </Link>
        </li>
        <li>
          <Link
            href="/studio/miwesu-square-ad-suite.html"
            className="block rounded-lg border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-semibold text-white hover:border-bronze/40 hover:bg-white/[0.06] transition-colors"
          >
            Square 12-in-1 ad suite (800×800 → export)
            <span className="mt-1 block text-xs font-normal text-gray-500">Opens the full-page generator in a new tab.</span>
          </Link>
        </li>
      </ul>

      <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-600">
        <LogoutButton />
        <span className="text-gray-700" aria-hidden>
          ·
        </span>
        <Link href="/" className="text-gray-500 hover:text-gray-400">
          Back to site
        </Link>
      </p>
    </main>
  );
}
