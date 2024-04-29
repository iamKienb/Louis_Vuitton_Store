import User from "@/lib/model/User.model";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req:NextRequest) =>{
    try{
        const {userId} = auth()
        if(!userId){
            return new NextResponse("Unauthorized",{status: 401})
        }
        await connectToDB()
        // đăng nhập tài khoản 
        const  existingUser = await User.findOne({clerkId: userId})
        //when user sign in for the 1st , then we will create a new user for them
        if(!existingUser){
            const user = await User.create({clerkId: userId})

            return NextResponse.json(user, {status:200})
        }
        const {productId} = await req.json()
        if (!productId){
            return new NextResponse("Product is required",{status:400})
        }
        let isLike = existingUser.wishlist.includes(productId) // lấy những id đã có trong wishlist 
        if(isLike){
            //dislike
            existingUser.wishlist = existingUser.wishlist.filter((id:string) => id !== productId) // nếu đã like thì lọc chỉ lấy những id không bị trùng  
        }else{
            existingUser.wishlist.push(productId)
        }
        existingUser.save()
        return NextResponse.json(existingUser, {status:200})
    }catch(err){
        console.log("USER_WISHLIST_POST",err);
        return new NextResponse("Internal Server Error", {status:200});
    }
}