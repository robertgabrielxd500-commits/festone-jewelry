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
    image: "https://images.unsplash.com/photo-1786340949685-6164a106b0e6?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1744722093742-aad22c7fa68b?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1786340949685-6164a106b0e6?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1744722093742-aad22c7fa68b?w=1200&h=1400&fit=crop&auto=format",
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
    image: "https://images.unsplash.com/photo-1676301086281-e65f219c7f22?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1786340949749-25da7148e5e7?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1676301086281-e65f219c7f22?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1786340949749-25da7148e5e7?w=1200&h=1400&fit=crop&auto=format",
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
    image: "https://images.unsplash.com/photo-1676291055501-286c48bb186f?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1676301086281-e65f219c7f22?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1676291055501-286c48bb186f?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1676301086281-e65f219c7f22?w=1200&h=1400&fit=crop&auto=format",
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
    image: "https://images.unsplash.com/photo-1585053736987-f817dc225fc5?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1634229475946-6099ad182cf4?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1585053736987-f817dc225fc5?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1634229475946-6099ad182cf4?w=1200&h=1400&fit=crop&auto=format",
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
    image: "https://images.unsplash.com/photo-1674465992629-f8f81a8fb6d9?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1634229475946-6099ad182cf4?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1674465992629-f8f81a8fb6d9?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1634229475946-6099ad182cf4?w=1200&h=1400&fit=crop&auto=format",
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
    image: "https://images.unsplash.com/photo-1585506172580-9564a524231f?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1658729565278-7c09292d7184?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1585506172580-9564a524231f?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1658729565278-7c09292d7184?w=1200&h=1400&fit=crop&auto=format",
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
    image: "https://images.unsplash.com/photo-1765464281313-b3844388b316?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1638734205377-f21045bf6ebe?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1765464281313-b3844388b316?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1638734205377-f21045bf6ebe?w=1200&h=1400&fit=crop&auto=format",
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
    image: "https://images.unsplash.com/photo-1786835567798-2c058ca3d8ca?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1786835568002-9fea68e87074?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1786835567798-2c058ca3d8ca?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1786835568002-9fea68e87074?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Piercing buric din titan chirurgical, hipoalergenic, potrivit pentru piele sensibilă.",
    details: ["Titan chirurgical", "Hipoalergenic", "Mai multe modele disponibile"],
    rating: 4.5,
    reviewCount: 13,
    inStock: true,
  },
  {
    id: 9,
    slug: "bratara-argint-925-clasica",
    name: "Brățară argint 925, clasică",
    category: "bratari",
    material: "Argint 925",
    price: 349,
    image: "https://images.unsplash.com/photo-1744722093742-aad22c7fa68b?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1786340949685-6164a106b0e6?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1744722093742-aad22c7fa68b?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1786340949685-6164a106b0e6?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Brățară clasică din argint 925, model gros, pentru un stil discret și elegant.",
    details: ["Argint 925", "Model clasic", "Lungime standard 18-19cm"],
    rating: 4.6,
    reviewCount: 16,
    inStock: true,
  },
  {
    id: 10,
    slug: "bratara-argint-925-fina",
    name: "Brățară argint 925, fină",
    category: "bratari",
    material: "Argint 925",
    price: 150,
    image: "https://images.unsplash.com/photo-1786340949749-25da7148e5e7?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1676301086281-e65f219c7f22?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1786340949749-25da7148e5e7?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1676301086281-e65f219c7f22?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Brățară fină din argint 925, cea mai accesibilă piesă din colecția de brățări.",
    details: ["Argint 925", "Model fin", "Ideală ca prim cadou"],
    rating: 4.4,
    reviewCount: 10,
    inStock: true,
  },
  {
    id: 11,
    slug: "lant-argint-925-subtire",
    name: "Lanț argint 925, subțire",
    category: "coliere",
    material: "Argint 925",
    price: 240,
    image: "https://images.unsplash.com/photo-1658729565278-7c09292d7184?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1585506172580-9564a524231f?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1658729565278-7c09292d7184?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1585506172580-9564a524231f?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Lanț subțire din argint 925, discret, ideal pentru purtat singur sau sub o cămașă.",
    details: ["Argint 925", "Model subțire", "Disponibil 40-50cm"],
    rating: 4.5,
    reviewCount: 8,
    inStock: true,
  },
  {
    id: 12,
    slug: "piercing-buric-titan-simplu",
    name: "Piercing buric titan, model simplu",
    category: "piercing",
    material: "Titan chirurgical",
    price: 25,
    image: "https://images.unsplash.com/photo-1786835568002-9fea68e87074?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1786835567798-2c058ca3d8ca?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1786835568002-9fea68e87074?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1786835567798-2c058ca3d8ca?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Cel mai accesibil piercing buric din colecție, model simplu din titan chirurgical.",
    details: ["Titan chirurgical", "Model simplu", "Cel mai bun preț din colecție"],
    rating: 4.3,
    reviewCount: 5,
    inStock: true,
  },
  {
    id: 13,
    slug: "piercing-buric-titan-premium",
    name: "Piercing buric titan, model premium",
    category: "piercing",
    material: "Titan chirurgical",
    price: 99,
    image: "https://images.unsplash.com/photo-1786835567798-2c058ca3d8ca?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1786835568002-9fea68e87074?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1786835567798-2c058ca3d8ca?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1786835568002-9fea68e87074?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Modelul premium din colecția de piercing buric, cu detalii mai elaborate.",
    details: ["Titan chirurgical", "Model premium", "Detalii elaborate"],
    badge: "Nou",
    rating: 4.6,
    reviewCount: 7,
    inStock: true,
  },
];

export function getOffers(maxPrice = 100) {
  return PRODUCTS.filter((p) => p.price <= maxPrice).sort((a, b) => a.price - b.price);
}

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
