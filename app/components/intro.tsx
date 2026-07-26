'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { FaArrowRight } from 'react-icons/fa';

export default function Intro() {
  return (
    <motion.section className="mb-28 max-w-180 text-center leading-8 
    sm:mb-40
    scroll-mt-36"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{delay: 0.175}}
    id="home"
    >
      <div className=" justify-center">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Image
              src="/intro-image.png"
              alt="Intro Image"
              width={400}
              height={400}
              quality={95}
              priority={true}
              className="rounded-lg shadow-lg mt-26"
            />
          </motion.div>
        </div>

        <div className="text-center text-lg mt-4">
          <h1>
            {' '}
            Welcome to <b>Just Websites</b>.
          </h1>
          <p className="text-center mb-2">
            We design, build and maintain simple, clean websites, so that you
            can focus on your business.
          </p>
        </div>
      </div>
      <motion.div
        className="flex flex-col sm:flex-row 
      justify-center gap-2 mt-4 px-4 md:mt-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="/contact"
          className="flex group justify-center wrap
           bg-mauve-900  hover:bg-mauve-700 text-white 
           hover:scale-105
           font-bold px-7 py-3 gap-2 rounded-full mt-4 
           align-items-center"
        >
          Get in Touch{' '}
          <FaArrowRight className="opacity:70 translate-y-1  group-hover:translate-x-1" />
        </Link>
        <a
          className="flex group justify-center wrap
           bg-taupe-300  hover:bg-taupe-200 text-amber-900 hover:text-amber-950
           font-bold px-7 py-3 gap-2 rounded-full mt-4"
        >
          Download Pricelist
          <HiDownload className="opacity:60 translate-y-1 group-hover:translate-y-1.5" />
        </a>
      </motion.div>
    </motion.section>
  );
}
