import Image from "next/image";
import Link from "next/link";
import bedroom from "../../public/images/category/category-1.jpg";
import sofa from "../../public/images/category/category-2.jpg";
import office from "../../public/images/category/category-3.jpg";
import outdoor from "../../public/images/category/category-4.jpg";
import mattress from "../../public/images/category/category-5.jpg";
import dinings from "../../public/images/category/category-6.jpg";

const categoryLinks = [
  { title: "Bedroom", icon: bedroom, href: "/" },
  { title: "Sofa", icon: sofa, href: "/" },
  { title: "Office", icon: office, href: "/" },
  { title: "Outdoor", icon: outdoor, href: "/" },
  { title: "Mattress", icon: mattress, href: "/" },
  { title: "Dinings", icon: dinings, href: "/" },
];

const Categories = () => {
  return (
    <article className="container pb-16">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        Shop By Category
      </h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
        {categoryLinks.map(({ title, icon, href }) => (
          <div
            key={title}
            className="relative group rounded-sm overflow-hidden"
          >
            <Image src={icon} alt="category-image" className="w-full" />
            <Link
              href={href}
              className="absolute inset-0 flex justify-center items-center text-xl text-white font-roboto font-medium tracking-wide bg-black bg-opacity-40 group-hover:bg-opacity-50 transition"
            >
              {title}
            </Link>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Categories;
