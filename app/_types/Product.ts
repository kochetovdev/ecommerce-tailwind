import { StaticImageData } from "next/image";

export interface Product {
  title: string;
  productImage: StaticImageData;
  salesPrice: string;
  basePrice: string;
  quantity: number;
}
