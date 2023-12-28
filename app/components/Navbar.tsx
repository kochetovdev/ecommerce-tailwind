import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import bedRoom from "../../public/images/icons/bed.svg";
import sofa from "../../public/images/icons/sofa.svg";
import office from "../../public/images/icons/office.svg";
import outDoor from "../../public/images/icons/outdoor-cafe.svg";
import mattress from "../../public/images/icons/bed-2.svg";
import restaurent from "../../public/images/icons/restaurant.svg";
import terrace from "../../public/images/icons/terrace.svg";

const navLinks = [
  { title: "Home", href: "/home" },
  { title: "Shop", href: "/shop" },
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "contact" },
];

const dropdownItems = [
  { title: "BedRoom", src: bedRoom, href: "/" },
  { title: "Sofa", src: sofa, href: "/" },
  { title: "Office", src: office, href: "/" },
  { title: "OutDoor", src: outDoor, href: "/" },
  { title: "Mattress", src: mattress, href: "/" },
  {
    title: "Restaurent",
    src: restaurent,
    href: "/",
  },
  { title: "Terrace", src: terrace, href: "/" },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-800 hidden lg:block">
      <div className="container max-w-[1200px]">
        <div className="flex">
          <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
            <GiHamburgerMenu className="text-white" />
            <span className="capitalize font-semibold ml-2 text-white">
              All Categories
            </span>
            <div className="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">
              {dropdownItems.map(({ title, src, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <Image
                    src={src}
                    width={20}
                    height={20}
                    alt="shoes-icon"
                    className="object-contain"
                  />
                  <span className="ml-6 text-gray-700 text-sm font-semibold">
                    {title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between flex-grow pl-12">
            <div className="flex items-center space-x-6 text-base capitalize">
              {navLinks.map(({ title, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-gray-200 hover:text-white transition font-semibold"
                >
                  {title}
                </Link>
              ))}
            </div>
            <Link
              href="/login"
              className="ml-auto text-gray-200 hover:text-white transition font-semibold"
            >
              Login/Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
