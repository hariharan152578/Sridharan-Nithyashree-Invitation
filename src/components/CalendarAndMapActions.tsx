"use client";

import { Calendar, MapPin, Share2, Check } from "lucide-react";
import { useState } from "react";

export default function CalendarAndMapActions() {
  const [activeVenue, setActiveVenue] = useState<"wedding" | "reception">("wedding");
  const [copied, setCopied] = useState(false);

  // Generate .ics calendar download
  const handleDownloadIcs = () => {
    const isWedding = activeVenue === "wedding";
    const icsContent = isWedding
      ? [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "PRODID:-//Nithya & Sridharan Wedding//EN",
          "CALSCALE:GREGORIAN",
          "METHOD:PUBLISH",
          "BEGIN:VEVENT",
          "UID:nithya-sridharan-wedding-20261101@wedding",
          "DTSTAMP:20261101T020000Z",
          "DTSTART:20261101T020000Z", // 7:30 AM IST = 2:00 AM UTC
          "DTEND:20261101T033000Z",   // 9:00 AM IST = 3:30 AM UTC
          "SUMMARY:Wedding Ceremony: Nithyasri & Sridharan",
          "DESCRIPTION:Vivaha Subhamuhurtha Mahotsavam of Selvi J. Nithyasri & Sri N. Sridharan at Sengunthar Thirumana Mandapam, Tiruchengode.",
          "LOCATION:Sengunthar Thirumana Mandapam, Tiruchengode",
          "STATUS:CONFIRMED",
          "END:VEVENT",
          "END:VCALENDAR",
        ].join("\r\n")
      : [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "PRODID:-//Nithya & Sridharan Reception//EN",
          "CALSCALE:GREGORIAN",
          "METHOD:PUBLISH",
          "BEGIN:VEVENT",
          "UID:nithya-sridharan-reception-20261103@wedding",
          "DTSTAMP:20261103T123000Z",
          "DTSTART:20261103T123000Z", // 6:00 PM IST = 12:30 PM UTC
          "DTEND:20261103T153000Z",   // 9:00 PM IST = 3:30 PM UTC
          "SUMMARY:Wedding Reception: Nithyasri & Sridharan",
          "DESCRIPTION:Grand Wedding Reception of Selvi J. Nithyasri & Sri N. Sridharan at Anugraha Kalyana Mandapam, Mayiladuthurai.",
          "LOCATION:Anugraha Kalyana Mandapam, Mayiladuthurai",
          "STATUS:CONFIRMED",
          "END:VEVENT",
          "END:VCALENDAR",
        ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute(
      "download",
      isWedding ? "Nithya_Sridharan_Wedding.ics" : "Nithya_Sridharan_Reception.ics"
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Google Calendar Links
  const weddingGoogleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "Wedding Ceremony: Nithyasri & Sridharan"
  )}&dates=20261101T020000Z/20261101T033000Z&details=${encodeURIComponent(
    "Panigrahana Vivaha Subha Mahotsavam of Selvi J. Nithyasri & Sri N. Sridharan at Sengunthar Thirumana Mandapam, Tiruchengode"
  )}&location=${encodeURIComponent("Sengunthar Thirumana Mandapam, Tiruchengode")}`;

  const receptionGoogleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "Wedding Reception: Nithyasri & Sridharan"
  )}&dates=20261103T123000Z/20261103T153000Z&details=${encodeURIComponent(
    "Grand Wedding Reception of Selvi J. Nithyasri & Sri N. Sridharan at Anugraha Kalyana Mandapam, Mayiladuthurai"
  )}&location=${encodeURIComponent("Anugraha Kalyana Mandapam, Mayiladuthurai")}`;

  const currentGoogleCalendarUrl =
    activeVenue === "wedding" ? weddingGoogleCalendarUrl : receptionGoogleCalendarUrl;

  const currentMapUrl =
    activeVenue === "wedding"
      ? "https://share.google/WzQRjLqq58bFLXTCF"
      : "https://www.google.com/maps/search/?api=1&query=Anugraha+Kalyana+Mandapam+Mayiladuthurai";

  // Share link
  const handleShare = async () => {
    const shareData = {
      title: "Wedding & Reception Invitation - Nithyasri & Sridharan",
      text: "You are cordially invited to celebrate the wedding ceremony of Selvi J. Nithyasri & Sri N. Sridharan on 01 Nov 2026 (Tiruchengode) and Grand Reception on 03 Nov 2026 at Anugraha Kalyana Mandapam, Mayiladuthurai.",
      url: typeof window !== "undefined" ? window.location.href : "",
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Share canceled", err);
      }
    } else {
      navigator.clipboard.writeText(
        `${shareData.text}\n${typeof window !== "undefined" ? window.location.href : ""}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="flex flex-col gap-3 my-5 w-full max-w-sm mx-auto">
      {/* Venue Switcher Tabs */}
      <div className="grid grid-cols-2 p-1 bg-black/60 rounded-xl border border-amber-400/30 text-xs font-cinzel font-bold">
        <button
          type="button"
          onClick={() => setActiveVenue("wedding")}
          className={`py-2 px-2 rounded-lg transition-all cursor-pointer ${
            activeVenue === "wedding"
              ? "bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-md"
              : "text-amber-200/80 hover:text-amber-100"
          }`}
        >
          1. Muhurtham
        </button>
        <button
          type="button"
          onClick={() => setActiveVenue("reception")}
          className={`py-2 px-2 rounded-lg transition-all cursor-pointer ${
            activeVenue === "reception"
              ? "bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-md"
              : "text-amber-200/80 hover:text-amber-100"
          }`}
        >
          2. Reception
        </button>
      </div>

      {/* Active Venue Details Banner */}
      <div className="p-3 bg-black/50 rounded-xl border border-amber-400/25 text-center">
        {activeVenue === "wedding" ? (
          <div>
            <span className="text-[10px] text-amber-300 font-cinzel uppercase tracking-wider block font-bold">
              Sunday, 01 Nov 2026 • 7:30 AM to 9:00 AM
            </span>
            <h4 className="font-playfair text-sm sm:text-base font-bold text-amber-100 mt-0.5">
              Sengunthar Thirumana Mandapam
            </h4>
            <p className="text-[11px] text-[#ebe4d8]">Tiruchengode, Tamil Nadu</p>
          </div>
        ) : (
          <div>
            <span className="text-[10px] text-amber-300 font-cinzel uppercase tracking-wider block font-bold">
              Tuesday, 03 Nov 2026 • 6:00 PM to 9:00 PM
            </span>
            <h4 className="font-playfair text-sm sm:text-base font-bold text-amber-100 mt-0.5">
              Anugraha Kalyana Mandapam
            </h4>
            <p className="text-[11px] text-[#ebe4d8]">Mayiladuthurai, Tamil Nadu</p>
          </div>
        )}
      </div>

      {/* Google Maps Button */}
      <a
        href={currentMapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500/20 via-amber-400/25 to-amber-500/20 hover:from-amber-500/30 hover:to-amber-400/35 border border-amber-400/40 text-amber-200 text-sm font-medium tracking-wide shadow-lg hover:shadow-amber-500/10 active:scale-[0.98] transition-all"
      >
        <MapPin className="w-4 h-4 text-amber-400" />
        <span>Directions to {activeVenue === "wedding" ? "Tiruchengode" : "Mayiladuthurai"}</span>
      </a>

      {/* Calendar Actions */}
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={currentGoogleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-stone-900/80 hover:bg-stone-850 border border-amber-400/25 text-amber-200/90 text-xs font-medium tracking-wider active:scale-95 transition-all text-center"
        >
          <Calendar className="w-3.5 h-3.5 text-amber-300" />
          <span>Google Calendar</span>
        </a>

        <button
          onClick={handleDownloadIcs}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-stone-900/80 hover:bg-stone-850 border border-amber-400/25 text-amber-200/90 text-xs font-medium tracking-wider active:scale-95 transition-all text-center cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-amber-300" />
          <span>Apple / iCal</span>
        </button>
      </div>

      {/* Share / WhatsApp Button */}
      <button
        onClick={handleShare}
        className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-950/60 hover:bg-stone-900/80 border border-amber-400/20 text-amber-300/80 text-xs tracking-wider transition-all cursor-pointer"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-300">Invitation Link Copied!</span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5 text-amber-300" />
            <span>Share Invitation with Family & Friends</span>
          </>
        )}
      </button>
    </div>
  );
}
