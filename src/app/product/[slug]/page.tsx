import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { ProductDetail } from "@/components/product-detail";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product?.name ?? "Produs" };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <div className="pt-[96px] md:pt-[132px] max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
      <div className="font-mono text-[0.65rem] text-stone-lt mb-8">
        <Link href="/shop" className="hover:text-gold transition-colors">
          Catalog
        </Link>
        {" / "}
        <Link href={`/shop?category=${product.category}`} className="hover:text-gold transition-colors capitalize">
          {product.category}
        </Link>
        {" / "}
        <span className="text-cream">{product.name}</span>
      </div>

      <ProductDetail product={product} />

      {related.length > 0 && (
        <div className="mt-32">
          <div className="font-mono text-[0.6rem] tracking-[0.3em] text-gold uppercase mb-3">S-ar putea să-ți placă și</div>
          <h2 className="font-display italic text-2xl md:text-3xl text-cream mb-10">Produse similare</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
