"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

import Project from "./project";
// import { useSectionInView } from "@/lib/hooks";


export default function Projects() {
  return (
    <section className="scroll-mt-28 mb-28" id = "projects">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {/* todos.map((key, index) => { ... }) */}
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            {/* 把上面的project输入到Project函数里 */}
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}