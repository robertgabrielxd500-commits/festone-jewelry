"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export function ProductDetail({ product }: { product: Product }) {
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const { add } = useCart();

  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-16">
      <div>
        <div className="relative" style={{ padding: "0.75rem" }}>
          {/* Soft gold glow behind the photo */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: -24,
              background: "radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.16) 0%, transparent 70%)",
            }}
          />
          <div className="relative overflow-hidden mb-4" style={{ aspectRatio: "4/5", background: "#141210" }}>
            <Image
              src={product.images[activeImg]}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
            {product.badge && (
              <span
                className="absolute top-4 left-4 font-mono text-[0.6rem] tracking-widest uppercase px-2.5 py-1"
                style={{ background: "rgba(7,7,7,0.85)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)" }}
              >
                {product.badge}
              </span>
            )}
            {/* Floating material tag, bottom-left */}
            <div
              className="absolute bottom-4 left-4 px-4 py-2.5"
              style={{ background: "rgba(7,7,7,0.88)", backdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.25)" }}
            >
              <div className="font-display italic text-sm text-gold">{product.material}</div>
              <div className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-stone-lt mt-0.5">
                {product.category === "piercing" ? "Chirurgical · Hipoalergenic" : "Certificat · Festone"}
              </div>
            </div>
          </div>
          {/* Gold corner accents */}
          <div className="absolute pointer-events-none" style={{ top: 0, left: 0, width: 40, height: 40, borderTop: "1px solid rgba(201,168,76,0.6)", borderLeft: "1px solid rgba(201,168,76,0.6)" }} />
          <div className="absolute pointer-events-none" style={{ bottom: 0, right: 0, width: 40, height: 40, borderBottom: "1px solid rgba(201,168,76,0.6)", borderRight: "1px solid rgba(201,168,76,0.6)" }} />
        </div>
        <div className="flex gap-3">
          {product.images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActiveImg(i)}
              className="relative w-20 h-24 overflow-hidden border transition-colors shrink-0"
              style={{ borderColor: activeImg === i ? "rgba(201,168,76,0.8)" : "rgba(107,101,96,0.25)" }}
            >
              <Image src={img} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="font-mono text-[0.62rem] tracking-[0.2em] text-stone-lt uppercase mb-3">{product.material}</div>
        <h1 className="font-display italic text-3xl md:text-4xl text-cream mb-4">{product.name}</h1>

        <div className="flex items-center gap-2 mb-6">
          <span className="star text-sm">
            {"★".repeat(Math.round(product.rating))}
            <span className="star-empty">{"★".repeat(5 - Math.round(product.rating))}</span>
          </span>
          <span className="font-mono text-xs text-stone-lt">
            {product.rating} ({product.reviewCount} recenzii)
          </span>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <span className="font-display text-2xl text-gold italic">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="font-body text-base text-stone line-through">{formatPrice(product.compareAtPrice)}</span>
          )}
        </div>

        <p className="text-stone-lt text-sm leading-relaxed mb-6">{product.description}</p>

        <ul className="flex flex-col gap-2 mb-4">
          {product.details.map((d) => (
            <li key={d} className="flex items-center gap-3 text-sm text-stone-lt">
              <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
              {d}
            </li>
          ))}
        </ul>

        <button
          onClick={() => setWishlisted((w) => !w)}
          className="flex items-center gap-2 mb-8 font-mono text-[0.7rem] tracking-[0.15em] uppercase transition-colors"
          style={{ color: wishlisted ? "#C9A84C" : "#6B6560" }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {wishlisted ? "Salvat la favorite" : "Adaugă la favorite"}
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center border" style={{ borderColor: "rgba(107,101,96,0.3)" }}>
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="w-10 h-11 flex items-center justify-center text-stone-lt hover:text-gold transition-colors"
              aria-label="Scade cantitatea"
            >
              −
            </button>
            <span className="w-10 text-center font-mono text-sm">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="w-10 h-11 flex items-center justify-center text-stone-lt hover:text-gold transition-colors"
              aria-label="Crește cantitatea"
            >
              +
            </button>
          </div>

          <button
            onClick={() => {
              add(product, qty);
              setAdded(true);
              setTimeout(() => setAdded(false), 2000);
            }}
            className="btn-primary flex-1"
          >
            {added ? "Adăugat ✓" : "Adaugă în coș"}
          </button>
        </div>

        <p className="font-mono text-[0.65rem] text-stone-lt">
          {product.inStock ? "În stoc · Ridicare din boutique-ul Iași sau livrare" : "Stoc epuizat momentan"}
        </p>
      </div>
    </div>
  );
}
