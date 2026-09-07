import Link from "next/link";
import { CATEGORIES } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-void-mid border-t" style={{ borderColor: "rgba(201,168,76,0.12)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 grid md:grid-cols-4 gap-12">
        <div>
          <div className="font-heading text-lg tracking-[0.35em] text-cream mb-4">
            FESTONE<span style={{ color: "#C9A84C" }}>.</span>
          </div>
          <p className="text-stone-lt text-sm leading-relaxed max-w-xs">{siteConfig.tagline}</p>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="star">★★★★★</span>
            <span className="text-stone-lt font-mono text-xs">
              {siteConfig.rating} · {siteConfig.reviewCount} recenzii Google
            </span>
          </div>
        </div>

        <div>
          <div className="font-mono text-[0.6rem] tracking-[0.3em] text-stone-lt uppercase mb-5">Colecții</div>
          <ul className="flex flex-col gap-3">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/shop?category=${c.slug}`} className="text-sm text-stone-lt hover:text-gold transition-colors">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-mono text-[0.6rem] tracking-[0.3em] text-stone-lt uppercase mb-5">Vizitează-ne</div>
          <address className="not-italic text-sm text-stone-lt leading-relaxed">
            {siteConfig.address}
            <br />
            <a href={siteConfig.phoneHref} className="hover:text-gold transition-colors">
              {siteConfig.phone}
            </a>
          </address>
          <div className="mt-4 flex flex-col gap-1">
            {siteConfig.hours.map((h) => (
              <div key={h.day} className="flex justify-between gap-4 font-mono text-[0.7rem] text-stone-lt">
                <span>{h.day}</span>
                <span>{h.hours}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="font-mono text-[0.6rem] tracking-[0.3em] text-stone-lt uppercase mb-5">Informații</div>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/contact" className="text-sm text-stone-lt hover:text-gold transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <a href={siteConfig.website} target="_blank" rel="noopener noreferrer" className="text-sm text-stone-lt hover:text-gold transition-colors">
                festone.ro
              </a>
            </li>
            <li>
              <Link href="/livrare-retur" className="text-sm text-stone-lt hover:text-gold transition-colors">
                Livrare & retur
              </Link>
            </li>
            <li>
              <Link href="/confidentialitate" className="text-sm text-stone-lt hover:text-gold transition-colors">
                Confidențialitate
              </Link>
            </li>
            <li>
              <Link href="/termeni" className="text-sm text-stone-lt hover:text-gold transition-colors">
                Termeni & Condiții
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row justify-between gap-2 text-stone-lt font-mono text-[0.65rem]">
          <span>© {new Date().getFullYear()} {siteConfig.legalName}. Toate drepturile rezervate.</span>
          <span>Iași, România</span>
        </div>
      </div>
    </footer>
  );
}
