export type Category = "bratari" | "coliere" | "cercei" | "piercing";

export const CATEGORIES: { slug: Category; label: string; description: string }[] = [
  { slug: "bratari", label: "Brățări", description: "Brățări din argint 925, modele clasice și florale" },
  { slug: "coliere", label: "Lanțuri & Pandantive", description: "Lanțuri și pandantive din argint 925" },
  { slug: "cercei", label: "Cercei", description: "Cercei din argint 925 rodiat" },
  { slug: "piercing", label: "Piercing", description: "Piercing buric din titan" },
];

export type Product = {
  id: number;
  slug: string;
  name: string;
  category: Category;
  material: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  imageHover: string;
  images: string[];
  description: string;
  details: string[];
  badge?: "Nou" | "Bestseller" | "Ediție limitată";
  rating: number;
  reviewCount: number;
  inStock: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "bratara-argint-925-model-floare",
    name: "Brățară argint 925, model floare",
    category: "bratari",
    material: "Argint 925",
    price: 253,
    image: "https://images.unsplash.com/photo-1639660680788-bf160240864e?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1628058494685-6c2f796ac24a?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1639660680788-bf160240864e?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1628058494685-6c2f796ac24a?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Brățară din argint 925, cu model floral lucrat fin. O piesă delicată, purtabilă zilnic.",
    details: ["Argint 925 certificat", "Model floral", "Închizătoare sigură"],
    badge: "Bestseller",
    rating: 4.7,
    reviewCount: 22,
    inStock: true,
  },
  {
    id: 2,
    slug: "bratara-argint-925-model-lacrima",
    name: "Brățară argint 925, model lacrimă",
    category: "bratari",
    material: "Argint 925",
    price: 225,
    image: "https://images.unsplash.com/photo-1628058494685-6c2f796ac24a?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1639660680788-bf160240864e?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1628058494685-6c2f796ac24a?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1639660680788-bf160240864e?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Brățară cu pandantiv model lacrimă, din argint 925 rodiat, cu finisaj lucios.",
    details: ["Argint 925 rodiat", "Pandantiv lacrimă", "Ajustabilă"],
    rating: 4.6,
    reviewCount: 14,
    inStock: true,
  },
  {
    id: 3,
    slug: "bratara-argint-925-model-inimi",
    name: "Brățară argint 925, model inimi",
    category: "bratari",
    material: "Argint 925",
    price: 155,
    image: "https://images.unsplash.com/photo-1639660680736-14b79f169a27?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1639660680736-14b79f169a27?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Brățară fină cu detalii în formă de inimă, din argint 925. Un cadou simplu și potrivit oricând.",
    details: ["Argint 925", "Model inimi", "Preț accesibil"],
    badge: "Nou",
    rating: 4.5,
    reviewCount: 9,
    inStock: true,
  },
  {
    id: 4,
    slug: "lant-argint-925",
    name: "Lanț argint 925",
    category: "coliere",
    material: "Argint 925",
    price: 321,
    image: "https://images.unsplash.com/photo-1673279495269-bc0d925c0612?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1736396979761-4f822cf25120?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1673279495269-bc0d925c0612?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1736396979761-4f822cf25120?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Lanț clasic din argint 925, disponibil în mai multe lungimi. Se poate purta singur sau cu pandantiv.",
    details: ["Argint 925", "Disponibil 40-55cm", "Certificat"],
    rating: 4.6,
    reviewCount: 18,
    inStock: true,
  },
  {
    id: 5,
    slug: "lant-argint-925-masiv",
    name: "Lanț argint 925, masiv",
    category: "coliere",
    material: "Argint 925",
    price: 680,
    image: "https://images.unsplash.com/photo-1726195641634-a8940e99719c?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1673279495269-bc0d925c0612?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1726195641634-a8940e99719c?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1673279495269-bc0d925c0612?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Lanț masiv din argint 925, pentru cei care preferă o piesă statement, cu prezență.",
    details: ["Argint 925", "Model masiv", "Greutate superioară"],
    badge: "Ediție limitată",
    rating: 4.8,
    reviewCount: 11,
    inStock: true,
  },
  {
    id: 6,
    slug: "pandantiv-argint-925",
    name: "Pandantiv argint 925",
    category: "coliere",
    material: "Argint 925",
    price: 83,
    image: "https://images.unsplash.com/photo-1736396979761-4f822cf25120?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1726195641634-a8940e99719c?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1736396979761-4f822cf25120?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1726195641634-a8940e99719c?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Pandantiv simplu din argint 925, ușor de asortat cu orice lanț. Cel mai accesibil cadou din colecție.",
    details: ["Argint 925", "Se potrivește pe orice lanț standard"],
    rating: 4.4,
    reviewCount: 7,
    inStock: true,
  },
  {
    id: 7,
    slug: "cercei-argint-925-rodiat",
    name: "Cercei argint 925 rodiat",
    category: "cercei",
    material: "Argint 925 rodiat",
    price: 260,
    image: "https://images.unsplash.com/photo-1598219062199-a940294982e7?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1753093329977-d950f394b215?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1598219062199-a940294982e7?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1753093329977-d950f394b215?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Cercei din argint 925 rodiat, pentru un finisaj lucios și rezistent la oxidare.",
    details: ["Argint 925 rodiat", "Rezistență sporită la oxidare", "Închizătoare tip fluturaș"],
    badge: "Bestseller",
    rating: 4.7,
    reviewCount: 25,
    inStock: true,
  },
  {
    id: 8,
    slug: "piercing-buric-titan",
    name: "Piercing buric titan",
    category: "piercing",
    material: "Titan chirurgical",
    price: 69,
    image: "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1598219062199-a940294982e7?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1598219062199-a940294982e7?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Piercing buric din titan chirurgical, hipoalergenic, potrivit pentru piele sensibilă.",
    details: ["Titan chirurgical", "Hipoalergenic", "Mai multe modele disponibile"],
    rating: 4.5,
    reviewCount: 13,
    inStock: true,
  },
];

export function getProductsByCategory(category: Category) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 4) {
  return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, count);
}

export function formatPrice(price: number) {
  return `${price.toLocaleString("ro-RO")} lei`;
}
