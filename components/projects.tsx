"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
// import Project from "./project";
// import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  return (
    <section  
    className = "scroll-mt-28 mb-28"
    >
      <SectionHeading>Projects</SectionHeading>
    <div>
      {projectsData.map((project, index) =>(
        <React.Fragment key = {index}>
          <Project {...project} />
        </React.Fragment>

      ))}
    </div>

    </section>
  )
}

type ProjectProps = (typeof projectsData)[1];

function Project({title, description, tags, imageUrl}:
  ProjectProps){
    return <div>{title}</div>
  }