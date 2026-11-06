// src/types/index.ts

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  description: string;
  ingredients?: string;
  weight?: string;
  servings?: string;
  isVeg: boolean;
  isBestseller: boolean;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  productCount: number;
  color: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  location: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}
