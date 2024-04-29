"use client";

import useCart from "@/lib/hooks/useCart";

import { useUser } from "@clerk/nextjs";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CartDetail = () => {
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();
  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };
  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  const totalPrice = parseFloat(total.toFixed(2));
  const handleCheckout = async () => {
    try {
      if (!user) {
        router.push("/sign-in");
      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          method: "POST",
          body: JSON.stringify({ cartItems: cart.cartItems, customer }),
        });
        const data = await res.json();
        window.location.href = data.url;
        console.log(data);
      }
    } catch (err) {
      console.log("[checkout_POST]", err);
    }
  };


  return (
    <div className="flex gap-20 py-16 px-10 max-lg:flex-col max-sm:px-3">
      <div className="w-2/3 max-lg:w-full">
        <p className="text-4xl font-medium">Shopping Cart</p>
        <hr className="my-7" />
        {cart.cartItems.length === 0 ? (
          <p className="text-xl font-bold">No item in cart</p>
        ) : (
          <div>
            {cart.cartItems.map((cartItem, index) => (
              <div
                key={index}
                className="w-full flex max-sm:flex-col max-sm:gap-3 hover:bg-grey-1 px-4 py-3 items-center max-sm:items-start justify-between"
              >
                <div className="flex justify-between w-2/3 ">
                  <div className="flex items-center">
                    <Image
                      src={cartItem.item.media[0]}
                      width={100}
                      height={100}
                      className="rounded-lg w-40 bg-stone-50 h-40 object-cover"
                      alt="product"
                    />
                    <div className="flex flex-col gap-3 ml-4">
                      <p className="text-xl font-semibold">
                        {cartItem.item.title}
                      </p>
                      {cartItem.color && (
                        <p className="text-base font-serif">
                          Color: {cartItem.color}
                        </p>
                      )}
                      {cartItem.size && (
                        <p className="text-base font-serif">
                          Size: {cartItem.size}
                        </p>
                      )}
                      <p className="text-base font-serif">
                        ${cartItem.item.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <MinusCircle
                      className="hover:text-red-500 cursor-pointer"
                      onClick={() => cart.decreaseQuantity(cartItem.item._id)}
                    />
                    <p className="text-base font-bold">{cartItem.quantity}</p>
                    <PlusCircle
                      className="hover:text-red-500 cursor-pointer"
                      onClick={() => cart.increaseQuantity(cartItem.item._id)}
                    />
                  </div>
                </div>

                <Trash
                  className="hover:text-red-500 cursor-pointer"
                  onClick={() => cart.removeItem(cartItem.item._id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-1/3 max-lg:w-full flex flex-col gap-8 bg-gray-50 rounded-lg px-4 py-5">
        <p className="text-4xl font-medium pb-4">
          Summary{" "}
          <span>{`(${cart.cartItems.length} ${
            cart.cartItems.length > 1 ? "items" : "item"
          })`}</span>
        </p>
        <div className="flex justify-between text-base font-semibold">
          <span>Total Amount</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className="border rounded-2xl  text-base font-semibold bg-gray-50 py-3 w-full hover:bg-black hover:text-white" onClick={handleCheckout}>
            Process To Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDetail;
