"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const targetDate = new Date("2026-11-01T07:30:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className="grid grid-cols-4 gap-2 my-6">
        {[0, 0, 0, 0].map((_, i) => (
          <div key={i} className="h-16 rounded-xl bg-stone-900/40 animate-pulse" />
        ))}
      </div>
    );
  }

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="my-6">
      <div className="text-center mb-3">
        <span className="inline-block text-[10.5px] tracking-[0.22em] text-[#34040a] font-cinzel font-extrabold uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.95)]">
          Countdown to Auspicious Muhurtham
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-gradient-to-b from-[#2b040a]/95 via-[#1a0206]/95 to-[#120104]/98 border border-amber-400/40 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-amber-400/60 transition-all"
          >
            {/* Top gold shine accent */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
            <span className="font-playfair text-xl sm:text-2xl font-bold text-amber-100 tracking-tight leading-none">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] tracking-widest text-amber-300/90 uppercase mt-1 font-body font-semibold">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
