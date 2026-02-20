"use client";

import { forwardRef } from "react";

type AdCanvasProps = {
  variant?: "vertical" | "square" | "vertical45" | "horizontal";
  title: string;
  subheading: string;
  spec1: string;
  spec2: string;
  spec3: string;
  spec4: string;
  footerLine?: string;
  /** e.g. "Meyersdal? We Deliver for FREE!" — shown under the heading (vertical) or in bar (square). */
  neighborhoodLine?: string;
  phone: string;
  phone2: string;
  imageUrl: string | null;
  imageZoom?: number;
  imagePositionY?: number;
  imagePositionX?: number;
};

function getCanvasDimensions(variant: "vertical" | "square" | "vertical45" | "horizontal") {
  switch (variant) {
    case "square":
      return { width: 450, height: 450 };
    case "vertical45":
      return { width: 360, height: 450 }; // 4:5
    case "horizontal":
      return { width: 600, height: 314 }; // 1.91:1
    default:
      return { width: 450, height: 800 }; // 9:16 vertical
  }
}

export const AdCanvas = forwardRef<HTMLDivElement, AdCanvasProps>(
  function AdCanvas(
    { variant = "vertical", title, subheading, spec1, spec2, spec3, spec4, footerLine, neighborhoodLine, phone, phone2 = "", imageUrl, imageZoom = 1, imagePositionY = 0, imagePositionX = 0 },
    ref
  ) {
    const isSquare = variant === "square";
    const isHorizontal = variant === "horizontal";
    const isVertical = variant === "vertical" || variant === "vertical45";
    const { width: size, height } = getCanvasDimensions(variant);

    return (
      <div
        ref={ref}
        className="relative bg-black overflow-hidden flex flex-col box-border"
        style={{
          width: size,
          height,
          minWidth: size,
          minHeight: height,
        }}
      >
        {/* Background image — zoom and position (skip for horizontal; it has its own left-side image) */}
        {!isHorizontal && (
          imageUrl ? (
            <div className="absolute inset-0 z-[1] overflow-hidden" aria-hidden>
              <div
                className="absolute inset-0 w-full h-full transition-transform duration-200"
                style={{
                  transform: `scale(${imageZoom}) translate(${imagePositionX}px, ${imagePositionY}px)`,
                  transformOrigin: "center center",
                }}
              >
                <img src={imageUrl} alt="" className="w-full h-full object-cover" aria-hidden />
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 z-[1] bg-black" aria-hidden />
          )
        )}

        {/* Horizontal: left = image, right = content panel (handled below) */}
        {isHorizontal ? (
          <>
            <div className="absolute left-0 top-0 bottom-0 w-[55%] z-[1] overflow-hidden">
              {imageUrl ? (
                <div className="absolute inset-0" style={{ transform: `scale(${imageZoom}) translate(${imagePositionX}px, ${imagePositionY}px)`, transformOrigin: "center center" }}>
                  <img src={imageUrl} alt="" className="w-full h-full object-cover" aria-hidden />
                </div>
              ) : <div className="absolute inset-0 bg-black" />}
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-[45%] z-[2] bg-black/92 flex flex-col justify-center items-center text-center p-5 border-l border-[#B87333]/40">
              <h1 className="font-black text-[2.5rem] leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFD1A9] via-[#B87333] to-[#4A1C00] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">{(title || "MIWESU")}</h1>
              <p className="text-white/90 font-semibold text-[0.95rem] mt-2 tracking-wide">www.miwesufirewood.co.za</p>
              {neighborhoodLine && <p className="text-white font-bold text-[0.75rem] mt-2">{neighborhoodLine}</p>}
              {footerLine && <p className="text-white font-bold text-[1.05rem] mt-2">{footerLine}</p>}
              <p className="text-white font-semibold text-[1rem] mt-2">{[phone.trim(), phone2.trim()].filter(Boolean).join("  ·  ")}</p>
              <div className="mt-4 rounded-full overflow-hidden bg-gradient-to-br from-[#B87333] via-[#D4A574] to-[#6B3000] p-[2.5px]">
                <div className="px-6 py-2.5"><span className="text-[#1A0A04] font-bold text-[11px] tracking-[0.2em] uppercase">ORDER NOW</span></div>
              </div>
            </div>
          </>
        ) : (
        <>
        {/* Top: heading card (Style 2 — no subheading, no spec blocks) + optional neighborhood line */}
        <div
          className={`absolute left-0 right-0 z-[3] flex flex-col items-center ${
            isSquare ? "top-[6%] px-4" : "top-[5%] px-[7%]"
          } ${variant === "vertical45" ? "px-[6%]" : ""}`}
        >
          <div
            className={`w-full flex flex-col items-center overflow-hidden rounded-2xl bg-black/85 backdrop-blur-md border border-[#B87333]/40 shadow-[0_8px_32px_rgba(0,0,0,0.6)] p-3 ${
              isSquare ? "max-w-[320px] rounded-xl" : ""
            } ${variant === "vertical45" ? "rounded-xl p-2.5" : ""}`}
          >
            <h1
              className={`font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFD1A9] via-[#B87333] to-[#4A1C00] tracking-[0.02em] drop-shadow-[0_0_20px_rgba(184,115,51,0.4)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${
                isSquare ? "text-[2.5rem]" : variant === "vertical45" ? "text-[3rem]" : "text-[4.5rem]"
              }`}
            >
              {title || "MIWESU"}
            </h1>
            <p
              className={`text-white/90 font-semibold tracking-wide text-center -mt-1.5 w-full ${
                isSquare ? "text-[0.75rem]" : variant === "vertical45" ? "text-[0.9rem]" : "text-[1.1rem]"
              }`}
              style={{ letterSpacing: "0.02em" }}
            >
              www.miwesufirewood.co.za
            </p>
          </div>
          {isVertical && neighborhoodLine && (
            <p
              className="mt-2.5 text-center font-bold text-white text-[1rem] leading-tight"
              style={{ textShadow: "0 0 12px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.9)" }}
            >
              {neighborhoodLine}
            </p>
          )}
          {isSquare && neighborhoodLine && (
            <p className="mt-1.5 text-center font-bold text-amber-100 text-[0.5rem] uppercase tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
              {neighborhoodLine}
            </p>
          )}
        </div>

        {/* Bottom: vertical/vertical45 = card layout; square = slim horizontal bar (no bottom for horizontal) */}
        {!isHorizontal && (
        <div
          className={`absolute bottom-0 left-0 right-0 z-[3] flex flex-col justify-end ${
            isSquare ? "pb-3 px-3 items-center" : "pb-[7%] px-[7%] items-start"
          } ${variant === "vertical45" ? "pb-[6%] px-[6%]" : ""}`}
        >
          {isSquare ? (
            /* Square: slim horizontal bar — tagline + phone, ORDER NOW */
            <div className="w-full max-w-[420px]">
              <div className="relative flex flex-row items-center justify-between gap-2 rounded-xl bg-black/80 backdrop-blur-sm border border-[#B87333]/40 py-2 px-3">
                <p
                  className="text-white font-black uppercase tracking-[0.12em] text-[0.55rem] leading-tight shrink-0"
                  style={{
                    textShadow: "0 1px 2px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  PREMIUM FIREWOOD, DELIVERED.
                </p>
                {phone.trim() && (
                  <span className="text-white font-bold text-[0.7rem] tracking-wide absolute left-[60%] -translate-x-1/2">
                    {phone.trim()}
                  </span>
                )}
                <div className="rounded-full overflow-hidden bg-gradient-to-br from-[#B87333] via-[#D4A574] to-[#6B3000] p-[2px] shrink-0">
                  <div className="flex items-center justify-center px-3 py-1">
                    <span className="text-[#1A0A04] font-semibold tracking-[0.15em] uppercase text-[8px]">
                      ORDER NOW
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Vertical: one box — Row 1: numbers; copper line; Row 2: MOQ | vertical line | ORDER NOW */
            <div
              className="w-full rounded-2xl bg-black/90 backdrop-blur-md border border-white/20 py-3 px-4 flex flex-col gap-3"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.25)" }}
            >
              {/* Row 1: contact numbers only */}
              <div className="w-full flex flex-row items-center justify-center gap-3">
                {phone.trim() && (
                  <span className="text-white font-semibold text-[1.15rem] leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {phone.trim()}
                  </span>
                )}
                {phone.trim() && phone2.trim() && <span className="text-white/70">·</span>}
                {phone2.trim() && (
                  <span className="text-white font-semibold text-[1.15rem] leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {phone2.trim()}
                  </span>
                )}
              </div>
              {/* Copper horizontal line below numbers */}
              <div className="w-full h-px bg-[#B87333] shrink-0" />
              {/* Row 2: MOQ (left) | vertical copper line | ORDER NOW (right) */}
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-0">
                <div className="min-w-0 flex justify-center">
                  {footerLine ? (
                    <p className="text-white font-bold text-[1.35rem] leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] text-center">
                      {footerLine}
                    </p>
                  ) : (
                    <p className="text-white/50 text-[0.7rem] italic text-center">Select a product</p>
                  )}
                </div>
                <div className="w-px h-10 bg-[#B87333] shrink-0 self-center" aria-hidden />
                <div className="flex justify-center">
                  <div className="rounded-full overflow-hidden bg-gradient-to-br from-[#B87333] via-[#D4A574] to-[#6B3000] p-[2px] shadow-[0_2px_12px_rgba(184,115,51,0.5)]">
                    <div className="flex items-center justify-center px-4 py-2">
                      <span className="text-[#1A0A04] font-bold tracking-[0.2em] uppercase text-[11px]">
                        ORDER NOW
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        )}
        </>
        )}
      </div>
    );
  }
);
