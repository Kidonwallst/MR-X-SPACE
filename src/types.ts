export interface Specs {
  [key: string]: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  brand: string;
  image: string; // Emoji or custom styled illustration or placeholder
  description: string;
  rating: number;
  reviewsCount: number;
  specs: Specs;
  colors: string[];
  storageOptions?: string[];
  isHot?: boolean;
  discountPercent?: number;
  originalPrice?: number;
  condition?: string;
}

export interface CartItem {
  id: string; // unique ID combination of product.id + selectedColor + selectedStorage
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedStorage?: string;
}

export type ViewTab =
  | 'home'
  | 'shop'
  | 'product-detail'
  | 'cart'
  | 'checkout'
  | 'about'
  | 'contact'
  | 'deals'
  | 'faq'
  | 'whatsapp-checkout';
