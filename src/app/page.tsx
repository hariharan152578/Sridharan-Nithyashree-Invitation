"use client";

import { motion } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import MobileFrame from "@/components/MobileFrame";
import BackgroundVideoScroller from "@/components/BackgroundVideoScroller";
import CountdownTimer from "@/components/CountdownTimer";
import AkshathaConfetti from "@/components/AkshathaConfetti";
import CalendarAndMapActions from "@/components/CalendarAndMapActions";
import RsvpWishes from "@/components/RsvpWishes";
import {
  SacredOm,
  MadisonSwash,
  GoldenDivider,
  CornerOrnament,
} from "@/components/DecorativeOrnaments";
import WeddingPreloader from "@/components/WeddingPreloader";
import {
  Calendar,
  Clock,
  MapPin,
  Music,
  Utensils,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function WeddingInvitation() {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-30px" },
    transition: { duration: 0.7, ease: "easeOut" as const },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" as const },
  };

  return (
    <SmoothScroll>
      {/* Auspicious Wedding Preloader ensuring video frames & images buffer smoothly */}
      <WeddingPreloader />

      <MobileFrame>
        {/* Background Video with Active Play-on-Scroll Controller */}
        <BackgroundVideoScroller />

        {/* Scrollable Content Container */}
        <div className="relative z-10 w-full px-3.5 sm:px-5 py-4 flex flex-col items-center">
          
          {/* ============================================================== */}
          {/* 1. HERO / COVER SECTION - FRAMED BY FLORAL ARCH & ELEPHANTS */}
          {/* ============================================================== */}
          <section className="min-h-[92vh] flex flex-col items-center justify-between text-center pt-6 pb-3 w-full relative">
            
            {/* Top Sacred Invocations */}
            <motion.div
              {...fadeInUp}
              className="flex flex-col items-center"
            >
              <div className="px-3.5 py-1 rounded-full bg-[#34040a]/85 backdrop-blur-md border border-amber-400/60 shadow-xl flex items-center gap-1.5 mb-1.5">
                <SacredOm className="w-4 h-4 text-amber-300 drop-shadow-[0_0_8px_rgba(245,208,97,0.8)]" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-amber-200 font-cinzel font-bold">
                  || Om Sri Ganeshaya Namaha ||
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-[#42060e] font-cinzel font-bold tracking-wider uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] max-w-xs mx-auto leading-relaxed">
                With the divine blessings of Sri Durvasacharya, Sri Mookambika, Sri Sivakamyamba & Sri Chidambareswara Swami
              </p>
            </motion.div>

            {/* Main Floating Invitation Content (Naturally Set on Textured Parchment) */}
            <motion.div
              {...scaleIn}
              className="my-auto py-1 flex flex-col items-center w-full"
            >
              {/* Auspicious Patrika Header Ribbon */}
              <div className="px-4 py-1 rounded-full bg-[#48060e] border border-amber-400/90 shadow-[0_4px_18px_rgba(0,0,0,0.4)] mb-2">
                <span className="text-[9.5px] sm:text-[10px] font-cinzel font-bold tracking-[0.22em] text-[#fff0b8] uppercase">
                  Vivaha Subhamuhurtha Ahvana Patrika
                </span>
              </div>

              {/* Invitation Heading in Madison Modern Calligraphy - Proportional Size */}
              <div className="relative flex flex-col items-center my-0">
                <h2 className="font-madison text-4xl sm:text-5xl maroon-heading-gradient tracking-wide py-0.5 drop-shadow-sm">
                  Invitation
                </h2>
                {/* Madison Modern Swash Flourish */}
                <MadisonSwash className="w-36 sm:w-44 h-5 text-amber-700/80 -mt-2 mb-0.5" />
              </div>

              <p className="text-[9.5px] sm:text-[10.5px] text-[#3e040a] font-cinzel font-bold tracking-[0.2em] uppercase my-1 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
                We cordially invite you to celebrate the wedding of
              </p>

              {/* The Couple Names - Deep Royal Calligraphy */}
              <div className="flex flex-col items-center gap-0.5 w-full my-1">
                {/* Groom */}
                <div className="flex flex-col items-center">
                  <span className="text-[9px] tracking-[0.25em] uppercase text-amber-800 font-cinzel font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                    Bridegroom
                  </span>
                  <h1 className="font-adeline text-3xl sm:text-4xl maroon-heading-gradient py-0.5 font-normal tracking-wide">
                    Sri. N. Sridharan
                  </h1>
                  <span className="text-[10.5px] text-amber-900 font-cinzel font-bold tracking-wider">
                    B.A.
                  </span>
                </div>

                {/* Elegant Swash & Ampersand */}
                <div className="flex items-center justify-center gap-2.5 my-0">
                  <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-amber-700" />
                  <span className="font-pinyon text-2xl sm:text-3xl text-amber-700 leading-none">&</span>
                  <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-amber-700" />
                </div>

                {/* Bride in Adeline Script */}
                <div className="flex flex-col items-center">
                  <span className="text-[9px] tracking-[0.25em] uppercase text-rose-800 font-cinzel font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                    Bride
                  </span>
                  <h2 className="font-adeline text-3xl sm:text-4xl rose-heading-gradient py-0.5 font-normal tracking-wide">
                    Selvi J. Nithyasri
                  </h2>
                  <span className="text-[10.5px] text-rose-900 font-cinzel font-bold tracking-wider">
                    B.Sc., (CDF)
                  </span>
                </div>
              </div>

              {/* Date & Venue Floating Plaque */}
              <div className="mt-2.5 px-4 py-2 rounded-xl bg-[#34040a]/90 backdrop-blur-md border border-amber-400/60 shadow-lg flex flex-col items-center gap-0.5 text-center">
                <p className="font-playfair text-sm sm:text-base font-bold text-amber-100 tracking-wider">
                  Sunday, 01 November 2026
                </p>
                <p className="text-[9.5px] text-amber-300 font-cinzel uppercase tracking-widest font-semibold">
                  Parabhava Year • Aippasi 15th
                </p>
                <p className="text-[11px] text-[#f1ece1] font-body mt-0.5 font-medium">
                  Anugraha Thirumana Mandapam
                </p>
              </div>
            </motion.div>

          
          </section>

          {/* ============================================================== */}
          {/* 2. SACRED BLESSINGS & GURUKULAM */}
          {/* ============================================================== */}
          <motion.section {...fadeInUp} className="w-full my-10">
            <div className="wedding-card rounded-3xl p-6 relative overflow-hidden">
              <CornerOrnament position="tl" />
              <CornerOrnament position="tr" />
              <CornerOrnament position="bl" />
              <CornerOrnament position="br" />

              <div className="text-center relative z-10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-300 font-cinzel font-bold">
                  Spiritual Blessings & Guidance
                </span>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-amber-100 mt-1 mb-2">
                  Divine Acharya Anugraha
                </h3>

                <GoldenDivider className="my-3" />

                <div className="space-y-3 text-xs text-[#f1ece1] font-body leading-relaxed">
                  <p>
                    With the revered benign blessings of{" "}
                    <strong className="text-amber-200 font-cinzel font-bold">
                      Poojya Sri Sri Sri Ravi Shankar Guruji
                    </strong>
                    , this auspicious Panigrahaṇa Vivaha Subha Mahotsavam is sanctified.
                  </p>
                  <p>
                    Under the spiritual benevolence of{" "}
                    <span className="text-amber-200 font-semibold">
                      Sivagama Kalanidhi / Sivagama Visarada Sri A.S. Sundaramurthy Sivachariyar
                    </span>{" "}
                    of Avinashi, representing the sacred{" "}
                    <span className="italic text-amber-300">
                      Veda-Agama Sanskrit Mahapathasala / Sri Gurukulam
                    </span>
                    .
                  </p>
                  <p className="text-[11px] text-amber-300/80 pt-1 font-medium">
                    Upadhyayam: Brahma Sri S. Raman Sasthrigal
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ============================================================== */}
          {/* 3. THE COUPLE & SACRED LINEAGE DETAILS */}
          {/* ============================================================== */}
          <motion.section {...fadeInUp} className="w-full my-6">
            <div className="text-center mb-5 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#34040a]/90 backdrop-blur-md border border-amber-400/60 shadow-lg mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-[10px] tracking-[0.25em] text-amber-200 uppercase font-cinzel font-bold">
                  The Sacred Union
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-black text-[#2e0307] tracking-wide drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                Couple & Ancestral Lineage
              </h3>
              <p className="font-adeline text-3xl sm:text-4xl text-[#4e0712] mt-0.5 drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)] font-normal">
                Bride & Groom
              </p>
            </div>

            {/* Groom Card */}
            <div className="wedding-card rounded-3xl p-5 mb-4 relative overflow-hidden border-l-4 border-l-amber-400">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="text-[11px] font-cinzel tracking-widest uppercase text-amber-300 font-bold">
                  Bridegroom (Varan)
                </span>
              </div>
              <h4 className="font-playfair text-xl font-bold text-amber-100">
                Sri. N. Sridharan <span className="text-xs font-normal text-amber-300/85 font-body">(B.A.)</span>
              </h4>
              <p className="text-xs text-amber-200/90 mt-1 font-body">
                Beloved Son of:
              </p>
              <p className="text-xs text-[#fffdf7] font-semibold font-body">
                Sri K.S. Neelakanda Sivachariyar & Srimathi Chitra
              </p>
              
              <div className="mt-3 pt-3 border-t border-amber-400/20 text-[11px] text-[#ebe4d8] font-body space-y-1">
                <p className="text-amber-300/80 uppercase tracking-wider text-[10px] font-cinzel font-bold">
                  Paternal Lineage
                </p>
                <p>• Grandson of Sri M. Subramanya Sivachariyar & Srimathi Shanthi</p>
                <p>• Great-grandson of Konerirajapuram S. Sabesa Sivachariyar & Srimathi Sundarambal</p>
                <p className="text-[10px] text-amber-300/70 pt-0.5 font-medium">Native: Mayiladuthurai / Konerirajapuram</p>
              </div>
            </div>

            {/* Bride Card */}
            <div className="wedding-card rounded-3xl p-5 relative overflow-hidden border-l-4 border-l-rose-400">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="text-[11px] font-cinzel tracking-widest uppercase text-rose-300 font-bold">
                  Bride (Kannigai)
                </span>
              </div>
              <h4 className="font-playfair text-xl font-bold text-amber-100">
                Selvi J. Nithyasri <span className="text-xs font-normal text-rose-300/90 font-body">(B.Sc., CDF)</span>
              </h4>
              <p className="text-xs text-amber-200/90 mt-1 font-body">
                Beloved Daughter of:
              </p>
              <p className="text-xs text-[#fffdf7] font-semibold font-body">
                Sri T.S. Jagadeesa Sivachariyar & Srimathi Rajeshwari
              </p>
              
              <div className="mt-3 pt-3 border-t border-rose-400/20 text-[11px] text-[#ebe4d8] font-body space-y-1">
                <p className="text-rose-300/80 uppercase tracking-wider text-[10px] font-cinzel font-bold">
                  Paternal Lineage
                </p>
                <p>• Granddaughter of Sri R. Thangachubramanya Sivachariyar & Mathusri Yogambal</p>
                <p>• Great-granddaughter of Tiruchengode Sri T.K. Sundaresa Sivachariyar & Mathusri Vasantha</p>
                <p className="text-[10px] text-rose-300/70 pt-0.5 font-medium">Native: Tiruchengode</p>
              </div>
            </div>
          </motion.section>

          {/* ============================================================== */}
          {/* 4. EVENT TIMELINES & AUSPICIOUS MUHURTHAM */}
          {/* ============================================================== */}
          <motion.section {...fadeInUp} className="w-full my-6">
            <div className="text-center mb-5 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#34040a]/90 backdrop-blur-md border border-amber-400/60 shadow-lg mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-[10px] tracking-[0.25em] text-amber-200 uppercase font-cinzel font-bold">
                  Ceremonial Schedule
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-black text-[#2e0307] tracking-wide drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                Auspicious Timings & Muhurtham
              </h3>
              <p className="font-adeline text-2xl sm:text-3xl text-[#4e0712] mt-0.5 drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)] font-normal">
                Sacred Celebrations
              </p>
            </div>

            {/* Countdown Clock */}
            <CountdownTimer />

            {/* Event Timeline Cards */}
            <div className="space-y-4">
              {/* Event 1: Engagement / Mapillai Azhaippu */}
              <div className="wedding-card rounded-2xl p-4 sm:p-5 relative border-t-2 border-t-amber-400/60 overflow-hidden">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-cinzel uppercase tracking-wider bg-amber-400/25 text-amber-200 mb-1.5 font-bold">
                      Previous Day Function
                    </span>
                    <h4 className="font-playfair text-base sm:text-lg font-bold text-amber-100">
                      Mapillai Azhaippu & Nichayathartham
                    </h4>
                    <p className="text-xs text-amber-200/80 font-body">
                      Groom's Welcoming & Sacred Engagement
                    </p>
                  </div>
                </div>

                {/* Wedding Illustration: Engagement & Ring Exchange */}
                <div className="my-3 overflow-hidden rounded-xl border border-amber-400/30 shadow-lg bg-black/40">
                  <img
                    src="/engagement-couple.png"
                    alt="Engagement Ring Ceremony"
                    className="w-full h-44 object-cover object-bottom"
                  />
                  <div className="p-2 bg-black/70 text-center border-t border-amber-400/20">
                    <p className="text-[10.5px] text-amber-200 font-cinzel">
                      Sacred Ring Exchange Ceremony & Auspicious Welcoming
                    </p>
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t border-amber-400/20 flex items-center justify-between text-xs font-body text-[#f1ece1]">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Saturday, 31 October 2026</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>From 6:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Event 2: Subha Muhurtham */}
              <div className="wedding-card wedding-card-glow rounded-2xl p-4 sm:p-5 relative border-2 border-amber-400/70 bg-gradient-to-b from-[#2a0409]/90 via-[#1e0307]/92 to-[#150204]/95 overflow-hidden">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-cinzel uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold mb-2 shadow-md">
                      <Sparkles className="w-3 h-3" /> Main Wedding Ceremony
                    </span>
                    <h4 className="font-playfair text-lg sm:text-xl font-bold text-amber-100">
                      Subha Muhurtham
                    </h4>
                    <p className="font-cinzel text-xs text-amber-300 font-semibold">
                      Panigrahaṇa Vivaha Subha Mahotsavam
                    </p>
                  </div>
                </div>

                {/* Wedding Illustrations: Sapthapadi & Hastamelap */}
                <div className="grid grid-cols-2 gap-2 my-3">
                  <div className="overflow-hidden rounded-xl border border-amber-400/30 shadow-md">
                    <img
                      src="/wedding-feet.png"
                      alt="Sapthapadi Feet Ceremony"
                      className="w-full h-32 object-cover object-top"
                    />
                    <p className="text-[9.5px] text-center p-1 bg-black/70 text-amber-200 font-cinzel">
                      Sapthapadi
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-xl border border-amber-400/30 shadow-md">
                    <img
                      src="/sacred-hands.png"
                      alt="Hastamelap Sacred Union"
                      className="w-full h-32 object-cover object-top"
                    />
                    <p className="text-[9.5px] text-center p-1 bg-black/70 text-amber-200 font-cinzel">
                      Panigrahanam
                    </p>
                  </div>
                </div>

                {/* Date & Time Highlights */}
                <div className="mt-2 space-y-2 text-xs font-body text-stone-100 bg-black/60 p-3.5 rounded-xl border border-amber-400/30">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-300">Date:</span>
                    <span className="font-bold text-amber-200 font-cinzel text-sm">
                      Sunday, 01 November 2026
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-300">Tamil Calendar:</span>
                    <span className="text-stone-100 font-medium">
                      Parabhava Year, Aippasi 15th
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-300">Principal Timing:</span>
                    <span className="font-bold text-amber-300 text-sm font-cinzel">
                      7:30 AM to 9:00 AM
                    </span>
                  </div>
                </div>

                {/* Astrological Alignments Grid */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] font-body text-[#f4ecdf]">
                  <div className="p-2.5 rounded-lg bg-black/50 border border-amber-400/25 text-center">
                    <span className="block text-[10px] text-amber-400 font-cinzel font-bold">Lagna</span>
                    Vrischika (Scorpio) Lagna
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/50 border border-amber-400/25 text-center">
                    <span className="block text-[10px] text-amber-400 font-cinzel font-bold">Hora & Vela</span>
                    Budha Hora • Amrita Vela
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/50 border border-amber-400/25 text-center">
                    <span className="block text-[10px] text-amber-400 font-cinzel font-bold">Nakshatram</span>
                    Punarpoosam (Punarvasu)
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/50 border border-amber-400/25 text-center">
                    <span className="block text-[10px] text-amber-400 font-cinzel font-bold">Yogam & Thithi</span>
                    Siddha Yogam • Sapthami
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ============================================================== */}
          {/* 5. VENUE & LOCATION */}
          {/* ============================================================== */}
          <motion.section {...fadeInUp} className="w-full my-6">
            <div className="text-center mb-4 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#34040a]/90 backdrop-blur-md border border-amber-400/60 shadow-lg mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-[10px] tracking-[0.25em] text-amber-200 uppercase font-cinzel font-bold">
                  Auspicious Venue
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-black text-[#2e0307] tracking-wide drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                Wedding Venue & Map
              </h3>
            </div>

            <div className="wedding-card rounded-3xl p-5 sm:p-6 text-center relative overflow-hidden">
              <span className="text-[10px] tracking-[0.25em] text-amber-300 uppercase font-cinzel font-bold">
                Kalyana Mandapam
              </span>
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-amber-100 mt-1">
                Anugraha Thirumana Mandapam
              </h3>
              <p className="text-xs text-amber-200/90 font-body mt-0.5 font-medium">
                Tiruchengode, Tamil Nadu
              </p>

              <GoldenDivider className="my-4" />

              <p className="text-xs text-[#f1ece1] font-body leading-relaxed max-w-xs mx-auto">
                Guests are cordially requested to grace the ceremony with family, participate in the sacred Vedic rituals, bless the young couple, and honour the hosts with your gracious presence.
              </p>

              {/* Map & Calendar Action Buttons */}
              <CalendarAndMapActions />
            </div>
          </motion.section>

          {/* ============================================================== */}
          {/* 6. TRADITIONAL MUSIC & VIRUNDHOMBAL (FEAST) */}
          {/* ============================================================== */}
          <motion.section {...fadeInUp} className="w-full my-6">
            <div className="text-center mb-4 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#34040a]/90 backdrop-blur-md border border-amber-400/60 shadow-lg mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-[10px] tracking-[0.25em] text-amber-200 uppercase font-cinzel font-bold">
                  Hospitality & Celebrations
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-black text-[#2e0307] tracking-wide drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                Mangala Isai & Royal Feast
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Traditional Music */}
              <div className="wedding-card rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-xl bg-amber-400/25 text-amber-300">
                    <Music className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-amber-300 font-cinzel uppercase tracking-wider block font-bold">
                      Mangala Isai
                    </span>
                    <h5 className="font-playfair text-sm font-bold text-amber-100">
                      Nadaswaram Isai Thendral
                    </h5>
                  </div>
                </div>
                <p className="text-[11px] text-[#ebe4d8] font-body leading-relaxed">
                  Performed by Asthana Vidwans associated with{" "}
                  <strong className="text-amber-200">Arthanareeswara Devasthanam, Bhavani</strong>, including Sri Sivakumar & Sri M.G. Sivaraman & group.
                </p>
              </div>

              {/* Traditional Feast */}
              <div className="wedding-card rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-xl bg-amber-400/25 text-amber-300">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-amber-300 font-cinzel uppercase tracking-wider block font-bold">
                      Virundhombal
                    </span>
                    <h5 className="font-playfair text-sm font-bold text-amber-100">
                      Traditional Royal Feast
                    </h5>
                  </div>
                </div>
                <p className="text-[11px] text-[#ebe4d8] font-body leading-relaxed">
                  Sumptuous South Indian wedding feast curated by{" "}
                  <strong className="text-amber-200">Arusuvai Arasan Sri Sivakumar</strong>, Bhavani.
                </p>
              </div>
            </div>
          </motion.section>

          {/* ============================================================== */}
          {/* 7. HONORED FAMILY & INVITERS */}
          {/* ============================================================== */}
          <motion.section {...fadeInUp} className="w-full my-6">
            <div className="text-center mb-4 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#34040a]/90 backdrop-blur-md border border-amber-400/60 shadow-lg mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-[10px] tracking-[0.25em] text-amber-200 uppercase font-cinzel font-bold">
                  With Best Compliments
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-black text-[#2e0307] tracking-wide drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                Family & Well-Wishers
              </h3>
            </div>

            <div className="wedding-card rounded-3xl p-5 sm:p-6 text-center">
              <span className="text-[10px] tracking-[0.25em] text-amber-300 uppercase font-cinzel font-bold">
                Anbin Azhaippu
              </span>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-amber-100 mt-1 mb-3">
                Cordially Invited By
              </h3>

              <div className="space-y-3 text-xs text-[#f1ece1] font-body">
                <div className="p-3 rounded-xl bg-black/60 border border-amber-400/25">
                  <p className="font-bold text-amber-200 font-cinzel">Hosts & Parents</p>
                  <p className="text-[11px] text-[#ebe4d8] mt-1">
                    T.S. Jegatheesa Sivachariyar & J. Rajeshwari (Tiruchengode)
                  </p>
                  <p className="text-[11px] text-[#ebe4d8]">
                    K.S. Neelakanda Sivachariyar & Chitra (Mayiladuthurai)
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-amber-400/25">
                  <p className="font-bold text-amber-200 font-cinzel">Loving Sisters & Family</p>
                  <p className="text-[11px] text-[#ebe4d8] mt-1">
                    <strong className="text-amber-200">J. Thangalechumi</strong> (B.Tech., IT, Senior Software Developer, VVDN Technologies)
                  </p>
                  <p className="text-[11px] text-[#ebe4d8]">
                    <strong className="text-amber-200">J. Sruthi</strong> (B.Com., PA, MBA) & <strong className="text-amber-200">J. Nithyapriya</strong>
                  </p>
                </div>

                <p className="text-[11px] text-amber-300/80 italic pt-1 font-medium">
                  Together with honored Sivachariyar elders, gurukkals, relatives and friends.
                </p>
              </div>
            </div>
          </motion.section>

          {/* ============================================================== */}
          {/* 8. INTERACTIVE BLESSING SHOWER (AKSHATHA) */}
          {/* ============================================================== */}
          <motion.section {...scaleIn} className="w-full my-6">
            <div className="text-center mb-4 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#34040a]/90 backdrop-blur-md border border-amber-400/60 shadow-lg mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-[10px] tracking-[0.25em] text-amber-200 uppercase font-cinzel font-bold">
                  Sacred Tradition
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-black text-[#2e0307] tracking-wide drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                Virtual Akshatha Ashirvadham
              </h3>
            </div>

            <div className="wedding-card rounded-3xl p-6 text-center border-amber-400/50 relative overflow-hidden">
              <CornerOrnament position="tl" />
              <CornerOrnament position="tr" />
              <CornerOrnament position="bl" />
              <CornerOrnament position="br" />

              <span className="text-[10px] tracking-[0.25em] text-amber-300 uppercase font-cinzel font-bold">
                Shower Sacred Petals
              </span>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-amber-100 mt-1 mb-1">
                Bless The Couple
              </h3>
              <p className="text-xs text-amber-200/90 font-body max-w-xs mx-auto">
                Tap the button below to shower sacred flower petals and golden akshatha upon Nithyasri & Sridharan!
              </p>

              <AkshathaConfetti />
            </div>
          </motion.section>

          {/* ============================================================== */}
          {/* 9. RSVP & WISHES FEED */}
          {/* ============================================================== */}
          <motion.section {...fadeInUp} className="w-full my-6">
            <div className="text-center mb-4 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#34040a]/90 backdrop-blur-md border border-amber-400/60 shadow-lg mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-[10px] tracking-[0.25em] text-amber-200 uppercase font-cinzel font-bold">
                  Heartfelt Blessings
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-black text-[#2e0307] tracking-wide drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                Send Your Wishes & RSVP
              </h3>
            </div>
            <RsvpWishes />
          </motion.section>

          {/* ============================================================== */}
          {/* 10. CLOSING BLESSING / FOOTER */}
          {/* ============================================================== */}
          <footer className="w-full text-center py-7 px-5 rounded-3xl bg-[#280308]/90 backdrop-blur-md border border-amber-400/40 mt-8 mb-4 flex flex-col items-center shadow-2xl">
            <SacredOm className="w-8 h-8 text-amber-400 mb-2 drop-shadow-[0_0_8px_rgba(245,208,97,0.8)]" />
            <p className="font-madison text-3xl sm:text-4xl text-amber-200">
              Nithyasri & Sridharan
            </p>
            <p className="text-[11px] text-amber-300 tracking-[0.2em] uppercase font-cinzel mt-1 font-semibold">
              01 • 11 • 2026 • Tiruchengode
            </p>
            <p className="text-[11px] text-[#f5ebd9] font-body mt-3 italic max-w-xs leading-relaxed">
              "Mangalyam Tantunanena Mama Jivana Hetuna, Kanthe Badhnami Subhage Twam Jeeva Sarada Satam"
            </p>
            <p className="text-[10.5px] text-amber-200/80 font-body mt-1.5">
              May you be blessed with longevity, happiness and prosperity.
            </p>
          </footer>
        </div>
      </MobileFrame>
    </SmoothScroll>
  );
}
