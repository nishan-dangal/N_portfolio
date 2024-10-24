"use client";
import React from "react";
import Link from "next/link";
import { TbArrowNarrowUp } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#bac2ec] border-l-transparent border-r-transparent text-white">
      <div className="container p-10 flex justify-between">
        <span>Copyrights &copy; {new Date().getFullYear()}, Nishan_Dangal</span>
  
         <Link href="#about">
             <button className=" hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">About</button>
         </Link>
         <Link href="#projects">
             <button className=" hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Projects</button>
         </Link>
         <Link href="#contact">
             <button className=" hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Contact</button>
         </Link>
         <button 
             onClick={() => window.scrollTo({top:0, behavior:'smooth'})} 
             className=" hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
         >
             Back to Top
           {/* Icon for Back to Top */}
           <TbArrowNarrowUp />
         </button>
     </div>

    </footer>
  );
};

export default Footer;
