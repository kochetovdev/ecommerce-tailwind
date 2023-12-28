import Image from "next/image";
import delivery from "../../public/images/icons/delivery-van.svg";
import moneyBack from "../../public/images/icons/money-back.svg";
import serviceHours from "../../public/images/icons/service-hours.svg";

const featuresCards = [
  { icon: delivery, title: "Free Shipping", description: "Order Over $200" },
  {
    icon: moneyBack,
    title: "Money Returns",
    description: "30 days money return",
  },
  {
    icon: serviceHours,
    title: "24/7 Support",
    description: "Customer support",
  },
];

const Features = () => {
  return (
    <article className="container py-16">
      <div className="lg:w-10/12 grid md:grid-cols-3 lg:gap-6 mx-auto justify-center">
        {featuresCards.map(({ icon, title, description }) => (
          <div
            key={title}
            className="flex justify-center items-center gap-5 border-primary border rounded-sm px-8 py-4 lg:px-3 lg:py-6 transition hover:border-slate-400 hover:bg-gray-200 duration-300"
          >
            <Image
              src={icon}
              alt="delivery-icon"
              width={48}
              height={48}
              className="lg:w-12 object-contain"
            />
            <div className="">
              <h4 className="capitalize text-lg font-semibold">{title}</h4>
              <p className="text-gray-500 text-xs lg:text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Features;
