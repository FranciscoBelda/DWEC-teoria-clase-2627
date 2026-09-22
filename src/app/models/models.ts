import { User } from '../common/interfaces';

export type CategoryType = 'electronics' | 'clothing' | 'books' | 'home';

export interface Rating{
  rate: number;
  count: number;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: CategoryType;
  imageUrl: string;
  rating?: Rating;
}
export interface CartItem{
  product: Product;
  quantity: number;
}
export type PayMethod = 'credit_card' | 'paypal';
export interface Order {
  id: string;
  cartItems: CartItem[];
  totalPrice: number;
  payMethod: PayMethod;
  user: User;
}
