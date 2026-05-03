"use client";

import { useState } from "react";
import Link from "next/link";

type StudioTab = "tools" | "carousel" | "brain";

export function StudioHubClient() {
  const [tab, setTab] = useState<StudioTab>("tools");

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-bronze">Miwesu</p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">Social media ad studio</h1>
      <p className="mt-4 text-sm text-gray-400 leading-relaxed">
        Story/reel (9:16), square (1:1), and carousel suites—upload imagery, pick a layout archetype, export. Use{" "}
        <span className="text-gray-300">Tools</span> for base generators, <span className="text-gray-300">Carousel</span> for
        5-card story ads, and <span className="text-gray-300">Brain</span> for methodology.
      </p>

      <div
        role="tablist"
        aria-label="Studio sections"
        className="mt-8 flex gap-1 rounded-lg border border-white/10 bg-white/[0.03] p-1"
      >
        {(
          [
            { id: "tools" as const, label: "Tools" },
            { id: "carousel" as const, label: "Carousel" },
            { id: "brain" as const, label: "Brain" },
          ] as const
        ).map((t) => (
          <button
            key={t.id}
            id={`studio-tab-${t.id}`}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            aria-controls={`studio-panel-${t.id}`}
            onClick={() => setTab(t.id)}
            className={`flex-1 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
              tab === t.id
                ? "bg-white/10 text-white shadow-sm"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "tools" ? (
        <div id="studio-panel-tools" role="tabpanel" aria-labelledby="studio-tab-tools" className="mt-8">
          <ul className="space-y-4">
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
        </div>
      ) : tab === "carousel" ? (
        <div id="studio-panel-carousel" role="tabpanel" aria-labelledby="studio-tab-carousel" className="mt-8 space-y-4">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <h2 className="text-sm font-semibold text-white">5-card Facebook carousel suite</h2>
            <p className="mt-2 text-xs leading-relaxed text-gray-400">
              Story-driven 1:1 card flow with five unique layouts. Each card includes product context, Minimum Order
              Quantity, WhatsApp contact, and Miwesu branding—optimized to keep text readable and avoid overflow.
            </p>
          </div>
          <Link
            href="/studio/miwesu-carousel-5-card-suite.html"
            className="block rounded-lg border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-semibold text-white hover:border-bronze/40 hover:bg-white/[0.06] transition-colors"
          >
            Open carousel 5-card suite (1:1)
            <span className="mt-1 block text-xs font-normal text-gray-500">Upload one image and export five unique cards.</span>
          </Link>
        </div>
      ) : (
        <article
          id="studio-panel-brain"
          role="tabpanel"
          aria-labelledby="studio-tab-brain"
          className="mt-8 space-y-8 text-sm leading-relaxed text-gray-400"
        >
          <p className="text-base text-gray-300">
            Here is the unfiltered breakdown of how these layouts are engineered. When you want an ad to read like it
            came from a serious creative shop, you are not “putting text on a picture.” You are working in{" "}
            <strong className="text-white font-semibold">visual psychology</strong> and{" "}
            <strong className="text-white font-semibold">information architecture</strong>. Every margin, weight, and
            colour has a job.
          </p>

          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-bronze">Phase 1 — Brand psychology &amp; visual language</h2>
            <p>
              Before a layout exists, the brand needs a clear <em>vibe</em> derived from positioning and copy—not from
              personal taste alone.
            </p>
            <ul className="list-disc space-y-2 pl-5 marker:text-bronze">
              <li>
                <span className="text-gray-300 font-medium">Commodity trap:</span> many categories default to cheap,
                noisy, or generic visuals. The fix is to align the surface (type, colour, structure) with how you want
                the offer to feel—premium hardware, calm trust, luxury restraint, or high-energy promo—so perception matches
                price and promise.
              </li>
              <li>
                <span className="text-gray-300 font-medium">Typography as signal:</span> monospace or technical faces for
                specs and numbers; a heavy display face for the hook; restrained UI faces for labels. That mix reads as
                “measured” and “intentional,” not random.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-bronze">Phase 2 — Vertical (9:16) philosophy</h2>
            <p>
              Short-form vertical is mindless scrolling. You get a fraction of a second to earn a pause. The goal is{" "}
              <strong className="text-white font-semibold">immersion plus hierarchy</strong>—the product or scene stays
              heroic while the offer stays legible.
            </p>
            <ul className="list-disc space-y-2 pl-5 marker:text-bronze">
              <li>
                <span className="text-gray-300 font-medium">Gradient anchors:</span> dark overlays (often gradients) at
                top, bottom, or sides so type never fights the photograph. White text on busy imagery without structure
                fails; controlled rgba blacks keep contrast predictable.
              </li>
              <li>
                <span className="text-gray-300 font-medium">Bento / card UI:</span> dense facts (price, minimums,
                contact, specs) split into aligned cards. People resist paragraphs; they scan tiles. Cards lower cognitive
                load so pricing and constraints land fast.
              </li>
              <li>
                <span className="text-gray-300 font-medium">Z- and F-patterns:</span> trust markers high-left, headline as
                the hook centre-left, conversion block (price / CTA / contact) bottom-right or bottom-centre—where the
                thumb and eye finish.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-bronze">Phase 3 — Square (1:1) &amp; the “20% rule”</h2>
            <p>
              Grid posts and static squares often need the <strong className="text-white font-semibold">image to stay the hero</strong>
              —with a hard cap on how much UI can cover (for example ~20% of the canvas). Tight coverage forces structure,
              contrast, and negative space instead of giant type.
            </p>
            <ul className="list-disc space-y-2 pl-5 marker:text-bronze">
              <li>
                <span className="text-gray-300 font-medium">Edge “footers”:</span> compress logo, title, price, minimums,
                and phone into a solid bottom bar. The bar reads as a footer; the frame above stays mostly photograph.
              </li>
              <li>
                <span className="text-gray-300 font-medium">Mathematical sidebars:</span> on an 800px square, 20% width is
                160px—a fixed sidebar creates a clean editorial split and keeps the maths honest for “how much UI is
                here?”
              </li>
              <li>
                <span className="text-gray-300 font-medium">Corner anchors:</span> push UI to extremes (diagonal slash,
                HUD corners). Viewers centre on the photo first; pricing and rules remain discoverable when the eye
                wanders.
              </li>
              <li>
                <span className="text-gray-300 font-medium">Glassmorphism:</span> when something must sit on top of the
                image, frosted panels keep colour and texture bleeding through so coverage feels lighter than it is.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-bronze">Phase 4 — Twelve layout archetypes (why they exist)</h2>
            <p>Each template is a different <em>marketing tool</em>—same brand, different buyer mode:</p>
            <ul className="list-disc space-y-2 pl-5 marker:text-bronze">
              <li>
                <span className="text-gray-300 font-medium">Bento / dashboard:</span> for analytical buyers—dense facts
                without chaos.
              </li>
              <li>
                <span className="text-gray-300 font-medium">Brutalist / high impact:</span> thick rules, huge numerals—when
                the scroll must stop on price or urgency.
              </li>
              <li>
                <span className="text-gray-300 font-medium">App / tracker UI:</span> timelines, HUDs, map cues—signals
                control, systems, and modernity.
              </li>
              <li>
                <span className="text-gray-300 font-medium">Editorial / typographic:</span> big type, generous space—luxury
                or prestige positioning.
              </li>
              <li>
                <span className="text-gray-300 font-medium">Checklist / sidebar:</span> logical “why us” stacks—strong for
                retargeting or consideration stage.
              </li>
              <li>
                <span className="text-gray-300 font-medium">Diagonal / motion:</span> implied speed and energy—logistics,
                events, or anything that should feel kinetic.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-bronze">Phase 5 — Invisible math (why it feels “expensive”)</h2>
            <p>
              Spacing is often locked to an <strong className="text-white font-semibold">8-point grid</strong>—margins,
              padding, and gaps as multiples of 8px. Random values (10, 15, 22) create subconscious “offness”; rhythm
              reads as professional even when viewers cannot name it.
            </p>
            <p>
              <strong className="text-white font-semibold">Typographic hierarchy</strong> is not “bigger = more
              important.” Ultra-heavy weights anchor numbers and prices; tracked uppercase labels read as spec diagrams;
              line length and contrast steer the read order.
            </p>
            <p className="text-gray-300 border-l-2 border-bronze/50 pl-4">
              The through-line for any project: decide what must be seen first (product, proof, or promise), what must be
              believed second (price, constraints, contact), then let layout, grid, and contrast weaponise every pixel
              toward that order.
            </p>
          </section>
        </article>
      )}

      <p className="mt-10 text-xs text-gray-600">Use the top navigation to switch tools, go back, or sign out.</p>
    </main>
  );
}
