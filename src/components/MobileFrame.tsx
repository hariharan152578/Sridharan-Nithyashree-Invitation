"use client";

import React, { useState } from "react";
import { Smartphone, Monitor } from "lucide-react";

export default function MobileFrame({ children }: { children: React.ReactNode }) {
  const [forceMobileFrame, setForceMobileFrame] = useState(true);

  return (
    <div className="min-h-screen w-full bg-[#0d0204] flex flex-col items-center justify-start relative overflow-x-hidden">
      {/* Desktop view switcher pill - only visible on md screens */}
      <div className="hidden lg:flex fixed top-4 left-4 z-50 items-center gap-1.5 p-1 rounded-full bg-stone-950/80 border border-amber-400/30 backdrop-blur-md text-[11px] text-amber-200/80 shadow-2xl">
        <button
          onClick={() => setForceMobileFrame(true)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all ${
            forceMobileFrame
              ? "bg-amber-500/25 text-amber-300 font-semibold border border-amber-400/40"
              : "hover:text-amber-200"
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Mobile Device View</span>
        </button>
        <button
          onClick={() => setForceMobileFrame(false)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all ${
            !forceMobileFrame
              ? "bg-amber-500/25 text-amber-300 font-semibold border border-amber-400/40"
              : "hover:text-amber-200"
          }`}
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Full Width</span>
        </button>
      </div>

      {/* Main Container: Full width on mobile, constrained to sleek mobile frame on desktop */}
      <div
        className={`w-full transition-all duration-300 relative ${
          forceMobileFrame
            ? "max-w-[430px] my-0 lg:my-6 rounded-none lg:rounded-[42px] lg:border-[8px] lg:border-stone-850 lg:shadow-[0_0_80px_rgba(212,175,55,0.18),0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden"
            : "max-w-2xl my-0 mx-auto"
        }`}
      >
        {/* Subtle Smartphone speaker notch for desktop frame */}
        {forceMobileFrame && (
          <div className="hidden lg:flex w-full justify-center pt-2.5 pb-1 bg-stone-950/90 relative z-30 border-b border-white/5">
            <div className="w-24 h-4 bg-stone-900 rounded-full flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-stone-800" />
              <div className="w-10 h-1 rounded-full bg-stone-800" />
            </div>
          </div>
        )}

        {/* Invitation Content Body */}
        <div className="relative w-full min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
}
