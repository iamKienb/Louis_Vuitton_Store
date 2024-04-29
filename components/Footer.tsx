import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

const Footer = () => {
    return (
        <footer className="sticky px-5 top-0  py-8 items-center text-center  text-black shadow-md  justify-between bg-transparent hover:text-black hover:bg-white   transition duration-200 ease-in-out ">
            <div  className="py-20">
            <Separator />
            </div>
            <div className="flex text-sm flex-wrap leading-9  mb-16 font-normal justify-around underline">
                <ul className="cursor-pointer" >
                    <li className="pb-3">HELP</li>
                    <li>You can call or email us</li>
                    <li>FAQ`S</li>
                    <li>Product Care</li>
                    <li>Stores</li>
                </ul>
                <ul className="cursor-pointer">
                    <li className="pb-3">SERVICES</li>
                    <li>Repairs</li>
                    <li>Personalization</li>
                    <li>Art of Gifting</li>
                    <li>Download uor Apps</li>
                </ul>
                <ul className="cursor-pointer">
                    <li className="pb-3">ABOUT LOUIS VUITTON </li>
                    <li>Fashion Shows </li>
                    <li>Art $ Culture </li>
                    <li>La Maison </li>
                    <li>Foundation Louis Vuitton</li>
                </ul>
                <ul className="cursor-pointer">
                    <li className="pb-3">CONNECT</li>
                    <li>
                        Sign up for fist access to latest collections, campaigns and videos.{" "}
                    </li>
                    <li>Follow us </li>
                </ul>
            </div>
            <div  className="py-6">
            <Separator />

            </div>
            <div>
                <div className=" py-10 px-36 flex justify-between">
                    <a className="underline cursor-pointer">VIETNAM</a>
                    <div className="flex gap-16 text-sm">
                        <p className="underline cursor-pointer">Site Map </p>
                        <p className="underline cursor-pointer">Legal & Privacy</p>
                        <p className="underline cursor-pointer">Cookie</p>
                    </div>
                </div>
                <div className="text-2xl font-medium mb-16 underline">
                    <Link href={'/'} className=" cursor-pointer ">LOUIS VUITTON</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
