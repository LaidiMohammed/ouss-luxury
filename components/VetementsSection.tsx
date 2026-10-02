"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import ProductArchCard from "./ProductArchCard";

export default function VetementsSection({ limit }: { limit?: number }) {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("Tous");
  const filtered =
    cat === "Tous" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);
  const list = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section id="vetements" className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-gold">
            La collection
          </p>
          <h2 className="mt-2 font-luxe text-4xl sm:text-6xl leading-none">
            Vêtements <span className="italic text-gold-gradient">d&apos;exception</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-cream/60 font-light">
            Pas de carrés banals. Des arches, des ovales, du mouvement — comme à
            Paris et Londres, mais à Batna.
          </p>
        </div>
        {!limit && (
          <p className="text-xs tracking-[0.25em] uppercase text-cream/50">
            {filtered.length} pièces
          </p>
        )}
      </div>

      {/* Filtres — scroll horizontal sur téléphone */}
      <div className="no-scrollbar mt-7 flex gap-2.5 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm tracking-wide border transition ${
              cat === c
                ? "bg-gold text-black border-gold font-medium"
                : "border-white/20 text-cream/70 hover:border-gold/60 hover:text-gold"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grille organique décalée */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-6 lg:gap-7">
        {list.map((p, i) => (
          <div
            key={p.id}
            className={
              i % 4 === 1
                ? "lg:mt-14"
                : i % 4 === 2
                  ? "lg:mt-6"
                  : i % 4 === 3
                    ? "lg:mt-20"
                    : ""
            }
          >
            <ProductArchCard product={p} index={i} />
          </div>
        ))}
      </div>

      {limit && (
        <div className="mt-10 text-center">
          <Link
            href="/vetements"
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-3.5 text-gold hover:bg-gold hover:text-black transition text-sm tracking-wide"
          >
            Tout voir <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </section>
  );
}
