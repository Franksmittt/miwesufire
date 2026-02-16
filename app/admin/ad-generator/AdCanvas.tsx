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
  phone2: string;
  imageUrl: string | null;
};

export const AdCanvas = forwardRef<HTMLDivElement, AdCanvasProps>(
  function AdCanvas(
    { variant = "vertical", title, subheading, spec1, spec2, spec3, spec4, phone, phone2 = "", imageUrl },
    ref
  ) {
    const isSquare = variant === "square";
    const size = isSquare ? 450 : 450;
    const height = isSquare ? 450 : 800;

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
        {/* Cinematic background (Samsung Nightography) */}
        {imageUrl ? (
          <img
            src={imageUrl}
            alt=""
            className="absolute inset-0 z-[1] w-full h-full object-cover transition-all duration-300"
            aria-hidden
          />
        ) : (
          <div className="absolute inset-0 z-[1] bg-black" aria-hidden />
        )}

        {/* Overlay: vertical = current (do not change); square = bigger vertically */}
        {!isSquare && (
          <div
            className="absolute inset-0 z-[2] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.78) 18%, rgba(0,0,0,0) 32%, transparent 70%, rgba(0,0,0,0.5) 82%, rgba(0,0,0,0.6) 100%)",
            }}
            aria-hidden
          />
        )}
        {isSquare && (
          <div
            className="absolute inset-0 z-[2] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.78) 22%, rgba(0,0,0,0) 42%, transparent 50%, rgba(0,0,0,0.45) 62%, rgba(0,0,0,0.7) 100%)",
            }}
            aria-hidden
          />
        )}

        {/* Top: title + subheading + spec blocks (horizontal) */}
        <div
          className={`absolute left-0 right-0 z-[3] flex flex-col items-center ${isSquare ? "top-[6%] px-4" : "top-[8%] px-6"}`}
        >
          <div
            className={`flex flex-col items-center w-full ${isSquare ? "max-w-[280px]" : "max-w-[380px]"}`}
          >
            <h1
              className={`font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFD1A9] via-[#B87333] to-[#4A1C00] tracking-tighter drop-shadow-[0_0_20px_rgba(184,115,51,0.5)] drop-shadow-[0_0_45px_rgba(212,175,55,0.45)] drop-shadow-[0_0_70px_rgba(212,175,55,0.25)] ${isSquare ? "text-[2.75rem]" : "text-[4.25rem]"}`}
            >
              {title || "MIWESU"}
            </h1>
            <p
              className={`text-white uppercase font-bold tracking-[0.3em] mt-1.5 text-center w-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] drop-shadow-[0_0_12px_rgba(0,0,0,0.8)] ${isSquare ? "text-[0.7rem] tracking-[0.18em]" : "text-sm tracking-[0.3em]"}`}
            >
              {subheading || "PREMIUM FIRE WOOD"}
            </p>
            {/* Spec blocks: horizontal row below subtext (vertical layout only) */}
            {!isSquare && (
              <div className="flex flex-row items-center justify-center gap-3 mt-5">
                {[spec1, spec2, spec3, spec4].map((text, i) => (
                  <div
                    key={`spec-${i}`}
                    className="rounded-[22px] w-[76px] h-[76px] bg-black/80 backdrop-blur-2xl border border-[#B87333]/70 shadow-[0_0_4px_rgba(184,115,51,0.9),0_0_8px_rgba(184,115,51,0.6),0_0_12px_rgba(184,115,51,0.35)] flex items-center justify-center text-center p-2"
                  >
                    <span className="text-white tracking-[0.18em] font-bold uppercase leading-tight text-[10px]">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Square only: black frosted glass squircle cards with gold edge glow */}
        {isSquare && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 z-[3] flex flex-col gap-2">
            {[spec1, spec2, spec3, spec4].map((text, i) => (
              <div
                key={`spec-sq-${i}`}
                className="rounded-[22px] w-[72px] min-w-[72px] h-[72px] bg-black/80 backdrop-blur-2xl border border-[#B87333]/70 shadow-[0_0_4px_rgba(184,115,51,0.9),0_0_8px_rgba(184,115,51,0.6),0_0_12px_rgba(184,115,51,0.35)] flex items-center justify-center text-center p-2"
              >
                <span className="text-white tracking-[0.15em] font-bold uppercase leading-tight text-[9px]">
                  {text}
                </span>
              </div>
            ))}
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
          {([phone.trim(), phone2.trim()].filter(Boolean).length > 0) && (
            <p
              className={`text-white font-bold tracking-widest-tech text-center ${isSquare ? "text-[0.65rem] mt-1" : "text-xs mt-1.5"}`}
            >
              {[phone.trim(), phone2.trim()].filter(Boolean).join(" | ")}
            </p>
          )}
        </div>
      </div>
    );
  }
);
