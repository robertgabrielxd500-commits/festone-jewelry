import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { CATEGORIES, PRODUCTS, type Category } from "@/lib/products";

export const metadata = { title: "Toate produsele" };

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = CATEGORIES.find((c) => c.slug === category)?.slug as Category | undefined;
  const products = active ? PRODUCTS.filter((p) => p.category === active) : PRODUCTS;

  return (
    <div className="pt-[96px] md:pt-[132px] max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
      <div className="mb-12">
        <div className="font-mono text-[0.6rem] tracking-[0.3em] text-gold uppercase mb-3">Catalog</div>
        <h1 className="font-display italic text-3xl md:text-4xl text-cream">
          {active ? CATEGORIES.find((c) => c.slug === active)?.label : "Toate produsele"}
        </h1>
        <div className="divider-gold mt-5" />
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        <Link
          href="/shop"
          className="font-heading text-[0.62rem] tracking-[0.18em] uppercase px-4 py-2 border transition-colors"
          style={{
            borderColor: !active ? "rgba(201,168,76,0.7)" : "rgba(107,101,96,0.3)",
            color: !active ? "#C9A84C" : "#B8B0A4",
          }}
        >
          Toate
        </Link>
        {CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            href={`/shop?category=${c.slug}`}
            className="font-heading text-[0.62rem] tracking-[0.18em] uppercase px-4 py-2 border transition-colors"
            style={{
              borderColor: active === c.slug ? "rgba(201,168,76,0.7)" : "rgba(107,101,96,0.3)",
              color: active === c.slug ? "#C9A84C" : "#B8B0A4",
            }}
          >
            {c.label}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {products.length === 0 && <p className="text-stone-lt text-center py-24">Nu am găsit produse în această categorie.</p>}
    </div>
  );
}
