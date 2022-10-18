import React from "react";

type Props = {
  src: string;
  heading: string;
  desc: string;
  public: boolean;
  git: string;
};

const ProjectCard = (props: Props) => {
  return (
    <div className="w-[500px] md:w-[600px] xl:w-[900px] flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-14 h-screen">
      <img className="w-[80%] xl:mt-20 rounded-lg" src={props.src} />

      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-400">
            {props.heading}
          </h5>
        </a>
        <p className="mb-3 font-normal text-white">{props.desc}</p>
        {props.public ? (
          <a
            href={props.git}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-tan rounded-lg hover:bg-beige focus:ring-4 focus:outline-none "
          >
            View on Git
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
