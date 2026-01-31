export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: "USD";
  image: string;
  category: string;
  badge?: string;
  colors?: string[];
  rating: number;
  reviews: number;
  featured?: boolean;
  highlights: string[];
};

export type CartItem = {
  product: Product;
  quantity: number;
};
