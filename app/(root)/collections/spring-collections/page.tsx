import ProductList from "@/components/ProductList";
import Image from "next/image";
import React from "react";

const Sneaker = () => {
  return (
    <div className="w-full  top-0 relative ">
      <Image
        src="/M_BC_Spring.png"
        alt="M_BC_Spring"
        width={1000}
        height={300}
        layout="responsive"
        className="w-screen  object-cover "
      />
      <ProductList item="pre-spring" />
      <Image
        src="/M_BC_Spring_Ma.png"
        alt="M_BC_Spring_Ma"
        width={1000}
        height={300}
        layout="responsive"
        className="w-screen  object-cover "
      />
    </div>
  );
};

export default Sneaker;
