"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

export default function CartPage() {
  const { lines, subtotal, setQuantity, remove } = useCart();
  const freeShippingLeft = Math.max(0, siteConfig.freeShippingThreshold - subtotal);

  if (lines.length === 0) {
    return (
      <div className="pt-[96px] md:pt-[132px] max-w-[1400px] mx-auto px-6 md:px-12 pb-24 text-center">
        <h1 className="font-display italic text-3xl text-cream mb-4">Coșul tău e gol</h1>
        <p className="text-stone-lt text-sm mb-8">Descoperă colecțiile Festone și adaugă piesele care-ți plac.</p>
        <Link href="/shop" className="btn-primary">
          Vezi catalogul
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-[96px] md:pt-[132px] max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
      <h1 className="font-display italic text-3xl md:text-4xl text-cream mb-2">Coșul tău</h1>
      <div className="divider-gold mb-10" />

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 flex flex-col gap-6">
          {lines.map(({ product, quantity }) => (
            <div key={product.id} className="flex gap-5 pb-6 border-b" style={{ borderColor: "rgba(107,101,96,0.2)" }}>
              <Link href={`/product/${product.slug}`} className="shrink-0 w-24 h-28 overflow-hidden" style={{ background: "#141210" }}>
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </Link>
              <div className="flex-1 flex flex-col">
                <Link href={`/product/${product.slug}`} className="font-heading text-sm text-cream hover:text-gold transition-colors">
                  {product.name}
                </Link>
                <span className="font-mono text-[0.65rem] text-stone-lt mt-1">{product.material}</span>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center border" style={{ borderColor: "rgba(107,101,96,0.3)" }}>
                    <button
                      onClick={() => setQuantity(product.id, quantity - 1)}
                      className="w-8 h-9 flex items-center justify-center text-stone-lt hover:text-gold transition-colors"
                      aria-label="Scade cantitatea"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-mono text-xs">{quantity}</span>
                    <button
                      onClick={() => setQuantity(product.id, quantity + 1)}
                      className="w-8 h-9 flex items-center justify-center text-stone-lt hover:text-gold transition-colors"
                      aria-label="Crește cantitatea"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-body text-sm text-gold">{formatPrice(product.price * quantity)}</span>
                </div>
              </div>
              <button
                onClick={() => remove(product.id)}
                className="btn-ghost self-start text-xs"
                aria-label={`Elimină ${product.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="glass-gold p-6 h-fit">
          <div className="flex justify-between font-mono text-sm mb-3">
            <span className="text-stone-lt">Subtotal</span>
            <span className="text-cream">{formatPrice(subtotal)}</span>
          </div>
          {freeShippingLeft > 0 ? (
            <p className="text-[0.7rem] text-stone-lt font-mono mb-6">
              Mai adaugă {formatPrice(freeShippingLeft)} pentru livrare gratuită.
            </p>
          ) : (
            <p className="text-[0.7rem] text-gold font-mono mb-6">Livrare gratuită inclusă ✓</p>
          )}
          <button className="btn-primary w-full mb-3" disabled>
            Finalizează comanda
          </button>
          <p className="text-[0.65rem] text-stone-lt text-center leading-relaxed">
            Plata online e în curând disponibilă. Pentru comenzi acum, sună la{" "}
            <a href={siteConfig.phoneHref} className="text-gold hover:underline">
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
