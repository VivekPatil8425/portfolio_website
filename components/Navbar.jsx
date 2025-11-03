// "use client"
import Link from "next/link"
import { Button } from "./ui/button"
// import { useEffect, useState } from "react"



const Navbar = () => {
    // const [showBackground,setShowBackground]=useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY >= 100) {
    //             setShowBackground(true)
    //         } else {
    //             setShowBackground(false)
    //         }
    //     }

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     }

    // }, [])
    return (
        // <nav className={`flex-between px-8  w-full py-4 z-50 ${showBackground && 'bg-[rgba(61,57,96,0.8)]'}  `}>
        <nav className={`flex-between px-8 absolute  w-full py-4 z-50`}>

            <Link href="/" className="flex items-center gap-4">
                <div className=" bg-gray-500  rounded-full font-bold text-3xl py-1.5 px-3 ">
                    V
                </div>
                <p className=" text-lg hidden md:block">Vivek Baburao Patil</p>
            </Link>

            <div>
                <a href="https://drive.google.com/file/d/1Rxkle_YnT_xBxOon0LT0QT5hRbb-RY7M/view?usp=sharing" target="_blank">
                    <Button className="bg-transparent ring-1 ring-zinc-500">
                        Resume  <span className="text-2xl md:text-base mb-1.5 md:ml-1 md:mb-0">{` `}&rarr;</span> 
                    </Button>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
