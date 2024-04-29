import ProductList from "@/components/ProductList";
import Image from "next/image";
import React from "react";

const Sneaker = () => {
  return (
    <div className="w-full  top-0 relative ">
      <Image
        src="/M_BC_MSHOES.png"
        alt="banner"
        width={1000}
        height={300}
        layout="responsive"
        className="w-screen  object-cover "
      />
      <ProductList item="sneaker" />
      <Image
        src="/sneaker.png"
        alt="sneaker"
        width={1000}
        height={300}
        layout="responsive"
        className="w-screen  object-cover "
      />
    </div>
  );
};

export default Sneaker;
