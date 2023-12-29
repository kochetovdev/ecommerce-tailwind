import Image from "next/image";
import methods from "../../public/images/methods.png";

const Copyright = () => {
  return (
    <article className="bg-gray-900 py-4">
      <div className="container max-w-[1200px] flex items-center justify-between">
        <p className="text-white font-semibold">© Easy Learning 2023</p>
        <div>
          <Image
            src={methods}
            width={200}
            height={200}
            alt="methods-image"
          />
        </div>
      </div>
    </article>
  );
};

export default Copyright;
