import { StaticImageData } from "next/image";

export interface Product {
  title: string;
  productImage: StaticImageData;
  salePrice: string;
  basePrice: string;
  quantity: number;
}
