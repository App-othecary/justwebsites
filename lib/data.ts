import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bookmark_page_banner from "@/public/bookmark_page_banner.png"; 
import HD_Precision from "@/public/HD_Precision.png";
import stocklist_desktop from "@/public/stocklist_desktop.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Services",
    hash: "#services",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Careers",
    hash: "#careers",
  },
  {
    name: "Pricing",
    hash: "#pricing",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

 export const projectsData = [
  {
    title: "The Bookmark",
    description:
      "I created a service where users could buy and sell their used books, by looking at a users purchase habbits we could then suggestion bookclub friends",
         tags: ["React", "Next.js", "Firebase", "Tailwind", "Vercel", "Github"],
    imageUrl: bookmark_page_banner,
  },
  {
    title: "Precision HD Laser",
    description:
      "An online shop where clients can order precision cut metal parts for their projects.",
    tags: ["Figma", "React", "TypeScript", "Next.js", "Tailwind", ],
    imageUrl: HD_Precision,
  },
  {
    title: "StockList",
    description:
      "An App for sales staff to track inventory live and share information with managers.",
    tags: ["Firebase", "Flutter", "Dart", "VS Code",],
    imageUrl: stocklist_desktop,
  },
 ] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;