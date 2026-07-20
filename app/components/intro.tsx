"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section 
    className="flex flex-col justify-center ">
        <div className=" justify-center">
            <div className="flex justify-center">
                <motion.div
                initial={{ opacity: 0, scale:0 }}
                animate={{ opacity: 1, scale:1 }}>
                < Image src="/intro-image.png" alt="Intro Image" width={400} height={400} 
                quality={95} priority={true} 
                 className="rounded-lg shadow-lg mt-1  md:mt-4 :mt-10" />

                </motion.div>

            </div>
            
        <div className="text-center text-lg mt-4">      
            <h1> Welcome to <b>Just Websites</b>.</h1>
                <p>We design, build and maintain simple, clean websites, so that you can focus on your business.
                </p>
            </div>
        </div>

    </section>
  )
}
