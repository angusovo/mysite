import Image from "next/image";
import React from "react";
import { projects } from "../../data";
import ProjectCard from "./ProjectCard";
type Props = {};

function Project({}: Props) {
  const renderPrj = () => {};
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 snap-center">
      <h3 className="absolute top-24 tracking-[20px] text-white text-2xl">
        PROJECTS
      </h3>
      <div className=" w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-tan/80">
        {projects.map((prj, key) => (
          <ProjectCard
            src={prj.src}
            git={prj.git}
            heading={prj.heading}
            desc={prj.desc}
            public={prj.public}
            key={key}
          />
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-beige/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Project;
