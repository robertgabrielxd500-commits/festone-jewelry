"use client";

import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <div className="product-card group">
      <Link href={`/product/${product.slug}`}>
        <div className="card-img-wrap" style={{ aspectRatio: "4/5", background: "#141210" }}>
          <img src={product.image} alt={product.name} className="card-img-primary w-full h-full object-cover" />
          <img src={product.imageHover} alt="" aria-hidden className="card-img-hover w-full h-full object-cover" />
          {product.badge && (
            <span
              className="absolute top-3 left-3 font-mono text-[0.6rem] tracking-widest uppercase px-2.5 py-1"
              style={{ background: "rgba(7,7,7,0.85)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)" }}
            >
              {product.badge}
            </span>
          )}
          <div className="card-actions">
            <button
              onClick={(e) => {
                e.preventDefault();
                add(product);
              }}
              className="btn-primary w-full"
              style={{ padding: "0.7rem" }}
            >
              Adaugă în coș
            </button>
          </div>
        </div>
      </Link>
      <Link href={`/product/${product.slug}`} className="block mt-4">
        <div className="font-mono text-[0.6rem] tracking-[0.2em] text-stone-lt uppercase">{product.material}</div>
        <div className="font-heading text-sm text-cream mt-1 group-hover:text-gold transition-colors">{product.name}</div>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="font-body text-sm text-gold">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="font-body text-xs text-stone line-through">{formatPrice(product.compareAtPrice)}</span>
          )}
        </div>
      </Link>
    </div>
  );
}
