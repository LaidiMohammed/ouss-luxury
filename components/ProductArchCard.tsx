"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { SITE } from "@/lib/site";

export default function ProductArchCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const orderText = encodeURIComponent(
    `Salam Ouss Luxury, je veux ${product.name} (${product.price}) — ${product.brand}`
  );
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      className={`arch ${product.arch} group flex flex-col`}
    >
      {/* Image arche */}
      <div className="arch-img-wrap relative">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={780}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {product.badge && (
          <span className="badge-gold absolute left-1/2 top-5 sm:top-6 -translate-x-1/2 whitespace-nowrap rounded-full px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-medium tracking-[0.15em]">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Texte comme capture */}
      <div className="flex flex-1 flex-col px-5 sm:px-6 pt-5 pb-6">
        <p className="text-[11px] sm:text-xs tracking-[0.35em] text-gold/90 uppercase">
          {product.brand}
        </p>
        <h3 className="mt-2 font-luxe text-2xl sm:text-[1.7rem] leading-tight text-cream">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm text-cream/60 font-light leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-2">
          <p className="font-luxe text-xl sm:text-2xl text-gold">{product.price}</p>
          <a
            href={`${SITE.whatsapp}?text=${orderText}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-gold/40 px-3.5 py-2 text-xs tracking-wide text-gold hover:bg-gold hover:text-black transition"
          >
            <MessageCircle size={14} />
            Commander
          </a>
        </div>
      </div>
    </motion.article>
  );
}
