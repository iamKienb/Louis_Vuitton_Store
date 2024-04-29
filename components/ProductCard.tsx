'use client'
import { useUser } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import HeartFavorite from "./Heart";
interface ProductCardProps{
  product:ProductType,
  updateSignedInUser?:(updateUser: UserType) => void
}
const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  return (
    <div className="shadow-sm relative">
      <Link href={`/products/${product._id}`}>
        <Image
          src={product.media[0]}
          alt={product.title}
          width={500}
          height={500}
    
          className=" cursor-pointer object-cover mt-10 "
        />
        <div className="px-10 py-10" >
          <p className="font-extralight text-base">Pre order</p>
          <div className=" flex justify-between">
            <p>{product.title}</p>
            <p>${product.price}</p>
          </div>
        </div>
  
        <div className="absolute top-5 right-5" >
        <HeartFavorite product={product} updateSignedInUser ={updateSignedInUser}/>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
