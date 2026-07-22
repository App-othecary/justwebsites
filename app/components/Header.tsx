"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" fixed top-1 z-999 flex w-full flex-wrap items-center justify-center 
    opacity:50 backdrop-blur-md transition-all duration-300  sm:top-1.7rem
    sm:h:1.7rem ">
      <motion.div
        className="flex items-center justify-center top-12 h-12 w-full 
         rounded-none 
         translate-x-1/2 border border-black/10  border-opacity-40 
         bg-white  bg-opacity-80 shadow-lg  shadow-gray             
        sm:h:3.25rem   sm:w:36rem   sm:rounded-full
          dark:bg-gray-950 
          dark:border-black/40 
          dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className=" fixed top-0 left-1/2 -translate-x-1/2 flex items-center h-12 py-2sm:top-[1.7rem]">
        <ul
          className="flex w:2rem flex-wrap items-center justify-center 
        gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5"
        >
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3
                 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
