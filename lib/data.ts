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
      "",
    icon: React.createElement(LuGraduationCap),
    date: "Summer 2023",
  },
  {
    title: "Software Developer Intern at Meta-Securities",
    location: "New York, NY",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "Summer 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Chrome Extension",
    description:
      "This extension is tailored for programmers, ensuring that only coding-related websites remain within reach. Any site not related to programming gets directed into a  404-page page",
    tags: ["Javascript"],
    imageUrl: chromeExt,
    linkTo:"https://chrome.google.com/webstore/detail/focus-on-programming/khebbaeooaocmajfomppknanpineghgo/related?hl=en",
    tar: "_blank",
    re:"noopener noreferrer"
  },
  {
    title: "Car Rental App",
    description:
      "Full-Stack Car Rental App",
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