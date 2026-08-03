"use client";

import { useRef } from "react";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];
export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
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
      className=" group mb-8 sm:mb-12"
    >
      <section className="max-w-2xl mx-auto p-4 border-black/5 overflow-hidden  
      sm:pr-8 flex flex-col sm:block relative sm:h-80 rounded-lg 
      shadow-md hover:bg-mauve-200 transition sm:group-even:pl-8">
        <div className="pt-4 pb-7 px-5 sm:pl-8 sm:pr-2 sm:pt-10 
        max-w-none sm:max-w-1/2 flex flex-col 
        h-auto sm:h-full
         sm:group-even:ml-80">
          <h3 className="text-2xl font-semibold ">{title}</h3>
          <p className="mt-2 leading-relaxed">{description}</p>
          <ul className="flex flex-wrap gap-2 mt-4 ">
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
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="relative sm:absolute 
          order-first sm:order-0 
          w-full sm:w-1/2 object-cover mt-8  
          top-0 sm:top-0 
          right-0 sm:-right-5 
          rounded-t-lg group-even:right-[initial] group-even:-left-5 
        transition group-hover:scale-105 group-hover:transition-all 
        group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2
        group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
        "
        />
      </section>
    </motion.div>
  );
}
