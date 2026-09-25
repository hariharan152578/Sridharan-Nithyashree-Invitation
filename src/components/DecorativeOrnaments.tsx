"use client";

import React from "react";

// The distinctive calligraphic tail swash inspired by "Madison Modern"
export function MadisonSwash({ className = "w-48 h-8 text-amber-300/80" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 30 C 70 5 110 50 160 30 C 210 10 250 55 300 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M130 30 C 150 48 170 48 190 30 C 210 15 200 45 160 48 C 120 50 110 20 130 30 Z"
        fill="currentColor"
        opacity="0.3"
      />
      <circle cx="160" cy="30" r="3.5" fill="currentColor" />
      <circle cx="90" cy="25" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="230" cy="22" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

// Auspicious Ganesha / Om Motif
export function SacredOm({ className = "w-10 h-10 text-amber-300" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stylized Om Symbol */}
      <path
        d="M32 4C24 4 18 10 18 18C18 24 22 28 27 30C20 33 16 39 16 46C16 55 23 60 32 60C41 60 47 55 47 47C47 41 43 36 38 33C43 31 46 25 46 18C46 10 40 4 32 4ZM32 10C36.4 10 40 13.6 40 18C40 22.4 36.4 26 32 26C27.6 26 24 22.4 24 18C24 13.6 27.6 10 32 10ZM32 32C38.6 32 42 36.6 42 43C42 49.4 37.6 54 32 54C26.4 54 22 49.4 22 43C22 36.6 25.4 32 32 32Z"
        opacity="0.15"
      />
      <path
        d="M26 14C23 15 20 18 20 22C20 25.5 22.5 28 26 29C22 31 18 35.5 18 41C18 47.5 23.5 52 30 52C36.5 52 41 47.5 41 42C41 38 38 35 34 33C37 31 39 27 39 23C39 18 35 14 30 14C28.5 14 27.2 14.4 26 14ZM30 18C32.8 18 35 20.2 35 23C35 25.8 32.8 28 30 28C27.2 28 25 25.8 25 23C25 20.2 27.2 18 30 18ZM30 32C34.4 32 37 35.5 37 40C37 44.5 34 48 30 48C26 48 23 44.5 23 40C23 35.5 25.6 32 30 32Z"
        fill="currentColor"
      />
      <circle cx="30" cy="8" r="3" fill="currentColor" />
      <path
        d="M25 4C27 2 33 2 35 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Elegant Mandala / Sacred Divider
export function GoldenDivider({ className = "w-full my-4" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
      <div className="flex items-center gap-1.5 text-amber-300">
        <span className="text-[10px]">✦</span>
        <div className="w-2 h-2 rotate-45 border border-amber-400 bg-amber-500/30" />
        <span className="text-[10px]">✦</span>
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
    </div>
  );
}

// Royal Corner Filigree
export function CornerOrnament({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const rotation = {
    tl: "rotate-0 top-2 left-2",
    tr: "rotate-90 top-2 right-2",
    br: "rotate-180 bottom-2 right-2",
    bl: "-rotate-90 bottom-2 left-2",
  }[position];

  return (
    <div className={`absolute ${rotation} pointer-events-none text-amber-400/40 w-8 h-8`}>
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 34V14C2 7.37 7.37 2 14 2H34"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 30V16C8 11.58 11.58 8 16 8H30"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
        <circle cx="16" cy="16" r="2.5" fill="currentColor" />
        <circle cx="2" cy="34" r="2" fill="currentColor" />
        <circle cx="34" cy="2" r="2" fill="currentColor" />
      </svg>
    </div>
  );
}
