import Link from "next/link";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  statusSidebar: boolean;
  onChangeStatus: (value: boolean) => void;
}

const sidebarLinks = [
  { title: "Home", href: "/" },
  { title: "Shop", href: "/" },
  { title: "About us", href: "/" },
  { title: "Contact us", href: "/" },
];

const MobileSidebar = ({ statusSidebar, onChangeStatus }: Props) => {
  const handleClickOutside = (event: MouseEvent) => {
    const targetElement = event.target as HTMLElement;

    if (statusSidebar && !targetElement.closest(".mobile-sidebar-content")) {
      onChangeStatus(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [statusSidebar, onChangeStatus]);

  const sidebarClass = `fixed right-0 top-0 w-full h-full z-50 bg-black bg-opacity-30 shadow transition-transform ${
    statusSidebar ? "transform translate-x-0" : "transform translate-x-full"
  }`;

  return (
    <aside className={sidebarClass}>
      <div className="absolute left-0 top-0 w-72 h-full z-50 bg-white shadow">
        <div className="text-gray-400 hover:text-primary text-lg absolute right-3 top-3 cursor-pointer"></div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2 pb-4 font-roboto pl-4 pt-4 bg-primary">
          Menu
        </h3>
        <IoClose
          className="absolute top-5 right-6 text-xl cursor-pointer"
          onClick={() => onChangeStatus(false)}
        />
        <div>
          {sidebarLinks.map(({ title, href }) => (
            <Link
              href={href}
              className="block px-4 py-4 font-medium transition hover:bg-gray-200"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default MobileSidebar;
