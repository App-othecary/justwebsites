'use client';
import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";
import { useSectionInview } from "@/lib/hooks";
import SectionHeading from './section-heading';
import { pricingData } from "@/lib/data";
import PricingProps from './pricing-card';

export default function Pricing() {
  const {ref}=useSectionInview('Pricing',0.5  );
  
  return (

    <motion.section ref={ref}    className="mb-28 max-w-280 text-center leading-8 sm:mb-40"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{delay: 0.175}} id="pricing">
      <SectionHeading>Pricing</SectionHeading>
      
      <p className='text-center max-w:45 rem m-4'>
       Weather you're just getting started or need a website to grow with your business.</p>
        <p className='text-center max-w:45 rem mb-4'>We've got you covered.</p>
               <main className="md:col-span-3 cardPrimaryColor rounded-lg shadow-sm border border-gray-200">
    <h1 className="text-4xl font-medium text-zinc-100 m-2">justwebsites.co.za</h1>
    <p className="text-gray-600">simple websites. real results</p>

              <div className="grid grid-cols-1  
                                sm:grid-cols-2  
                        
                                lg:grid-cols-4
                                gap-4 p-4 pt-2 rounded-lg shadow-lg mt-2 cardPrimaryColor">
                         
                            {pricingData.map((pricing, index) => (
                            <React.Fragment key={index}>
                              <PricingProps {...pricing} />
                            </React.Fragment>
                            ) 
                          ) 
                        }
                        
             
              </div>  
          </main>        
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
      </motion.section>
  







     
  )
}