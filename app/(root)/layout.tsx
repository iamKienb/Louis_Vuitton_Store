import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import ToasterProvider from "@/lib/providers/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LOUIS VUITTON",
  description: "LOUIS VUITTON STORE ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className} >
          <div className="relative">
            <ToasterProvider/>
            <Topbar  /> 
            <div className="flex-1">{children}</div>
            <Footer/>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
