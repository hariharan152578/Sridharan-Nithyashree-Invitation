"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundVideoScroller() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    // Start playing smoothly on initial load (muted videos autoplay without user interaction restrictions)
    video.play().catch(() => {});

    let stopScrollTimer: ReturnType<typeof setTimeout> | null = null;

    // Trigger video playback smoothly while scrolling
    const onScrollActivity = () => {
      if (!video) return;

      // Update scroll progress bar
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScrollY = window.scrollY;
      const progress = scrollHeight > 0 ? Math.min(1, Math.max(0, currentScrollY / scrollHeight)) : 0;
      setScrollProgress(progress);

      // Play video while scrolling
      if (video.paused) {
        video.play().catch(() => {});
      }

      // Smooth pause when scroll stops for 250ms
      if (stopScrollTimer) clearTimeout(stopScrollTimer);
      stopScrollTimer = setTimeout(() => {
        if (video && !video.paused) {
          video.pause();
        }
      }, 250);
    };

    // Attach to scroll, wheel, touchmove and lenisscroll
    window.addEventListener("scroll", onScrollActivity, { passive: true });
    window.addEventListener("wheel", onScrollActivity, { passive: true });
    window.addEventListener("touchmove", onScrollActivity, { passive: true });
    window.addEventListener("lenisscroll", onScrollActivity);

    return () => {
      window.removeEventListener("scroll", onScrollActivity);
      window.removeEventListener("wheel", onScrollActivity);
      window.removeEventListener("touchmove", onScrollActivity);
      window.removeEventListener("lenisscroll", onScrollActivity);
      if (stopScrollTimer) clearTimeout(stopScrollTimer);
    };
  }, []);

  // Handle background music toggle
  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlayingAudio) {
      audio.pause();
      setIsPlayingAudio(false);
    } else {
      audio
        .play()
        .then(() => setIsPlayingAudio(true))
        .catch((e) => console.log("Audio play error:", e));
    }
  };

  return (
    <>
      {/* Background Audio */}
      <audio ref={audioRef} src="/audio.mp3" loop preload="auto" />

      {/* Video Background Container - 100% Original Clarity & Opacity */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-black">
        <video
          ref={videoRef}
          src="/bg-video.mp4"
          playsInline
          muted
          loop
          preload="auto"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 1 }}
        />
        {/* Subtle vignette only at absolute top and bottom edge for notch and home bar */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Floating Audio Music Toggle (Top Right - Clean & Minimal) */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 pointer-events-auto">
        <button
          onClick={toggleAudio}
          title={isPlayingAudio ? "Mute Music" : "Play Wedding Music"}
          className="flex items-center justify-center w-9 h-9 rounded-full backdrop-blur-md bg-[#34040a]/85 border border-amber-400/50 text-amber-300 shadow-xl hover:border-amber-300 hover:scale-105 active:scale-95 transition-all"
        >
          {isPlayingAudio ? (
            <div className="relative flex items-center justify-center">
              <Volume2 className="w-4 h-4 text-amber-300" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
            </div>
          ) : (
            <VolumeX className="w-4 h-4 text-stone-300" />
          )}
        </button>
      </div>

      {/* Floating Scroll Progress Indicator */}
      <div className="fixed bottom-4 left-4 z-40 flex items-center gap-2 pointer-events-none opacity-85">
        <div className="w-1.5 h-16 bg-black/80 rounded-full overflow-hidden border border-amber-500/30 backdrop-blur-md shadow-lg">
          <div
            className="w-full bg-gradient-to-b from-amber-300 to-amber-500 rounded-full transition-all duration-150"
            style={{ height: `${Math.max(6, scrollProgress * 100)}%` }}
          />
        </div>
      </div>
    </>
  );
}
