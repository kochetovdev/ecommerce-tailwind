import Image from "next/image";
import Link from "next/link";
import offer from "../../public/images/offer.jpg";

const SalesImage = () => {
  return (
    <>
      <Link href="/">
        <Image src={offer} alt="image-offer" className="w-full" />
      </Link>
    </>
  );
};

export default SalesImage;
