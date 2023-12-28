import { productsLinks } from "../staticData";
import SingleProduct from "./SingleProduct";

const TopNewArrivel = () => {
  return (
    <article className="container pb-16">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        Top New Arrivel
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 cursor-pointer">
        {productsLinks.map((product) => (
          <SingleProduct
            key={product.title}
            title={product.title}
            productImage={product.productImage}
            salePrice={product.salesPrice}
            basePrice={product.basePrice}
            quantity={product.quantity}
          />
        ))}
      </div>
    </article>
  );
};

export default TopNewArrivel;
