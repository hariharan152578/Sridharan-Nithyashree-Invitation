"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.6,
    });

    lenisRef.current = lenis;

    // Update ScrollTrigger & dispatch custom event for video controller
    lenis.on("scroll", (e: any) => {
      ScrollTrigger.update();
      window.dispatchEvent(
        new CustomEvent("lenisscroll", {
          detail: {
            progress: e.progress ?? (e.scroll / (e.limit || 1)),
            velocity: e.velocity ?? 0,
            direction: e.direction ?? 1,
            scroll: e.scroll,
          },
        })
      );
    });

    // Synchronize GSAP ticker with Lenis rAF
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return <div className="w-full relative">{children}</div>;
}
