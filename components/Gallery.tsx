import Image from "next/image";
import React from "react";

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  const image = productMedia[1] || productMedia[0]
  return (
    <div className="w-1/2 top-0 ml-10">
      <Image
        src={image}
        width={1090}
        height={1090}

        alt="product"
        className=" w-screen object-cover h-[750px]"
      />
    </div>
  );
};

export default Gallery;
