export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  salePercent: number | null;
}

export interface ProductCart {
  product: Product;
  quantity: number;
}

export interface ProductDetail {
  id: number;
  title: string;
  desc: string;
  content: string;
  image: string;
  price: number;
  salePercent: number;
  isLike: boolean;
  comments: Comment[];
}