"use client"
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
interface HeartProps{
  product: ProductType,
  updateSignedInUser?:(updateUser: UserType) => void
}
const HeartFavorite = ({ product, updateSignedInUser }: HeartProps) => {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [isLiked, setIsLiked] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/users`, {
        method: "GET",
      });
      const data = await res.json();
      // set  tất cả user đã signin

      // if have user nào mà  đã có productId trong wishlist -> true và ngược lại
      setIsLiked(data.wishlist.includes(product._id));

      setLoading(false);
    } catch (err) {
      console.log("[USERS_GET]", err);
    }
  };

  const handleLike = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!user) {
      return router.push("/sign-in");
    } else {
      try {
        setLoading(true);
        const res = await fetch(`/api/users/wishlist`, {
          method: "POST",
          body: JSON.stringify({ productId: product._id }),
        });
        const updateUser = await res.json();
        updateSignedInUser && updateSignedInUser(updateUser)
        setIsLiked(updateUser.wishlist.includes(product._id));
        setLoading(false);
      } catch (err) { 
        console.log("[USERS_POST]", err);
      }
    }
  };

  useEffect(() => {
    // nếu có user thì nó sẽ trigger cái useEffect
    if (user) {
      getUsers();
    }
  }, [user]);
  return (
    <div>
      <button onClick={handleLike}>
        <Heart fill={`${isLiked ? 'red' : 'white'}`} />
      </button>
    </div>
  );
};

export default HeartFavorite;
