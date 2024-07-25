import React from "react";
import About from "@/components/homecomponents/about";
import Experience from "@/components/homecomponents/experience";
import Intro from "@/components/homecomponents/intro";
import Projects from "@/components/homecomponents/projects";
import SectionDivider from "@/components/homecomponents/section-divider";
import Header from "@/components/homecomponents/header";
import Skills from "./homecomponents/skills";
import Contact from "./homecomponents/contact";


export default function Mainpage() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header />
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

    </main>
  );
}
