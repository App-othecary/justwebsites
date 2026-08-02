'use client';
import React from 'react'
import { motion } from "framer-motion";
import { useSectionInview } from "@/lib/hooks";

export default function CreateQuotation() {
  const {ref}=useSectionInview('Quotation',0.5  );
  
  return (

    <motion.section ref={ref} id="quotation">CreateQuotation</motion.section>
  )
}
