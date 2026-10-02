export type Product = {
  id: string;
  brand: string;
  name: string;
  description: string;
  price: string;
  priceDa: number;
  badge?: string;
  image: string;
  category: "Chemises" | "Polos" | "Ensembles" | "T-shirts";
  arch: "arch-a" | "arch-b" | "arch-c" | "arch-d";
};

export const PRODUCTS: Product[] = [
  {
    id: "polo-lacoste-vert",
    brand: "LACOSTE",
    name: "Polo Lacoste vert",
    description: "Piqué coton, croco brodé, coupe droite.",
    price: "8 500 DA",
    priceDa: 8500,
    badge: "Top vente",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop",
    category: "Polos",
    arch: "arch-a",
  },
  {
    id: "tshirt-tommy-flag",
    brand: "TOMMY",
    name: "T-shirt Tommy flag",
    description: "Jersey premium, drapeau brodé poitrine.",
    price: "4 900 DA",
    priceDa: 4900,
    badge: "Nouveau",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    category: "T-shirts",
    arch: "arch-b",
  },
  {
    id: "ensemble-ep-noir",
    brand: "EP",
    name: "Ensemble EP noir",
    description: "Veste + jogging, deux pièces street.",
    price: "9 900 DA",
    priceDa: 9900,
    badge: "TikTok",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    category: "Ensembles",
    arch: "arch-c",
  },
  {
    id: "chemise-oxford-blanche",
    brand: "CLASSIQUE",
    name: "Chemise oxford blanche",
    description: "Oxford premium, col boutonné.",
    price: "6 200 DA",
    priceDa: 6200,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
    category: "Chemises",
    arch: "arch-d",
  },
  {
    id: "blazer-camel-paris",
    brand: "EP",
    name: "Blazer camel Paris",
    description: "Veste tailleur, esprit Eiffel Tower.",
    price: "14 500 DA",
    priceDa: 14500,
    badge: "Exclusif",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
    category: "Ensembles",
    arch: "arch-a",
  },
  {
    id: "chemise-denim-bigben",
    brand: "CLASSIQUE",
    name: "Chemise denim BigBen",
    description: "Denim brut, coupe London fit.",
    price: "5 800 DA",
    priceDa: 5800,
    badge: "Nouveau",
    image:
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=800&auto=format&fit=crop",
    category: "Chemises",
    arch: "arch-b",
  },
  {
    id: "polo-noir-gold",
    brand: "LACOSTE",
    name: "Polo noir gold",
    description: "Piqué noir, détails dorés boutique.",
    price: "8 900 DA",
    priceDa: 8900,
    badge: "Top vente",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop",
    category: "Polos",
    arch: "arch-c",
  },
  {
    id: "tshirt-blanc-essentiel",
    brand: "TOMMY",
    name: "T-shirt blanc essentiel",
    description: "Blanc pur, coton lourd 220g.",
    price: "3 900 DA",
    priceDa: 3900,
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop",
    category: "T-shirts",
    arch: "arch-d",
  },
];

export const CATEGORIES = ["Tous", "Chemises", "Polos", "Ensembles", "T-shirts"] as const;
