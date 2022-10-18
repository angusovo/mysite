import React from "react";
import WorkCard from "./WorkCard";
import { workExp } from "../../data";
type Props = {};

function Experience({}: Props) {
  return (
    <div className="flex flex-col text-center md:text-left md:flex-row relative h-screen max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-[0] sm:top-16 tracking-[20px] text-white text-2xl">
        {" "}
        WORK EXPERIENCE
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-tan/80">
        {/* snap-y snap-mandatory */}
        {workExp.map((item, key) => (
          <WorkCard
            key={key}
            company={item.company}
            position={item.position}
            date={item.date}
            duties={item.duties}
            skills={item.skills}
            companyImg={item.companyImg}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
