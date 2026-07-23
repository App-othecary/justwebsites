import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section>
      <SectionHeading>Our Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];
function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return <section className="max-w-2xl mx-auto mb-8 p-4 border-black/5 overflow-hidden rounded-lg shadow-md relative">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="mt-2 leading-relaxed">{description}</p>
    <ul>
        {tags.map((tag, index) => (
          <li key={index} className="inline-block mr-2 rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
            {tag}
          </li>
        ))}
    </ul>
    <Image src={imageUrl} alt={title} quality={95} className="absolute top-8 -right-40" />
  </section>;
}
