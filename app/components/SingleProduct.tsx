import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Product } from "../_types";

const SingleProduct = ({
  productImage,
  title,
  salesPrice,
  basePrice,
  quantity,
}: Product) => {
  return (
    <article className="group rounded bg-white shadow overflow-hidden">
      <div className="relative">
        <Image src={productImage} alt="product-image" className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center  gap-2 opacity-0 group-hover:opacity-100 transition">
          <Link
            href="/"
            className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center"
          >
            <IoSearch className="text-2xl" />
          </Link>
          <Link
            href="/"
            className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center"
          >
            <FaHeart className="text-xl" />
          </Link>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <Link href="/">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {title}
          </h4>
        </Link>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-roboto font-semibold">
            {salesPrice}
          </p>
          <p className="text-sm text-gray-400 font-roboto line-through">
            {basePrice}
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-0.5 text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <IoMdStar key={star} className="text-lg" />
            ))}
          </div>
          <div className="text-xs text-gray-500 ml-3">({quantity})</div>
        </div>
      </div>
      <Link
        href="/"
        className="block w-full py-1 text-center text-white font-medium bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
      >
        Add To Card
      </Link>
    </article>
  );
};

export default SingleProduct;
