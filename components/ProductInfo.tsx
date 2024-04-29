"use client";
import React, { useEffect, useState } from "react";
import HeartFavorite from "./Heart";
import { MinusCircle, PlusCircle } from "lucide-react";
import useCart from "@/lib/hooks/useCart";
const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    productInfo.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    productInfo.sizes[0]
  );
  const [quantity, setQuantity] = useState(1);
  const cart = useCart();
  return (
    <div className="max-w-[600px] w-1/2 flex flex-col gap-5 items-start mt-20 mr-28">
      <div className="flex w-full justify-between">
        <p className="text-sm font-serif">{productInfo.tags[0]}</p>
        <HeartFavorite product={productInfo} />
      </div>
      <p className="text-base font-serif">Pre-Order now </p>
      <p className="text-3xl font-medium">{productInfo.title}</p>
      <div className="flex flex-col gap-2">
        <p className="text-base font-medium ">Description:</p>
        <p className="text-base tracking-wider font-normal ">
          {productInfo.description}
        </p>
      </div>
      <div className="flex w-full justify-between">
        {productInfo.colors.length > 0 && (
          <div className="flex flex-col gap-2">
            <p className="text-base font-medium ">Colors:</p>
            <div className="flex gap-2">
              {productInfo.colors.map((color, index) => (
                <p
                  key={index}
                  className={`border rounded-md px-2 py-1 cursor-pointer ${
                    selectedColor === color && "bg-black text-white"
                  }  `}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </p>
              ))}
            </div>
          </div>
        )}

        {productInfo.sizes.length > 0 && (
          <div className="flex flex-col gap-2">
            <p className="text-base font-medium ">Sizes:</p>
            <div className="flex gap-2">
              {productInfo.sizes.map((size, index) => (
                <p
                  key={index}
                  className={` border rounded-md px-2 py-1  cursor-pointer ${
                    selectedSize === size && "bg-black text-white"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-base font-medium">Quantity:</p>
        <div className=" flex gap-4 items-center">
          <MinusCircle
            className="hover:text-red-500 cursor-pointer"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          />
          <p className="text-xl font-semibold  px-2 ">{quantity}</p>
          <PlusCircle
            className="hover:text-red-500 cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
      </div>
      <div className=" py-5 px-20 ml-6  w-full">
        <button
          className="outline text-base rounded-3xl  py-4 hover:bg-black hover:text-white w-full"
          onClick={() => {
            cart.addItem({
              item: productInfo,
              quantity,
              color: selectedColor,
              size: selectedSize,
            });
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
