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
    hrf:"/#home",
  },
  {
    name: "About",
    hash: "#about",
    hrf:"/#about",
  },
  {
    name: "Projects",
    hash: "#projects",
    hrf:"/#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
    hrf:"/#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
    hrf:"/#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
    hrf:"/#contact",
  },
  
] as const;
