"use client";

import { useState } from "react";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Features from "./components/Features";
import MobileMenuBar from "./components/MobileMenuBar";
import Products from "./components/Products";
import SalesImage from "./components/SalesImage";
import { products, recommendedProducts } from "./staticData";
import MobileSidebar from "./components/MobileSidebar";

export default function Home() {
  const [statusSidebar, setStatusSidebar] = useState(false);
  const handleSidebarStatus = () => {
    setStatusSidebar(true);
  };

  return (
    <article>
      <MobileSidebar statusSidebar={statusSidebar} onChangeStatus={setStatusSidebar} />
      <MobileMenuBar onChangeStatus={handleSidebarStatus} />
      <Banner />
      <Features />
      <Categories />
      <Products products={products} title="Top New Arrivel" />
      <SalesImage />
      <Products products={recommendedProducts} title="Recomanded For You" />
    </article>
  );
}
