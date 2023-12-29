import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Features from "./components/Features";
import MobileMenuBar from "./components/MobileMenuBar";
import Products from "./components/Products";
import SalesImage from "./components/SalesImage";
import { products, recommendedProducts } from "./staticData";

export default function Home() {
  return (
    <>
      <MobileMenuBar />
      <Banner />
      <Features />
      <Categories />
      <Products products={products} title="Top New Arrivel" />
      <SalesImage />
      <Products products={recommendedProducts} title="Recomanded For You" />
    </>
  );
}
