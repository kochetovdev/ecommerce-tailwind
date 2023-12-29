import Image from "next/image";
import logo from "../../public/images/easyshop.png";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import FooterColumn from "./FooterColumn";
import { footerColumns } from "../staticData";

const componentsLabel = [
  { icon: <FaFacebookF />, href: "/" },
  { icon: <FaTwitter />, href: "/" },
  { icon: <FaInstagram />, href: "/" },
  { icon: <FaLinkedin />, href: "/" },
];

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-12 border border-t border-gray-100">
      <div className="container">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Image src={logo} alt="easy-shop-logo" />
            <p className="text-gray-500 text-base font-roboto">
              Consectetur adipisicing elit. Iste dolore veniam quibusdam
              cupiditate asperiores.
            </p>
            <div className="flex space-x-5">
              {componentsLabel.map(({ icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-1 gap-8 xl:mt-0 lg:col-span-2">
            <div className="text-center lg:text-left md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {footerColumns.map((column) => (
                <FooterColumn key={column.title} footerColumn={column} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
