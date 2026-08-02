"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "./context/active-section-context";


export default function Header() {
  const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext();
  
  return (
    <header className=" fixed z-999 flex w-full flex-wrap items-center justify-center 
    opacity:20 h-24
    transition-all duration-300  
    sm:top-1.7rem
    sm:h:1rem ">
      <motion.div
        className="flex flex-wrap items-center justify-center top-12 h-12 w-[min(48rem,100%)]
         rounded-none 
         translate-x-1/2 borderBlack border-opacity-40 
          bg-opacity-50 shadow-lg  shadow-gray  backdrop-blur-md           
          sm:h:3.25rem 
          sm:w:36rem
          sm:rounded-full 
          sm:opacity-30 
          sm:backdrop-blur-md
     
          dark:bg-gray-950 
          dark:border-black/40 
          dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className=" fixed top-8 left-1/2 -translate-x-1/2 flex items-center h-12 py-2 sm:top-[1.7rem]">
        <ul
          className="flex w:2rem flex-wrap items-center justify-center 
        gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-4"
        >
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link className={clsx(
                "flex w-full items-center justify-center px-3 py-3  hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                 {
                   "text-gray-950 dark:text-gray-300": activeSection === link.name,
                  }
                )
}
                href={link.hash}
                onClick={() => {setActiveSection(link.name)
                  setTimeOfLastClick(Date.now());
                }
              }
              >
                {link.name}
                <motion.span 
                className="bg-mist-100 rounded-full absolute inset-0 -z-10 transition-all duration-300 dark:bg-gray-900 h-10"
                layoutId="activeSection"
                transition={{type:"spring", stiffness: 380, damping: 30}} ></motion.span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
