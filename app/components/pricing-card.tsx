"use client";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { pricingData, projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type PricingProps = (typeof pricingData)[number];
export default function PricingCard({
  title,
  description,
  tags,
  imageUrl,
}: PricingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scale,
        opacity: opacity,
      }}
      className=" group mb- sm:mb-12"
    >
      <section className="max-w-2xl border-black/5 overflow-hidden  
      sm:pr-8  sm:block relative aspect-1.5/1] rounded-lg bg-mauve-100
      shadow-md hover:bg-mauve-200 transition sm:group-even:pl-8">
        <div className="pt-2 pb-7 px-5 sm:pl-8 sm:pr-2 sm:pt-2 
                         flex flex-col 
                        sm:h-100
                         lg:h-150
                        ">
          <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="relative            
                    h-34 w-100  object-contain 
                    top-0 sm:top-0 
                    right-0 sm:-right-5 
                    rounded-t-lg group-even:right-[initial] group-even:-left-1
                    transition group-hover:scale-105 group-hover:transition-all 
        group-hover:translate-x-3 
        group-hover:-translate-y-3 group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2
        "
        />
          <h3 className="text-xl font-semibold mt-2">{title}</h3>
          <p className=" leading-relaxed text-gray-600">{description}</p>
         <Link
            href="#contact"
           className="flex group justify-center wrap
             bg-olive-500  hover:bg-mauve-700 text-white 
             hover:scale-105
              font-bold px-5 py-3 gap-2 rounded-2xl mt-4 
             align-items-center"
        >
          Get in Touch{' '}
          <FaArrowRight className="opacity:70
          mt-1 
          translate-y-1  group-hover:translate-x-1" />
        </Link>
                  <ul className="flex flex-wrap gap-2 mt-2 ">

            {tags.map((tag, index) => (
              <li           // this lists the techstack items
                key={index}
                className="inline-block mr-2 rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mb-2"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        
      </section>
    </motion.div>
  );
}
