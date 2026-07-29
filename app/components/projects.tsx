"use client";

import React from "react";
import Project from "./project-card";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import { useSectionInview } from "@/lib/hooks";


export default function Projects() {
  const {ref}=useSectionInview('Projects',0.5);

  return (
    <motion.section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>Our Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}


