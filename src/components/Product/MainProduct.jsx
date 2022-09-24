import React from "react";
import DetailProduct from "@/components/Product/DetailProduct";
import SliderProduct from "@/components/Product/SliderProduct";

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <SliderProduct />
      <DetailProduct />
    </main>
  );
};

export default MainProduct;
