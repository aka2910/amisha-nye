"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Award,
  ScrollText,
  PartyPopper,
  ShieldCheck,
  Ghost,
  Crown,
  Heart,
  Stars,
  X,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const shimmer =
  "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_55%),radial-gradient(circle_at_bottom,rgba(124,92,255,0.18),transparent_55%),linear-gradient(120deg,rgba(255,79,216,0.14),rgba(124,92,255,0.12),rgba(255,209,102,0.10))]";

const glassCard =
  "rounded-3xl border border-white/10 bg-white/6 shadow-[0_25px_70px_rgba(0,0,0,0.30)] backdrop-blur";

const pill =
  "rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs text-white/80 backdrop-blur";

export default function Page() {
  const [reveal, setReveal] = useState(false);
  const [contractStatus, setContractStatus] = useState<string>("");
  const [activeImg, setActiveImg] = useState<string | null>(null);

  const awards = useMemo(
    () => [
      {
        icon: <Crown className="h-5 w-5" />,
        title: "Aura of the Year",
        desc: "For being addictive even when you claim you’re ghosting.",
        score: "∞/10",
      },
      {
        icon: <Award className="h-5 w-5" />,
        title: "Boss Mode Award",
        desc: "For ordering people around and still looking cute doing it.",
        score: "Non-negotiable",
      },
      {
        icon: <Ghost className="h-5 w-5" />,
        title: "Ghosting Champion*",
        desc: "For threatening ghosting and failing beautifully.",
        score: "*Emotional title",
      },
      {
        icon: <Sparkles className="h-5 w-5" />,
        title: "Girliepop Supreme",
        desc: "For lifting moods, creating chaos, and being iconic.",
        score: "Legendary",
      },
      {
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "Roast Potential",
        desc: "For ending confidence in 2 seconds (yet still fun).",
        score: "High Risk",
      },
      {
        icon: <Heart className="h-5 w-5" />,
        title: "Penguin Magnet",
        desc: "For pulling penguins / acquaintances into orbit.",
        score: "Pull only",
      },
    ],
    []
  );

  // ✅ Only her photos
  const photos = useMemo(
    () => [
      "/images/img1.jpg",
      "/images/img2.jpg",
      "/images/img4.jpg",
      "/images/img5.jpg",
      "/images/img6.jpeg",
      "/images/img7.jpg",
    ],
    []
  );

  return (
    <main className="min-h-screen bg-[#070710] text-white selection:bg-fuchsia-400/30 selection:text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className={`absolute inset-0 ${shimmer}`} />
        <div className="absolute left-[-200px] top-[-200px] h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-[90px]" />
        <div className="absolute right-[-220px] top-[15%] h-[520px] w-[520px] rounded-full bg-violet-500/20 blur-[110px]" />
        <div className="absolute left-[15%] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-amber-400/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[980px] px-4 pb-20 pt-5 sm:pt-8">
        {/* HERO */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className={`relative overflow-hidden ${glassCard}`}
        >
          <div className="relative h-[360px] sm:h-[420px] w-full">
            {/* Replace this image */}
            <Image
              src="/images/hero.jpg"
              alt="Amisha"
              fill
              priority
              className="object-cover opacity-95"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070710]/95 via-[#070710]/35 to-transparent" />

            {/* Sparkles overlay */}
            <div className="absolute inset-0 opacity-35">
              <div className="absolute left-8 top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute right-10 top-16 h-36 w-36 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute left-1/2 bottom-10 h-48 w-48 -translate-x-1/2 rounded-full bg-white/8 blur-3xl" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
            <div className="flex items-center gap-2 text-white/80">
              <Stars className="h-4 w-4" />
              <span className="text-xs tracking-wide">
                Luxury Edition • Mobile Friendly • 1% Sincere
              </span>
            </div>

            <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Amisha Awards 2025 🏆
            </h1>

            <p className="mt-2 max-w-[56ch] text-sm text-white/75 sm:text-base">
              A completely unbiased annual report by <b>Akshat</b> (who was forced
              by your aura to do this).
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Boss Energy", "Not an acquaintance", "High Chaos", "2026 vibes ✨"].map((t) => (
                <span key={t} className={pill}>
                  {t}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setReveal((v) => !v)}
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-400 px-5 py-2.5 text-sm font-semibold text-[#070710] shadow-lg shadow-fuchsia-500/20 active:scale-[0.99]"
              >
                Tap for BIG REVEAL 🤐
              </button>
              <a
                href="#contract"
                className="w-full sm:w-auto text-center rounded-full border border-white/12 bg-white/8 px-5 py-2.5 text-sm text-white/85 backdrop-blur active:scale-[0.99]"
              >
                Read the Contract 📜
              </a>
            </div>
          </div>
        </motion.section>

        {/* Reveal */}
        <AnimatePresence>
          {reveal && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={`mt-4 ${glassCard} p-5 sm:p-6 text-sm text-white/85`}
            >
              <b className="text-[#ffd166]">BIG REVEAL:</b> You made 2025 way less
              boring.
              <br />
              <br />
              And before you say "cringe" - yes, I know.
              <br />
              But it's still true 😌
            </motion.div>
          )}
        </AnimatePresence>

        {/* AWARDS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`mt-6 ${glassCard} p-5 sm:p-7`}
        >
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold sm:text-xl">🏅 Annual Awards</h2>
            <span className="text-xs text-white/60">Appeals not accepted 🫩</span>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {awards.map((a) => (
              <motion.div
                key={a.title}
                whileHover={{ y: -2 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/12 to-white/6 p-4"
              >
                <div className="flex items-center gap-2 text-[#ffd166]">
                  {a.icon}
                  <h3 className="font-semibold">{a.title}</h3>
                </div>
                <p className="mt-2 text-sm text-white/70">{a.desc}</p>
                <p className="mt-3 text-xs text-white/70">
                  Score: <span className="font-semibold text-[#ffd166]">{a.score}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTRACT */}
        <motion.section
          id="contract"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`mt-6 ${glassCard} p-5 sm:p-7`}
        >
          <div className="flex items-center gap-2">
            <ScrollText className="h-5 w-5 text-white/80" />
            <h2 className="text-lg font-bold sm:text-xl">Penguin x Boss Contract</h2>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
              <h3 className="font-semibold">Terms & Conditions</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-white/70">
                <li>
                  Ghosting longer than <b>24 hours</b> requires a written apology.
                </li>
                <li>
                  “Acquaintance” is permitted only as a joke. Permanent use is illegal.
                </li>
                <li>
                  Amisha’s aura is officially unbeatable; arguing is pointless.
                </li>
                <li>If bored, entertainment is mandatory. No refunds.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
              <h3 className="font-semibold">Signature Clause</h3>
              <p className="mt-2 text-sm text-white/70">
                By reading this, you confirm that you’re at least <b>1% responsible</b>
                for making Akshat smile in 2025.
              </p>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() =>
                    setContractStatus(
                      "✅ Contract accepted. You are now legally responsible for 20% of my daily mood."
                    )
                  }
                  className="flex-1 rounded-2xl bg-gradient-to-r from-[#ffd166] to-[#ff4fd8] px-3 py-2 text-sm font-semibold text-[#070710] active:scale-[0.98]"
                >
                  ✅ Accept
                </button>
                <button
                  onClick={() =>
                    setContractStatus(
                      "❌ Rejection denied. Invalid choice. Try again after you miss me."
                    )
                  }
                  className="flex-1 rounded-2xl border border-white/15 bg-white/8 px-3 py-2 text-sm text-white/85 active:scale-[0.98]"
                >
                  ❌ Reject
                </button>
              </div>

              {contractStatus && (
                <p className="mt-3 text-sm text-white/80">{contractStatus}</p>
              )}
            </div>
          </div>
        </motion.section>

        {/* SKETCH */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`mt-6 ${glassCard} p-5 sm:p-7`}
        >
          <h2 className="text-lg font-bold sm:text-xl">🎨 Proof</h2>
          <p className="mt-2 text-sm text-white/70">
            People don’t draw strangers. That’s premium behaviour. 😌
          </p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* Optional: add sketch image here */}
            {/*
            <div className="relative h-[240px] w-full overflow-hidden rounded-2xl border border-white/10 sm:w-[220px]">
              <Image src="/images/sketch.jpg" alt="Sketch" fill className="object-cover" />
            </div>
            */}

            <div className="rounded-2xl border border-white/10 bg-white/8 p-4 text-sm text-white/75">
              Happy New Year, Amisha.
              <br />
              Keep your aura. Keep your chaos. Keep being you.
              <br />
              <br />
              And yes… this is 1% sincere. That’s the max.
            </div>
          </div>
        </motion.section>

        {/* GALLERY */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`mt-6 ${glassCard} p-5 sm:p-7`}
        >
          <h2 className="text-lg font-bold sm:text-xl">📸 Amisha Gallery</h2>
          <p className="mt-2 text-sm text-white/70">Only her photos. Tap to zoom.</p>

          {photos.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {photos.map((src) => (
                <button
                  key={src}
                  onClick={() => setActiveImg(src)}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/6"
                >
                  <div className="relative h-[170px] w-full">
                    <Image
                      src={src}
                      alt="Amisha"
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </button>
              ))}
            </div>
          )}
        </motion.section>

        {/* MODAL VIEWER */}
        <AnimatePresence>
          {activeImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
              onClick={() => setActiveImg(null)}
            >
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.18 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#070710]"
              >
                <div className="relative h-[72vh] w-full">
                  <Image src={activeImg} alt="Amisha" fill className="object-contain" sizes="100vw" priority />
                </div>

                <button
                  onClick={() => setActiveImg(null)}
                  className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur"
                >
                  <X className="h-3.5 w-3.5" /> Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CLOSING */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`mt-6 ${glassCard} p-5 sm:p-7`}
        >
          <div className="flex items-center gap-2">
            <PartyPopper className="h-5 w-5 text-white/80" />
            <h2 className="text-lg font-bold sm:text-xl">2026 Prediction</h2>
          </div>

          <p className="mt-3 text-sm text-white/75">
            In 2026, you will still say “bro”, still threaten ghosting, still act
            like you don't care —
            <br />
            and still somehow be the most interesting part of someone’s day.
          </p>

          <p className="mt-3 text-sm text-white/75">
            Happy New Year, <b>Amisha</b>. Don’t change.
            <br />
            Just maybe… be 5% nicer 😌
          </p>

          <div className="mt-4 text-center text-xs text-white/55">
            Made with chaos, sarcasm, and 1% sincerity — by Akshat.
          </div>
        </motion.section>

        {/* bottom padding */}
        <div className="h-10" />
      </div>
    </main>
  );
}
