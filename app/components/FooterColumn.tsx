import Link from "next/link";
import { FooterCol } from "../_types";

interface Props {
  footerColumn: FooterCol;
}

const FooterColumn = ({ footerColumn: { title, options } }: Props) => {
  return (
    <article className="mt-12 md:mt-0">
      <h3 className="text-sm font-semibold text-gray-400 tracking-wide uppercase">
        {title}
      </h3>
      <div className="mt-4 space-y-4">
        {options.map(({ option, href }) => (
          <Link
            key={option}
            href={href}
            className="text-base text-gray-500 hover:text-gray-900 block font-semibold"
          >
            {option}
          </Link>
        ))}
      </div>
    </article>
  );
};

export default FooterColumn;
