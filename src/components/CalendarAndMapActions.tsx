"use client";

import { Calendar, MapPin, Share2, Check } from "lucide-react";
import { useState } from "react";

export default function CalendarAndMapActions() {
  const [copied, setCopied] = useState(false);

  // Generate .ics calendar download
  const handleDownloadIcs = () => {
    const icsContent = [
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
      "DESCRIPTION:Vivaha Subhamuhurtha Mahotsavam of Selvi J. Nithyasri & Sri N. Sridharan at Anugraha Thirumana Mandapam.",
      "LOCATION:Anugraha Thirumana Mandapam",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "Nithya_Sridharan_Wedding.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Google Calendar Link
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "Wedding: Nithyasri & Sridharan"
  )}&dates=20261101T020000Z/20261101T033000Z&details=${encodeURIComponent(
    "Panigrahana Vivaha Subha Mahotsavam of Selvi J. Nithyasri & Sri N. Sridharan"
  )}&location=${encodeURIComponent("Anugraha Thirumana Mandapam")}`;

  // Share link
  const handleShare = async () => {
    const shareData = {
      title: "Wedding Invitation - Nithyasri & Sridharan",
      text: "You are cordially invited to the wedding ceremony of Selvi J. Nithyasri & Sri N. Sridharan on Sunday, 01 November 2026 at Anugraha Thirumana Mandapam.",
      url: typeof window !== "undefined" ? window.location.href : "",
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Share canceled", err);
      }
    } else {
      // Fallback copy to clipboard
      navigator.clipboard.writeText(
        `${shareData.text}\n${typeof window !== "undefined" ? window.location.href : ""}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="flex flex-col gap-3 my-6 w-full max-w-sm mx-auto">
      {/* Google Maps Button */}
      <a
        href="https://maps.app.goo.gl/HpFug7SgdzHH88tQA?g_st=aw"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500/20 via-amber-400/25 to-amber-500/20 hover:from-amber-500/30 hover:to-amber-400/35 border border-amber-400/40 text-amber-200 text-sm font-medium tracking-wide shadow-lg hover:shadow-amber-500/10 active:scale-[0.98] transition-all"
      >
        <MapPin className="w-4 h-4 text-amber-400" />
        <span>Get Venue Directions on Google Maps</span>
      </a>

      {/* Calendar Actions */}
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-stone-900/80 hover:bg-stone-850 border border-amber-400/25 text-amber-200/90 text-xs font-medium tracking-wider active:scale-95 transition-all text-center"
        >
          <Calendar className="w-3.5 h-3.5 text-amber-300" />
          <span>Google Calendar</span>
        </a>

        <button
          onClick={handleDownloadIcs}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-stone-900/80 hover:bg-stone-850 border border-amber-400/25 text-amber-200/90 text-xs font-medium tracking-wider active:scale-95 transition-all text-center"
        >
          <Calendar className="w-3.5 h-3.5 text-amber-300" />
          <span>Apple / iCal</span>
        </button>
      </div>

      {/* Share / WhatsApp Button */}
      <button
        onClick={handleShare}
        className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-950/60 hover:bg-stone-900/80 border border-amber-400/20 text-amber-300/80 text-xs tracking-wider transition-all"
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
