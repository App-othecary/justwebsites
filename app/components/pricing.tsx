'use client';
import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";
import { useSectionInview } from "@/lib/hooks";
import SectionHeading from './section-heading';

export default function Pricing() {
  const {ref}=useSectionInview('Pricing',0.5  );
  
  return (

    <motion.section ref={ref}    className="mb-28 max-w-180 text-center leading-8 sm:mb-40 scroll-mt-26"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{delay: 0.175}} id="pricing">
      <SectionHeading>Pricing</SectionHeading>
      
      <p className='text-center max-w:45rem mb-4'>
       Weather you're just getting started or need a website to grow with your business.</p>
        <p className='text-center max-w:45rem mb-4'>We've got you covered.</p>
                <div className="flex justify-center">
                  <div>
                    <Image
                      src="/Pricing.png"
                      alt="Pricing Image"
                      width={800}
                      height={400}
                      quality={95}
                      priority={true}
                      className="rounded-lg shadow-lg mt-26"
                    />
                  </div>
                </div>
        
      </motion.section>
  







     
  )
}