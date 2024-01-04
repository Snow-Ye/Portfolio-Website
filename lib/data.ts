import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import chromeExt from "@/public/chromeExt.png";
import carrental from "@/public/carrental.png";
import aigenerator from "@/public/aigenerator.png";



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
    hasDropdown: true,
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer Intern at GaoTek",
    location: "New York, NY",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "Summer 2023",
  },
  {
    title: "Software Developer Intern at Meta-Securities",
    location: "New York, NY",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Summer 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Chrome Extension",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["Javascript"],
    imageUrl: chromeExt,
    linkTo:"https://chrome.google.com/webstore/detail/focus-on-programming/khebbaeooaocmajfomppknanpineghgo/related?hl=en",
    tar: "_blank",
    re:"noopener noreferrer"
  },
  {
    title: "Car Rental App",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: carrental,
    linkTo:"https://project-team-6.vercel.app/",
    tar: "_blank",
    re:"noopener noreferrer"
  },
  {
    title: "AI Image Generator and Article Summarize",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Express.js","Node.js", "MongoDB", "Tailwind"],
    imageUrl: aigenerator,
    linkTo:"ai",
    tar: "_self",
    re:"noopener noreferrer"
  },
] as const;

export const skillsData = [
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Tailwind",
  "Git",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;