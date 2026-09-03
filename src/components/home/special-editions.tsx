"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

function useCountdown(days: number) {
  const [target] = useState(() => Date.now() + days * 24 * 60 * 60 * 1000);
  const [left, setLeft] = useState(target - Date.now());

  useEffect(() => {
    const id = setInterval(() => setLeft(Math.max(0, target - Date.now())), 1000);
    return () => clearInterval(id);
  }, [target]);

  const d = Math.floor(left / (24 * 60 * 60 * 1000));
  const h = Math.floor((left / (60 * 60 * 1000)) % 24);
  const m = Math.floor((left / (60 * 1000)) % 60);
  const s = Math.floor((left / 1000) % 60);
  return { d, h, m, s };
}

export function SpecialEditions({ products }: { products: Product[] }) {
  const { d, h, m, s } = useCountdown(7);
  if (products.length === 0) return null;

  return (
    <section className="border-y" style={{ borderColor: "rgba(201,168,76,0.12)", background: "#0F0E0D" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="font-mono text-[0.6rem] tracking-[0.3em] text-gold uppercase mb-3">Stoc limitat</div>
            <h2 className="font-display italic text-3xl md:text-4xl text-cream">Ediții speciale</h2>
            <div className="divider-gold mt-5" />
          </div>

          <div className="countdown-box flex gap-4 px-6 py-4 animate-countdown">
            <TimeUnit value={d} label="zile" />
            <TimeUnit value={h} label="ore" />
            <TimeUnit value={m} label="min" />
            <TimeUnit value={s} label="sec" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p) => (
            <Link key={p.id} href={`/product/${p.slug}`} className="vip-card featured glass-gold p-5 block group">
              <div className="relative overflow-hidden mb-4" style={{ aspectRatio: "4/5", background: "#141210" }}>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  className="absolute top-3 left-3 font-mono text-[0.6rem] tracking-widest uppercase px-2.5 py-1"
                  style={{ background: "rgba(7,7,7,0.85)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  {p.badge}
                </span>
              </div>
              <div className="font-mono text-[0.6rem] tracking-[0.2em] text-stone-lt uppercase">{p.material}</div>
              <div className="font-heading text-sm text-cream mt-1 group-hover:text-gold transition-colors">{p.name}</div>
              <div className="font-body text-sm text-gold mt-1.5">{formatPrice(p.price)}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-xl text-gold italic tabular-nums">{String(value).padStart(2, "0")}</div>
      <div className="font-mono text-[0.55rem] tracking-widest text-stone-lt uppercase">{label}</div>
    </div>
  );
}
