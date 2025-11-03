import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Vivek Baburao Patil",
  description: "Myself Vivek Baburao Patil and this is my portfolio website showcasing my data analytics projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bgcolor min-h-screen text-white`}>
      <Navbar/>
      <Toaster postiton='top-right' toastOptions={{ duration: 2000 }}/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
