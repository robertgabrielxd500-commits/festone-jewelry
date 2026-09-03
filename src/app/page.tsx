import Link from "next/link";
import { Hero } from "@/components/home/hero";
import { NewsletterForm } from "@/components/home/newsletter-form";
import { ProductCard } from "@/components/product-card";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

const bestsellers = PRODUCTS.filter((p) => p.badge === "Bestseller");

const CATEGORY_IMAGES: Record<string, string> = {
  inele: "https://images.unsplash.com/photo-1639660680736-14b79f169a27?w=800&h=1000&fit=crop&auto=format",
  coliere: "https://images.unsplash.com/photo-1673279495269-bc0d925c0612?w=800&h=1000&fit=crop&auto=format",
  cercei: "https://images.unsplash.com/photo-1598219062199-a940294982e7?w=800&h=1000&fit=crop&auto=format",
  bratari: "https://images.unsplash.com/photo-1639660680788-bf160240864e?w=800&h=1000&fit=crop&auto=format",
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stats */}
      <section className="border-y" style={{ borderColor: "rgba(201,168,76,0.12)", background: "#0F0E0D" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Stat value={`${siteConfig.rating}★`} label="Rating Google" />
          <Stat value={`${siteConfig.reviewCount}`} label="Recenzii" />
          <Stat value="4" label="Colecții" />
          <Stat value="1" label="Boutique · Iași" />
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <SectionHeading eyebrow="Explorează" title="Colecțiile noastre" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} href={`/shop?category=${c.slug}`} className="group block">
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4", background: "#141210" }}>
                <img
                  src={CATEGORY_IMAGES[c.slug]}
                  alt={c.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex items-end p-5"
                  style={{ background: "linear-gradient(to top, rgba(7,7,7,0.85) 0%, transparent 55%)" }}
                >
                  <div>
                    <div className="font-heading text-base text-cream group-hover:text-gold transition-colors">
                      {c.label}
                    </div>
                    <div className="font-mono text-[0.6rem] text-stone-lt mt-1">{c.description}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best sellers */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <SectionHeading eyebrow="Cele mai iubite" title="Bestsellers" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/shop" className="btn-secondary">
            Vezi tot catalogul
          </Link>
        </div>
      </section>

      {/* Brand story / materials */}
      <section className="border-y" style={{ borderColor: "rgba(201,168,76,0.12)", background: "#0F0E0D" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-[0.6rem] tracking-[0.3em] text-gold uppercase mb-5">Despre Festone</div>
            <h2 className="font-display italic text-3xl md:text-4xl text-cream leading-tight mb-6">
              Bijuterii alese cu grijă, dintr-un magazin din inima Iașiului
            </h2>
            <p className="text-stone-lt text-sm leading-relaxed mb-4">
              Festone este un magazin de bijuterii situat pe Bulevardul Socola din Iași, cu o comunitate de peste{" "}
              {siteConfig.reviewCount} clienți care ne-au lăsat recenzii pe Google, la un rating mediu de {siteConfig.rating}★.
            </p>
            <p className="text-stone-lt text-sm leading-relaxed mb-8">
              Lucrăm cu argint 925 și aur 14k/18k, alături de pietre semiprețioase și zirconii șlefuite manual —
              piese gândite să fie purtate zilnic, nu doar păstrate în cutie.
            </p>
            <a href={siteConfig.phoneHref} className="btn-primary">
              Programează o vizită
            </a>
          </div>
          <div className="relative overflow-hidden" style={{ aspectRatio: "4/5", background: "#141210" }}>
            <img
              src="https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=900&h=1100&fit=crop&auto=format"
              alt="Atelier de bijuterii"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Review */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 text-center">
        <div className="star text-lg mb-4">★★★★★</div>
        <blockquote className="font-display italic text-2xl md:text-3xl text-cream max-w-2xl mx-auto leading-snug">
          &ldquo;Îmi place acest brand încă din adolescență. Modelele sunt frumoase, iar pentru faptul că sunt pe
          piață de atâția ani, admirație.&rdquo;
        </blockquote>
        <div className="mt-6 font-mono text-xs tracking-widest text-stone-lt uppercase">
          Roxana Chiriac · Recenzie Google
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t" style={{ borderColor: "rgba(201,168,76,0.12)", background: "#0F0E0D" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 text-center">
          <div className="font-mono text-[0.6rem] tracking-[0.3em] text-gold uppercase mb-4">Rămâi la curent</div>
          <h2 className="font-display italic text-2xl md:text-3xl text-cream mb-8">
            Fii primul care află de colecțiile noi
          </h2>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl text-gold italic">{value}</div>
      <div className="font-mono text-[0.6rem] tracking-[0.2em] text-stone-lt uppercase mt-2">{label}</div>
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <div className="font-mono text-[0.6rem] tracking-[0.3em] text-gold uppercase mb-3">{eyebrow}</div>
      <h2 className="font-display italic text-3xl md:text-4xl text-cream">{title}</h2>
      <div className="divider-gold mt-5" />
    </div>
  );
}
