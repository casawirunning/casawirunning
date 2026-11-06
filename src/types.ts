export type Language = 'fr' | 'ar' | 'en';

export type ProductCategory = 'all' | 'jackets' | 'pants' | 'hoodies' | 'tops';

export interface LocalizedText {
  fr: string;
  ar: string;
  en: string;
}

export interface LocalizedList {
  fr: string[];
  ar: string[];
  en: string[];
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  priceMAD: number;
  originalPriceMAD?: number;
  image: string;
  badge?: LocalizedText;
  isNewDrop?: boolean;
  inStock: boolean;
  sizes: string[];
  colors: { name: LocalizedText; hex: string }[];
  description: LocalizedText;
  features: LocalizedList;
}

export interface CartItem {
  id: string; // unique item instance id: `${productId}-${selectedSize}-${selectedColor}`
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface CustomerInfo {
  fullName: string;
  phone: string;
  city: string;
  address: string;
  tiktokOrIgHandle: string;
  deliveryNotes: string;
}

export interface StoreSettings {
  whatsappNumber: string;
  tiktokHandle: string;
  storeName: string;
  colorway?: string;
}
