"use client";

import { forwardRef } from "react";

type AdCanvasProps = {
  variant?: "vertical" | "square";
  title: string;
  subheading: string;
  spec1: string;
  spec2: string;
  spec3: string;
  spec4: string;
  phone: string;
  imageUrl: string | null;
};

export const AdCanvas = forwardRef<HTMLDivElement, AdCanvasProps>(
  function AdCanvas(
    { variant = "vertical", title, subheading, spec1, spec2, spec3, spec4, phone, imageUrl },
    ref
  ) {
    const isSquare = variant === "square";
    const size = isSquare ? 450 : 450;
    const height = isSquare ? 450 : 800;

    return (
      <div
        ref={ref}
        className="relative bg-black overflow-hidden flex flex-col"
        style={{ width: size, height }}
      >
        {/* Cinematic background (Samsung Nightography) */}
        {imageUrl ? (
          <img
            src={imageUrl}
            alt=""
            className="absolute inset-0 z-[1] w-full h-full object-cover filter brightness-[0.65] contrast-[1.2] saturate-[1.1] transition-all duration-300"
            aria-hidden
          />
        ) : (
          <div className="absolute inset-0 z-[1] bg-black" aria-hidden />
        )}

        {/* Overlay: darker at top (header/squares) and bottom (CTA), open middle stays clear */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, transparent 32%, transparent 68%, rgba(0,0,0,0.72) 100%)",
          }}
          aria-hidden
        />

        {/* Top: title + subheading + spec blocks (horizontal) */}
        <div
          className={`absolute left-0 right-0 z-[3] flex flex-col items-center ${isSquare ? "top-[6%] px-4" : "top-[8%] px-6"}`}
        >
          <div
            className={`flex flex-col items-center w-full ${isSquare ? "max-w-[280px]" : "max-w-[380px]"}`}
          >
            <h1
              className={`font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFD1A9] via-[#B87333] to-[#4A1C00] tracking-tighter drop-shadow-[0_0_35px_rgba(184,115,51,0.5)] ${isSquare ? "text-[2.25rem]" : "text-[3.25rem]"}`}
            >
              {title || "MIWESU"}
            </h1>
            <p
              className={`text-zinc-400 uppercase font-normal tracking-[0.3em] mt-1.5 text-center w-full ${isSquare ? "text-[0.7rem] tracking-[0.18em]" : "text-sm tracking-[0.3em]"}`}
            >
              {subheading || "PREMIUM FIRE WOOD"}
            </p>
            {/* Spec blocks: horizontal row below subtext (vertical layout only) */}
            {!isSquare && (
              <div className="flex flex-row items-center justify-center gap-2 mt-4">
                <div className="rounded-[20px] w-[72px] h-[72px] bg-black/40 backdrop-blur-2xl border border-[#B87333]/30 shadow-[inset_0_0_20px_rgba(184,115,51,0.15)] flex items-center justify-center text-center">
                  <span className="text-white tracking-[0.2em] font-bold uppercase leading-tight px-1.5 text-[10px]">
                    {spec1}
                  </span>
                </div>
                <div className="rounded-[20px] w-[72px] h-[72px] bg-black/40 backdrop-blur-2xl border border-[#B87333]/30 shadow-[inset_0_0_20px_rgba(184,115,51,0.15)] flex items-center justify-center text-center">
                  <span className="text-white tracking-[0.2em] font-bold uppercase leading-tight px-1.5 text-[10px]">
                    {spec2}
                  </span>
                </div>
                <div className="rounded-[20px] w-[72px] h-[72px] bg-black/40 backdrop-blur-2xl border border-[#B87333]/30 shadow-[inset_0_0_20px_rgba(184,115,51,0.15)] flex items-center justify-center text-center">
                  <span className="text-white tracking-[0.2em] font-bold uppercase leading-tight px-1.5 text-[10px]">
                    {spec3}
                  </span>
                </div>
                <div className="rounded-[20px] w-[72px] h-[72px] bg-black/40 backdrop-blur-2xl border border-[#B87333]/30 shadow-[inset_0_0_20px_rgba(184,115,51,0.15)] flex items-center justify-center text-center">
                  <span className="text-white tracking-[0.2em] font-bold uppercase leading-tight px-1.5 text-[10px]">
                    {spec4}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Square only: spec blocks vertical on the right */}
        {isSquare && (
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 z-[3] flex flex-col gap-1.5">
            <div className="rounded-[20px] w-[68px] min-w-[68px] h-[68px] bg-black/40 backdrop-blur-2xl border border-[#B87333]/30 shadow-[inset_0_0_20px_rgba(184,115,51,0.15)] flex items-center justify-center text-center">
              <span className="text-white tracking-[0.2em] font-bold uppercase leading-tight px-1.5 text-[8px]">
                {spec1}
              </span>
            </div>
            <div className="rounded-[20px] w-[68px] min-w-[68px] h-[68px] bg-black/40 backdrop-blur-2xl border border-[#B87333]/30 shadow-[inset_0_0_20px_rgba(184,115,51,0.15)] flex items-center justify-center text-center">
              <span className="text-white tracking-[0.2em] font-bold uppercase leading-tight px-1.5 text-[8px]">
                {spec2}
              </span>
            </div>
            <div className="rounded-[20px] w-[68px] min-w-[68px] h-[68px] bg-black/40 backdrop-blur-2xl border border-[#B87333]/30 shadow-[inset_0_0_20px_rgba(184,115,51,0.15)] flex items-center justify-center text-center">
              <span className="text-white tracking-[0.2em] font-bold uppercase leading-tight px-1.5 text-[8px]">
                {spec3}
              </span>
            </div>
            <div className="rounded-[20px] w-[68px] min-w-[68px] h-[68px] bg-black/40 backdrop-blur-2xl border border-[#B87333]/30 shadow-[inset_0_0_20px_rgba(184,115,51,0.15)] flex items-center justify-center text-center">
              <span className="text-white tracking-[0.2em] font-bold uppercase leading-tight px-1.5 text-[8px]">
                {spec4}
              </span>
            </div>
          </div>
        )}

        {/* Bottom: CTA + product line */}
        <div
          className={`absolute bottom-0 left-0 right-0 z-[3] flex flex-col items-center justify-end px-4 ${isSquare ? "pb-[8%]" : "pb-[10%] px-6"}`}
        >
          <div
            className={`w-full rounded-full overflow-hidden bg-gradient-to-br from-[#B87333] via-[#D4A574] to-[#6B3000] p-[3px] shadow-[0_4px_20px_rgba(0,0,0,0.4)] ${isSquare ? "max-w-[180px]" : "max-w-[240px]"}`}
          >
            <div className="rounded-full bg-gradient-to-b from-white/20 to-transparent h-1 w-full" />
            <div className={`flex items-center justify-center -mt-1 ${isSquare ? "py-2" : "py-3"}`}>
              <span className={`text-[#1A0A04] font-semibold tracking-[0.2em] uppercase ${isSquare ? "text-[12px]" : "text-[15px]"}`}>
                ORDER NOW
              </span>
            </div>
          </div>
          <p
            className={`text-white font-bold tracking-widest-tech text-center ${isSquare ? "text-[0.65rem] mt-2.5" : "text-xs mt-3.5"}`}
          >
            www.miwesufirewood.co.za
          </p>
          {phone.trim() && (
            <p
              className={`text-white font-bold tracking-widest-tech text-center ${isSquare ? "text-[0.65rem] mt-1" : "text-xs mt-1.5"}`}
            >
              {phone.trim()}
            </p>
          )}
        </div>
      </div>
    );
  }
);
