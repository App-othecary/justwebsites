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
      viewport={{ once: true }}
      style={{
        scale: scale,
        opacity: opacity,
      }}
      className=" group mb-8 sm:mb-12"
    >
      <section
        className="max-w-2xl overflow-hidden  
      sm:block relative rounded-2xl bg-mauve-100
      shadow-md hover:bg-mauve-200 transition"
      >
        <div
          className="pt-2 pb-2 px-5 
                         flex flex-col 
                        h-100 
                        
                         lg:h-150
                        "
        >
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className="relative            
                    h-34 w-full  object-contain 
                    top-0 sm:top-0 
                    right-0 sm:-right-5 
                    rounded-t-lg group-even:right-[initial] group-even:-left-1
                    transition group-hover:scale-105 group-hover:transition-all 
                      group-hover:translate-x-1 
                      group-hover:-translate-y-1 group-hover:-rotate-1
                      "
          />
          <h3 className="text-2xl font-semibold text-gray-800 mt-2">{title}</h3>
          <p className="tracking-tight text-base/5 text-gray-600">
            {description}
          </p>
          <div
            className="flex group justify-center wrap
             bg-amber-600/40 hover:bg-mauve-700 text-black/90
             hover:scale-105
              font-bold text-lg py-2 gap-2 rounded-2xl mt-2 
             align-items-center"
          >
            Get in Touch{" "}
            <FaArrowRight
              className="opacity:70
          
          translate-y-1  group-hover:translate-x-1"
            />
          </div>
          <ul className=" mt-2 ">
            {tags.map((tag, index) => (
              <li // this lists the techstack items
                key={index}
                className=" text-left group
                px-3 py-1 text-sm font-semibold
                  text-gray-700"
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
