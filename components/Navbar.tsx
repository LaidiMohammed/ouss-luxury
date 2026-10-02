"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Music2, ShieldCheck, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-md border-b border-gold/20"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo texte temporaire */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border border-gold/60 text-gold font-luxe text-lg sm:text-xl group-hover:bg-gold group-hover:text-black transition">
            O
          </span>
          <span className="leading-none">
            <span className="block font-luxe text-lg sm:text-2xl tracking-[0.18em] text-gold-gradient font-semibold">
              OUSS LUXURY
            </span>
            <span className="block text-[10px] sm:text-[11px] tracking-[0.3em] text-cream/60 uppercase">
              Batna • Paris • London
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm tracking-[0.2em] uppercase transition hover:text-gold ${
                  pathname === l.href ? "text-gold" : "text-cream/80"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={SITE.tiktok}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-cream/80 hover:border-gold hover:text-gold transition"
            aria-label="TikTok"
          >
            <Music2 size={18} />
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-medium text-black hover:bg-gold-light transition"
          >
            <Phone size={16} />
            {SITE.phone}
          </a>
          <Link
            href="/admin"
            className="flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2.5 text-sm tracking-wide text-gold hover:bg-gold hover:text-black transition"
          >
            <ShieldCheck size={16} />
            Admin
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden grid h-11 w-11 place-items-center rounded-full border border-white/20 text-cream"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile fullscreen menu — phone first */}
      {open && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gold/20 px-6 py-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3.5 font-luxe text-3xl border-b border-white/10 ${
                    pathname === l.href ? "text-gold" : "text-cream"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/admin"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-3.5 text-gold tracking-[0.2em] uppercase text-sm"
              >
                <ShieldCheck size={18} /> Panneau Admin
              </Link>
            </li>
          </ul>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-black font-medium"
            >
              <Phone size={18} /> WhatsApp
            </a>
            <a
              href={SITE.tiktok}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-white/25 py-3.5 text-cream"
            >
              <Music2 size={18} /> TikTok
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-cream/50 tracking-widest">
            {SITE.phone} • {SITE.address}
          </p>
        </div>
      )}
    </header>
  );
}
