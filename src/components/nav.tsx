"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";
import { useCart } from "@/lib/cart-context";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState<number | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileEverOpened, setMobileEverOpened] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { count } = useCart();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const handleMegaEnter = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(i);
  };
  const handleMegaLeave = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(null), 180);
  };

  // Keeps the last-open category rendered while the menu is closing, so the
  // CSS transition (open -> closed) has content to animate instead of the
  // element unmounting/mounting instantly with no transition to run.
  const [displayedCat, setDisplayedCat] = useState<number | null>(null);
  useEffect(() => {
    if (megaOpen !== null) setDisplayedCat(megaOpen);
  }, [megaOpen]);
  const megaIsOpen = megaOpen !== null;
  const cat = displayedCat !== null ? CATEGORIES[displayedCat] : null;
  const catProducts = cat ? PRODUCTS.filter((p) => p.category === cat.slug).slice(0, 4) : [];

  return (
    <>
      {/* Top strip */}
      <div
        className="hidden md:flex items-center justify-between px-10 py-2"
        style={{ background: "#0F0E0D", borderBottom: "1px solid rgba(201,168,76,0.1)" }}
      >
        <span className="font-mono text-[0.62rem] tracking-widest text-stone-lt">
          {siteConfig.address}
        </span>
        <span className="font-mono text-[0.65rem] tracking-widest text-stone-lt">
          Livrare gratuită la comenzi peste {siteConfig.freeShippingThreshold} lei
        </span>
        <a href={siteConfig.phoneHref} className="btn-ghost text-[0.62rem]">
          {siteConfig.phone}
        </a>
      </div>

      {/* Main nav */}
      <nav
        className="fixed left-0 right-0 z-[300] transition-all duration-500"
        style={{
          top: scrolled ? 0 : 36,
          background: scrolled ? "rgba(7,7,7,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "none",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex-shrink-0 font-heading text-[1.35rem] tracking-[0.35em] text-cream">
            FESTONE
            <span style={{ color: "#C9A84C" }}>.</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {CATEGORIES.map((c, i) => (
              <button
                key={c.slug}
                onMouseEnter={() => handleMegaEnter(i)}
                onMouseLeave={handleMegaLeave}
                className="font-heading text-[0.62rem] tracking-[0.18em] uppercase transition-colors duration-300"
                style={{ color: megaOpen === i ? "#C9A84C" : "#B8B0A4" }}
              >
                {c.label}
              </button>
            ))}
            <Link
              href="/shop"
              className="font-heading text-[0.62rem] tracking-[0.18em] uppercase text-stone-lt hover:text-[#C9A84C] transition-colors"
            >
              Toate produsele
            </Link>
          </div>

          <div className="flex items-center gap-5">
            {searchOpen ? (
              <div className="flex items-center gap-3 animate-fade-in">
                <input
                  ref={searchRef}
                  placeholder="Caută bijuterii..."
                  className="input-luxury w-40 md:w-44 text-sm"
                  style={{ borderBottom: "1px solid rgba(201,168,76,0.5)" }}
                />
                <button onClick={() => setSearchOpen(false)} className="nav-icon text-lg" aria-label="Închide căutarea">
                  ✕
                </button>
              </div>
            ) : (
              <button onClick={() => setSearchOpen(true)} className="nav-icon" aria-label="Căutare">
                <SearchIcon />
              </button>
            )}

            <Link href="/cart" className="nav-icon" aria-label="Coș" style={{ position: "relative" }}>
              <BagIcon />
              {count > 0 && <span className="nav-badge">{count}</span>}
            </Link>

            <button
              className="md:hidden flex flex-col gap-[5px]"
              onClick={() => {
                setMobileEverOpened(true);
                setMobileOpen(!mobileOpen);
              }}
              aria-label="Meniu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block h-px bg-[#B8B0A4] transition-all duration-300"
                  style={{
                    width: i === 1 ? "16px" : "24px",
                    transform:
                      mobileOpen && i === 0
                        ? "rotate(45deg) translate(4px,4px)"
                        : mobileOpen && i === 2
                          ? "rotate(-45deg) translate(4px,-4px)"
                          : "",
                    opacity: mobileOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>

        {cat && (
          <div
            className={`mega-menu ${megaIsOpen ? "open" : "closed"} glass`}
            style={{ borderBottom: "1px solid rgba(201,168,76,0.12)", borderTop: "1px solid rgba(201,168,76,0.08)" }}
            onMouseEnter={() => {
              if (closeTimer.current) clearTimeout(closeTimer.current);
            }}
            onMouseLeave={handleMegaLeave}
          >
            <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-10 grid grid-cols-4 gap-6">
              {catProducts.map((p) => (
                <Link key={p.id} href={`/product/${p.slug}`} className="group">
                  <div className="relative overflow-hidden" style={{ aspectRatio: "3/4", background: "#141210" }}>
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2 font-display text-[0.8rem] tracking-wide text-cream group-hover:text-[#C9A84C] transition-colors">
                    {p.name}
                  </div>
                </Link>
              ))}
              <div className="col-span-4 flex justify-between items-center pt-2 border-t" style={{ borderColor: "rgba(107,101,96,0.2)" }}>
                <span className="font-mono text-[0.6rem] tracking-[0.3em] text-stone-lt uppercase">{cat.description}</span>
                <Link href={`/shop?category=${cat.slug}`} className="btn-secondary" style={{ padding: "0.6rem 1.8rem" }}>
                  Vezi toate {cat.label.toLowerCase()}
                </Link>
              </div>
            </div>
          </div>
        )}

        {mobileEverOpened && (
          <div
            className={`mobile-menu md:hidden glass border-t border-gold ${mobileOpen ? "open" : "closed"}`}
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            <div className="px-8 py-8 flex flex-col gap-1">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/shop?category=${c.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-sm tracking-widest uppercase py-3 border-b text-left hover:text-[#C9A84C] transition-colors"
                  style={{ borderColor: "rgba(107,101,96,0.2)", color: "#B8B0A4" }}
                >
                  {c.label}
                </Link>
              ))}
              <Link
                href="/shop"
                onClick={() => setMobileOpen(false)}
                className="font-heading text-sm tracking-widest uppercase py-3 border-b text-left hover:text-[#C9A84C] transition-colors"
                style={{ borderColor: "rgba(107,101,96,0.2)", color: "#B8B0A4" }}
              >
                Toate produsele
              </Link>
              <a href={siteConfig.phoneHref} className="btn-primary mt-6 text-center">
                Sună la {siteConfig.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}
function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
