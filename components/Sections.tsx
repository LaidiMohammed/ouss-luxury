import Image from "next/image";
import { Clock, MapPin, MessageCircle, Music2, Navigation, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function TikTokSection() {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=600&auto=format&fit=crop",
      tag: "Look Paris",
      views: "12.4K vues",
    },
    {
      img: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=600&auto=format&fit=crop",
      tag: "Look London",
      views: "8.1K vues",
    },
    {
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=600&auto=format&fit=crop",
      tag: "Boutique Batna",
      views: "21K vues",
    },
  ];
  return (
    <section className="border-y border-gold/15 bg-[#0b0b0c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold">TikTok</p>
            <h2 className="mt-2 font-luxe text-4xl sm:text-5xl">
              Vu sur <span className="italic text-gold-gradient">{SITE.tiktokHandle}</span>
            </h2>
          </div>
          <a
            href={SITE.tiktok}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-black text-sm font-medium hover:bg-gold transition"
          >
            <Music2 size={18} /> Suivre • 9.2K abonnés
          </a>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6">
          {cards.map((c) => (
            <a
              key={c.tag}
              href={SITE.tiktok}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl sm:rounded-[2rem] border border-white/10 aspect-[9/14] sm:aspect-[9/13]"
            >
              <Image
                src={c.img}
                alt={c.tag}
                fill
                sizes="(max-width:640px) 33vw, 400px"
                className="object-cover group-hover:scale-105 transition duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-3 sm:p-5">
                <p className="text-[11px] sm:text-sm font-medium text-white">{c.tag}</p>
                <p className="text-[10px] sm:text-xs text-gold">{c.views}</p>
              </div>
              <span className="absolute top-3 right-3 grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur">
                <Music2 size={15} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-24 grid gap-10 lg:grid-cols-2 items-center">
      <div className="relative order-2 lg:order-1">
        <div className="arch arch-a">
          <div className="arch-img-wrap relative">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=900&auto=format&fit=crop"
              alt="Boutique Ouss Luxury Batna"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="absolute -bottom-5 -right-2 sm:right-8 rounded-2xl border border-gold/40 bg-black/90 backdrop-blur px-5 py-4 shadow-2xl">
          <p className="font-luxe text-3xl text-gold">Batna</p>
          <p className="text-xs tracking-[0.25em] uppercase text-cream/60">Depuis le cœur des Aurès</p>
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <p className="text-xs tracking-[0.4em] uppercase text-gold">À propos</p>
        <h2 className="mt-2 font-luxe text-4xl sm:text-6xl leading-[1.02]">
          Le luxe <span className="italic text-gold-gradient">à l&apos;algérienne,</span>
          <br />
          l&apos;allure mondiale.
        </h2>
        <p className="mt-5 text-sm sm:text-base text-cream/65 font-light leading-relaxed">
          Ouss Luxury habille l&apos;homme moderne de Batna avec des pièces
          choisies : polos, chemises oxford, ensembles street-chic. Chaque pièce
          est présentée en vidéo sur TikTok avant d&apos;arriver en boutique —
          ce que tu vois en vidéo, c&apos;est ce que tu portes.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
          {[
            ["Qualité premium", "Coton, piqué, oxford"],
            ["Prix en DA", "Clair, sans surprise"],
            ["WhatsApp direct", SITE.phone],
            ["Boutique Batna", "Voir sur Maps"],
          ].map(([t, s]) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm font-medium text-cream">{t}</p>
              <p className="text-xs text-gold mt-1">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactNous() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 sm:pb-24">
      <div className="overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-[#141310] to-[#0b0b0c] p-6 sm:p-12 grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-gold">Nous contacter</p>
          <h2 className="mt-2 font-luxe text-4xl sm:text-5xl">
            Passe en boutique <span className="italic text-gold-gradient">ou commande.</span>
          </h2>
          <ul className="mt-6 space-y-3 text-sm sm:text-base">
            <li className="flex items-center gap-3 text-cream/80">
              <Phone size={18} className="text-gold" /> {SITE.phone} — {SITE.phoneIntl}
            </li>
            <li className="flex items-center gap-3 text-cream/80">
              <MapPin size={18} className="text-gold" /> {SITE.address}
            </li>
            <li className="flex items-center gap-3 text-cream/80">
              <Clock size={18} className="text-gold" /> {SITE.hours}
            </li>
          </ul>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-black font-medium hover:bg-gold-light transition"
            >
              <MessageCircle size={18} /> Commander WhatsApp
            </a>
            <a
              href={SITE.maps}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-4 text-cream hover:border-gold hover:text-gold transition"
            >
              <Navigation size={18} /> Itinéraire boutique
            </a>
          </div>
        </div>
        <div className="grid content-center gap-3 rounded-3xl border border-white/10 bg-black/40 p-6">
          <p className="text-xs tracking-[0.3em] uppercase text-cream/50">Message rapide</p>
          <div className="grid gap-3">
            {["Salam, la chemise oxford blanche est dispo ? (M)", "Salam, le polo Lacoste vert 8 500 DA dispo ?", "Salam, l'ensemble EP noir en L ?"].map((m) => (
              <a
                key={m}
                href={`${SITE.whatsapp}?text=${encodeURIComponent(m)}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white/[0.05] border border-white/10 px-4 py-3.5 text-sm text-cream/80 hover:border-gold/60 hover:text-gold transition"
              >
                « {m} »
              </a>
            ))}
          </div>
          <p className="text-xs text-cream/40">Un clic → ça ouvre WhatsApp avec le message prêt.</p>
        </div>
      </div>
    </section>
  );
}
