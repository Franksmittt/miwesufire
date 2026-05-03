import type { Metadata } from "next";
import type { ReactNode } from "react";
import { StudioNav } from "./StudioNav";

export const metadata: Metadata = {
  title: "Social media studio",
  robots: { index: false, follow: false },
};

export default function StudioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <StudioNav />
      {children}
    </div>
  );
}
