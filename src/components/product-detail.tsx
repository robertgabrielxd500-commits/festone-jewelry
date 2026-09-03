"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export function ProductDetail({ product }: { product: Product }) {
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { add } = useCart();

  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-16">
      <div>
        <div className="relative overflow-hidden mb-4" style={{ aspectRatio: "4/5", background: "#141210" }}>
          <img src={product.images[activeImg]} alt={product.name} className="w-full h-full object-cover" />
          {product.badge && (
            <span
              className="absolute top-4 left-4 font-mono text-[0.6rem] tracking-widest uppercase px-2.5 py-1"
              style={{ background: "rgba(7,7,7,0.85)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)" }}
            >
              {product.badge}
            </span>
          )}
        </div>
        <div className="flex gap-3">
          {product.images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActiveImg(i)}
              className="w-20 h-24 overflow-hidden border transition-colors"
              style={{ borderColor: activeImg === i ? "rgba(201,168,76,0.8)" : "rgba(107,101,96,0.25)" }}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
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

        <ul className="flex flex-col gap-2 mb-8">
          {product.details.map((d) => (
            <li key={d} className="flex items-center gap-3 text-sm text-stone-lt">
              <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
              {d}
            </li>
          ))}
        </ul>

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
