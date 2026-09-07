"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1531089911069-46e11b5b1b5c?w=1800&q=80&auto=format",
    eyebrow: `Din 1993, în ${siteConfig.city}`,
    title: "Argint 925, purtat cu mândrie",
  },
  {
    img: "https://images.unsplash.com/photo-1673279495269-bc0d925c0612?w=1800&q=80&auto=format",
    eyebrow: "Pentru fiecare zi",
    title: "Piese care se poartă zilnic",
  },
  {
    img: "https://images.unsplash.com/photo-1544261480-1b10d1bf0a9d?w=1800&q=80&auto=format",
    eyebrow: siteConfig.motto,
    title: "Bijuterii cu poveste, de aproape",
  },
  {
    img: "https://images.unsplash.com/photo-1639660680788-bf160240864e?w=1800&q=80&auto=format",
    eyebrow: "Din argint, pentru tine",
    title: "Piese lucrate pentru fiecare zi",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);

  // Subtle pointer-parallax on the whole image stack — the hero should feel
  // alive/tracked, not a static slideshow.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    function onMove(e: PointerEvent) {
      const rect = section!.getBoundingClientRect();
      target.current = {
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      };
    }
    function onLeave() {
      target.current = { x: 0, y: 0 };
    }

    let raf: number;
    function tick() {
      current.current.x += (target.current.x - current.current.x) * 0.05;
      current.current.y += (target.current.y - current.current.y) * 0.05;
      if (layerRef.current) {
        const { x, y } = current.current;
        layerRef.current.style.transform = `scale(1.08) translate3d(${-x * 24}px, ${-y * 16}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[640px] overflow-hidden bg-void">
      <div ref={layerRef} className="absolute inset-0 will-change-transform">
        {SLIDES.map((s, i) => (
          <div
            key={s.img}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <Image src={s.img} alt="" fill priority={i === 0} sizes="100vw" className="object-cover" />
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(7,7,7,0.9) 0%, rgba(7,7,7,0.25) 45%, rgba(7,7,7,0.55) 100%)" }}
      />

      {/* Floating gold orbs */}
      <div className="gold-orb absolute w-64 h-64 -top-10 -right-10 animate-float" />
      <div className="gold-orb absolute w-40 h-40 bottom-20 left-10 animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-6 animate-reveal-up">
          {SLIDES[active].eyebrow}
        </div>
        <h1
          key={active}
          className="font-display text-5xl sm:text-6xl md:text-7xl italic text-cream max-w-3xl leading-[1.1] animate-reveal-up"
        >
          {SLIDES[active].title}
        </h1>
        <p className="mt-6 max-w-md text-stone-lt text-sm leading-relaxed animate-reveal-up" style={{ animationDelay: "0.1s" }}>
          {siteConfig.tagline} — {siteConfig.address}.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-reveal-up" style={{ animationDelay: "0.2s" }}>
          <Link href="/shop" className="btn-primary">
            Vezi colecțiile
          </Link>
          <a href={siteConfig.phoneHref} className="btn-secondary">
            Sună la magazin
          </a>
        </div>

        <div className="mt-14 flex items-center gap-6 font-mono text-[0.65rem] tracking-widest text-stone-lt animate-reveal-up" style={{ animationDelay: "0.3s" }}>
          <span className="text-gold">★ {siteConfig.rating}</span>
          <span>{siteConfig.reviewCount} recenzii Google</span>
          <span className="hidden sm:inline">Din {siteConfig.founded} · Argint 925</span>
        </div>
      </div>

      {/* Slideshow dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className="h-1 rounded-full transition-all duration-500"
            style={{ width: i === active ? "28px" : "8px", background: i === active ? "#C9A84C" : "rgba(184,176,164,0.4)" }}
          />
        ))}
      </div>
    </section>
  );
}
