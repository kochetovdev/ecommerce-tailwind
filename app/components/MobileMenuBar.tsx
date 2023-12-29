import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineBars } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const menuItems = [
  { title: "Menu", icon: <HiBars3 />, href: "/" },
  { title: "Categories", icon: <AiOutlineBars />, href: "/" },
  { title: "Search", icon: <IoMdSearch />, href: "/" },
];

const MobileMenuBar = () => {
  return (
    <article className="fixed w-full border-t border-gray-200 shadow-sm bg-gray-50 py-3 bottom-0 left-0 flex justify-around items-start px-6 lg:hidden z-40">
      {menuItems.map(({ title, icon, href }) => (
        <Link
          key={title}
          href={href}
          className="flex flex-col items-center justify-around text-gray-700 hover:text-primary transition relative"
        >
          <div className="text-2xl mb-1">{icon}</div>
          <div className="text-xs leading-3">{title}</div>
        </Link>
      ))}
      <Link
        href="/"
        className="flex flex-col items-center justify-around text-gray-700 hover:text-primary transition relative"
      >
        <div className="text-2xl mb-1 relative">
          <IoCartOutline />
          <p className="absolute -top-1.5 left-4 h-4 w-4 bg-primary rounded-full flex justify-center items-center text-[9px] text-white">
            3
          </p>
        </div>
        <div className="text-xs leading-3">Cart</div>
      </Link>
    </article>
  );
};

export default MobileMenuBar;
