import User from "@/lib/model/User.model";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req:NextRequest) =>{
    try{
        const {userId} = auth()
        if(!userId){
            return new NextResponse("Unauthorized", {status:401})
        }

        await connectToDB()
        const  existingUser = await User.findOne({clerkId: userId})
        //when user sign in for the 1st , then we will create a new user for them
        if(!existingUser){
            const user = await User.create({clerkId: userId})
   
            return NextResponse.json(user, {status:200})
        }
        return NextResponse.json(existingUser, {status:200})

    }catch(err){
        console.error('USERS_GET:',err);
        return new NextResponse("Internal Server Error" , {status:500});
    }
}