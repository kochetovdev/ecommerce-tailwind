import Image from "next/image";
import Link from "next/link";
import easyLogo from "../../public/images/easyshop.png";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="py-4 shadow-sm bg-pinc-500 lg:bg-white">
      <div className="container max-w-[1200px] flex items-center justify-between">
        <Link href="/" className="block w-32">
          <Image src={easyLogo} alt="logo-shop" className="w-full" />
        </Link>
        <div className="w-full hidden xl:max-w-xl lg:max-w-lg lg:flex relative ">
          <IoIosSearch className="absolute left-4 top-3 text-2xl text-gray-400" />
          <input
            type="text"
            className="pl-12 w-full border border-r-0 border-primary px-3 py-3 rounded-l-md focus:ring-primary"
            placeholder="Search"
          />
          <button
            type="submit"
            className="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition"
          >
            Search
          </button>
        </div>
        <div className="space-x-4 flex items-center">
          <Link
            href="/"
            className="relative flex flex-col items-center text-center text-gray-700 hover:text-primary transition"
          >
            <span className="absolute right-2 -top-2.5 w-[18px] h-[18px] rounded-full flex items-center justify-center bg-primary text-white text-[9px]">
              5
            </span>
            <FaRegHeart className="text-2xl" />
            <div className="text-xs leading-3">Whish list</div>
          </Link>
          <Link
            href="/"
            className="relative flex flex-col items-center text-center text-gray-700 hover:text-primary transition"
          >
            <span className="absolute left-4 -top-1.5 w-[18px] h-[18px] rounded-full flex items-center justify-center bg-primary text-white text-[9px]">
              3
            </span>
            <IoMdCart className="text-3xl" />
            <div className="text-xs leading-3">Cart</div>
          </Link>
          <Link
            href="/"
            className="relative flex flex-col items-center text-center text-gray-700 hover:text-primary transition"
          >
            <RiAccountCircleLine className="text-3xl" />
            <div className="text-xs leading-3">Account</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
