"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <motion.section className="mb-28 max-w-180 text-center leading-8 sm:mb-40 scroll-mt-26"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{delay: 0.175}}
    id="services"
    >
      <SectionHeading>Our Services</SectionHeading>
      <p className='text-center max-w:45rem mb-4'>
        "We can design, build and maintain your website, so that you can focus on your core business. We provide top-notch solutions that help your on-line presence grow.</p>
        <p className='text-center max-w:45rem mb-4'>From web development to digital marketing, we have the skills and experience to deliver exceptional results. Contact us today to learn more about how we can help you achieve your goals."        </p>
        
      </motion.section>
  )
}
