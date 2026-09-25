"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SacredOm, CornerOrnament } from "./DecorativeOrnaments";
import { Sparkles } from "lucide-react";

export default function WeddingPreloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRemove, setShouldRemove] = useState(false);

  useEffect(() => {
    // 1. Preload key ceremony illustration images
    const imagesToPreload = [
      "/engagement-couple.png",
      "/wedding-feet.png",
      "/sacred-hands.png",
    ];

    let loadedCount = 0;
    const totalItems = imagesToPreload.length + 2; // images + video + fonts

    const updateItem = () => {
      loadedCount++;
      const currentPct = Math.min(90, Math.round((loadedCount / totalItems) * 85));
      setProgress((prev) => Math.max(prev, currentPct));
    };

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.onload = updateItem;
      img.onerror = updateItem;
      img.src = src;
    });

    // 2. Preload fonts if supported
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        updateItem();
      });
    } else {
      updateItem();
    }

    // 3. Listen for video frames ready
    const handleVideoReady = () => {
      updateItem();
    };

    window.addEventListener("wedding-video-ready", handleVideoReady);

    // 4. Smooth progress animation loop
    const startTime = Date.now();
    const minLoadDuration = 1400; // Minimum 1.4s for majestic presentation

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const timeRatio = Math.min(1, elapsed / minLoadDuration);

      setProgress((prev) => {
        if (prev < 90) {
          return Math.min(90, prev + Math.floor(Math.random() * 8) + 4);
        }
        return prev;
      });

      if (timeRatio >= 1) {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          setIsLoaded(true);
        }, 200);

        // Auto-dismiss after brief celebration
        setTimeout(() => {
          setShouldRemove(true);
        }, 800);
      }
    }, 70);

    // Safety fallback: maximum 3.2s
    const maxSafetyTimeout = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setIsLoaded(true);
      setTimeout(() => setShouldRemove(true), 500);
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(maxSafetyTimeout);
      window.removeEventListener("wedding-video-ready", handleVideoReady);
    };
  }, []);

  const handleManualEnter = () => {
    setShouldRemove(true);
  };

  return (
    <AnimatePresence>
      {!shouldRemove && (
        <motion.div
          key="wedding-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between py-10 px-6 bg-gradient-to-b from-[#1c0206] via-[#120104] to-[#0a0102] text-center select-none overflow-hidden"
        >
          {/* Ornate Gold Border Corners */}
          <CornerOrnament position="tl" />
          <CornerOrnament position="tr" />
          <CornerOrnament position="bl" />
          <CornerOrnament position="br" />

          {/* Top Auspicious Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="px-4 py-1 rounded-full bg-[#34040a]/90 border border-amber-400/60 shadow-lg flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-amber-200 font-cinzel font-bold">
                || Om Sri Ganeshaya Namaha ||
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </div>
          </motion.div>

          {/* Centerpiece: Glowing Om, Couple Names & Invitation Heading */}
          <div className="flex flex-col items-center my-auto w-full max-w-sm">
            {/* Glowing Sacred Om */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                filter: [
                  "drop-shadow(0 0 15px rgba(245,208,97,0.5))",
                  "drop-shadow(0 0 28px rgba(245,208,97,0.85))",
                  "drop-shadow(0 0 15px rgba(245,208,97,0.5))",
                ],
              }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              className="mb-4"
            >
              <SacredOm className="w-14 h-14 sm:w-16 sm:h-16 text-amber-300" />
            </motion.div>

            <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-amber-300/90 font-cinzel font-bold mb-1">
              Vivaha Subhamuhurtha Ahvana Patrika
            </span>

            {/* Couple Names */}
            <h1 className="font-madison text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 py-1 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] leading-tight">
              Nithyashree & Sridharan
            </h1>

            <p className="text-[10.5px] text-amber-200/70 font-cinzel tracking-widest uppercase mt-0.5 font-medium">
              01 November 2026 • Tiruchengode
            </p>

            {/* Progress Bar Container */}
            <div className="w-64 max-w-xs mt-8 flex flex-col items-center">
              <div className="w-full h-1.5 bg-black/80 rounded-full overflow-hidden border border-amber-400/35 p-[0.5px] shadow-[0_0_12px_rgba(0,0,0,0.8)] mb-2">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-200 rounded-full shadow-[0_0_10px_rgba(245,208,97,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.15 }}
                />
              </div>

              <div className="flex items-center justify-between w-full text-[9.5px] font-cinzel text-amber-200/80 tracking-widest uppercase font-semibold">
                <span>
                  {progress < 100
                    ? "Sanctifying Sacred Frames..."
                    : "Invitation Sanctified ✨"}
                </span>
                <span className="text-amber-300 font-bold">{progress}%</span>
              </div>
            </div>

            {/* Tap to Open Button when ready */}
            {isLoaded && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                onClick={handleManualEnter}
                className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-stone-950 font-cinzel font-bold text-[10.5px] tracking-[0.22em] uppercase shadow-[0_4px_22px_rgba(245,208,97,0.5)] active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-stone-950" />
                <span>Open Invitation</span>
              </motion.button>
            )}
          </div>

          {/* Bottom Blessing Sloka */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <p className="text-[9.5px] text-[#e8ded0] font-body italic max-w-xs">
              "Mangalyam Tantunanena Mama Jivana Hetuna"
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
