import Image from "next/image";
import Link from "next/link";
import offer from "../../public/images/offer.jpg";

const SalesImage = () => {
  return (
    <article className="mb-8">
      <Link href="/">
        <Image src={offer} alt="image-offer" className="w-full" />
      </Link>
    </article>
  );
};

export default SalesImage;
