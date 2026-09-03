export type Category = "inele" | "coliere" | "cercei" | "bratari";

export const CATEGORIES: { slug: Category; label: string; description: string }[] = [
  { slug: "inele", label: "Inele", description: "Solitaire, verighete și inele statement" },
  { slug: "coliere", label: "Coliere", description: "Pandantive și coliere fine" },
  { slug: "cercei", label: "Cercei", description: "De la cercei mici la creole statement" },
  { slug: "bratari", label: "Brățări", description: "Brățări clasice și articulate" },
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
    slug: "inel-solitaire-lumina",
    name: "Inel Solitaire Lumină",
    category: "inele",
    material: "Argint 925, zirconiu",
    price: 690,
    compareAtPrice: 840,
    image: "https://images.unsplash.com/photo-1639660680736-14b79f169a27?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1639660680736-14b79f169a27?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=1200&h=1400&fit=crop&auto=format",
    ],
    description:
      "Un inel solitaire clasic, cu piatră centrală șlefuită manual și montură fină din argint 925. Potrivit pentru logodnă sau ca piesă statement de zi cu zi.",
    details: ["Argint 925 rodiat", "Zirconiu cubic șlefuit", "Disponibil pe măsură, la comandă"],
    badge: "Bestseller",
    rating: 4.8,
    reviewCount: 34,
    inStock: true,
  },
  {
    id: 2,
    slug: "colier-pandantiv-velours",
    name: "Colier Pandantiv Velours",
    category: "coliere",
    material: "Argint 925 aurit",
    price: 520,
    image: "https://images.unsplash.com/photo-1673279495269-bc0d925c0612?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1736396979761-4f822cf25120?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1673279495269-bc0d925c0612?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1736396979761-4f822cf25120?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Pandantiv delicat pe lanț fin, placat cu aur 18k peste argint 925. O piesă versatilă, purtabilă zilnic.",
    details: ["Argint 925 placat cu aur 18k", "Lanț ajustabil 40-45 cm", "Livrat în cutie cadou Festone"],
    badge: "Nou",
    rating: 4.6,
    reviewCount: 19,
    inStock: true,
  },
  {
    id: 3,
    slug: "cercei-creole-aurore",
    name: "Cercei Creole Aurore",
    category: "cercei",
    material: "Aur 14k",
    price: 1180,
    image: "https://images.unsplash.com/photo-1598219062199-a940294982e7?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1753093329977-d950f394b215?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1598219062199-a940294982e7?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1753093329977-d950f394b215?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Creole clasice din aur 14k, cu finisaj lucios. O piesă atemporală care completează orice ținută.",
    details: ["Aur 14k", "Diametru 22mm", "Închizătoare sigură tip clic"],
    rating: 4.9,
    reviewCount: 41,
    inStock: true,
  },
  {
    id: 4,
    slug: "bratara-tenis-eclat",
    name: "Brățară Tenis Éclat",
    category: "bratari",
    material: "Argint 925, zirconiu",
    price: 780,
    image: "https://images.unsplash.com/photo-1639660680788-bf160240864e?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1628058494685-6c2f796ac24a?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1639660680788-bf160240864e?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1628058494685-6c2f796ac24a?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Brățară tip tenis cu șir continuu de zirconii șlefuite, montate în argint 925 rodiat.",
    details: ["Argint 925 rodiat", "Lungime 18cm, ajustabilă", "Zirconii șlefuite manual"],
    badge: "Bestseller",
    rating: 4.7,
    reviewCount: 27,
    inStock: true,
  },
  {
    id: 5,
    slug: "inel-eternity-nuit",
    name: "Inel Eternity Nuit",
    category: "inele",
    material: "Argint 925, safir sintetic",
    price: 610,
    image: "https://images.unsplash.com/photo-1674465992629-f8f81a8fb6d9?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1726195641634-a8940e99719c?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1674465992629-f8f81a8fb6d9?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1726195641634-a8940e99719c?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Inel eternity cu piatră centrală albastru-safir, montură din argint 925. Adâncimea unui cer de noapte, într-o piesă purtabilă zilnic.",
    details: ["Argint 925 rodiat", "Safir sintetic șlefuit", "Mărimi disponibile 50-62"],
    rating: 4.5,
    reviewCount: 12,
    inStock: true,
  },
  {
    id: 6,
    slug: "colier-choker-cendre",
    name: "Colier Choker Cendre",
    category: "coliere",
    material: "Argint 925",
    price: 340,
    image: "https://images.unsplash.com/photo-1726195641634-a8940e99719c?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1673279495269-bc0d925c0612?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1726195641634-a8940e99719c?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1673279495269-bc0d925c0612?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Choker modern din argint 925, cu finisaj mat. O piesă statement pentru ținute de seară.",
    details: ["Argint 925", "Lungime fixă 36cm", "Finisaj mat periat"],
    rating: 4.4,
    reviewCount: 8,
    inStock: true,
  },
  {
    id: 7,
    slug: "cercei-drops-noctua",
    name: "Cercei Drops Noctua",
    category: "cercei",
    material: "Argint 925 aurit, perle",
    price: 420,
    image: "https://images.unsplash.com/photo-1753093329977-d950f394b215?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1598219062199-a940294982e7?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1753093329977-d950f394b215?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1598219062199-a940294982e7?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Cercei pandantiv cu perle de cultură și montură placată cu aur. Eleganți de zi, versatili seara.",
    details: ["Argint 925 placat cu aur 18k", "Perle de cultură", "Lungime 4.5cm"],
    badge: "Nou",
    rating: 4.7,
    reviewCount: 15,
    inStock: true,
  },
  {
    id: 8,
    slug: "bratara-cuff-cendre",
    name: "Brățară Cuff Cendre",
    category: "bratari",
    material: "Argint 925",
    price: 460,
    image: "https://images.unsplash.com/photo-1628058494685-6c2f796ac24a?w=800&h=1000&fit=crop&auto=format",
    imageHover: "https://images.unsplash.com/photo-1639660680788-bf160240864e?w=800&h=1000&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1628058494685-6c2f796ac24a?w=1200&h=1400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1639660680788-bf160240864e?w=1200&h=1400&fit=crop&auto=format",
    ],
    description: "Brățară tip cuff, sculpturală, turnată dintr-o singură piesă de argint 925. Se ajustează ușor pe încheietură.",
    details: ["Argint 925", "Design ajustabil", "Finisaj lucios"],
    badge: "Ediție limitată",
    rating: 4.6,
    reviewCount: 6,
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
