import Link from "next/link";
import { Music2, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-black">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-luxe text-2xl tracking-[0.15em] text-gold-gradient font-semibold">
            OUSS LUXURY
          </p>
          <p className="mt-2 text-sm text-cream/60 font-light">{SITE.tagline}</p>
          <p className="mt-3 text-xs tracking-[0.25em] uppercase text-cream/40">
            Paris • London • Batna
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gold">Navigation</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/70">
            <li><Link href="/" className="hover:text-gold">Accueil</Link></li>
            <li><Link href="/vetements" className="hover:text-gold">Vêtements</Link></li>
            <li><Link href="/a-propos" className="hover:text-gold">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Nous contacter</Link></li>
            <li><Link href="/admin" className="hover:text-gold">Admin</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/70">
            <li className="flex items-center gap-2"><Phone size={15} className="text-gold" /> {SITE.phone}</li>
            <li className="flex items-center gap-2"><MapPin size={15} className="text-gold" /> {SITE.address}</li>
            <li className="flex items-center gap-2">
              <Music2 size={15} className="text-gold" />
              <a href={SITE.tiktok} target="_blank" rel="noreferrer" className="hover:text-gold">
                {SITE.tiktokHandle}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gold">Commander</p>
          <p className="mt-3 text-sm text-cream/60 font-light">
            Le plus rapide : WhatsApp avec le nom de l&apos;article + ta taille.
          </p>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-black hover:bg-gold-light transition w-full sm:w-auto"
          >
            WhatsApp {SITE.phone}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-cream/40 px-4">
        © {new Date().getFullYear()} Ouss Luxury — Batna. Frontend Next.js + Tailwind. Supabase-ready.
      </div>
    </footer>
  );
}
