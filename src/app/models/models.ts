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
