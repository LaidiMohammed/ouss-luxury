"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, Music2, Play } from "lucide-react";
import { SITE } from "@/lib/site";

export default function HeroVideo() {
  return (
    <section className="relative flex min-h-[100svh] items-end sm:items-center overflow-hidden grain">
      {/* Video fond — men fashion, esprit Paris (fichier local = lecture garantie sur téléphone) */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1920&auto=format&fit=crop"
      >
        <source src="/hero-fashion.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 hero-overlay" />

      {/* Contenu */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 pt-28 pb-14 sm:py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/50 px-4 py-2 text-[11px] sm:text-xs tracking-[0.3em] uppercase text-gold backdrop-blur"
        >
          <MapPin size={14} />
          Paris • London • Batna
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-luxe font-medium leading-[0.95] text-[13.5vw] sm:text-7xl lg:text-8xl max-w-4xl"
        >
          L&apos;ÉLÉGANCE
          <br />
          <span className="text-gold-gradient italic">n&apos;a pas de</span>
          <br />
          FRONTIÈRES.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 max-w-xl text-sm sm:text-lg text-cream/75 font-light leading-relaxed"
        >
          Ouss Luxury — vêtement homme de luxe à Batna. Polos, chemises,
          ensembles vus sur TikTok, portés comme à Paris devant la Tour Eiffel
          ou à Londres devant BigBen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-7 flex flex-col sm:flex-row gap-3"
        >
          <a
            href="#vetements"
            className="flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-black font-medium tracking-wide hover:bg-gold-light transition text-sm sm:text-base"
          >
            <Play size={18} /> Voir la collection
          </a>
          <a
            href={SITE.tiktok}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-7 py-4 text-cream hover:border-gold hover:text-gold transition text-sm sm:text-base"
          >
            <Music2 size={18} /> {SITE.tiktokHandle} • 9.2K
          </a>
        </motion.div>

        {/* Stats — lisible sur téléphone */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 grid grid-cols-3 max-w-lg gap-3 border-t border-white/15 pt-6"
        >
          {SITE.stats.map((s) => (
            <div key={s.label}>
              <p className="font-luxe text-2xl sm:text-4xl text-gold">{s.value}</p>
              <p className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-cream/60 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <a
        href="#vetements"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-cream/60 hover:text-gold"
        aria-label="Défiler"
      >
        <span className="text-[10px] tracking-[0.35em] uppercase">Défiler</span>
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
