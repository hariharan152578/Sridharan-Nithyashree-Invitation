"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Heart, Sparkles } from "lucide-react";

export default function AkshathaConfetti() {
  const [blessingCount, setBlessingCount] = useState(258);
  const [hasShowered, setHasShowered] = useState(false);

  const triggerShower = () => {
    setBlessingCount((prev) => prev + 1);
    setHasShowered(true);

    // Haptic feedback if available on mobile
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      try {
        navigator.vibrate([35, 50, 35]);
      } catch {}
    }

    // Traditional Akshatha & Flower Petal colors: Gold, Turmeric Yellow, Vermilion Kumkum Red, Coral Rose
    const colors = ["#FFD700", "#FFA500", "#FF4500", "#FFF8DC", "#FFB6C1"];

    // First burst from center
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.75, x: 0.5 },
      colors: colors,
      scalar: 1.2,
      shapes: ["circle"],
      ticks: 180,
      gravity: 0.8,
    });

    // Gentle side petal drops
    setTimeout(() => {
      confetti({
        particleCount: 30,
        angle: 60,
        spread: 55,
        origin: { x: 0.1, y: 0.7 },
        colors: colors,
        gravity: 0.7,
      });
      confetti({
        particleCount: 30,
        angle: 120,
        spread: 55,
        origin: { x: 0.9, y: 0.7 },
        colors: colors,
        gravity: 0.7,
      });
    }, 200);
  };

  return (
    <div className="flex flex-col items-center justify-center my-6">
      <button
        onClick={triggerShower}
        className="relative group overflow-hidden px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-semibold shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] active:scale-95 transition-all duration-300 flex items-center gap-2.5"
      >
        <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base font-cinzel font-bold tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-950 animate-bounce" />
          Shower Blessings (அட்சதை)
          <Heart className="w-4 h-4 fill-amber-950 text-amber-950" />
        </span>
        {/* Shimmer flare effect */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent transform" />
      </button>

      <p className="text-xs text-amber-200/80 mt-2.5 font-body flex items-center gap-1.5">
        <span className="text-rose-400">♥</span>
        <span>{blessingCount} blessings showered by well-wishers</span>
        {hasShowered && <span className="text-amber-300 font-bold ml-1 animate-pulse">Thanks for your blessing!</span>}
      </p>
    </div>
  );
}
