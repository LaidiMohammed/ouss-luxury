import Image from "next/image";
import { SITE } from "@/lib/site";
import { Music2 } from "lucide-react";

export const metadata = {
  title: "À propos — OUSS LUXURY",
  description: "Histoire de la boutique Ouss Luxury à Batna.",
};

export default function APropos() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-28 sm:pt-36 pb-16">
      <p className="text-xs tracking-[0.4em] uppercase text-gold">À propos</p>
      <h1 className="mt-2 font-luxe text-5xl sm:text-7xl leading-none">
        Nous, c&apos;est <span className="italic text-gold-gradient">Ouss.</span>
      </h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-2 items-start">
        <div className="arch arch-c">
          <div className="arch-img-wrap relative">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=900&auto=format&fit=crop"
              alt="Boutique"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-5 text-cream/70 font-light text-sm sm:text-base leading-relaxed">
          <p>
            Ouss Luxury est née à Batna avec une idée simple : proposer à
            l&apos;homme algérien le même niveau de finition qu&apos;on voit à
            Paris devant la Tour Eiffel ou à Londres devant BigBen — sans
            voyager.
          </p>
          <p>
            Chaque arrivée est filmée et publiée sur TikTok{" "}
            <span className="text-gold">{SITE.tiktokHandle}</span> (9.2K abonnés,
            39.1K likes). Pas de surprise : la vidéo montre la vraie coupe, la
            vraie matière.
          </p>
          <p>
            Boutique à {SITE.address} — {SITE.hours}. Commande WhatsApp au{" "}
            <span className="text-gold">{SITE.phone}</span> ou passe voir les
            pièces en vrai.
          </p>
          <a
            href={SITE.tiktok}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-black text-sm font-medium hover:bg-gold transition"
          >
            <Music2 size={18} /> Voir le TikTok
          </a>
        </div>
      </div>
    </div>
  );
}
