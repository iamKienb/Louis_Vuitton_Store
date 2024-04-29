"use client";
import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  CircleUserRound,
  Heart,
  Menu,
  Search,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Topbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="sticky top-0 z-50  flex px-10 py-7 items-center text-center text-black shadow-md  justify-between bg-transparent hover:text-black hover:bg-white   transition duration-200 ease-in-out max-sm:px-2">
      <div className="cursor-pointer ">
        <div className="flex gap-5">
          <div className="flex gap-3 relative">
            <Menu onClick={() => setDropdownMenu(!dropdownMenu)} />
            {dropdownMenu && (
              <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold ">
                <Link href="/" className="hover:text-red-1">
                  Home
                </Link>
                <Link
                  href={user ? "/wishlist" : "/sign-in"}
                  className="hover:text-red-1"
                >
                  Wishlist
                </Link>
                <Link
                  href={user ? "/orders" : "/sign-in"}
                  className="hover:text-red-1"
                >
                  Orders
                </Link>
                <Link
                  href="/cart"
                  className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
                >
                  <ShoppingCart />
                  <p className="text-base-bold">Cart</p>
                </Link>
              </div>
            )}
            <p>Menu</p>
          </div>
          <div className=" flex gap-3 border border-gray-200 px-3  items-center rounded-lg">
            <input
              className="outline-none bg-transparent max-sm:max-w-[120px]"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              disabled={query === ""}
              onClick={() => router.push(`/search/${query}`)}
            >
              <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
            </button>
          </div>
        </div>
      </div>
      <Link href={"/"}>
        <div className="text-5xl font-serif text-center   justify-center tracking-wider items-center   cursor-pointer ">
          LOUIS VUITTON
        </div>
      </Link>

      <div className="cursor-pointer flex w-50  gap-5 ">
        <p>Call Us</p>
        <Link href="/cart" className="flex">
          <ShoppingCart />
          <p>({cart.cartItems.length})</p>
        </Link>

        <Link href="/wishlist">
          <Heart />
        </Link>
        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <CircleUserRound />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Topbar;
