import { Product } from "./product";

export interface ShoppingCart {
  id: string,
  user: string,
  products: Product[]
}
