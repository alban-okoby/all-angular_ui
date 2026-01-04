export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  available: boolean;
  imgUrl?: string;
}