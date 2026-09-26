"use client";

import { useState } from "react";
import { Send, Heart, Sparkles, MessageCircleHeart } from "lucide-react";

interface Wish {
  id: string;
  name: string;
  message: string;
  relation: string;
  time: string;
}

const INITIAL_WISHES: Wish[] = [
  {
    id: "1",
    name: "J. Thangalechumi",
    relation: "Sister",
    message: "Wishing dearest Nithya and Sridharan a lifetime filled with immense joy, prosperity, and divine togetherness! 🌸✨",
    time: "2h ago",
  },
  {
    id: "2",
    name: "Sundaramurthy Sivachariyar Family",
    relation: "Avinashi Gurukulam",
    message: "May the divine grace of Sri Mookambika and Lord Chidambareswara shower eternal bliss upon the sacred couple! 🙏🕉️",
    time: "4h ago",
  },
  {
    id: "3",
    name: "Muthukumaran Sivachariyar & Family",
    relation: "Relatives",
    message: "Hearty congratulations and prayers for a glorious Mangalya Dharanam! Varthukal! 💐",
    time: "1d ago",
  },
];

export default function RsvpWishes() {
  const [wishes, setWishes] = useState<Wish[]>(INITIAL_WISHES);
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [message, setMessage] = useState("");
  const [attending, setAttending] = useState<"attending" | "virtual" | "regret">("attending");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      relation: relation.trim() || "Well-wisher",
      message: message.trim(),
      time: "Just now",
    };

    setWishes([newWish, ...wishes]);
    setSubmitted(true);

    // Optional WhatsApp share link
    const whatsappText = `🌸 *Wedding Wishes for Nithyasri & Sridharan* 🌸\nFrom: ${name} (${relation || "Well-wisher"})\nStatus: ${
      attending === "attending" ? "Attending in Person" : attending === "virtual" ? "Attending Virtually" : "Sending Blessings"
    }\nMessage: "${message}"\n\nMay Lord Shiva & Parvathi bless the couple! ✨`;
    
    // Reset form after short delay
    setTimeout(() => {
      setName("");
      setRelation("");
      setMessage("");
    }, 1000);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `🌸 *Warm Wedding Greetings for Nithyasri & Sridharan* 🌸\n` +
      `Dearest Nithya & Sridharan,\n` +
      `${message ? `"${message}"\n` : "Heartiest congratulations on your upcoming wedding ceremony!\n"}` +
      `With lots of love & blessings,\n` +
      `From: ${name || "Your well-wisher"}`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <div className="my-8">
      <div className="wedding-card rounded-3xl p-5 sm:p-6 border border-amber-400/30">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MessageCircleHeart className="w-5 h-5 text-amber-400" />
          <h3 className="font-cinzel text-lg font-semibold tracking-wide text-amber-200">
            Send Your Blessings & RSVP
          </h3>
        </div>
        <p className="text-center text-xs text-amber-200/60 mb-5 font-body">
          Share your heartfelt wishes with Nithyasri & Sridharan
        </p>

        {submitted ? (
          <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-400/40 text-center animate-fade-in">
            <Sparkles className="w-6 h-6 text-amber-400 mx-auto mb-1 animate-bounce" />
            <h4 className="text-sm font-semibold text-amber-200 font-cinzel">
              Blessings Received with Gratitude!
            </h4>
            <p className="text-xs text-amber-100/80 mt-1 font-body">
              Your warm wishes have been added to the wedding memory scroll.
            </p>
            <div className="mt-3 flex gap-2 justify-center">
              <button
                onClick={handleWhatsAppSend}
                className="px-3.5 py-1.5 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-medium flex items-center gap-1.5 transition-all"
              >
                <span>Forward via WhatsApp</span>
              </button>
              <button
                onClick={() => setSubmitted(false)}
                className="px-3 py-1.5 rounded-full bg-stone-900 border border-amber-400/30 text-amber-300 text-xs font-medium"
              >
                Write Another
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Attendance Choice */}
            <div>
              <label className="block text-[11px] font-medium text-amber-200/70 uppercase tracking-wider mb-1.5 font-cinzel">
                Will you be gracing the occasion?
              </label>
              <div className="grid grid-cols-3 gap-1.5 text-xs font-body">
                {[
                  { key: "attending", label: "Attending" },
                  { key: "virtual", label: "Virtually" },
                  { key: "regret", label: "In Prayers" },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setAttending(item.key as any)}
                    className={`py-2 px-1 rounded-xl text-center border transition-all text-xs ${
                      attending === item.key
                        ? "bg-amber-500/25 border-amber-400 text-amber-200 font-medium shadow-sm"
                        : "bg-stone-900/40 border-stone-800 text-stone-300 hover:border-amber-400/30"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Name Input */}
            <div>
              <input
                type="text"
                placeholder="Your Full Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/70 border border-amber-400/25 text-amber-100 placeholder:text-stone-400 text-xs focus:outline-none focus:border-amber-400 transition-all font-body"
              />
            </div>

            {/* Relation / City */}
            <div>
              <input
                type="text"
                placeholder="Relationship / City (e.g. Friend, Chennai, Cousin)"
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/70 border border-amber-400/25 text-amber-100 placeholder:text-stone-400 text-xs focus:outline-none focus:border-amber-400 transition-all font-body"
              />
            </div>

            {/* Message Input */}
            <div>
              <textarea
                placeholder="Write your prayers, blessings & congratulatory wishes here... *"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/70 border border-amber-400/25 text-amber-100 placeholder:text-stone-400 text-xs focus:outline-none focus:border-amber-400 transition-all font-body resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 text-xs font-semibold uppercase tracking-wider shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-cinzel"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Record Your Blessings</span>
            </button>
          </form>
        )}

        {/* Live Wishes Wall / Recent Blessings */}
        <div className="mt-6 pt-5 border-t border-amber-400/20">
          <p className="text-[11px] font-medium uppercase tracking-widest text-amber-300/70 mb-3 font-cinzel flex items-center gap-1.5">
            <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
            <span>Well-Wisher Blessings Feed</span>
          </p>

          <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
            {wishes.map((w) => (
              <div
                key={w.id}
                className="p-2.5 rounded-xl bg-stone-900/60 border border-amber-400/15 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-amber-200 font-cinzel">{w.name}</span>
                  <span className="text-[10px] text-stone-400">{w.time}</span>
                </div>
                {w.relation && (
                  <span className="inline-block text-[10px] text-amber-300/60 mb-1">
                    {w.relation}
                  </span>
                )}
                <p className="text-xs text-stone-200/90 italic font-body font-light">
                  "{w.message}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
