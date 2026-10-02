"use client";

import { useState } from "react";
import { LayoutDashboard, Package, ShoppingBag, Settings, Plus, Search } from "lucide-react";
import { PRODUCTS } from "@/data/products";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [code, setCode] = useState("");

  if (!authed) {
    return (
      <div className="mx-auto max-w-md px-5 pt-32 pb-20">
        <div className="rounded-3xl border border-gold/30 bg-[#111] p-8">
          <p className="text-xs tracking-[0.35em] uppercase text-gold">Admin</p>
          <h1 className="mt-2 font-luxe text-4xl">Panneau boutique</h1>
          <p className="mt-2 text-sm text-cream/60">
            Frontend only pour l&apos;instant. Tape n&apos;importe quel code pour voir le dashboard (Supabase à brancher après).
          </p>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Code admin (ex: 1234)"
            className="mt-5 w-full rounded-full border border-white/20 bg-black px-5 py-3.5 text-cream outline-none focus:border-gold"
          />
          <button
            onClick={() => setAuthed(true)}
            className="mt-3 w-full rounded-full bg-gold py-3.5 text-black font-medium hover:bg-gold-light transition"
          >
            Entrer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-24 sm:pt-28 pb-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <p className="text-xs tracking-[0.35em] uppercase text-gold">Admin • frontend</p>
          <h1 className="font-luxe text-4xl sm:text-5xl">Dashboard</h1>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-black">
          <Plus size={18} /> Ajouter produit
        </button>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {[
          { icon: Package, v: "8", l: "Produits" },
          { icon: ShoppingBag, v: "—", l: "Commandes*" },
          { icon: LayoutDashboard, v: "9.2K", l: "TikTok" },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6">
            <s.icon size={20} className="text-gold" />
            <p className="mt-2 font-luxe text-2xl sm:text-4xl">{s.v}</p>
            <p className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-cream/50">{s.l}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 overflow-hidden">
        <div className="flex items-center gap-3 border-b border-white/10 p-4">
          <Search size={18} className="text-cream/40" />
          <input
            placeholder="Rechercher produit…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-cream/30"
          />
          <span className="hidden sm:flex items-center gap-1.5 text-xs text-cream/40">
            <Settings size={14} /> Supabase-ready
          </span>
        </div>
        <div className="divide-y divide-white/10">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="flex items-center gap-4 p-4">
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-gold/30 bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{p.name}</p>
                <p className="text-xs text-cream/50">{p.brand} • {p.category} • {p.price}</p>
              </div>
              <span className="rounded-full border border-gold/40 px-3 py-1 text-[11px] text-gold hidden sm:block">
                {p.badge ?? "Standard"}
              </span>
              <button className="rounded-full border border-white/20 px-4 py-2 text-xs hover:border-gold hover:text-gold transition">
                Éditer
              </button>
            </div>
          ))}
        </div>
        <p className="p-4 text-xs text-cream/40">* Commandes + Postgres Supabase à brancher : table products + orders déjà prévue dans lib/supabaseClient.ts</p>
      </div>
    </div>
  );
}
