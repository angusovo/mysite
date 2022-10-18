import React from "react";
import { motion } from "framer-motion";
type Props = {
  position: string;
  company: string;
  date: string;
  duties: string[];
  companyImg: string;
  skills: string[];
};

const WorkCard = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[500px] xl:w-[900px] snap-center bg-[#292929] p-10
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <img
        className="w-32 h-20 xl:w-[100px] xl:h-[80px]  object-center"
        src={props.companyImg}
        alt={props.company}
      ></img>
      <div className="px-0 md:px-10">
        <h4 className="text-[1rem] font-light">{props.position}</h4>
        <p className="font-bold text-1rem mt-1">{props.company}</p>
        <div className="flex space-x-2 my-2">
          {/* skills */}
          {props.skills?.includes("laravel") && (
            <img
              className="h-10 w-10 rounded-full object-center border border-gray-500"
              src="/laravel.png"
              alt=""
            />
          )}
          {props.skills?.includes("js") && (
            <img
              className="h-10 w-10 rounded-full object-center border border-gray-500"
              src="/js.png"
              alt=""
            />
          )}
          {props.skills?.includes("react") && (
            <img
              className="h-10 w-10 rounded-full object-center border border-gray-500"
              src="/react.png"
              alt=""
            />
          )}
          {props.skills?.includes("redux") && (
            <img
              className="h-10 w-10 rounded-full object-center border border-gray-500"
              src="/redux.png"
              alt=""
            />
          )}
          {props.skills?.includes("css") && (
            <img
              className="h-10 w-10 rounded-full object-center border border-gray-500"
              src="/css.png"
              alt=""
            />
          )}
          {props.skills?.includes("aws") && (
            <img
              className="h-10 w-10 rounded-full object-center border border-gray-500 bg-white"
              src="/aws2.png"
              alt=""
            />
          )}
          {props.skills?.includes("angular") && (
            <img
              className="h-10 w-10 rounded-full object-center border border-gray-500"
              src="/angular.png"
              alt=""
            />
          )}
          {props.skills?.includes("docker") && (
            <img
              className="h-10 w-10 rounded-full object-center border border-gray-500"
              src="/docker.webp"
              alt=""
            />
          )}
          {props.skills?.includes("k8s") && (
            <img
              className="h-10 w-10 rounded-full object-center border border-gray-500"
              src="/k8s.png"
              alt=""
            />
          )}
          {props.skills?.includes("mongodb") && (
            <img
              className="h-10 w-10 rounded-full object-center border border-gray-500  bg-white"
              src="/mongo.jpeg"
              alt=""
            />
          )}
          {props.skills?.includes("nodejs") && (
            <img
              className="h-10 w-10 rounded-full object-center border border-gray-500"
              src="/nodejs.png"
              alt=""
            />
          )}
        </div>
        <p className="py-5 text-gray-400">{props.date}</p>
        <ul className="list-disc space-y-4 ml-5  sm:text-sm ">
          {props.duties &&
            props.duties.map((duty, key) => <li key={key}>{duty}</li>)}
        </ul>
      </div>
    </article>
  );
};

export default WorkCard;
