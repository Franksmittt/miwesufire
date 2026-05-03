"use client";

import { useEffect, useRef, useState } from "react";

const BARS = [
  {
    label: "Thermal Output (Calorific Value)",
    tag: "High Performance",
    tagClass: "text-ember",
    barClass: "from-orange-900 to-ember",
    width: "92%",
    name: "BRAAI MIX",
  },
  {
    label: "Ignition Latency (Time to Flame)",
    tag: "Ultra-Low Latency",
    tagClass: "text-cyan",
    barClass: "from-cyan-900 to-cyan",
    width: "88%",
    name: "SEKELBOS",
  },
  {
    label: "Thermal Mass (Coal Life)",
    tag: "Extended Duration",
    tagClass: "text-gray-400",
    barClass: "from-gray-700 to-white",
    width: "96%",
    name: "GEELHAAK",
  },
];

export function BenchmarkBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-12">
      {BARS.map((bar) => (
        <div key={bar.label} className="group">
          <div className="flex justify-between items-end mb-3">
            <h4 className="text-sm font-bold text-white">{bar.label}</h4>
            <span className={`text-xs font-mono ${bar.tagClass}`}>{bar.tag}</span>
          </div>
          <div className="w-full h-12 bg-tungsten rounded-lg overflow-hidden relative p-1">
            <div className="absolute top-0 bottom-0 left-[25%] w-px bg-white/5" />
            <div className="absolute top-0 bottom-0 left-[50%] w-px bg-white/5" />
            <div className="absolute top-0 bottom-0 left-[75%] w-px bg-white/5" />
            <div
              className={`h-full bg-gradient-to-r ${bar.barClass} rounded-md flex items-center justify-end px-4 transition-[width] duration-[2000ms] ease-out`}
              style={{ width: visible ? bar.width : "0%" }}
            >
              <span className="text-black font-bold text-xs">{bar.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
