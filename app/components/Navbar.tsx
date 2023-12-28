import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = [
  { title: "Home", href: "/home" },
  { title: "Shop", href: "/shop" },
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "contact" },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-800 hidden lg:block">
      <div className="container">
        <div className="flex">
          <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
            <GiHamburgerMenu className="text-white" />
            <span className="capitalize font-semibold ml-2 text-white">
              All Categories
            </span>
          </div>
          <div className="flex items-center justify-between flex-grow pl-12">
            <div className="flex items-center space-x-6 text-base capitalize">
              {navLinks.map(({ title, href }) => (
                <Link
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
